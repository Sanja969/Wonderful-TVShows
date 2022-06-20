import './style.css';
import getData from './API.js';
import createTvCard from './UI.js';

let i = 1;

while (i < 100) {
  getData(i).then(data => {
    createTvCard(data.name, data.image.medium);
  });
  i += 1;
}

console.log(getData(1));