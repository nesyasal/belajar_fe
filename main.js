import { loadHomePage } from './pages/home.js';
import { loadRegisterPage } from './pages/register.js';

function router() {
  const route = window.location.hash;

  switch (route) {
    case '#/register':
      loadRegisterPage();
      break;
    case '#/':
    default:
      loadHomePage();
      break;
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
