export const categories = [
  { id: "A", label: "Kategorie A" },
  { id: "B", label: "Kategorie B" },
  { id: "C", label: "Kategorie C" }
];

export const questions = [
  {
    id: "q1",
    text: "Wie treffen Sie Entscheidungen?",
    answers: [
      { text: "Datengetrieben", category: "A" },
      { text: "Erfahrungsbasiert", category: "B" },
      { text: "Intuitiv", category: "C" }
    ]
  },
  {
    id: "q2",
    text: "Wie sind Prozesse dokumentiert?",
    answers: [
      { text: "Vollständig", category: "A" },
      { text: "Teilweise", category: "B" },
      { text: "Kaum", category: "C" }
    ]
  },
  // … bis q8
];
