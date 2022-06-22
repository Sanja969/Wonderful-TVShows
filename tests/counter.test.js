import { commentCounter, itemCounter } from '../src/counter.js';
import popup from '../src/popup.js';


document.body.innerHTML = `<div class="tv-container">
                              <div class="tv-card tv1"></div>
                              <div class="tv-card tv2"></div>
                              <div class="tv-card tv3"></div>
                            </div>`;


describe('count number of tv-cards', () => {

  test('when 3 cards are dispalyed counter need to be 3', () => {

    const cards = document.querySelectorAll('.tv-card');

    expect(itemCounter(cards)).toBe(3);
  });

  test('when 1 card is added to existing 3 cards counter need to be 4', () => {

    const container = document.querySelector('.tv-container');
    const newCard = document.createElement('div');

    newCard.className = 'tv-card';
    container.appendChild(newCard);
    const cards = document.querySelectorAll('.tv-card');

    expect(itemCounter(cards)).toBe(4);
  });
});

describe('count number of comments for each card', () => {
  test('when there are 2 comments in each card, counter in second card is 2', () => {

    const cards = document.querySelectorAll('.tv-card');

    cards.forEach(item => {
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.innerHTML = `<p class="comment"></p><p class="comment"></p>`;
      item.appendChild(popup);
    })
    const comments = document.querySelectorAll(`.tv2 > div > .comment`);

    expect(itemCounter(comments)).toBe(2);
  });

  test('when new comment is add to existing 2 comments in second card counter is 3', () => {

      const popup = document.querySelector('.tv2 > .popup');
      const newComment = document.createElement('p');
      newComment.className = 'comment';
      popup.appendChild(newComment);
    
    const comments = document.querySelectorAll(`.tv2 > div > .comment`);

    expect(itemCounter(comments)).toBe(3);
  });
});