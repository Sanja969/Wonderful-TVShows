import './style.css';
import showTvCards from './displayAPI.js';

const form = document.querySelector('form');

showTvCards();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
});