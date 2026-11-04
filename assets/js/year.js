var memimatYearEl = document.getElementById('year');
if (memimatYearEl) {
  memimatYearEl.textContent = String(new Date().getFullYear());
}
