const tvContainer = document.querySelector('.tv-container');

const createTvCard = (title, img) => {
  const tvCard = document.createElement('div');
  tvCard.className = 'tv-card';
  tvContainer.appendChild(tvCard);
  tvCard.innerHTML = `<img src="${img}" class="card-img"><h4 class="tv-card-title">${title}</h4>`;
};

export default createTvCard;