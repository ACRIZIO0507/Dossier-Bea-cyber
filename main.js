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