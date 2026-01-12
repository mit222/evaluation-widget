export const categories = [
  { id: "A", label: "Learning Management System" },
  { id: "B", label: "Autorentool" },
  { id: "C", label: "Digital Adoption Plattform" }
];

export const questions = [
  {
    id: "q1",
    text: "Welche Herausforderung steht für euch im Vordergrund?",
    answers: [
      { text: "Fehlende Zentrale Lernplattform", category: "A" },
      { text: "Aufwändige oder unstrukturierte Inhaltserstellung", category: "B" },
      { text: "Geringe Nutzung vorhandener Systeme", category: "C" }
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
