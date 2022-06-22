/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");
/* harmony import */ var _likeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeAPI.js */ "./src/likeAPI.js");



const tvContainer = document.querySelector('.tv-container');

const createTvCard = (title, img, id, summary, rating, genres, premiered, ended) => {
  const tvCard = document.createElement('div');
  tvCard.className = 'tv-card';
  tvContainer.appendChild(tvCard);
  tvCard.innerHTML = `<img src="${img}" class="card-img">
  <div class="pt-3 d-flex justify-content-between">
    <h6 class="card-title">${title}</h6>
    <p class="like m-0 p-0">♡</p>
  </div>
  <p><span class="like-num">0</span> Likes</p>
  <button class="btn btn-outline-warning m-2">Comments</button>`;
  const likeNum = tvCard.children[2].children[0];
  (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__.findItemsLike)(id, likeNum);
  tvCard.addEventListener('mouseover', () => {
    tvCard.children[3].classList.remove('btn-outline-warning');
    tvCard.children[3].classList.add('btn-outline-dark');
  });
  tvCard.addEventListener('mouseout', () => {
    tvCard.children[3].classList.remove('btn-outline-dark');
    tvCard.children[3].classList.add('btn-outline-warning');
  });
  tvCard.children[1].children[1].addEventListener('click', () => {
    tvCard.children[1].children[1].textContent = '❤';
    (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__.createLike)(id).then(() => {
      (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__.findItemsLike)(id, likeNum);
    });
  });
  tvCard.children[3].addEventListener('click', () => {
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, title, img, summary, rating, genres, premiered, ended);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTvCard);

/***/ }),

/***/ "./src/commentAPI.js":
/*!***************************!*\
  !*** ./src/commentAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2wJIndvNC11I75HcrW5Y/comments';

const createComment = async (id, username, comment) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, username, comment }),
    headers: {
      'Content-Type': 'application/json',
    },

  });
  return response.status;
};

const getComments = async (id) => {
  const response = await fetch(`${url}?item_id=${id}`, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const data = await response.json();
  return data;
};



/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter),
/* harmony export */   "itemCounter": () => (/* binding */ itemCounter)
/* harmony export */ });
const commentCounter = (list) => list.length;

const itemCounter = (list) => list.length;



/***/ }),

/***/ "./src/likeAPI.js":
/*!************************!*\
  !*** ./src/likeAPI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLike": () => (/* binding */ createLike),
/* harmony export */   "findItemsLike": () => (/* binding */ findItemsLike)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2wJIndvNC11I75HcrW5Y/likes';

const createLike = async (id) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-Type': 'application/json',
    },

  });
  return response.status;
};

