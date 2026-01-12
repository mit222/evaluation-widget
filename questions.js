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
    text: "Wie wichtig sind folgende Zielsetzungen?",
    answers: [
      { text: "Schulungen organisieren und dokumentieren", category: "A" },
      { text: "Lerninhalte bereitstellen", category: "A" },
      { text: "Interaktive Lerninhalte erstellen", category: "B" },
      { text: "Mitarbeitende in Anwendungen anlöeiten", category: "C" },
      { text: "Lernfortschritt messen", category: "C" },
      { text: "Supportaufwand reduzieren", category: "C" }
    ]
  },
  // … bis q8
];
