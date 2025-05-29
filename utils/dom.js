export function createEl(tag, options = {}) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(options)) {
    if (key === 'text') el.textContent = value;
    else if (key === 'html') el.innerHTML = value;
    else el.setAttribute(key, value);
  }
  return el;
}

export function clearEl(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}