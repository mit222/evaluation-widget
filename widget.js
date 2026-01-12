import { questions, categories } from "./questions.js";

const container = document.getElementById("evaluation-widget");

// Punktestände
const scores = { A: 0, B: 0, C: 0 };
const selectedAnswers = {};

// UI: Fragen rendern
questions.forEach(question => {
  const fieldset = document.createElement("fieldset");
  fieldset.innerHTML = `<legend>${question.text}</legend>`;

  question.answers.forEach(answer => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio"
             name="${question.id}"
             value="${answer.category}">
      ${answer.text}
    `;
    label.querySelector("input").addEventListener("change", () => {
      handleAnswer(question.id, answer.category);
    });
    fieldset.appendChild(label);
  });

  container.appendChild(fieldset);
});

// Canvas für Diagramm
const canvas = document.createElement("canvas");
container.appendChild(canvas);

// Chart initialisieren
const radarChart = new Chart(canvas, {
  type: "radar",
  data: {
    labels: categories.map(c => c.label),
    datasets: [{
      label: "Ergebnis",
      data: categories.map(c => scores[c.id]),
      fill: true
    }]
  },
  options: {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMax: questions.length
      }
    }
  }
});

// Antwortverarbeitung
function handleAnswer(questionId, category) {
  // Alte Antwort entfernen
  if (selectedAnswers[questionId]) {
    scores[selectedAnswers[questionId]]--;
  }

  // Neue Antwort setzen
  selectedAnswers[questionId] = category;
  scores[category]++;

  updateChart();
}

function updateChart() {
  radarChart.data.datasets[0].data =
    categories.map(c => scores[c.id]);
  radarChart.update();
}
