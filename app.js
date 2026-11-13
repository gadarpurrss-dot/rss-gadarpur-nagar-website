let currentLanguage = "hi";
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "hi" ? "en" : "hi";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-hi][data-en]").forEach(el => {
    el.textContent = el.dataset[currentLanguage];
  });
  langToggle.textContent = currentLanguage === "hi" ? "English" : "हिंदी";
});
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
}));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("enquiryForm").addEventListener("submit", e => {
  e.preventDefault();
  const msg = document.getElementById("formMessage");
  msg.textContent = currentLanguage === "hi"
    ? "यह केवल डेमो है। कोई जानकारी भेजी या सेव नहीं हुई।"
    : "Demo only. No information was sent or stored.";
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
