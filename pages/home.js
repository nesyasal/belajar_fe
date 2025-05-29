import { createEl } from '../utils/dom.js';

export function loadHomePage() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const title = createEl('h2', { text: 'Home Page' });

  const registerBtn = createEl('a', {
    href: '#/register',
    text: 'Register User',
    style: 'display: inline-block; margin-top: 10px;'
  });

  app.append(title, registerBtn);
}
