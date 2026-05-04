// RelocationCalc.com — Common JS

// Nav mobile toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__mobile-toggle');
  const menu = document.querySelector('.nav__mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
});

// Number formatter
function fmt(n, decimals = 0) {
  if (isNaN(n) || !isFinite(n)) return '—';
  return Number(n).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function fmtCurrency(n, symbol = '$', decimals = 2) {
  if (isNaN(n) || !isFinite(n)) return '—';
  return symbol + Number(n).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// Reset button helper
function bindReset(btnId, callback) {
  const btn = document.getElementById(btnId);
  if (btn) btn.addEventListener('click', callback);
}

// Show/hide result box
function showResult(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('show'); el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
}
function hideResult(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}
