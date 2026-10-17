import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Code,
  BrainCircuit,
  Network,
  Share2,
  Server,
  Database,
  Wrench,
  Users,
  GraduationCap,
  Send,
  Sparkles,
  BookOpen,
  Smartphone,
  Layers,
  Briefcase,
  Award,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------------- brand icons (inline, always available) ------------------------- */

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.54h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21h-4z" />
    </svg>
  );
}
function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

/* ---------------------------------- palette ---------------------------------- */

const T = {
  red:  { accent: "#B3122A", soft: "#FBECED", deep: "#82091C" },
  ink:  { accent: "#17171A", soft: "#F0EEEC", deep: "#17171A" },
  rose: { accent: "#D6455B", soft: "#FDEEF0", deep: "#A02538" },
  wine: { accent: "#6D0F1E", soft: "#F7E8EA", deep: "#6D0F1E" },
};

/* ------------------------------- project illustrations ------------------------------- */

function ArtNovaDB() {
  return (
    <svg viewBox="0 0 400 230" className="proj-illus">
      <defs>
        <linearGradient id="nvR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#D6455B" /><stop offset="1" stopColor="#82091C" /></linearGradient>
      </defs>
      <rect width="400" height="230" fill="#F8F2F1" />
      <rect x="48" y="118" width="70" height="70" rx="4" fill="url(#nvR)" />
      <rect x="165" y="70" width="70" height="118" rx="4" fill="#17171A" />
      <rect x="282" y="96" width="70" height="92" rx="4" fill="url(#nvR)" />
      <line x1="83" y1="118" x2="200" y2="90" stroke="#17171A" strokeWidth="1.6" strokeDasharray="4 5" />
      <line x1="235" y1="118" x2="282" y2="130" stroke="#17171A" strokeWidth="1.6" strokeDasharray="4 5" />
      <circle cx="83" cy="118" r="5" fill="#fff" stroke="#17171A" strokeWidth="1.6" />
      <circle cx="200" cy="90" r="5" fill="#fff" stroke="#17171A" strokeWidth="1.6" />
      <circle cx="317" cy="96" r="5" fill="#fff" stroke="#17171A" strokeWidth="1.6" />
      <circle cx="200" cy="40" r="17" fill="#fff" stroke="#B3122A" strokeWidth="2" />
      <path d="M200 31v9l6 4" stroke="#B3122A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function ArtLiveMeet() {
  return (
    <svg viewBox="0 0 400 230" className="proj-illus">
      <defs>
        <linearGradient id="lmR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#D6455B" /><stop offset="1" stopColor="#82091C" /></linearGradient>
      </defs>
      <rect width="400" height="230" fill="#F8F2F1" />
      <rect x="50" y="42" width="130" height="88" rx="4" fill="url(#lmR)" />
      <rect x="196" y="42" width="130" height="88" rx="4" fill="#17171A" />
      <rect x="50" y="142" width="130" height="46" rx="4" fill="#EBDCDC" />
      <rect x="196" y="142" width="130" height="46" rx="4" fill="url(#lmR)" />
      <circle cx="115" cy="86" r="21" fill="#fff" opacity="0.95" />
      <path d="M108 78l17 8-17 8z" fill="#B3122A" />
      <path d="M60 206 Q200 222 340 206" stroke="#B3122A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function ArtBookNest() {
  return (
    <svg viewBox="0 0 400 230" className="proj-illus">
      <defs>
        <linearGradient id="bnR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#D6455B" /><stop offset="1" stopColor="#82091C" /></linearGradient>
      </defs>
      <rect width="400" height="230" fill="#F8F2F1" />
      <rect x="62" y="96" width="30" height="96" rx="3" fill="url(#bnR)" />
      <rect x="98" y="72" width="30" height="120" rx="3" fill="#17171A" />
      <rect x="134" y="104" width="30" height="88" rx="3" fill="#EBDCDC" />
      <rect x="170" y="84" width="30" height="108" rx="3" fill="url(#bnR)" />
      <rect x="206" y="64" width="30" height="128" rx="3" fill="#17171A" />
      <rect x="50" y="192" width="200" height="4" fill="#17171A" />
      <circle cx="318" cy="70" r="14" fill="#fff" stroke="#B3122A" strokeWidth="2" />
      <circle cx="290" cy="130" r="10" fill="#B3122A" />
      <circle cx="346" cy="140" r="10" fill="#17171A" />
      <circle cx="318" cy="186" r="10" fill="#fff" stroke="#17171A" strokeWidth="2" />
      <line x1="318" y1="84" x2="290" y2="120" stroke="#17171A" strokeWidth="1.4" />
      <line x1="318" y1="84" x2="346" y2="130" stroke="#17171A" strokeWidth="1.4" />
      <line x1="290" y1="140" x2="318" y2="176" stroke="#17171A" strokeWidth="1.4" />
      <line x1="346" y1="150" x2="318" y2="176" stroke="#17171A" strokeWidth="1.4" />
      <path d="M318 62l2.4 5 5.4.6-4 3.7 1.1 5.3-4.9-2.7-4.9 2.7 1.1-5.3-4-3.7 5.4-.6z" fill="#B3122A" />
    </svg>
  );
}
function ArtChatbot() {
  return (
    <svg viewBox="0 0 400 230" className="proj-illus">
      <defs>
        <linearGradient id="cbR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#D6455B" /><stop offset="1" stopColor="#82091C" /></linearGradient>
      </defs>
      <rect width="400" height="230" fill="#F8F2F1" />
      <rect x="46" y="46" width="190" height="72" rx="6" fill="#fff" stroke="#17171A" strokeWidth="1.6" />
      <circle cx="76" cy="70" r="5" fill="#B3122A" /><circle cx="96" cy="70" r="5" fill="#B3122A" /><circle cx="116" cy="70" r="5" fill="#B3122A" />
      <rect x="66" y="90" width="130" height="9" rx="4" fill="#EBDCDC" />
      <rect x="170" y="118" width="184" height="72" rx="6" fill="url(#cbR)" />
      <rect x="196" y="142" width="120" height="9" rx="4" fill="#F8D9DD" />
      <rect x="196" y="160" width="80" height="9" rx="4" fill="#F8D9DD" />
      <circle cx="330" cy="66" r="22" fill="#17171A" />
      <text x="330" y="73" textAnchor="middle" fontSize="20" fill="#fff" fontFamily="serif">$</text>
    </svg>
  );
}

function ArtGNN() {
  return (
    <svg viewBox="0 0 400 230" className="proj-illus">
      <rect width="400" height="230" fill="#F8F2F1" />
      <g stroke="#17171A" strokeWidth="1.4">
        <line x1="62" y1="64" x2="124" y2="104" />
        <line x1="124" y1="104" x2="84" y2="166" />
        <line x1="124" y1="104" x2="186" y2="72" />
        <line x1="186" y1="72" x2="226" y2="134" />
        <line x1="84" y1="166" x2="164" y2="182" />
      </g>
      <line x1="164" y1="182" x2="226" y2="134" stroke="#B3122A" strokeWidth="2.4" strokeDasharray="5 5" />
      <circle cx="62" cy="64" r="11" fill="#fff" stroke="#17171A" strokeWidth="1.6" />
      <circle cx="124" cy="104" r="14" fill="#17171A" />
      <circle cx="84" cy="166" r="11" fill="#fff" stroke="#17171A" strokeWidth="1.6" />
      <circle cx="186" cy="72" r="11" fill="#B3122A" />
      <circle cx="226" cy="134" r="12" fill="#fff" stroke="#B3122A" strokeWidth="2" />
      <circle cx="164" cy="182" r="12" fill="#fff" stroke="#B3122A" strokeWidth="2" />
      <rect x="268" y="40" width="108" height="124" fill="#fff" stroke="#D9D1CE" />
      <line x1="280" y1="152" x2="364" y2="152" stroke="#17171A" strokeWidth="1.2" />
      <line x1="280" y1="52" x2="280" y2="152" stroke="#17171A" strokeWidth="1.2" />
      <line x1="280" y1="152" x2="364" y2="56" stroke="#97979D" strokeWidth="1.2" strokeDasharray="4 4" />
      <path d="M280 152 C 286 84, 318 64, 364 58" fill="none" stroke="#B3122A" strokeWidth="2.4" strokeLinecap="round" />
      <text x="322" y="178" textAnchor="middle" fontSize="11" fill="#55555B" fontFamily="sans-serif" letterSpacing="1.5">AUC · AP</text>
    </svg>
  );
}
function ArtOptimax() {
  return (
    <svg viewBox="0 0 400 230" className="proj-illus">
      <defs>
        <linearGradient id="opR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#D6455B" /><stop offset="1" stopColor="#82091C" /></linearGradient>
      </defs>
      <rect width="400" height="230" fill="#F8F2F1" />
      <rect x="146" y="20" width="108" height="190" rx="14" fill="#fff" stroke="#17171A" strokeWidth="1.8" />
      <circle cx="200" cy="58" r="15" fill="none" stroke="#EBDCDC" strokeWidth="5" />
      <circle cx="200" cy="58" r="15" fill="none" stroke="#B3122A" strokeWidth="5" strokeDasharray="62 32" strokeLinecap="round" transform="rotate(-90 200 58)" />
      <rect x="162" y="124" width="14" height="46" fill="#EBDCDC" />
      <rect x="182" y="102" width="14" height="68" fill="url(#opR)" />
      <rect x="202" y="114" width="14" height="56" fill="#17171A" />
      <rect x="222" y="90" width="14" height="80" fill="url(#opR)" />
      <line x1="160" y1="182" x2="240" y2="182" stroke="#17171A" strokeWidth="1.2" />
      <g>
        <rect x="42" y="64" width="40" height="40" fill="#B3122A" />
        <rect x="86" y="64" width="40" height="40" fill="#17171A" />
        <rect x="42" y="108" width="40" height="40" fill="#EBDCDC" />
        <rect x="86" y="108" width="40" height="40" fill="#fff" stroke="#17171A" strokeWidth="1.2" />
      </g>
      <rect x="274" y="62" width="88" height="46" rx="8" fill="#17171A" />
      <path d="M296 108 L290 122 L308 108 Z" fill="#17171A" />
      <path d="M318 76l2.6 5.4 5.9.7-4.3 4 1.2 5.8-5.4-3-5.4 3 1.2-5.8-4.3-4 5.9-.7z" fill="#D6455B" />
      <rect x="274" y="124" width="70" height="8" rx="4" fill="#EBDCDC" />
      <rect x="274" y="140" width="48" height="8" rx="4" fill="#EBDCDC" />
    </svg>
  );
}

/* ---------------------------------- data ---------------------------------- */

const PROJECTS = [
  { name: "Knowledge Graph & GNN", tag: "Graphes de connaissances · Link Prediction", theme: T.red, Art: ArtGNN,
    stack: ["Python", "Pandas", "Neo4j", "Cypher", "PyTorch", "PyTorch Geometric", "GNN", "Streamlit"],
    points: [
      "Extraction, préparation et intégration de données biomédicales publiques.",
      "Construction d'un graphe de connaissances hétérogène avec Neo4j, interrogé en Cypher.",
      "Modèle de Graph Neural Networks (GNN) pour la prédiction de liens et l'identification de nouvelles associations candidates entre entités biologiques.",
      "Évaluation par AUC et Average Precision (AP) ; interface Streamlit pour explorer le graphe et visualiser les prédictions.",
    ] },
  { name: "BookNest", tag: "E-commerce & recommandation intelligente", theme: T.wine, Art: ArtBookNest,
    stack: ["Django", "PostgreSQL", "Supabase", "NCF", "Deep Learning"],
    points: [
      "Application web end-to-end avec Django, PostgreSQL et Supabase Storage.",
      "Système de recommandation personnalisée de livres basé sur le Neural Collaborative Filtering (NCF).",
      "Entraînement et évaluation du modèle avec les métriques MSE et MAE.",
      "Dashboard administrateur : KPIs analytiques, gestion du catalogue, authentification client / admin.",
    ] },
  { name: "Optimax — AI Productivity System", tag: "IA & productivité — PFE", theme: T.ink, Art: ArtOptimax,
    stack: ["Flutter", "Dart", "Gemini API", "Prompt Engineering", "Node.js", "MongoDB", "Firebase"],
    points: [
      "Application mobile Flutter de gestion de productivité avec tableau de bord analytique et indicateurs de suivi des performances.",
      "Méthodes de gestion du temps (Pomodoro, Eisenhower) et système de scoring combinant tâches terminées, efficacité Pomodoro et priorités.",
      "Assistant de coaching IA basé sur l'API Gemini et le Prompt Engineering pour des recommandations personnalisées.",
    ] },
  { name: "Budgini — Chatbot Finance AI", tag: "NLP conversationnel", theme: T.rose, Art: ArtChatbot,
    stack: ["Flask", "NLP", "API IA"],
    points: [
      "Chatbot NLP pour l'assistance financière et la compréhension des intentions utilisateur.",
      "Intégration d'un modèle IA via une API Flask pour des réponses intelligentes et contextuelles.",
    ] },
  { name: "NovaDB", tag: "Systèmes distribués · Redis / NoSQL", theme: T.red, Art: ArtNovaDB,
    stack: ["Redis", "React.js", "Node.js", "Docker"],
    points: [
      "Système de gestion de sessions en temps réel basé sur Redis, optimisé pour la performance et la scalabilité.",
      "Mécanismes de caching et de TTL pour une gestion efficace des ressources.",
      "Architecture full-stack (React.js / Node.js), API REST sécurisées et conteneurisation Docker.",
    ] },
  { name: "LiveMeet", tag: "Plateforme collaborative intelligente", theme: T.ink, Art: ArtLiveMeet,
    stack: ["Socket.io", "NLP", "Transcription", "Temps réel"],
    points: [
      "Application de visioconférence distribuée avec communication en temps réel (Socket.io).",
      "Fonctionnalités IA : transcription automatique et analyse NLP des réunions.",
      "Mise en pratique des systèmes distribués et du traitement de données en temps réel.",
    ] },
];

const SKILLS = [
  { cat: "Data Science & Analyse", Icon: Code, theme: T.red,
    items: ["Python", "Pandas", "NumPy", "SQL", "Analyse exploratoire (EDA)", "Nettoyage & préparation", "Feature Engineering"] },
  { cat: "Machine Learning", Icon: BrainCircuit, theme: T.ink,
    items: ["Scikit-learn", "Classification", "Régression", "Modélisation prédictive", "Validation croisée", "AUC · AP · F1-score"] },
  { cat: "Deep Learning & GNN", Icon: Network, theme: T.wine,
    items: ["PyTorch", "PyTorch Geometric", "Graph Neural Networks", "Embeddings", "Link Prediction", "TensorFlow (bases)"] },
  { cat: "Graphes de connaissances", Icon: Share2, theme: T.rose,
    items: ["Neo4j", "Cypher", "Modélisation de graphes", "Analyse des relations entre entités"] },
  { cat: "Data Engineering & Déploiement", Icon: Server, theme: T.red,
    items: ["Pipelines ETL", "APIs REST", "Flask", "Docker", "Streamlit"] },
  { cat: "Bases de données", Icon: Database, theme: T.ink,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { cat: "Outils", Icon: Wrench, theme: T.wine,
    items: ["Jupyter Notebook", "Google Colab", "Git"] },
];

const EXPERIENCE = [
  { year: "2026", dates: "Août 2026", place: "", org: "ARSII", theme: T.red,
    title: "Stagiaire en Data Science — Knowledge Graph & GNN",
    highlights: [
      { label: "Data Engineering & Knowledge Graph", text: "Extraction, préparation et intégration de données biomédicales publiques ; graphe de connaissances hétérogène avec Neo4j, interrogé en Cypher." },
      { label: "Graph Machine Learning", text: "Modèle GNN pour la prédiction de liens et l'identification de nouvelles associations candidates entre entités biologiques." },
      { label: "Évaluation & Visualisation", text: "Évaluation par AUC et Average Precision (AP) ; interface Streamlit pour explorer le graphe et visualiser les prédictions." },
    ],
    tags: ["Python", "Pandas", "Neo4j", "Cypher", "PyTorch", "PyTorch Geometric", "GNN", "Streamlit"] },
  { year: "2025", dates: "Fév. — Mai 2025", place: "Monastir", org: "STE FLESK", theme: T.ink,
    title: "Stagiaire Développement Mobile & IA — PFE",
    highlights: [
      { label: "IA générative", text: "Assistant de coaching intelligent basé sur l'API Gemini et le Prompt Engineering pour des recommandations de productivité personnalisées." },
      { label: "Data Analytics & Scoring", text: "Système de scoring de la productivité combinant taux de tâches terminées, efficacité Pomodoro et gestion des priorités." },
      { label: "Développement & Visualisation", text: "Application mobile Flutter avec coaching IA, tableau de bord et indicateurs de suivi des performances." },
    ],
    tags: ["Python", "Flutter", "Dart", "Gemini API", "Prompt Engineering", "Node.js", "MongoDB", "Firebase"] },
  { year: "2024", dates: "Juil. — Août 2024", place: "Ariana", org: "Bee Coders", theme: T.wine,
    title: "Stagiaire en Développement Mobile",
    highlights: [
      { label: "Application sociale de challenges", text: "Intégration des interfaces à partir de maquettes Figma." },
    ],
    tags: ["Flutter", "Dart", "Figma", "Git"] },
  { year: "2023", dates: "Juil. — Août 2023", place: "Zaghouan", org: "LACROIX Electronics", theme: T.rose,
    title: "Stagiaire Support Informatique & Réseaux",
    highlights: [
      { label: "Environnement industriel", text: "Diagnostic des incidents informatiques, maintenance des équipements et support des infrastructures réseau." },
    ],
    tags: ["Support technique", "Diagnostic système", "Maintenance réseau", "Infrastructures IP"] },
];

const FORMATION = [
  { years: "2022", school: "Lycée Ibn Charaf", degree: "Baccalauréat en Mathématiques", sector: "Sciences", Icon: BookOpen, theme: T.ink },
  { years: "2022 — 2023", school: "ISMAI", degree: "Licence Sciences de l'Informatique — Mention Bien", sector: "Informatique", Icon: Code, theme: T.rose },
  { years: "2023 — 2025", school: "Faculté des Sciences de Monastir", degree: "Licence Génie Logiciel et SI — Mention Bien", sector: "Génie Logiciel", Icon: Layers, theme: T.wine },
  { years: "Juil. — Août 2024", school: "9antra.tn — The Bridge", degree: "Formation en développement mobile", sector: "Mobile", Icon: Smartphone, theme: T.ink },
  { years: "2025 — en cours", school: "Faculté des Sciences de Monastir", degree: "Mastère Professionnel en Sciences de données", sector: "Data Science", Icon: BrainCircuit, theme: T.red, current: true },
];

/* slot positions (% of a 900x460 canvas) for the winding-road formation timeline */
const ROAD_SLOTS = [
  { x: 27, y: 20, labelSide: "right" },
  { x: 66, y: 20, labelSide: "left" },
  { x: 66, y: 55, labelSide: "left" },
  { x: 27, y: 55, labelSide: "right" },
  { x: 84, y: 90, labelSide: "left" },
];

const ASSOCIATIF = [
  { years: "2026", role: "Conseillère Média et Marketing", org: "JCI Zaghouan El Medina", sector: "Communication", theme: T.red },
  { years: "2025", role: "Commissaire aux Comptes", org: "JCI Zaghouan El Medina", sector: "Finance", theme: T.ink },
  { years: "2024", role: "Vice-Présidente", org: "IEEE ENIM Student Branch, IAS Chapter", sector: "Leadership", theme: T.wine },
];

const LANGUES = [
  { lang: "Arabe", level: "Langue maternelle", pct: 100 },
  { lang: "Français", level: "Intermédiaire", pct: 65 },
  { lang: "Anglais", level: "Intermédiaire", pct: 65 },
];

/* ---- CERTIFICATS : les images sont dans le dossier  src/assets/  (ou  public/assets/ ) ----
   Ligne 1 = certificats informatiques / cloud / data · Ligne 2 = soft skills & engagement.
   file = nom EXACT du fichier image · title (+ title_en) · issuer et year sont optionnels. */
const CERT_GROUPS = [
  { id: "tech", items: [
    { file: "AWS Cloud Foundations.png", title: "Cloud Foundations- AWS academy" },
    { file: "AWS Data Engineering.png", title: "Data Engineering - AWS academy" },
    { file: "data.png", title: "Introduction to Data and Data Science — 365 Data Science" },
    { file: "ML.png", title: "The Machine Learning Process A-Z — 365 Data Science" },
  ] },
  { id: "soft", items: [
    { file: "injaz.png", title: "Company Program - INJAZ Tunisia " },
    { file: "jci.png", title: "Commissaire aux Comptes- JCI Zaghouan El Médina" },
    { file: "soft skills.png", title: "Soft Skills - ANETI & FSM " },
  ] },
];

/* Images des certificats : Vite regroupe toutes les images trouvées dans  src/assets/  (ou  assets/  à la racine du projet).
   La recherche ignore les majuscules, les espaces et une extension doublée (ex. "x.png.png"). */
const ASSET_MODULES = import.meta.glob(
  [
    "./assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}",
    "../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}",
    "/assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}",
    "/src/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}",
  ],
  { eager: true, import: "default" }
);
const normName = (name) => name.toLowerCase().replace(/(\.(png|jpe?g|webp))+$/g, "").replace(/[^a-z0-9]/g, "");
const ASSET_BY_NAME = {};
Object.entries(ASSET_MODULES).forEach(([path, url]) => { ASSET_BY_NAME[normName(path.split("/").pop())] = url; });
/* secours : un fichier placé dans  public/assets/  est servi depuis  /assets/<fichier> */
const certSrc = (file) => ASSET_BY_NAME[normName(file)] || `/assets/${encodeURIComponent(file)}`;

if (typeof window !== "undefined") {
  const missing = CERT_GROUPS.flatMap((g) => g.items).filter((c) => !ASSET_BY_NAME[normName(c.file)]).map((c) => c.file);
  if (missing.length) {
    console.warn("[Certificats] images introuvables :", missing, "— images détectées par le site :", Object.keys(ASSET_MODULES));
  }
}

const NAV = [
  { id: "top", label: "Accueil" },
  { id: "projets", label: "Travaux" },
  { id: "competences", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "formation", label: "Formation" },
  { id: "certificats", label: "Certificats" },
  { id: "contact", label: "Contact" },
];

const TICKER = [
  "Data Science", "Machine Learning", "Deep Learning", "Graph Neural Networks",
  "Knowledge Graphs", "NLP", "PyTorch", "Neo4j", "Stage de fin d'études 2026",
];

/* =============================== i18n  (FR / EN) =============================== */

const NAV_EN = [
  { label: "Home" }, { label: "Work" }, { label: "Skills" }, { label: "Experience" },
  { label: "Education" }, { label: "Certificates" }, { label: "Contact" },
];

const TICKER_EN = [
  "Data Science", "Machine Learning", "Deep Learning", "Graph Neural Networks",
  "Knowledge Graphs", "NLP", "PyTorch", "Neo4j", "End-of-studies internship 2026",
];

const PROJECTS_EN = [
  { name: "Knowledge Graph & GNN", tag: "Knowledge graphs · Link Prediction",
    points: [
      "Extraction, preparation and integration of public biomedical data.",
      "Construction of a heterogeneous knowledge graph with Neo4j, queried with Cypher.",
      "Graph Neural Network (GNN) model for link prediction and the identification of new candidate associations between biological entities.",
      "Evaluation with AUC and Average Precision (AP); Streamlit interface to explore the graph and visualize predictions.",
    ] },
  { name: "BookNest", tag: "E-commerce & intelligent recommendation",
    points: [
      "End-to-end web application built with Django, PostgreSQL and Supabase Storage.",
      "Personalized book recommendation system based on Neural Collaborative Filtering (NCF).",
      "Model training and evaluation using MSE and MAE metrics.",
      "Admin dashboard: analytical KPIs, catalog management, customer / admin authentication.",
    ] },
  { name: "Optimax — AI Productivity System", tag: "AI & productivity — Final-year project",
    points: [
      "Flutter mobile productivity app with an analytics dashboard and performance-tracking indicators.",
      "Time-management methods (Pomodoro, Eisenhower) and a scoring system combining completed tasks, Pomodoro efficiency and priorities.",
      "AI coaching assistant built on the Gemini API and Prompt Engineering for personalized recommendations.",
    ] },
  { name: "Budgini — Chatbot Finance AI", tag: "Conversational NLP",
    points: [
      "NLP chatbot for financial assistance and user-intent understanding.",
      "AI model integrated through a Flask API to deliver intelligent, context-aware answers.",
    ] },
  { name: "NovaDB", tag: "Distributed systems · Redis / NoSQL",
    points: [
      "Real-time session management system built on Redis, optimized for performance and scalability.",
      "Caching and TTL mechanisms for efficient resource management.",
      "Full-stack architecture (React.js / Node.js), secured REST APIs and Docker containerization.",
    ] },
  { name: "LiveMeet", tag: "Intelligent collaborative platform",
    points: [
      "Distributed video-conferencing application with real-time communication (Socket.io).",
      "AI features: automatic transcription and NLP analysis of meetings.",
      "Hands-on application of distributed systems and real-time data processing.",
    ] },
];

const SKILLS_EN = [
  { cat: "Data Science & Analysis", items: ["Python", "Pandas", "NumPy", "SQL", "Exploratory analysis (EDA)", "Data cleaning & preparation", "Feature Engineering"] },
  { cat: "Machine Learning", items: ["Scikit-learn", "Classification", "Regression", "Predictive modeling", "Cross-validation", "AUC · AP · F1-score"] },
  { cat: "Deep Learning & GNN", items: ["PyTorch", "PyTorch Geometric", "Graph Neural Networks", "Embeddings", "Link Prediction", "TensorFlow (basics)"] },
  { cat: "Knowledge Graphs", items: ["Neo4j", "Cypher", "Graph modeling", "Entity relationship analysis"] },
  { cat: "Data Engineering & Deployment", items: ["ETL pipelines", "REST APIs", "Flask", "Docker", "Streamlit"] },
  { cat: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { cat: "Tools", items: ["Jupyter Notebook", "Google Colab", "Git"] },
];

const EXPERIENCE_EN = [
  { title: "Data Science Intern — Knowledge Graph & GNN", dates: "August 2026",
    highlights: [
      { label: "Data Engineering & Knowledge Graph", text: "Extraction, preparation and integration of public biomedical data; heterogeneous knowledge graph built with Neo4j and queried with Cypher." },
      { label: "Graph Machine Learning", text: "GNN model for link prediction and identification of new candidate associations between biological entities." },
      { label: "Evaluation & Visualization", text: "Evaluation with AUC and Average Precision (AP); Streamlit interface to explore the graph and visualize predictions." },
    ] },
  { title: "Mobile Development & AI Intern — Final-year project", dates: "Feb — May 2025",
    highlights: [
      { label: "Generative AI", text: "Intelligent coaching assistant built on the Gemini API and Prompt Engineering for personalized productivity recommendations." },
      { label: "Data Analytics & Scoring", text: "Productivity scoring system combining task completion rate, Pomodoro efficiency and priority management." },
      { label: "Development & Visualization", text: "Flutter mobile app featuring AI coaching, a dashboard and performance-tracking indicators." },
    ] },
  { title: "Mobile Development Intern", dates: "Jul — Aug 2024",
    highlights: [
      { label: "Social challenges app", text: "Interfaces integrated from Figma mockups." },
    ] },
  { title: "IT & Network Support Intern", dates: "Jul — Aug 2023",
    highlights: [
      { label: "Industrial environment", text: "Diagnosing IT incidents, equipment maintenance and network infrastructure support." },
    ],
    tags: ["Technical support", "System diagnostics", "Network maintenance", "IP infrastructure"] },
];

const FORMATION_EN = [
  { school: "Lycée Ibn Charaf", degree: "Baccalaureate in Mathematics", sector: "Sciences", years: "2022" },
  { school: "ISMAI", degree: "Bachelor's in Computer Science — Honors", sector: "Computer Science", years: "2022 — 2023" },
  { school: "Faculty of Sciences of Monastir", degree: "Bachelor's in Software Engineering & Information Systems — Honors", sector: "Software Engineering", years: "2023 — 2025" },
  { school: "9antra.tn — The Bridge", degree: "Mobile development training", sector: "Mobile", years: "Jul — Aug 2024" },
  { school: "Faculty of Sciences of Monastir", degree: "Professional Master's in Data Science", sector: "Data Science", years: "2025 — ongoing" },
];

const ASSOCIATIF_EN = [
  { role: "Media & Marketing Advisor", sector: "Communication" },
  { role: "Auditor", sector: "Finance" },
  { role: "Vice President", sector: "Leadership" },
];

const LANGUES_EN = [
  { lang: "Arabic", level: "Native" },
  { lang: "French", level: "Intermediate" },
  { lang: "English", level: "Intermediate" },
];

const STR = {
  fr: {
    heroEyebrow: "Portfolio — Data Science & IA · 2026",
    heroRole: ["Étudiante en Master 2 Data Science", "Faculté des Sciences de Monastir"],
    heroTagline: "Je transforme des données complexes en modèles prédictifs et en résultats exploitables — des graphes de connaissances au Deep Learning.",
    ctaWork: "Découvrir mes travaux", ctaContact: "Me contacter", scroll: "Faire défiler",
    stamp: "Disponible — PFE 2026", photoSub: "Data Science · IA",
    manifesto: ["Un modèle n'a de valeur que lorsqu'il se traduit en ", "solutions concrètes et mesurables", " — de la préparation des données jusqu'à l'évaluation."],
    workTitle: "Travaux sélectionnés", workNote: "Six projets — survolez-en un pour découvrir son illustration et son détail.",
    project: "Projet", viewRepo: "Voir le dépôt",
    skillsTitle: "Compétences", skillsNote: "Sept domaines, un même fil conducteur : faire parler la donnée.",
    expTitle: "Expérience", expNote: "Du support réseau aux graphes de connaissances et aux GNN.",
    eduTitle: "Formation & engagement", eduNote: "Parcours académique et vie associative.",
    eduPath: "Formation — mon parcours", assoc: "Vie associative", languages: "Langues", ongoing: "en cours",
    certTitle: "Certificats", certNote: "Certifications techniques, soft skills et engagement.",
    certGroups: ["Informatique, Cloud & Data", "Soft skills & engagement"], certOpen: "Agrandir", certPrev: "Précédent", certNext: "Suivant",
    contactLabel: "Contact", contactGiant: ["Discutons de votre prochain", "stage de fin d'études →"],
    location: "Zaghouan, Tunisie", close: "Fermer", menu: "Menu",
  },
  en: {
    heroEyebrow: "Portfolio — Data Science & AI · 2026",
    heroRole: ["Master's student (M2) in Data Science", "Faculty of Sciences of Monastir"],
    heroTagline: "I turn complex data into predictive models and actionable results — from knowledge graphs to Deep Learning.",
    ctaWork: "Explore my work", ctaContact: "Contact me", scroll: "Scroll",
    stamp: "Available · Internship 2026", photoSub: "Data Science · AI",
    manifesto: ["A model is only valuable when it translates into ", "concrete, measurable solutions", " — from data preparation all the way to evaluation."],
    workTitle: "Selected work", workNote: "Six projects — hover one to see its illustration and details.",
    project: "Project", viewRepo: "View repository",
    skillsTitle: "Skills", skillsNote: "Seven areas, one common thread: making data speak.",
    expTitle: "Experience", expNote: "From network support to knowledge graphs and GNNs.",
    eduTitle: "Education & involvement", eduNote: "Academic path and volunteer work.",
    eduPath: "Education — my path", assoc: "Extracurricular involvement", languages: "Languages", ongoing: "ongoing",
    certTitle: "Certificates", certNote: "Technical certifications, soft skills and involvement.",
    certGroups: ["IT, Cloud & Data", "Soft skills & involvement"], certOpen: "Enlarge", certPrev: "Previous", certNext: "Next",
    contactLabel: "Contact", contactGiant: ["Let's talk about your next", "end-of-studies internship →"],
    location: "Zaghouan, Tunisia", close: "Close", menu: "Menu",
  },
};

/* merge the English overrides (same order as the base arrays) onto the shared data */
function localize(base, en, lang) {
  return lang === "en" ? base.map((b, i) => ({ ...b, ...(en[i] || {}) })) : base;
}

/* Put your photo in  public/image/  named  i.jpg / i.jpeg / i.png / i.webp  — the first one found is used. */
const PHOTO_CANDIDATES = ["/image/i.jpg", "/image/i.jpeg", "/image/i.png", "/image/i.webp"];

/* ------------------------------- section marker (animated icon) ------------------------------- */

function SectionMarker({ Icon }) {
  return (
    <span className="section-marker">
      <span className="section-marker-ring" />
      <Icon size={19} strokeWidth={1.6} className="section-marker-icon" />
    </span>
  );
}

/* ------------------------------- custom cursor ------------------------------- */

function CustomCursor({ enabled }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    const over = (e) => { if (e.target.closest && e.target.closest("a, button, [data-cursor]")) setHovering(true); };
    const out = (e) => { if (e.target.closest && e.target.closest("a, button, [data-cursor]")) setHovering(false); };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? "is-hovering" : ""}`} />
    </>
  );
}

/* ------------------------------- side progress nav ------------------------------- */

function SideNav({ active, onGo, nav }) {
  return (
    <div className="side-nav">
      {nav.map((n) => (
        <button key={n.id} className={`side-dot-btn ${active === n.id ? "active" : ""}`} onClick={() => onGo(n.id)}>
          <span className="side-dot" />
          <span className="side-label">{n.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ------------------------------- photo tilt card ------------------------------- */

function PhotoTilt({ t }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [photoIdx, setPhotoIdx] = useState(0);
  const showPhoto = photoIdx < PHOTO_CANDIDATES.length;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setStyle({ transform: `rotateX(${py * -10}deg) rotateY(${px * 12}deg) scale(1.02)` });
  };
  const onLeave = () => setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });

  return (
    <div className="photo-zone">
      <span className="photo-frame-offset" />
      <div className="photo-tilt" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={style} data-cursor>
        {showPhoto ? (
          <img
            className="photo-real"
            src={PHOTO_CANDIDATES[photoIdx]}
            alt="Hamouda Tesnime"
            onError={() => setPhotoIdx((i) => i + 1)}
          />
        ) : (
          <div className="photo-inner">
            <span className="photo-mono">TH</span>
            <span className="photo-sub">{t.photoSub}</span>
          </div>
        )}
        <div className="photo-shine" />
      </div>
      <span className="photo-stamp"><Sparkles size={12} /> {t.stamp}</span>
    </div>
  );
}

/* ------------------------------- work index ------------------------------- */

function WorkIndex({ projects, t }) {
  const [active, setActive] = useState(0);
  const p = projects[active];
  return (
    <div className="work-grid">
      <div className="work-list">
        {projects.map((proj, i) => (
          <button
            key={proj.name}
            className={`work-row ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="work-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="work-name">{proj.name}</span>
            <ArrowUpRight size={18} className="work-arrow" />
          </button>
        ))}
      </div>
      <div className="work-panel">
        <div key={active} className="work-panel-inner">
          <div className="work-illus-wrap"><p.Art /></div>
          <p className="work-panel-count">{t.project} {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
          <h3 className="work-panel-name">{p.name}</h3>
          <p className="work-panel-tag">{p.tag}</p>
          <ul className="work-points">{p.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
          <div className="work-stack">{p.stack.map((s) => <span className="work-chip" key={s}>{s}</span>)}</div>
          <a className="work-link" href="https://github.com/tasnim-1" target="_blank" rel="noreferrer">
            {t.viewRepo} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- formation road ------------------------------- */

function RoadFormation({ items, t }) {
  const ROAD_D = "M140,90 L700,90 Q800,90 800,170 Q800,250 700,250 L140,250 Q60,250 60,330 Q60,410 140,410 L820,410";
  return (
    <div className="road-scroll">
      <div className="road-wrap">
        <svg viewBox="0 0 900 460" className="road-svg" preserveAspectRatio="none" aria-hidden="true">
          <path d={ROAD_D} fill="none" stroke="#17171A" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
          <path d={ROAD_D} fill="none" stroke="#fff" strokeWidth="2.5" strokeDasharray="10 12" strokeLinecap="round" />
        </svg>
        {items.map((f, i) => {
          const slot = ROAD_SLOTS[i];
          return (
            <div
              key={f.degree}
              className={`road-pin-item side-${slot.labelSide} ${f.current ? "is-current" : ""}`}
              style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
            >
              <span className="road-pin">
                <span className="road-pin-tail" />
                <span className="road-pin-circle"><f.Icon size={18} strokeWidth={1.8} /></span>
              </span>
              <span className="road-label">
                <span className="road-sector">{f.sector}{f.current ? ` · ${t.ongoing}` : ""}</span>
                <span className="road-degree">{f.degree}</span>
                <span className="road-meta">{f.school} · {f.years}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------- FR / EN switch ------------------------------- */

function LangSwitch({ lang, setLang }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language / Langue">
      {["fr", "en"].map((l) => (
        <button
          key={l}
          className={`lang-btn ${lang === l ? "active" : ""}`}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          lang={l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------- certificates ------------------------------- */

function CertCard({ item, onOpen, t }) {
  const [failed, setFailed] = useState(false);
  return (
    <button type="button" className="cert-card" onClick={onOpen} aria-label={`${t.certOpen} — ${item.title}`}>
      <span className="cert-thumb">
        {failed ? (
          <span className="cert-seal"><Award size={30} strokeWidth={1.4} /></span>
        ) : (
          <img src={item.src} alt={item.title} loading="lazy" onError={() => setFailed(true)} />
        )}
        <span className="cert-zoom"><ZoomIn size={16} /></span>
      </span>
      <span className="cert-body">
        <span className="cert-title">{item.title}</span>
        {(item.issuer || item.year) && <span className="cert-meta">{[item.issuer, item.year].filter(Boolean).join(" · ")}</span>}
      </span>
    </button>
  );
}

function CertLightbox({ items, index, onClose, onNav, t }) {
  const item = items[index];
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNav]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label={t.close}><X size={20} /></button>
      <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); onNav(-1); }} aria-label={t.certPrev}><ChevronLeft size={26} /></button>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} />
        <figcaption>
          <span>{item.title}</span>
          <span className="lightbox-count">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
      <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); onNav(1); }} aria-label={t.certNext}><ChevronRight size={26} /></button>
    </div>
  );
}

/* ------------------------------- reveal helper ------------------------------- */

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${className}`} {...rest}>{children}</Tag>;
}

/* ------------------------------------ app ------------------------------------ */

export default function PortfolioLuxe() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [pointerFine, setPointerFine] = useState(false);
  const [lang, setLang] = useState(() => {
    try {
      const saved = typeof window !== "undefined" ? window.localStorage.getItem("pf-lang") : null;
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) { /* ignore */ }
    return "fr";
  });
  const t = STR[lang];
  const nav = useMemo(() => localize(NAV, NAV_EN, lang), [lang]);
  const projects = useMemo(() => localize(PROJECTS, PROJECTS_EN, lang), [lang]);
  const skills = useMemo(() => localize(SKILLS, SKILLS_EN, lang), [lang]);
  const experience = useMemo(() => localize(EXPERIENCE, EXPERIENCE_EN, lang), [lang]);
  const formation = useMemo(() => localize(FORMATION, FORMATION_EN, lang), [lang]);
  const associatif = useMemo(() => localize(ASSOCIATIF, ASSOCIATIF_EN, lang), [lang]);
  const langues = useMemo(() => localize(LANGUES, LANGUES_EN, lang), [lang]);
  const ticker = lang === "en" ? TICKER_EN : TICKER;
  const certGroups = useMemo(
    () => CERT_GROUPS.map((g, gi) => ({
      id: g.id,
      label: STR[lang].certGroups[gi],
      items: g.items.map((c) => ({ ...c, title: (lang === "en" && c.title_en) || c.title, src: certSrc(c.file) })),
    })),
    [lang]
  );
  const certFlat = useMemo(() => certGroups.flatMap((g) => g.items), [certGroups]);
  const [certOpen, setCertOpen] = useState(null);
  const closeCert = useCallback(() => setCertOpen(null), []);
  const navCert = useCallback(
    (d) => setCertOpen((i) => (i === null ? null : (i + d + certFlat.length) % certFlat.length)),
    [certFlat.length]
  );

  useEffect(() => {
    try { window.localStorage.setItem("pf-lang", lang); } catch (e) { /* ignore */ }
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      setPointerFine(window.matchMedia("(pointer: fine)").matches);
    }
  }, []);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`pf-root ${pointerFine ? "has-custom-cursor" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf-root {
          --paper: #ffffff;
          --paper-soft: #faf7f6;
          --ink: #0e0e10;
          --ink-soft: #55555b;
          --ink-faint: #97979d;
          --red: #b3122a;
          --red-bright: #d6455b;
          --red-deep: #82091c;
          --red-soft: #fbeced;
          --line: #ece7e5;
          --line-strong: #d9d1ce;
          --shadow-lift: 0 34px 60px -30px rgba(130,9,28,0.28);
          --font-display: 'Playfair Display', serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;

          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          position: relative;
          overflow-x: clip;
        }
        .pf-root * { box-sizing: border-box; }
        /* --- reset: neutralise Vite's default index.css / App.css so the page is never wider than the screen --- */
        html, body { margin: 0 !important; padding: 0 !important; display: block !important; min-width: 0 !important; width: 100% !important; max-width: 100% !important; overflow-x: hidden; }
        #root { width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; text-align: left !important; display: block !important; }
        .pf-root { width: 100%; max-width: 100vw; }
        .pf-root a { color: inherit; }
        .pf-root svg { display: block; }
        .pf-shell { max-width: 1240px; margin: 0 auto; padding: 0 40px; }

        .has-custom-cursor, .has-custom-cursor a, .has-custom-cursor button { cursor: none !important; }
        .cursor-dot { position: fixed; top: 0; left: 0; width: 6px; height: 6px; background: var(--red); border-radius: 50%; pointer-events: none; z-index: 200; margin: -3px; }
        .cursor-ring { position: fixed; top: 0; left: 0; width: 36px; height: 36px; border: 1px solid var(--red); border-radius: 50%; pointer-events: none; z-index: 199; margin: -18px; opacity: 0.55; transition: width 0.25s, height 0.25s, margin 0.25s, background 0.25s, opacity 0.25s; }
        .cursor-ring.is-hovering { width: 62px; height: 62px; margin: -31px; background: rgba(179,18,42,0.08); opacity: 1; }
        @media (max-width: 1024px) { .cursor-dot, .cursor-ring { display: none; } }

        /* top bar */
        .topbar { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 16px 40px; gap: 28px; background: rgba(255,255,255,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
        .topbar-logo { display: flex; align-items: center; gap: 12px; background: none; border: none; cursor: pointer; color: var(--ink); font-family: var(--font-display); font-size: 19px; letter-spacing: 0.01em; }
        .topbar-logo-mark { width: 34px; height: 34px; background: var(--red); color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-style: italic; font-size: 14px; letter-spacing: 0.02em; }
        .topbar-right { display: flex; align-items: center; gap: 18px; }
        .topbar-cta { font-family: var(--font-body); font-size: 11.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink); border: 1px solid var(--ink); padding: 11px 20px; background: none; cursor: pointer; transition: background 0.25s, color 0.25s, border-color 0.25s; }
        .topbar-cta:hover { background: var(--red); border-color: var(--red); color: #fff; }
        .menu-btn { display: none; align-items: center; gap: 10px; background: none; border: none; cursor: pointer; color: var(--ink); font-family: var(--font-body); font-size: 11.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }
        .menu-btn-icon { width: 42px; height: 42px; border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; transition: border-color 0.2s, color 0.2s; }
        .menu-btn:hover .menu-btn-icon { border-color: var(--red); color: var(--red); }

        /* horizontal menu (reference style) + FR / EN switch */
        .topnav { display: flex; align-items: center; gap: clamp(16px, 2.4vw, 40px); margin-left: auto; }
        .topnav-link { position: relative; background: none; border: none; cursor: pointer; font-family: var(--font-body); font-size: 16px; font-weight: 500; color: var(--ink); padding: 8px 0; letter-spacing: 0.005em; transition: color 0.2s; }
        .topnav-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: 2px; height: 1.5px; background: var(--red); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
        .topnav-link:hover, .topnav-link.active { color: var(--red); }
        .topnav-link:hover::after, .topnav-link.active::after { transform: scaleX(1); }
        .topbar-right { margin-left: 0; }
        .lang-switch { display: inline-flex; align-items: center; gap: 2px; padding: 3px; background: var(--paper-soft); border: 1px solid var(--line-strong); }
        .lang-btn { font-family: var(--font-body); font-size: 13px; font-weight: 700; letter-spacing: 0.08em; padding: 9px 15px; background: none; border: none; color: var(--ink-faint); cursor: pointer; transition: background 0.25s, color 0.25s; }
        .lang-btn:hover { color: var(--red); }
        .lang-btn.active { background: var(--ink); color: #fff; }
        .lang-btn.active:hover { color: #fff; }
        section, footer.contact, #top { scroll-margin-top: 72px; }
        @media (max-width: 1100px) { .topnav { display: none; } .topbar-right { margin-left: auto; } .menu-btn { display: flex; } }
        @media (max-width: 520px) { .topbar-logo-text { display: none; } .topbar { padding: 14px 18px; } }

        .overlay-menu { position: fixed; inset: 0; z-index: 100; background: var(--paper); display: flex; flex-direction: column; justify-content: center; padding: 60px; opacity: 0; pointer-events: none; transition: opacity 0.35s ease; }
        .overlay-menu.open { opacity: 1; pointer-events: auto; }
        .overlay-close { position: absolute; top: 24px; right: 40px; background: none; border: 1px solid var(--line-strong); width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .overlay-close:hover { border-color: var(--red); color: var(--red); }
        .overlay-list { list-style: none; margin: 0; padding: 0; }
        .overlay-list li { border-top: 1px solid var(--line); }
        .overlay-list li:last-child { border-bottom: 1px solid var(--line); }
        .overlay-list button { width: 100%; text-align: left; background: none; border: none; padding: 24px 4px; font-family: var(--font-display); font-size: clamp(34px, 6vw, 62px); color: var(--ink); cursor: pointer; display: flex; align-items: baseline; gap: 22px; transition: color 0.2s, padding-left 0.25s; }
        .overlay-list button:hover { color: var(--red); padding-left: 18px; }
        .overlay-list span.ol-idx { font-family: var(--font-mono); font-size: 13px; color: var(--red); }

        .side-nav { position: fixed; right: 34px; top: 50%; transform: translateY(-50%); z-index: 40; display: flex; flex-direction: column; gap: 17px; }
        .side-dot-btn { display: flex; align-items: center; gap: 10px; background: none; border: none; cursor: pointer; padding: 0; }
        .side-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--line-strong); transition: background 0.2s, transform 0.2s; }
        .side-dot-btn.active .side-dot { background: var(--red); transform: scale(1.6); }
        .side-label { font-family: var(--font-body); font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); opacity: 0; transform: translateX(6px); transition: opacity 0.2s, transform 0.2s; white-space: nowrap; }
        .side-dot-btn:hover .side-label, .side-dot-btn.active .side-label { opacity: 1; transform: translateX(0); }
        @media (max-width: 1180px) { .side-nav { display: none; } }

        .eyebrow { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--red); display: flex; align-items: center; gap: 14px; margin: 0 0 26px; }
        .eyebrow::before { content: ''; width: 34px; height: 1px; background: var(--red); display: inline-block; }

        /* animated section marker */
        .section-marker { position: relative; width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex: none; background: var(--red-soft); color: var(--red); }
        .section-marker-ring { position: absolute; inset: -6px; border-radius: 50%; border: 1px dashed var(--red); opacity: 0.55; animation: ringspin 14s linear infinite; }
        .section-marker-icon { animation: iconfloat 3s ease-in-out infinite; }
        @keyframes ringspin { to { transform: rotate(360deg); } }
        @keyframes iconfloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @media (prefers-reduced-motion: reduce) { .section-marker-ring, .section-marker-icon { animation: none; } }

        /* hero */
        .hero { padding: 84px 0 110px; position: relative; }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 50px; align-items: center; }
        .hero-name { font-family: var(--font-display); font-weight: 500; font-size: clamp(54px, 8vw, 118px); line-height: 0.98; letter-spacing: -0.02em; margin: 0 0 32px; color: var(--ink); }
        .hero-name em { font-style: italic; font-weight: 400; color: var(--red); }
        .hero-sub { display: flex; gap: 44px; flex-wrap: wrap; align-items: flex-start; margin-bottom: 44px; }
        .hero-role { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft); max-width: 230px; line-height: 1.9; padding-top: 6px; border-top: 1px solid var(--red); }
        .hero-tagline { font-size: 19px; color: var(--ink); max-width: 450px; line-height: 1.75; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 50px; }
        .btn-primary { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; background: var(--red); color: #fff; border: 1px solid var(--red); padding: 18px 30px; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: background 0.25s, transform 0.2s, box-shadow 0.25s; }
        .btn-primary:hover { background: var(--red-deep); border-color: var(--red-deep); transform: translateY(-2px); box-shadow: 0 18px 34px -16px rgba(130,9,28,0.6); }
        .btn-primary svg { transition: transform 0.2s; }
        .btn-primary:hover svg { transform: translate(2px, -2px); }
        .btn-ghost { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; background: none; color: var(--ink); border: 1px solid var(--ink); padding: 18px 30px; cursor: pointer; transition: background 0.25s, color 0.25s; }
        .btn-ghost:hover { background: var(--ink); color: #fff; }
        .scroll-cue { display: inline-flex; align-items: center; gap: 12px; font-family: var(--font-body); font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-faint); background: none; border: none; cursor: pointer; }
        .scroll-cue-icon { width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--red); animation: bob 1.8s ease-in-out infinite; }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(4px); } }

        /* photo */
        .photo-zone { position: relative; display: flex; justify-content: center; padding: 20px; perspective: 1000px; }
        .photo-frame-offset { position: absolute; top: 4px; left: calc(50% - 150px); width: 320px; height: 410px; border: 1px solid var(--red); transform: translate(18px, 18px); z-index: 0; }
        .photo-tilt { width: 320px; height: 410px; background: linear-gradient(160deg, var(--red-soft), #fff 75%); border: 1px solid var(--line); box-shadow: var(--shadow-lift); transition: transform 0.25s ease-out; transform-style: preserve-3d; position: relative; overflow: hidden; z-index: 1; }
        .photo-real { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .photo-inner { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; }
        .photo-mono { font-family: var(--font-display); font-style: italic; font-size: 84px; color: var(--red); font-weight: 400; }
        .photo-sub { font-family: var(--font-body); font-size: 10.5px; font-weight: 600; color: var(--ink-faint); text-transform: uppercase; letter-spacing: 0.2em; }
        .photo-shine { position: absolute; inset: 0; background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%); pointer-events: none; }
        .photo-stamp { position: absolute; bottom: 4px; left: 0; display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #fff; background: var(--ink); padding: 11px 16px; z-index: 2; }
        .photo-stamp svg { color: var(--red-bright); }
        @media (prefers-reduced-motion: reduce) { .scroll-cue-icon { animation: none; } }

        /* ticker */
        .ticker { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--paper-soft); overflow: hidden; max-width: 100%; contain: paint; padding: 20px 0; }
        .ticker-track { display: flex; gap: 46px; white-space: nowrap; width: max-content; animation: marquee 34s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-item { display: inline-flex; align-items: center; gap: 46px; font-family: var(--font-display); font-style: italic; font-size: 22px; color: var(--ink); }
        .ticker-item::after { content: '✦'; font-style: normal; font-size: 13px; color: var(--red); }
        @media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }

        /* manifesto */
        .manifesto { padding: 120px 0; text-align: center; position: relative; }
        .manifesto-mark { font-family: var(--font-display); font-size: 120px; line-height: 0.6; color: var(--red); display: block; margin-bottom: 8px; }
        .manifesto-text { font-family: var(--font-display); font-style: italic; font-weight: 400; font-size: clamp(26px, 3.5vw, 46px); line-height: 1.5; color: var(--ink); max-width: 940px; margin: 0 auto; }
        .manifesto-text em { color: var(--red); }

        section { padding: 116px 0; border-top: 1px solid var(--line); }
        .section-alt { background: var(--paper-soft); }

        .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

        .section-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 64px; gap: 24px; flex-wrap: wrap; }
        .section-head-left { display: flex; align-items: center; gap: 24px; }
        .section-title { font-family: var(--font-display); font-size: clamp(34px, 4.6vw, 52px); font-weight: 500; margin: 0; color: var(--ink); letter-spacing: -0.01em; }
        .section-title::after { content: ''; display: block; width: 56px; height: 2px; background: var(--red); margin-top: 14px; }
        .section-note { font-family: var(--font-body); font-size: 13.5px; color: var(--ink-faint); max-width: 290px; text-align: right; line-height: 1.6; }

        /* work index */
        .work-grid { display: grid; grid-template-columns: 0.9fr 1.2fr; gap: 64px; align-items: flex-start; }
        .work-list { display: flex; flex-direction: column; }
        .work-row { display: flex; align-items: center; gap: 18px; background: none; border: none; border-top: 1px solid var(--line-strong); padding: 30px 8px; cursor: pointer; text-align: left; width: 100%; position: relative; transition: padding-left 0.3s, background 0.3s; }
        .work-list .work-row:last-child { border-bottom: 1px solid var(--line-strong); }
        .work-row::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--red); transform: scaleY(0); transition: transform 0.3s; transform-origin: top; }
        .work-row:hover, .work-row.active { padding-left: 24px; background: var(--paper-soft); }
        .work-row:hover::before, .work-row.active::before { transform: scaleY(1); }
        .work-index { font-family: var(--font-mono); font-size: 13px; color: var(--red); width: 26px; flex: none; }
        .work-name { font-family: var(--font-display); font-size: 29px; color: var(--ink); flex: 1; line-height: 1.2; transition: color 0.2s; }
        .work-row.active .work-name, .work-row:hover .work-name { color: var(--red); }
        .work-arrow { color: var(--ink-faint); transition: transform 0.25s, color 0.25s; flex: none; }
        .work-row.active .work-arrow, .work-row:hover .work-arrow { color: var(--red); transform: translate(3px, -3px); }
        .work-panel { background: #fff; border: 1px solid var(--line-strong); padding: 28px; position: sticky; top: 110px; box-shadow: var(--shadow-lift); }
        .work-panel-inner { animation: panelFade 0.45s ease; }
        @keyframes panelFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .work-illus-wrap { overflow: hidden; margin-bottom: 26px; border: 1px solid var(--line); }
        .proj-illus { width: 100%; height: auto; display: block; }
        .work-panel-count { font-family: var(--font-mono); font-size: 11.5px; color: var(--red); letter-spacing: 0.1em; margin: 0 0 8px; }
        .work-panel-name { font-family: var(--font-display); font-size: 34px; font-weight: 500; margin: 0 0 4px; color: var(--ink); line-height: 1.15; }
        .work-panel-tag { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); margin: 0 0 22px; }
        .work-points { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .work-points li { font-size: 15.5px; color: var(--ink-soft); line-height: 1.65; padding-left: 22px; position: relative; }
        .work-points li::before { content: ''; position: absolute; left: 0; top: 12px; width: 10px; height: 1px; background: var(--red); }
        .work-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 26px; }
        .work-chip { font-family: var(--font-mono); font-size: 12px; padding: 6px 12px; border: 1px solid var(--line-strong); color: var(--ink); background: var(--paper-soft); }
        .work-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 11.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none; color: var(--red); border-bottom: 1px solid var(--red); padding-bottom: 4px; }
        @media (max-width: 900px) { .work-grid { grid-template-columns: 1fr; } .work-panel { position: static; } }

        /* skills */
        .skills-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .skill-card { background: #fff; border: 1px solid var(--line-strong); padding: 32px 28px; position: relative; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
        .skill-card::before { content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 2px; background: var(--red); transform: scaleX(0); transform-origin: left; transition: transform 0.4s; }
        .skill-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lift); border-color: var(--red); }
        .skill-card:hover::before { transform: scaleX(1); }
        .skill-card:last-child:nth-child(3n+1) { grid-column: 1 / -1; }
        .skill-avatar { width: 58px; height: 58px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; background: var(--red-soft); color: var(--red); }
        .skill-avatar::after { content: ''; position: absolute; inset: -5px; border-radius: 50%; border: 1px dashed var(--red); opacity: 0.4; }
        .skill-card:hover .skill-avatar { background: var(--red); color: #fff; }
        .skill-cat { font-family: var(--font-display); font-size: 23px; font-weight: 500; color: var(--ink); margin: 0 0 18px; line-height: 1.25; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 9px; }
        .skill-tag { font-family: var(--font-body); font-size: 13.5px; color: var(--ink-soft); border: 1px solid var(--line-strong); padding: 7px 13px; }
        @media (max-width: 900px) { .skills-cards { grid-template-columns: 1fr 1fr; } .skill-card:last-child:nth-child(3n+1) { grid-column: auto; } .skill-card:last-child:nth-child(2n+1) { grid-column: 1 / -1; } }
        @media (max-width: 620px) { .skills-cards { grid-template-columns: 1fr; } .skill-card:last-child:nth-child(2n+1) { grid-column: auto; } }

        /* experience zigzag */
        .zig-list { position: relative; }
        .zig-list::before { content: ''; position: absolute; left: 50%; top: 8px; bottom: 8px; width: 1px; background: var(--line-strong); transform: translateX(-50%); }
        .zig-row { display: grid; grid-template-columns: 1fr 58px 1fr; }
        .zig-node-col { grid-column: 2; display: flex; justify-content: center; padding-top: 8px; }
        .zig-node { width: 17px; height: 17px; border-radius: 50%; background: #fff; border: 2px solid var(--red); position: relative; z-index: 1; color: var(--red); }
        .zig-node::after { content: ''; position: absolute; inset: -6px; border-radius: 50%; border: 1px solid var(--red); opacity: 0.4; animation: pulse-node 2.6s ease-out infinite; }
        @keyframes pulse-node { 0% { transform: scale(0.7); opacity: 0.6; } 100% { transform: scale(1.9); opacity: 0; } }
        .zig-content { grid-column: 3; padding: 2px 0 64px 36px; text-align: left; }
        .zig-row:nth-child(odd) .zig-content { grid-column: 1; padding: 2px 36px 64px 0; text-align: right; }
        .zig-year { display: inline-block; font-family: var(--font-mono); font-size: 12px; color: var(--red); letter-spacing: 0.08em; margin-bottom: 8px; }
        .zig-title { font-family: var(--font-display); font-size: 27px; font-weight: 500; margin: 0 0 6px; color: var(--ink); line-height: 1.25; }
        .zig-org { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--red); margin: 0 0 4px; }
        .zig-meta { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); margin: 0 0 18px; }
        .zig-hl { margin: 0 0 12px; font-size: 15.5px; color: var(--ink-soft); line-height: 1.65; }
        .zig-hl strong { display: block; color: var(--ink); font-weight: 600; font-size: 14px; margin-bottom: 2px; }
        .zig-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 18px; }
        .zig-row:nth-child(odd) .zig-tags { justify-content: flex-end; }
        .zig-tag { font-family: var(--font-mono); font-size: 11.5px; color: var(--ink-soft); border: 1px solid var(--line-strong); padding: 5px 10px; background: #fff; }
        @media (max-width: 800px) {
          .zig-list::before { left: 18px; }
          .zig-row { grid-template-columns: 38px 1fr; }
          .zig-node-col { grid-column: 1; }
          .zig-content, .zig-row:nth-child(odd) .zig-content { grid-column: 2 !important; text-align: left !important; padding: 2px 0 48px 20px !important; }
          .zig-tags, .zig-row:nth-child(odd) .zig-tags { justify-content: flex-start !important; }
        }

        /* formation road */
        .assoc-title { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); margin: 0 0 26px; display: flex; align-items: center; gap: 10px; }
        .fa-block + .fa-block { margin-top: 84px; }
        .road-scroll { width: 100%; overflow-x: auto; padding-bottom: 6px; }
        .road-wrap { position: relative; width: 100%; min-width: 780px; aspect-ratio: 900 / 460; }
        .road-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .road-pin-item { position: absolute; display: flex; align-items: center; gap: 14px; transform: translate(-50%, -100%); }
        .road-pin-item.side-left { flex-direction: row-reverse; }
        .road-pin-item.side-left .road-label { text-align: right; align-items: flex-end; }
        .road-pin { position: relative; width: 54px; height: 54px; flex: none; }
        .road-pin-tail { position: absolute; bottom: -2px; left: 50%; width: 16px; height: 16px; margin-left: -8px; background: var(--red); border-radius: 0 0 4px 0; transform: rotate(45deg); }
        .road-pin-circle { position: absolute; inset: 0; margin: auto; width: 48px; height: 48px; border-radius: 50%; background: #fff; border: 3px solid var(--red); color: var(--red); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px -8px rgba(130,9,28,0.45); animation: pinfloat 3.2s ease-in-out infinite; }
        .road-pin-item.is-current .road-pin-circle { background: var(--red); color: #fff; }
        @keyframes pinfloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .road-label { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; max-width: 175px; padding-bottom: 8px; }
        .road-sector { font-family: var(--font-body); font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--red); }
        .road-degree { font-family: var(--font-display); font-size: 16.5px; color: var(--ink); line-height: 1.28; }
        .road-meta { font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-faint); }
        @media (prefers-reduced-motion: reduce) { .road-pin-circle { animation: none; } }
        @media (max-width: 760px) { .road-scroll { display: none; } }

        .cred-grid-mobile { display: none; }
        @media (max-width: 760px) { .cred-grid-mobile { display: grid; grid-template-columns: 1fr; gap: 16px; } }
        .cred-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .cred-card { display: flex; flex-direction: column; background: #fff; border: 1px solid var(--line-strong); padding: 28px; position: relative; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
        .cred-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lift); border-color: var(--red); }
        .cred-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .cred-icon { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--red-soft); color: var(--red); flex: none; }
        .cred-years { font-family: var(--font-mono); font-size: 11.5px; color: var(--ink-faint); }
        .cred-sector { font-family: var(--font-body); font-size: 10.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--red); margin-bottom: 10px; }
        .cred-degree { font-family: var(--font-display); font-size: 20px; color: var(--ink); margin: 0 0 8px; line-height: 1.3; }
        .cred-school { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); margin: 0; }
        @media (max-width: 1000px) { .cred-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 620px) { .cred-grid { grid-template-columns: 1fr; } }

        .langs { max-width: 640px; }
        .lang-row { display: grid; grid-template-columns: 100px 1fr 130px; gap: 18px; align-items: center; margin-bottom: 20px; }
        .lang-name { font-family: var(--font-display); font-size: 19px; color: var(--ink); }
        .lang-bar { height: 3px; background: var(--line); overflow: hidden; }
        .lang-fill { height: 100%; background: var(--red); }
        .lang-level { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); text-align: right; }

        /* certificates */
        .cert-group + .cert-group { margin-top: 64px; }
        .cert-group-label { font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); display: flex; align-items: center; gap: 16px; margin: 0 0 26px; }
        .cert-group-label::after { content: ''; flex: 1; height: 1px; background: var(--line-strong); }
        .cert-row { display: grid; gap: 24px; }
        .cert-row.cols-4 { grid-template-columns: repeat(4, 1fr); }
        .cert-row.cols-3 { grid-template-columns: repeat(3, 1fr); }
        .cert-cell { display: flex; }
        .cert-card { position: relative; width: 100%; display: flex; flex-direction: column; text-align: left; padding: 0; background: #fff; border: 1px solid var(--line-strong); cursor: pointer; font: inherit; color: inherit; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
        .cert-card::before { content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 3px; background: var(--red); transform: scaleX(0); transform-origin: left; transition: transform 0.4s; z-index: 2; }
        .cert-card:hover, .cert-card:focus-visible { transform: translateY(-5px); box-shadow: var(--shadow-lift); border-color: var(--red); outline: none; }
        .cert-card:hover::before, .cert-card:focus-visible::before { transform: scaleX(1); }
        .cert-thumb { position: relative; aspect-ratio: 4 / 3; background: var(--paper-soft); border-bottom: 1px solid var(--line); overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 12px; }
        .cert-thumb img { width: 100%; height: 100%; object-fit: contain; transition: transform 0.5s ease; }
        .cert-card:hover .cert-thumb img { transform: scale(1.05); }
        .cert-zoom { position: absolute; right: 12px; bottom: 12px; width: 36px; height: 36px; border-radius: 50%; background: var(--red); color: #fff; display: flex; align-items: center; justify-content: center; opacity: 0; transform: translateY(6px); transition: opacity 0.25s, transform 0.25s; }
        .cert-card:hover .cert-zoom, .cert-card:focus-visible .cert-zoom { opacity: 1; transform: none; }
        .cert-seal { width: 70px; height: 70px; border-radius: 50%; background: var(--red-soft); color: var(--red); display: flex; align-items: center; justify-content: center; }
        .cert-body { display: flex; flex-direction: column; gap: 4px; padding: 18px 20px 22px; }
        .cert-title { font-family: var(--font-display); font-size: 20px; font-weight: 500; color: var(--ink); line-height: 1.3; }
        .cert-meta { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); }
        @media (max-width: 1000px) { .cert-row.cols-4, .cert-row.cols-3 { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .cert-row.cols-4, .cert-row.cols-3 { grid-template-columns: 1fr; } }

        /* lightbox */
        .lightbox { position: fixed; inset: 0; z-index: 150; background: rgba(14,14,16,0.92); display: flex; align-items: center; justify-content: center; padding: 24px; animation: lbFade 0.25s ease; }
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }
        .lightbox-figure { margin: 0; max-width: min(1100px, 86vw); display: flex; flex-direction: column; gap: 14px; }
        .lightbox-figure img { max-width: 100%; max-height: 78vh; object-fit: contain; background: #fff; display: block; box-shadow: 0 30px 80px -20px rgba(0,0,0,0.6); }
        .lightbox-figure figcaption { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; color: #fff; font-family: var(--font-display); font-size: 20px; }
        .lightbox-count { font-family: var(--font-mono); font-size: 12px; color: rgba(255,255,255,0.6); letter-spacing: 0.1em; }
        .lightbox-close { position: absolute; top: 22px; right: 26px; width: 46px; height: 46px; border: 1px solid rgba(255,255,255,0.35); background: none; color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s, border-color 0.2s; }
        .lightbox-close:hover { background: var(--red); border-color: var(--red); }
        .lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 50px; height: 50px; border: 1px solid rgba(255,255,255,0.35); background: none; color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s, border-color 0.2s; }
        .lightbox-nav:hover { background: var(--red); border-color: var(--red); }
        .lightbox-nav.prev { left: 22px; }
        .lightbox-nav.next { right: 22px; }
        @media (max-width: 700px) { .lightbox-nav { top: auto; bottom: 22px; transform: none; } .lightbox-nav.prev { left: 22px; } .lightbox-nav.next { right: 22px; } .lightbox-figure { max-width: 94vw; } }

        /* contact */
        footer.contact { padding: 140px 0 60px; border-top: 1px solid var(--line); background: var(--paper-soft); }
        .contact-giant { font-family: var(--font-display); font-size: clamp(36px, 7vw, 96px); font-weight: 500; font-style: italic; color: var(--ink); text-decoration: none; display: inline-block; line-height: 1.08; letter-spacing: -0.01em; position: relative; margin-bottom: 64px; word-break: break-word; }
        .contact-giant::after { content: ''; position: absolute; left: 0; bottom: 4px; width: 100%; height: 3px; background: var(--red); transform: scaleX(0); transform-origin: left; transition: transform 0.45s ease; }
        .contact-giant:hover::after { transform: scaleX(1); }
        .contact-giant:hover { color: var(--red); }
        .contact-row { display: flex; flex-wrap: wrap; gap: 36px; margin-bottom: 64px; }
        .contact-link { display: inline-flex; align-items: center; gap: 12px; font-family: var(--font-body); font-size: 15px; color: var(--ink-soft); text-decoration: none; transition: color 0.2s; }
        .contact-link:hover { color: var(--red); }
        .contact-link-icon { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--red); transition: background 0.25s, color 0.25s, border-color 0.25s; }
        .contact-link:hover .contact-link-icon { background: var(--red); border-color: var(--red); color: #fff; }
        .foot-bottom { display: flex; justify-content: space-between; align-items: center; font-family: var(--font-body); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-faint); flex-wrap: wrap; gap: 12px; padding-top: 30px; border-top: 1px solid var(--line-strong); }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero { padding: 50px 0 70px; }
          .photo-zone { margin-top: 30px; }
          .pf-shell { padding: 0 22px; }
          .topbar { padding: 16px 20px; }
          .topbar-cta { display: none; }
          .overlay-menu { padding: 40px 24px; }
          section { padding: 84px 0; }
        }
      `}</style>

      <CustomCursor enabled={pointerFine} />

      <header className="topbar">
        <button className="topbar-logo" onClick={() => scrollTo("top")}>
          <span className="topbar-logo-mark">TH</span>
          <span className="topbar-logo-text">Hamouda Tesnime</span>
        </button>
        <nav className="topnav" aria-label="Navigation">
          {nav.map((n) => (
            <button
              key={n.id}
              className={`topnav-link ${activeSection === n.id ? "active" : ""}`}
              onClick={() => scrollTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="topbar-right">
          <LangSwitch lang={lang} setLang={setLang} />
          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label={t.menu}>
            <span className="menu-btn-icon"><Menu size={18} /></span>
          </button>
        </div>
      </header>

      <div className={`overlay-menu ${menuOpen ? "open" : ""}`}>
        <button className="overlay-close" onClick={() => setMenuOpen(false)} aria-label={t.close}><X size={19} /></button>
        <ul className="overlay-list">
          {nav.map((n, i) => (
            <li key={n.id}>
              <button onClick={() => scrollTo(n.id)}>
                <span className="ol-idx">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <SideNav active={activeSection} onGo={scrollTo} nav={nav} />

      <div id="top" className="pf-shell">
        <section className="hero" style={{ borderTop: "none" }}>
          <p className="eyebrow">{t.heroEyebrow}</p>
          <div className="hero-grid">
            <div>
              <h1 className="hero-name">Hamouda<br /><em>Tesnime</em></h1>
              <div className="hero-sub">
                <p className="hero-role">{t.heroRole[0]}<br />{t.heroRole[1]}</p>
                <p className="hero-tagline">{t.heroTagline}</p>
              </div>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => scrollTo("projets")}>{t.ctaWork} <ArrowUpRight size={16} /></button>
                <button className="btn-ghost" onClick={() => scrollTo("contact")}>{t.ctaContact}</button>
              </div>
              <button className="scroll-cue" onClick={() => scrollTo("projets")}>
                <span className="scroll-cue-icon"><ArrowDown size={13} /></span>
                {t.scroll}
              </button>
            </div>
            <PhotoTilt t={t} />
          </div>
        </section>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, i) => <span className="ticker-item" key={i}>{item}</span>)}
        </div>
      </div>

      <div className="manifesto">
        <div className="pf-shell">
          <Reveal>
            <span className="manifesto-mark">“</span>
            <p className="manifesto-text">{t.manifesto[0]}<em>{t.manifesto[1]}</em>{t.manifesto[2]}</p>
          </Reveal>
        </div>
      </div>

      <section id="projets">
        <div className="pf-shell">
          <Reveal className="section-head">
            <div className="section-head-left">
              <SectionMarker Icon={Sparkles} />
              <h2 className="section-title">{t.workTitle}</h2>
            </div>
            <p className="section-note">{t.workNote}</p>
          </Reveal>
          <Reveal><WorkIndex projects={projects} t={t} /></Reveal>
        </div>
      </section>

      <section id="competences" className="section-alt">
        <div className="pf-shell">
          <Reveal className="section-head">
            <div className="section-head-left">
              <SectionMarker Icon={BrainCircuit} />
              <h2 className="section-title">{t.skillsTitle}</h2>
            </div>
            <p className="section-note">{t.skillsNote}</p>
          </Reveal>
          <div className="skills-cards">
            {skills.map((s) => (
              <Reveal as="div" className="skill-card" key={s.cat}>
                <span className="skill-avatar"><s.Icon size={24} strokeWidth={1.6} /></span>
                <h3 className="skill-cat">{s.cat}</h3>
                <div className="skill-tags">{s.items.map((it) => <span className="skill-tag" key={it}>{it}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="pf-shell">
          <Reveal className="section-head">
            <div className="section-head-left">
              <SectionMarker Icon={Briefcase} />
              <h2 className="section-title">{t.expTitle}</h2>
            </div>
            <p className="section-note">{t.expNote}</p>
          </Reveal>
          <div className="zig-list">
            {experience.map((e) => (
              <Reveal as="div" className="zig-row" key={e.org}>
                <div className="zig-node-col"><span className="zig-node" /></div>
                <div className="zig-content">
                  <span className="zig-year">{e.year}</span>
                  <h3 className="zig-title">{e.title}</h3>
                  <p className="zig-org">{e.org}</p>
                  <p className="zig-meta">{e.dates}{e.place ? ` — ${e.place}` : ""}</p>
                  {e.highlights.map((h) => (
                    <p className="zig-hl" key={h.label}><strong>{h.label}</strong>{h.text}</p>
                  ))}
                  <div className="zig-tags">{e.tags.map((tg) => <span className="zig-tag" key={tg}>{tg}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="formation" className="section-alt">
        <div className="pf-shell">
          <Reveal className="section-head">
            <div className="section-head-left">
              <SectionMarker Icon={GraduationCap} />
              <h2 className="section-title">{t.eduTitle}</h2>
            </div>
            <p className="section-note">{t.eduNote}</p>
          </Reveal>

          <div className="fa-block">
            <Reveal><p className="assoc-title"><GraduationCap size={16} /> {t.eduPath}</p></Reveal>
            <Reveal><RoadFormation items={formation} t={t} /></Reveal>
            <div className="cred-grid-mobile">
              {formation.map((f) => (
                <div className="cred-card" key={f.degree}>
                  <div className="cred-top">
                    <span className="cred-icon"><f.Icon size={20} strokeWidth={1.7} /></span>
                    <span className="cred-years">{f.years}</span>
                  </div>
                  <span className="cred-sector">{f.sector}</span>
                  <p className="cred-degree">{f.degree}</p>
                  <p className="cred-school">{f.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fa-block">
            <Reveal><p className="assoc-title"><Users size={16} /> {t.assoc}</p></Reveal>
            <div className="cred-grid">
              {associatif.map((a) => (
                <Reveal as="div" className="cred-card" key={a.role}>
                  <div className="cred-top">
                    <span className="cred-icon"><Users size={20} strokeWidth={1.7} /></span>
                    <span className="cred-years">{a.years}</span>
                  </div>
                  <span className="cred-sector">{a.sector}</span>
                  <p className="cred-degree">{a.role}</p>
                  <p className="cred-school">{a.org}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="fa-block">
            <Reveal>
              <p className="assoc-title">{t.languages}</p>
              <div className="langs">
                {langues.map((l) => (
                  <div className="lang-row" key={l.lang}>
                    <span className="lang-name">{l.lang}</span>
                    <div className="lang-bar"><div className="lang-fill" style={{ width: `${l.pct}%` }} /></div>
                    <span className="lang-level">{l.level}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="certificats">
        <div className="pf-shell">
          <Reveal className="section-head">
            <div className="section-head-left">
              <SectionMarker Icon={Award} />
              <h2 className="section-title">{t.certTitle}</h2>
            </div>
            <p className="section-note">{t.certNote}</p>
          </Reveal>
          {certGroups.map((g) => (
            <div className="cert-group" key={g.id}>
              <Reveal><p className="cert-group-label">{g.label}</p></Reveal>
              <div className={`cert-row cols-${g.items.length}`}>
                {g.items.map((c) => (
                  <Reveal as="div" className="cert-cell" key={c.file}>
                    <CertCard item={c} t={t} onOpen={() => setCertOpen(certFlat.findIndex((x) => x.file === c.file))} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="pf-shell">
          <Reveal>
            <div className="section-head-left" style={{ marginBottom: 28 }}>
              <SectionMarker Icon={Send} />
              <p className="eyebrow" style={{ margin: 0 }}>{t.contactLabel}</p>
            </div>
            <a className="contact-giant" href="mailto:tesnim.hamouda@fsm.rnu.tn">
              {t.contactGiant[0]}<br />{t.contactGiant[1]}
            </a>
            <div className="contact-row">
              <a className="contact-link" href="mailto:tesnim.hamouda@fsm.rnu.tn"><span className="contact-link-icon"><Mail size={17} /></span>tesnim.hamouda@fsm.rnu.tn</a>
              <a className="contact-link" href="tel:+21627409234"><span className="contact-link-icon"><Phone size={17} /></span>+216 27 409 234</a>
              <a className="contact-link" href="https://linkedin.com/in/tasnim-hamouda" target="_blank" rel="noreferrer"><span className="contact-link-icon"><LinkedinIcon size={17} /></span>LinkedIn</a>
              <a className="contact-link" href="https://github.com/tasnim-1" target="_blank" rel="noreferrer"><span className="contact-link-icon"><GithubIcon size={17} /></span>GitHub</a>
            </div>
            <div className="foot-bottom">
              <span><MapPin size={13} style={{ verticalAlign: "-2px", marginRight: "8px" }} />{t.location}</span>
              <span>© 2026 Hamouda Tesnime</span>
            </div>
          </Reveal>
        </div>
      </footer>

      {certOpen !== null && certFlat[certOpen] && (
        <CertLightbox items={certFlat} index={certOpen} onClose={closeCert} onNav={navCert} t={t} />
      )}
    </div>
  );
}