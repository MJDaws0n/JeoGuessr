const TOTAL_ROUNDS = 5;
const MAX_SCORE_PER_ROUND = 5000;
const PERFECT_DISTANCE_KM = 0.15;
const ZERO_SCORE_DISTANCE_KM = 5000;

let currentRound = 0;
let totalScore = 0;
let roundLocations = [];
let guessMarker = null;
let guessMap = null;
let resultMap = null;
let hasGuessed = false;
let roundScores = [];

function init() {
  document.getElementById("play-btn").addEventListener("click", startGame);
  document.getElementById("next-btn").addEventListener("click", nextRound);
  document.getElementById("play-again-btn").addEventListener("click", resetGame);
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startGame() {
  currentRound = 0;
  totalScore = 0;
  roundScores = [];
  roundLocations = shuffleArray(LOCATIONS).slice(0, TOTAL_ROUNDS);

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("final-screen").classList.add("hidden");

  initGuessMap();
  loadRound();
}

function initGuessMap() {
  if (guessMap) {
    guessMap.remove();
  }

  guessMap = L.map("guess-map", {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    worldCopyJump: true
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(guessMap);

  guessMap.on("click", onMapClick);
}

function onMapClick(e) {
  if (hasGuessed) return;

  if (guessMarker) {
    guessMarker.setLatLng(e.latlng);
  } else {
    guessMarker = L.marker(e.latlng, {
      icon: L.divIcon({
        className: "guess-marker",
        html: '<div class="marker-pin guess-pin"></div>',
        iconSize: [30, 42],
        iconAnchor: [15, 42]
      })
    }).addTo(guessMap);
  }

  document.getElementById("submit-guess").disabled = false;
  document.getElementById("submit-guess").onclick = submitGuess;
}

function loadRound() {
  hasGuessed = false;
  const location = roundLocations[currentRound];

  document.getElementById("round-number").textContent = currentRound + 1;
  document.getElementById("total-rounds").textContent = TOTAL_ROUNDS;
  document.getElementById("current-score").textContent = totalScore.toLocaleString();

  const streetViewUrl =
    `https://maps.google.com/maps?q=&layer=c&cbll=${location.lat},${location.lng}&cbp=12,0,,0,0&output=svembed&hl=en&source=outdoor`;

  document.getElementById("streetview-frame").src = streetViewUrl;

  if (guessMarker) {
    guessMap.removeLayer(guessMarker);
    guessMarker = null;
  }

  guessMap.setView([20, 0], 2);

  document.getElementById("submit-guess").disabled = true;
  document.getElementById("round-result").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
  document.getElementById("guess-panel").classList.remove("hidden");
}

function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function calculateScore(distanceKm) {
  if (distanceKm <= PERFECT_DISTANCE_KM) return MAX_SCORE_PER_ROUND;
  if (distanceKm >= ZERO_SCORE_DISTANCE_KM) return 0;
  const factor = 1 - distanceKm / ZERO_SCORE_DISTANCE_KM;
  return Math.round(MAX_SCORE_PER_ROUND * factor * factor);
}

function submitGuess() {
  if (!guessMarker || hasGuessed) return;
  hasGuessed = true;

  const location = roundLocations[currentRound];
  const guessLatLng = guessMarker.getLatLng();
  const distance = haversineDistance(
    guessLatLng.lat,
    guessLatLng.lng,
    location.lat,
    location.lng
  );
  const score = calculateScore(distance);

  totalScore += score;
  roundScores.push({ location, distance, score });
  document.getElementById("current-score").textContent = totalScore.toLocaleString();

  const actualMarker = L.marker([location.lat, location.lng], {
    icon: L.divIcon({
      className: "actual-marker",
      html: '<div class="marker-pin actual-pin"></div>',
      iconSize: [30, 42],
      iconAnchor: [15, 42]
    })
  }).addTo(guessMap);

  const line = L.polyline(
    [
      [guessLatLng.lat, guessLatLng.lng],
      [location.lat, location.lng]
    ],
    { color: "#ff4444", weight: 2, dashArray: "8, 8" }
  ).addTo(guessMap);

  const bounds = L.latLngBounds(
    [guessLatLng.lat, guessLatLng.lng],
    [location.lat, location.lng]
  );
  guessMap.fitBounds(bounds, { padding: [50, 50] });

  let distanceText;
  if (distance < 1) {
    distanceText = Math.round(distance * 1000) + " m";
  } else {
    distanceText = Math.round(distance).toLocaleString() + " km";
  }

  document.getElementById("result-distance").textContent = distanceText;
  document.getElementById("result-score").textContent = score.toLocaleString();
  document.getElementById("result-location").textContent =
    location.name + ", " + location.city + ", " + location.country;

  const scoreBar = document.getElementById("score-bar-fill");
  scoreBar.style.width = "0%";
  setTimeout(() => {
    scoreBar.style.width = (score / MAX_SCORE_PER_ROUND) * 100 + "%";
  }, 100);

  document.getElementById("round-result").classList.remove("hidden");
  document.getElementById("submit-guess").disabled = true;

  if (currentRound < TOTAL_ROUNDS - 1) {
    document.getElementById("next-btn").textContent = "Next Round →";
  } else {
    document.getElementById("next-btn").textContent = "See Results →";
  }
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextRound() {
  currentRound++;
  if (currentRound >= TOTAL_ROUNDS) {
    showFinalResults();
    return;
  }
  initGuessMap();
  loadRound();
}

function showFinalResults() {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("final-screen").classList.remove("hidden");

  document.getElementById("final-score").textContent = totalScore.toLocaleString();
  document.getElementById("max-possible").textContent = (
    MAX_SCORE_PER_ROUND * TOTAL_ROUNDS
  ).toLocaleString();

  const percentage = Math.round(
    (totalScore / (MAX_SCORE_PER_ROUND * TOTAL_ROUNDS)) * 100
  );
  document.getElementById("score-percentage").textContent = percentage + "%";

  let rating;
  if (percentage >= 90) rating = "🏆 Geography Master!";
  else if (percentage >= 70) rating = "🌟 Expert Explorer!";
  else if (percentage >= 50) rating = "🗺️ Seasoned Traveler!";
  else if (percentage >= 30) rating = "🧭 Getting There!";
  else rating = "📚 Keep Exploring!";
  document.getElementById("rating").textContent = rating;

  const summaryList = document.getElementById("round-summary");
  summaryList.innerHTML = "";

  roundScores.forEach((round, index) => {
    const li = document.createElement("li");
    li.className = "summary-item";

    let distanceText;
    if (round.distance < 1) {
      distanceText = Math.round(round.distance * 1000) + " m";
    } else {
      distanceText = Math.round(round.distance).toLocaleString() + " km";
    }

    li.innerHTML =
      `<div class="summary-round">Round ${index + 1}</div>` +
      `<div class="summary-location">${round.location.name}, ${round.location.city}, ${round.location.country}</div>` +
      `<div class="summary-stats">` +
        `<span class="summary-distance">📍 ${distanceText} away</span>` +
        `<span class="summary-score">⭐ ${round.score.toLocaleString()} pts</span>` +
      `</div>`;
    summaryList.appendChild(li);
  });

  if (resultMap) {
    resultMap.remove();
  }

  resultMap = L.map("result-map", {
    center: [20, 0],
    zoom: 2,
    minZoom: 2
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(resultMap);

  roundScores.forEach((round, index) => {
    L.marker([round.location.lat, round.location.lng], {
      icon: L.divIcon({
        className: "result-marker",
        html: '<div class="result-marker-label">' + (index + 1) + "</div>",
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      })
    })
      .addTo(resultMap)
      .bindPopup(
        `<b>Round ${index + 1}</b><br>${round.location.name}<br>${round.location.city}, ${round.location.country}`
      );
  });
}

function resetGame() {
  document.getElementById("final-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
  if (resultMap) {
    resultMap.remove();
    resultMap = null;
  }
}

document.addEventListener("DOMContentLoaded", init);
