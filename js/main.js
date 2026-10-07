document.querySelectorAll(".glitch").forEach(function (t) { var d = (Math.random() * -5).toFixed(2) + "s"; t.style.animationDelay = d; t.style.setProperty("--d", d) });
var st = document.createElement("style"); st.textContent = ".glitch::before,.glitch::after{animation-delay:var(--d)}"; document.head.appendChild(st);
var chips = document.querySelectorAll(".chip"), cards = document.querySelectorAll(".card");
chips.forEach(function (b) {
  b.addEventListener("click", function () {
    var f = b.dataset.f, n = 0;
    chips.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false") });
    cards.forEach(function (c) { var show = f === "all" || c.dataset.c === f; c.hidden = !show; if (show) n++ });
    document.getElementById("vazio").hidden = n > 0;
  })
});
var btn = document.getElementById("th");
var icon = btn.querySelector(".theme-icon") || btn;

function isDark() {
  var r = document.documentElement;
  return r.dataset.theme
    ? r.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme:dark)").matches;
}

function setIcon() {
  icon.textContent = isDark() ? "☀️" : "🌙";
}

btn.addEventListener("click", function () {
  document.documentElement.dataset.theme = isDark() ? "light" : "dark";
  setIcon();
});

setIcon(); // ajusta o ícone assim que a página abre

// =========================================================
// FORMULÁRIO DE CONTATO
// =========================================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector(".contact-submit");

    const name = contactForm.elements["name"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const subject = contactForm.elements["subject"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    // Validação básica
    if (!name || !email || !subject || !message) {

      formStatus.textContent = "Preencha todos os campos.";
      formStatus.className = "form-status error";

      return;
    }

    // Estado de envio
    submitButton.classList.add("loading");
    submitButton.textContent = "ENVIANDO...";
    formStatus.textContent = "";

    /*
      Aqui entra o serviço de envio do formulário.

      Podemos usar, por exemplo:
      - EmailJS
      - Formspree
      - Web3Forms
      - backend próprio
    */

    setTimeout(() => {

      submitButton.classList.remove("loading");
      submitButton.textContent = "ENVIAR MENSAGEM";

      formStatus.textContent =
        "Mensagem preparada com sucesso.";

      formStatus.className = "form-status success";

      contactForm.reset();

    }, 800);

  });

}
document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const value = i18n[lang] && i18n[lang][key];
    if (value !== undefined) {
      el.setAttribute('aria-label', value);
      el.setAttribute('title', value);
    }
  });

