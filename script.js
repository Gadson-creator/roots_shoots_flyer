// ===== FLYER DATA – edit only this object =====
const flyerData = {
  organization: "Roots & Shoots Global",
  title: "Capacity Building",
  subtitle: "Roots & Shoots Africa Group Call",
  speaker: "Rita Groenewald",
  date: "Wednesday, 19 August 2026",  // Fixed to match countdown
  time: "16:00 EAT",
  meetingID: "863 4323 1368",
  passcode: "634051",
  zoomLink: "https://zoom.us/example",
  description: "Join us for an inspiring discussion on challenges and capacity-building needs of Roots & Shoots groups across Africa.",
  speakerImage: "https://9z3zrkn6fybvejzi.public.blob.vercel-storage.com/Rita",
  logoImage: "https://www.arcgis.com/sharing/rest/content/items/469cb440a8894d5b813786fd5f28c168/info/media/jji_1784293681445.png?token=au6OghXIuR7T8_U7rf_ef-g..mOBYMVvl52DsxFnuVpiwlIlkt624gWinwBDAccTcdxafqs0g1xbkVjgqoJXK_-s7whOyv-hGeSv-dpjY5u3-dpqr0ZyQRPSsPsh3ZIA_c1zLD8HQ7IP0bzt8N-XCjt4TyTLdhA_GhI5qSHnFqKcxxwh4UbPSw02i9LJit7vht_6yfM6wGOVZrl7arX2dydJX3hMPk7ULeBbAQAcsfZb3TMWABnJ_sE71exM-gkE7z5_W3w.."
};

// ===== TRANSLATIONS (en, fr, sw) – UPDATED =====
const translations = {
  en: {
    orgName: "Roots & Shoots Global",
    titleMain: "Capacity Building",
    subtitle: "Roots & Shoots Africa Group Call",
    subhead: "with R&S Africa Grassroots and Groups",
    description: "Join us for an inspiring discussion on challenges and capacity-building needs of Roots & Shoots groups across Africa.",
    dateLabel: "Date",
    timeLabel: "Time",
    zoomLabel: "Join via Zoom",
    idLabel: "ID",
    passLabel: "Passcode",
    joinBtn: "Join Meeting",
    copyBtn: "Copy Link",
    downloadBtn: "Download",
    shareBtn: "Share",
    qrText: "scan to join",
    speakerTitle: "Global Network Coordinator"
  },
  fr: {
    orgName: "Roots & Shoots Mondial",
    titleMain: "Renforcement des Capacités",
    subtitle: "Appel de groupe Roots & Shoots Africa",
    subhead: "avec R&S Africa Grassroots et les groupes",
    description: "Rejoignez-nous pour une discussion inspirante sur les défis et les besoins de renforcement des capacités des groupes Roots & Shoots à travers l'Afrique.",
    dateLabel: "Date",
    timeLabel: "Heure",
    zoomLabel: "Rejoindre via Zoom",
    idLabel: "ID",
    passLabel: "Code",
    joinBtn: "Rejoindre",
    copyBtn: "Copier le lien",
    downloadBtn: "Télécharger",
    shareBtn: "Partager",
    qrText: "scanner pour rejoindre",
    speakerTitle: "Coordinatrice du Réseau Mondial"
  },
  sw: {
    orgName: "Roots & Shoots Duniani",
    titleMain: "Kujenga Uwezo",
    subtitle: "Wito wa Kikundi cha Roots & Shoots Africa",
    subhead: "na R&S Afrika Grassroots and Groups",
    description: "Jiunge nasi kwa mjadala wa kutia moyo kuhusu changamoto na mahitaji ya kujenga uwezo wa vikundi vya Roots & Shoots kote Afrika.",
    dateLabel: "Tarehe",
    timeLabel: "Muda",
    zoomLabel: "Jiunge kupitia Zoom",
    idLabel: "Kitambulisho",
    passLabel: "Nenosiri",
    joinBtn: "Jiunge",
    copyBtn: "Nakili Kiungo",
    downloadBtn: "Pakua",
    shareBtn: "Shiriki",
    qrText: "skani ili ujiunge",
    speakerTitle: "Mratibu wa Mtandao wa Kimataifa"
  }
};

// ===== COUNTDOWN TIMER – FIXED DATE =====
function updateCountdown() {
  const eventDate = new Date('2026-08-19T16:00:00+03:00'); // Matches display date
  const now = new Date();
  const diff = eventDate - now;
  if (diff <= 0) {
    elements.countdownDisplay.textContent = '🎉 Event started!';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  elements.countdownDisplay.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}