/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsSUFBSSxXQUFXLEdBQUcsS0FBSyxjQUFjO0FBQ3ZFO0FBQ0EseUNBQXlDLGdCQUFnQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRDtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0I2RDtBQUNmOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxJQUFJO0FBQ2xCLHlDQUF5QyxNQUFNO0FBQy9DLDZCQUE2QiwyQkFBMkIsSUFBSSxtQ0FBbUM7QUFDL0YsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBLE9BQU8sUUFBUTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFXO0FBQ2I7QUFDQTtBQUNBLCtCQUErQixHQUFHO0FBQ2xDLHlCQUF5Qix1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxnQkFBZ0I7QUFDdkY7QUFDQSxLQUFLO0FBQ0wsc0RBQXNELDJEQUFjLHVDQUF1QyxHQUFHO0FBQzlHLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksNkRBQWE7QUFDakIsTUFBTSwyREFBVztBQUNqQjtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QixFQUFFLGlCQUFpQixJQUFJLGdCQUFnQjtBQUN6RjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7VUMzRHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQzBCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxJQUFJO0FBQ3RDO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2QsTUFBTSwwREFBYTtBQUNuQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsSUFBSSxxREFBSztBQUNULEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvY29tbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvbGlrZUFQSS5qcyIsIndlYnBhY2s6Ly9maWxtb2ZpbGwvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbG1vZmlsbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlsbW9maWxsLy4vc3JjL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8yd0pJbmR2TkMxMUk3NUhjclc1WS9jb21tZW50cyc7XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9P2l0ZW1faWQ9JHtpZH1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgdG8gZ2V0IEFQSTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb21tZW50LCBnZXRDb21tZW50cyB9OyIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGxpc3QpID0+IGxpc3QubGVuZ3RoO1xuXG5jb25zdCBpdGVtQ291bnRlciA9IChsaXN0KSA9PiBsaXN0Lmxlbmd0aDtcblxuZXhwb3J0IHsgY29tbWVudENvdW50ZXIsIGl0ZW1Db3VudGVyIH07IiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzJ3SkluZHZOQzExSTc1SGNyVzVZL2xpa2VzJztcblxuY29uc3QgY3JlYXRlTGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xufTtcblxuY29uc3QgZ2V0TGlrZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB0byBnZXQgQVBJOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGZpbmRJdGVtc0xpa2UgPSAoaWQsIGxpa2VOdW0pID0+IHtcbiAgZ2V0TGlrZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lml0ZW1faWQgPT09IGlkKSB7XG4gICAgICAgIGxpa2VOdW0udGV4dENvbnRlbnQgPSBlbGVtZW50Lmxpa2VzO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxpa2UsIGZpbmRJdGVtc0xpa2UgfTsiLCJpbXBvcnQgeyBjcmVhdGVDb21tZW50LCBnZXRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudEFQSS5qcyc7XG5pbXBvcnQgeyBjb21tZW50Q291bnRlciB9IGZyb20gJy4vY291bnRlci5qcyc7XG5cbmNvbnN0IHBvcHVwID0gKGlkLCB0aXRsZSwgaW1nLCBzdW1tYXJ5LCByYXRpbmcsIGdlbnJlcywgcHJlbWllcmVkLCBlbmRlZCkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgcG9wdXAuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJweS0yIGgzIGN1cnNvci1wb2ludGVyIGNsb3NlXCI+WDwvZGl2PlxuICA8aW1nIHNyYz1cIiR7aW1nfVwiLz5cbiAgPGgzIGNsYXNzPVwicG9wdXAtdGl0bGUgdGV4dC13YXJuaW5nXCI+JHt0aXRsZX08L2gzPlxuICA8aDQgY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj4ke3ByZW1pZXJlZC5zdWJzdHJpbmcoMCwgNCl9IC0gJHtlbmRlZCA/IGVuZGVkLnN1YnN0cmluZygwLCA0KSA6ICcnfTwvaDQ+XG4gIDxoNj5HZW5yZTogJHtnZW5yZXN9PC9oNj5cbiAgPHA+UmF0aW5nOiAke3JhdGluZ308L3A+XG4gIDxoND5TdW1tYXJ5OjwvaDQ+XG4gIDxwPiR7c3VtbWFyeX08L3A+YDtcblxuICBjb25zdCBjb21tZW50c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50c0JveC5jbGFzc05hbWUgPSAnY29tbWVudC1ib3gnO1xuICBwb3B1cC5hcHBlbmRDaGlsZChjb21tZW50c0JveCk7XG4gIGNvbW1lbnRzQm94LmlubmVySFRNTCA9ICc8aDQ+Q29tbWVudHMgKDxzcGFuPjA8L3NwYW4+KTwvaDQ+PGRpdj48L2Rpdj4nO1xuXG4gIGdldENvbW1lbnRzKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcC5jbGFzc05hbWUgPSBgY29tbWVudC0ke2lkfWA7XG4gICAgICBwLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSAke2VsZW1lbnQudXNlcm5hbWV9OiAke2VsZW1lbnQuY29tbWVudH1gO1xuICAgICAgY29tbWVudHNCb3guY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQocCk7XG4gICAgfSk7XG4gICAgY29tbWVudHNCb3guY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBjb21tZW50Q291bnRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY29tbWVudC0ke2lkfWApKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRDb21tZW50LmNsYXNzTmFtZSA9ICdhZGQtY29tbWVudCc7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGFkZENvbW1lbnQpO1xuICBhZGRDb21tZW50LmlubmVySFRNTCA9IGA8aDQ+QWRkIGEgY29tbWVudDwvaDQ+XG4gIDxmb3JtIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCI+XG4gICAgPGlucHV0IGNsYXNzPVwiY29tbWVudE1zZ1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZyBteS0zXCI+Q29tbWVudDwvYnV0dG9uPlxuICA8L2Zvcm0+YDtcbiAgcG9wdXAuY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXAucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGFkZENvbW1lbnQuY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlQ29tbWVudChpZCwgZS50YXJnZXQuY2hpbGRyZW5bMF0udmFsdWUsIGUudGFyZ2V0LmNoaWxkcmVuWzFdLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgIGdldENvbW1lbnRzKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICR7ZWxlbWVudC51c2VybmFtZX06ICR7ZWxlbWVudC5jb21tZW50fWA7XG4gICAgICAgIGNvbW1lbnRzQm94LmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0udmFsdWUgPSAnJztcbiAgICBlLnRhcmdldC5jaGlsZHJlblsxXS52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBvcHVwIGZyb20gJy4vcG9wdXAuanMnO1xuaW1wb3J0IHsgY3JlYXRlTGlrZSwgZmluZEl0ZW1zTGlrZSB9IGZyb20gJy4vbGlrZUFQSS5qcyc7XG5cbmNvbnN0IHR2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR2LWNvbnRhaW5lcicpO1xuXG5jb25zdCBjcmVhdGVUdkNhcmQgPSAodGl0bGUsIGltZywgaWQsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKSA9PiB7XG4gIGNvbnN0IHR2Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0dkNhcmQuY2xhc3NOYW1lID0gJ3R2LWNhcmQnO1xuICB0dkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dkNhcmQpO1xuICB0dkNhcmQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtpbWd9XCIgY2xhc3M9XCJjYXJkLWltZ1wiPlxuICA8ZGl2IGNsYXNzPVwicHQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0aXRsZX08L2g2PlxuICAgIDxwIGNsYXNzPVwibGlrZSBtLTAgcC0wXCI+4pmhPC9wPlxuICA8L2Rpdj5cbiAgPHA+PHNwYW4gY2xhc3M9XCJsaWtlLW51bVwiPjA8L3NwYW4+IExpa2VzPC9wPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgbS0yXCI+Q29tbWVudHM8L2J1dHRvbj5gO1xuICBjb25zdCBsaWtlTnVtID0gdHZDYXJkLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xuICBmaW5kSXRlbXNMaWtlKGlkLCBsaWtlTnVtKTtcbiAgdHZDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICB0dkNhcmQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW91dGxpbmUtd2FybmluZycpO1xuICAgIHR2Q2FyZC5jaGlsZHJlblszXS5jbGFzc0xpc3QuYWRkKCdidG4tb3V0bGluZS1kYXJrJyk7XG4gIH0pO1xuICB0dkNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgdHZDYXJkLmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1vdXRsaW5lLWRhcmsnKTtcbiAgICB0dkNhcmQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LmFkZCgnYnRuLW91dGxpbmUtd2FybmluZycpO1xuICB9KTtcbiAgdHZDYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHR2Q2FyZC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9ICfinaQnO1xuICAgIGNyZWF0ZUxpa2UoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgZmluZEl0ZW1zTGlrZShpZCwgbGlrZU51bSk7XG4gICAgfSk7XG4gIH0pO1xuICB0dkNhcmQuY2hpbGRyZW5bM10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXAoaWQsIHRpdGxlLCBpbWcsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUdkNhcmQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9