const getLike = async () => {
  const response = await fetch(url, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const findItemsLike = (id, likeNum) => {
  getLike().then((data) => {
    data.forEach((element) => {
      if (element.item_id === id) {
        likeNum.textContent = element.likes;
      }
    });
  });
};



/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentAPI.js */ "./src/commentAPI.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ "./src/counter.js");



const popup = (id, title, img, summary, rating, genres, premiered, ended) => {
  const popup = document.createElement('div');
  popup.className = 'popup';
  document.body.appendChild(popup);
  popup.innerHTML = `<div class="py-2 h3 cursor-pointer close">X</div>
  <img src="${img}"/>
  <h3 class="popup-title text-warning">${title}</h3>
  <h4 class="text-warning">${premiered.substring(0, 4)} - ${ended ? ended.substring(0, 4) : ''}</h4>
  <h6>Genre: ${genres}</h6>
  <p>Rating: ${rating}</p>
  <h4>Summary:</h4>
  <p>${summary}</p>`;

  const commentsBox = document.createElement('div');
  commentsBox.className = 'comment-box';
  popup.appendChild(commentsBox);
  commentsBox.innerHTML = '<h4>Comments (<span>0</span>)</h4><div></div>';

  (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {
    data.forEach((element) => {
      const p = document.createElement('p');
      p.className = `comment-${id}`;
      p.textContent = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentsBox.children[1].appendChild(p);
    });
    commentsBox.children[0].children[0].textContent = (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.commentCounter)(document.querySelectorAll(`.comment-${id}`));
  });

  const addComment = document.createElement('div');
  addComment.className = 'add-comment';
  popup.appendChild(addComment);
  addComment.innerHTML = `<h4>Add a comment</h4>
  <form class="d-flex flex-column align-items-center">
    <input type="text" placeholder="Your name">
    <input class="commentMsg" type="text" placeholder="Your insights">
    <button type="submit" class="btn btn-outline-warning my-3">Comment</button>
  </form>`;
  popup.children[0].addEventListener('click', () => {
    popup.remove();
  });

  addComment.children[1].addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(id, e.target.children[0].value, e.target.children[1].value).then(() => {
      (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {
        const element = data[data.length - 1];
        const p = document.createElement('p');
        p.textContent = `${element.creation_date} ${element.username}: ${element.comment}`;
        commentsBox.children[1].appendChild(p);
      });
    });
    e.target.children[0].value = '';
    e.target.children[1].value = '';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/displayAPI.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ "./src/counter.js");



const itemCount = document.querySelector('.item-count');
const TVurl = 'https://api.tvmaze.com/shows/';
let count = 1;

const getTvData = async (id) => {
  const response = await fetch(TVurl + id, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const showTvCards = () => {
  while (count < 100) {
    getTvData(count).then((data) => {
      const list = [data.name,
        data.image.medium,
        data.id, data.summary,
        data.rating.average,
        data.genres,
        data.premiered,
        data.ended];
      (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(...list);
      itemCount.textContent = (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.itemCounter)(document.querySelectorAll('.tv-card'));
    });
    count += 1;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTvCards);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE4Qix3REFBVztBQUN6QyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbG1vZmlsbC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvY29tbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvbGlrZUFQSS5qcyIsIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbG1vZmlsbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsLy4vc3JjL2Rpc3BsYXlBUEkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvcHVwIGZyb20gJy4vcG9wdXAuanMnO1xuaW1wb3J0IHsgY3JlYXRlTGlrZSwgZmluZEl0ZW1zTGlrZSB9IGZyb20gJy4vbGlrZUFQSS5qcyc7XG5cbmNvbnN0IHR2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR2LWNvbnRhaW5lcicpO1xuXG5jb25zdCBjcmVhdGVUdkNhcmQgPSAodGl0bGUsIGltZywgaWQsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKSA9PiB7XG4gIGNvbnN0IHR2Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0dkNhcmQuY2xhc3NOYW1lID0gJ3R2LWNhcmQnO1xuICB0dkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dkNhcmQpO1xuICB0dkNhcmQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtpbWd9XCIgY2xhc3M9XCJjYXJkLWltZ1wiPlxuICA8ZGl2IGNsYXNzPVwicHQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0aXRsZX08L2g2PlxuICAgIDxwIGNsYXNzPVwibGlrZSBtLTAgcC0wXCI+4pmhPC9wPlxuICA8L2Rpdj5cbiAgPHA+PHNwYW4gY2xhc3M9XCJsaWtlLW51bVwiPjA8L3NwYW4+IExpa2VzPC9wPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgbS0yXCI+Q29tbWVudHM8L2J1dHRvbj5gO1xuICBjb25zdCBsaWtlTnVtID0gdHZDYXJkLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xuICBmaW5kSXRlbXNMaWtlKGlkLCBsaWtlTnVtKTtcbiAgdHZDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICB0dkNhcmQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW91dGxpbmUtd2FybmluZycpO1xuICAgIHR2Q2FyZC5jaGlsZHJlblszXS5jbGFzc0xpc3QuYWRkKCdidG4tb3V0bGluZS1kYXJrJyk7XG4gIH0pO1xuICB0dkNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgdHZDYXJkLmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1vdXRsaW5lLWRhcmsnKTtcbiAgICB0dkNhcmQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LmFkZCgnYnRuLW91dGxpbmUtd2FybmluZycpO1xuICB9KTtcbiAgdHZDYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHR2Q2FyZC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9ICfinaQnO1xuICAgIGNyZWF0ZUxpa2UoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgZmluZEl0ZW1zTGlrZShpZCwgbGlrZU51bSk7XG4gICAgfSk7XG4gIH0pO1xuICB0dkNhcmQuY2hpbGRyZW5bM10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXAoaWQsIHRpdGxlLCBpbWcsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUdkNhcmQ7IiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzJ3SkluZHZOQzExSTc1SGNyVzVZL2NvbW1lbnRzJztcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jIChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkLCB1c2VybmFtZSwgY29tbWVudCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG5cbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5zdGF0dXM7XG59O1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0/aXRlbV9pZD0ke2lkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB0byBnZXQgQVBJOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbW1lbnQsIGdldENvbW1lbnRzIH07IiwiY29uc3QgY29tbWVudENvdW50ZXIgPSAobGlzdCkgPT4gbGlzdC5sZW5ndGg7XG5cbmNvbnN0IGl0ZW1Db3VudGVyID0gKGxpc3QpID0+IGxpc3QubGVuZ3RoO1xuXG5leHBvcnQgeyBjb21tZW50Q291bnRlciwgaXRlbUNvdW50ZXIgfTsiLCJjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMndKSW5kdk5DMTFJNzVIY3JXNVkvbGlrZXMnO1xuXG5jb25zdCBjcmVhdGVMaWtlID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG5cbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5zdGF0dXM7XG59O1xuXG5jb25zdCBnZXRMaWtlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHRvIGdldCBBUEk6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZmluZEl0ZW1zTGlrZSA9IChpZCwgbGlrZU51bSkgPT4ge1xuICBnZXRMaWtlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaXRlbV9pZCA9PT0gaWQpIHtcbiAgICAgICAgbGlrZU51bS50ZXh0Q29udGVudCA9IGVsZW1lbnQubGlrZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTGlrZSwgZmluZEl0ZW1zTGlrZSB9OyIsImltcG9ydCB7IGNyZWF0ZUNvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50QVBJLmpzJztcbmltcG9ydCB7IGNvbW1lbnRDb3VudGVyIH0gZnJvbSAnLi9jb3VudGVyLmpzJztcblxuY29uc3QgcG9wdXAgPSAoaWQsIHRpdGxlLCBpbWcsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBwb3B1cC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInB5LTIgaDMgY3Vyc29yLXBvaW50ZXIgY2xvc2VcIj5YPC9kaXY+XG4gIDxpbWcgc3JjPVwiJHtpbWd9XCIvPlxuICA8aDMgY2xhc3M9XCJwb3B1cC10aXRsZSB0ZXh0LXdhcm5pbmdcIj4ke3RpdGxlfTwvaDM+XG4gIDxoNCBjbGFzcz1cInRleHQtd2FybmluZ1wiPiR7cHJlbWllcmVkLnN1YnN0cmluZygwLCA0KX0gLSAke2VuZGVkID8gZW5kZWQuc3Vic3RyaW5nKDAsIDQpIDogJyd9PC9oND5cbiAgPGg2PkdlbnJlOiAke2dlbnJlc308L2g2PlxuICA8cD5SYXRpbmc6ICR7cmF0aW5nfTwvcD5cbiAgPGg0PlN1bW1hcnk6PC9oND5cbiAgPHA+JHtzdW1tYXJ5fTwvcD5gO1xuXG4gIGNvbnN0IGNvbW1lbnRzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbW1lbnRzQm94LmNsYXNzTmFtZSA9ICdjb21tZW50LWJveCc7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGNvbW1lbnRzQm94KTtcbiAgY29tbWVudHNCb3guaW5uZXJIVE1MID0gJzxoND5Db21tZW50cyAoPHNwYW4+MDwvc3Bhbj4pPC9oND48ZGl2PjwvZGl2Pic7XG5cbiAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwLmNsYXNzTmFtZSA9IGBjb21tZW50LSR7aWR9YDtcbiAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICR7ZWxlbWVudC51c2VybmFtZX06ICR7ZWxlbWVudC5jb21tZW50fWA7XG4gICAgICBjb21tZW50c0JveC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChwKTtcbiAgICB9KTtcbiAgICBjb21tZW50c0JveC5jaGlsZHJlblswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGNvbW1lbnRDb3VudGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb21tZW50LSR7aWR9YCkpO1xuICB9KTtcblxuICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZENvbW1lbnQuY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50JztcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudCk7XG4gIGFkZENvbW1lbnQuaW5uZXJIVE1MID0gYDxoND5BZGQgYSBjb21tZW50PC9oND5cbiAgPGZvcm0gY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJjb21tZW50TXNnXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nIG15LTNcIj5Db21tZW50PC9idXR0b24+XG4gIDwvZm9ybT5gO1xuICBwb3B1cC5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgYWRkQ29tbWVudC5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVDb21tZW50KGlkLCBlLnRhcmdldC5jaGlsZHJlblswXS52YWx1ZSwgZS50YXJnZXQuY2hpbGRyZW5bMV0udmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9YDtcbiAgICAgICAgY29tbWVudHNCb3guY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQocCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS52YWx1ZSA9ICcnO1xuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzFdLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wdXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlVHZDYXJkIGZyb20gJy4vVUkuanMnO1xuaW1wb3J0IHsgaXRlbUNvdW50ZXIgfSBmcm9tICcuL2NvdW50ZXIuanMnO1xuXG5jb25zdCBpdGVtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb3VudCcpO1xuY29uc3QgVFZ1cmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8nO1xubGV0IGNvdW50ID0gMTtcblxuY29uc3QgZ2V0VHZEYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVFZ1cmwgKyBpZCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHRvIGdldCBBUEk6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3Qgc2hvd1R2Q2FyZHMgPSAoKSA9PiB7XG4gIHdoaWxlIChjb3VudCA8IDEwMCkge1xuICAgIGdldFR2RGF0YShjb3VudCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IFtkYXRhLm5hbWUsXG4gICAgICAgIGRhdGEuaW1hZ2UubWVkaXVtLFxuICAgICAgICBkYXRhLmlkLCBkYXRhLnN1bW1hcnksXG4gICAgICAgIGRhdGEucmF0aW5nLmF2ZXJhZ2UsXG4gICAgICAgIGRhdGEuZ2VucmVzLFxuICAgICAgICBkYXRhLnByZW1pZXJlZCxcbiAgICAgICAgZGF0YS5lbmRlZF07XG4gICAgICBjcmVhdGVUdkNhcmQoLi4ubGlzdCk7XG4gICAgICBpdGVtQ291bnQudGV4dENvbnRlbnQgPSBpdGVtQ291bnRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHYtY2FyZCcpKTtcbiAgICB9KTtcbiAgICBjb3VudCArPSAxO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93VHZDYXJkczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=