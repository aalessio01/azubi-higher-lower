import type { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Welche Website ist älter?",
    options: [
      { text: "WELT", isCorrect: true, imageUrl: "/images/welt.png", },
      { text: "Bild", isCorrect: false, imageUrl: "/images/bild.png", },
    ],
    feedback: {
      correct: "Richtig – die WELT Website gab es seit 1995",
      incorrect: "Falsch - die Bild Website erschien 1 Jahr nach der Welt Website",
    },
  },
  {
    id: 2,
    question: "Wann wurde der erste Computer bei Axel Springer eingesetzt?",
    options: [
      { text: "1990", isCorrect: false, imageUrl: "/images/1990.png", },
      { text: "1973", isCorrect: true, imageUrl: "/images/1973.png", },
    ],
    feedback: {
      correct: "Richtig – der erste Computer wurde 1973 eingesetzt",
      incorrect: "Falsch – zu diesem Zeitpunkt waren Computer im Verlag schon längst im Einsatz",
    },
  },
  {
    id: 3,
    question: "Arbeiten unsere Redakteur:innen heute überwiegend digital oder eher analog?",
    options: [
      { text: "digital", isCorrect: true, imageUrl: "/images/digital.png", },
      { text: "analog", isCorrect: false, imageUrl: "/images/analog.png", },
    ],
    feedback: {
      correct: "Richtig – unsere Redaktion arbeitet heutzutage eher digital",
      incorrect: "Falsch – analoges Arbeiten wurde über die Zeit immer weiter reduziert",
    },
  },
  {
    id: 4,
    question: "Welche der Social-Media-Plattformen wird von Axel Springer genutzt?",
    options: [
      { text: "Tiktok", isCorrect: false, imageUrl: "/images/tiktok.png", },
      { text: "Instagram", isCorrect: true, imageUrl: "/images/instagram.png", },
    ],
    feedback: {
      correct: "Richtig – Axel Springer ist auf Instagram zu finden",
      incorrect: "Falsch – Axel Springer hat keinen offiziellen Tiktok Account",
    },
  },
  {
    id: 5,
    question: "Seit wann wurde digitale Arbeit gegenüber analoger Arbeit priorisiert (online first)?",
    options: [
      { text: "2006", isCorrect: true, imageUrl: "/images/2012.png", },
      { text: "2016", isCorrect: false, imageUrl: "/images/2016.png", },
    ],
    feedback: {
      correct: "Richtig – seit 2006 wurden Strategien zur Piorisierung der digitalen Arbeit durchgesetzt",
      incorrect: "Falsch - zu dieser Zeit war die Priorisierung digitaler Arbeit bereits längst erfolgt",
    },
  },
  {
    id: 6,
    question: "Wie wurden in den 1990ern Texte meist an die Druckerei übertragen?",
    options: [
      { text: "Über Netzwerkkabel", isCorrect: false, imageUrl: "/images/netzwerkkabel.png", },
      { text: "Auf Disketten", isCorrect: true, imageUrl: "/images/disketten.png", },
    ],
    feedback: {
      correct: "Richtig – Textübertragung bei Axel Springer fand in den 1990ern durch Diskettenaustausch statt",
      incorrect: "Falsch - Netzwerkkabel wurden in den 1990ern bei Axel Springer nicht für Datentransfer verwendet",
    },
  },
  {
    id: 7,
    question: "Welche Funktion wurde auf Bild.de zuerst eingeführt?",
    options: [
      { text: "Kommentarfunktion", isCorrect: false, imageUrl: "/images/comment.png", },
      { text: "Liveticker", isCorrect: true, imageUrl: "/images/liveticker.png", },
    ],
    feedback: {
      correct: "Richtig – die erste Funktion der Bild-website war ein Liveticker",
      incorrect: "Falsch - diese wurde erst später ergänzt",
    },
  },
  {
    id: 8,
    question: "Welche technische Neuerung machte die tägliche Zusammenarbeit einfacher?",
    options: [
      { text: "zentraler Server", isCorrect: true, imageUrl: "/images/server.png", },
      { text: "bessere Drucker", isCorrect: false, imageUrl: "/images/drucker.png", },
    ],
    feedback: {
      correct: "Richtig – zentrale Server vereinfachten die Zusammenarbeit enorm",
      incorrect: "Falsch - Ein besserer Drucker verbessert nur das Ausdrucken von Dokumenten, ermöglicht aber keine gemeinsame Nutzung oder gleichzeitige Bearbeitung von Dateien",
    },
  },
  {
    id: 9,
    question: "Welche technische Innovation erhöhte die Reichweite von Online-Inhalten?",
    options: [
      { text: "Social-Media-Verlinkungen", isCorrect: true, imageUrl: "/images/socials.png", },
      { text: "QR-Codes auf Zeitungen", isCorrect: false, imageUrl: "/images/qr.png", },
    ],
    feedback: {
      correct: "Richtig – Social-Media-Verlinkungen erhöhten die Reichweite der Online-Inhalte enorm",
      incorrect: "Falsch - QR-Codes auf Zeitungen wurden nur ergänzend eingesetzt",
    },
  },
  {
    id: 10,
    question: "Welche Datenart wurde zuerst systematisch digital archiviert?",
    options: [
      { text: "Texte", isCorrect: true, imageUrl: "/images/text.png", },
      { text: "Fotos", isCorrect: false, imageUrl: "/images/photos.png", },
    ],
    feedback: {
      correct: "Richtig – Texte wurden als erstes digital archiviert",
      incorrect: "Falsch - diese wurden erst nach den Texten digital archiviert, da ihre Datenmengen deutlich größer waren",
    },
  },
  {
    id: 11,
    question: "Welche technische Entwicklung beschleunigte die Fotoübertragung entscheidend?",
    options: [
      { text: "Scanner", isCorrect: false, imageUrl: "/images/scanner.png", },
      { text: "Digitalkameras", isCorrect: true, imageUrl: "/images/digitalkamera.png", },
    ],
    feedback: {
      correct: "Richtig – Digitalkameras ermöglichten, Bilder sofort digital zu speichern",
      incorrect: "Falsch - Scanner verlangsamten den Prozess, da Fotos nur physisch vorliegen und digitalisiert werden müssen",
    },
  },
  {
    id: 12,
    question: "Welche Geräte wurden zuerst vernetzt?",
    options: [
      { text: "Telefone", isCorrect: false, imageUrl: "/images/telefon.png", },
      { text: "Redaktionsrechner", isCorrect: true, imageUrl: "/images/rechner.png", },
    ],
    feedback: {
      correct: "Richtig – Redaktionsrechner wurden verbunden, um Texte, Layouts und Daten gemeinsam bearbeiten zu können",
      incorrect: "Falsch - Telefone blieben zunächst eigenständige Kommunikationsgeräte ohne Netzwerkanbindung",
    },
  },
  {
    id: 13,
    question: "Welche Kommunikationsform setzte sich im Redaktionsalltag durch?",
    options: [
      { text: "E-Mail", isCorrect: true, imageUrl: "/images/e-mail.png", },
      { text: "Fax", isCorrect: false, imageUrl: "/images/fax.png", },
    ],
    feedback: {
      correct: "Richtig – E-Mail ermöglichte schnelle, schriftliche Kommunikation und einfache Verteilung von Dokumenten",
      incorrect: "Falsch - Fax war langsam, fehleranfällig und bot keine digitale Weiterverarbeitung",
    },
  },
  {
    id: 14,
    question: "Wann wurde die Website von WELT vollständig mobiloptimiert?",
    options: [
      { text: "2014", isCorrect: true, imageUrl: "/images/2014.png", },
      { text: "2008", isCorrect: false, imageUrl: "/images/2008.png", },
    ],
    feedback: {
      correct: "Richtig – 2014 wurden Inhalte responsiv gestaltet, um auf Smartphones und Tablets zu funktionieren",
      incorrect: "Falsch - 2008 war Mobile-Optimierung noch kaum umgesetzt",
    },
  },
  {
    id: 15,
    question: "Wann verlieh das Haus Axel Springer erstmals einen KI-Preis?",
    options: [
      { text: "2024", isCorrect: false, imageUrl: "/images/2024.png", },
      { text: "2019", isCorrect: true, imageUrl: "/images/2019.png", },
    ],
    feedback: {
      correct: "Richtig – durch das damals zu uns gehörende Wirtschaftsmagazin „Bilanz“ wurde der Preis erstmals vergeben",
      incorrect: "Falsch - zu der Zeit wurde der KI Preis schon zum sechsten Mal vergeben",
    },
  }
];