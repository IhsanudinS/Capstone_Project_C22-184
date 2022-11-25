import './scripts/component/nav-bar.js';
import './scripts/component/hero-bar.js';
import './scripts/component/footer-bar.js';
import './scripts/component/profile-bar.js';
import './styles/style.css';
import './styles/responsive.css';
import App from './view/app';

const app = new App({
    content: document.querySelector('#maincontent'),
});
  
window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async () => {
    app.renderPage();
});


