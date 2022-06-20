const tvContainer = document.querySelector('.tv-container');

const popup = () => {

};

const createTvCard = (title, img) => {
  const tvCard = document.createElement('div');
  tvCard.className = 'tv-card';
  tvContainer.appendChild(tvCard);
  tvCard.innerHTML = `<img src="${img}" class="card-img">
  <div class="pt-3 d-flex justify-content-between"><h6 class="card-title">${title}</h6><p class="ms-3 like">♡</p></div>
  <button class="btn btn-outline-warning m-2">Comments</button>`;
  tvCard.addEventListener('mouseover', () => {
    tvCard.children[2].classList.remove('btn-outline-warning');
    tvCard.children[2].classList.add('btn-outline-dark');
  });
  tvCard.addEventListener('mouseout', () => {
    tvCard.children[2].classList.remove('btn-outline-dark');
    tvCard.children[2].classList.add('btn-outline-warning');
  });
  tvCard.children[1].children[1].addEventListener('click', () => {
    tvCard.children[1].children[1].textContent = '❤';
  });
  tvCard.children[2].addEventListener('click', () => {
    popup();
  });
};

export default createTvCard;