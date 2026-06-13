const suggestionCards = document.querySelectorAll(".suggestion-card");
const dots = document.querySelectorAll(".dot");

let currentSuggestion = 0;

function showSuggestion(index) {
  suggestionCards[currentSuggestion].classList.remove("active");
  dots[currentSuggestion].classList.remove("active");

  currentSuggestion = index;

  suggestionCards[currentSuggestion].classList.add("active");
  dots[currentSuggestion].classList.add("active");
}

function showNextSuggestion() {
  let nextSuggestion = currentSuggestion + 1;

  if (nextSuggestion >= suggestionCards.length) {
    nextSuggestion = 0;
  }

  showSuggestion(nextSuggestion);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.index);
    showSuggestion(index);
  });
});

setInterval(showNextSuggestion, 4000);