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



const popup = (container, id, title, img, summary, rating, genres, premiered, ended) => {
  const popup = document.createElement('div');
  popup.className = 'popup';
  container.appendChild(popup);
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
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tvCard, id, title, img, summary, rating, genres, premiered, ended);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTvCard);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsSUFBSSxXQUFXLEdBQUcsS0FBSyxjQUFjO0FBQ3ZFO0FBQ0EseUNBQXlDLGdCQUFnQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRDtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0I2RDtBQUNmOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxJQUFJO0FBQ2xCLHlDQUF5QyxNQUFNO0FBQy9DLDZCQUE2QiwyQkFBMkIsSUFBSSxtQ0FBbUM7QUFDL0YsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBLE9BQU8sUUFBUTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFXO0FBQ2I7QUFDQTtBQUNBLCtCQUErQixHQUFHO0FBQ2xDLHlCQUF5Qix1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxnQkFBZ0I7QUFDdkY7QUFDQSxLQUFLO0FBQ0wsc0RBQXNELDJEQUFjLHVDQUF1QyxHQUFHO0FBQzlHLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksNkRBQWE7QUFDakIsTUFBTSwyREFBVztBQUNqQjtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QixFQUFFLGlCQUFpQixJQUFJLGdCQUFnQjtBQUN6RjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7VUMzRHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQzBCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxJQUFJO0FBQ3RDO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2QsTUFBTSwwREFBYTtBQUNuQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsSUFBSSxxREFBSztBQUNULEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL3NyYy9jb21tZW50QVBJLmpzIiwid2VicGFjazovL3dvbmRlcmZ1bC1UVlNob3dzLy4vc3JjL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9zcmMvbGlrZUFQSS5qcyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvbmRlcmZ1bC1UVlNob3dzLy4vc3JjL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8yd0pJbmR2TkMxMUk3NUhjclc1WS9jb21tZW50cyc7XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9P2l0ZW1faWQ9JHtpZH1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgdG8gZ2V0IEFQSTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb21tZW50LCBnZXRDb21tZW50cyB9OyIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGxpc3QpID0+IGxpc3QubGVuZ3RoO1xuXG5jb25zdCBpdGVtQ291bnRlciA9IChsaXN0KSA9PiBsaXN0Lmxlbmd0aDtcblxuZXhwb3J0IHsgY29tbWVudENvdW50ZXIsIGl0ZW1Db3VudGVyIH07IiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzJ3SkluZHZOQzExSTc1SGNyVzVZL2xpa2VzJztcblxuY29uc3QgY3JlYXRlTGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xufTtcblxuY29uc3QgZ2V0TGlrZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB0byBnZXQgQVBJOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGZpbmRJdGVtc0xpa2UgPSAoaWQsIGxpa2VOdW0pID0+IHtcbiAgZ2V0TGlrZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lml0ZW1faWQgPT09IGlkKSB7XG4gICAgICAgIGxpa2VOdW0udGV4dENvbnRlbnQgPSBlbGVtZW50Lmxpa2VzO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxpa2UsIGZpbmRJdGVtc0xpa2UgfTsiLCJpbXBvcnQgeyBjcmVhdGVDb21tZW50LCBnZXRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudEFQSS5qcyc7XG5pbXBvcnQgeyBjb21tZW50Q291bnRlciB9IGZyb20gJy4vY291bnRlci5qcyc7XG5cbmNvbnN0IHBvcHVwID0gKGNvbnRhaW5lciwgaWQsIHRpdGxlLCBpbWcsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIHBvcHVwLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHktMiBoMyBjdXJzb3ItcG9pbnRlciBjbG9zZVwiPlg8L2Rpdj5cbiAgPGltZyBzcmM9XCIke2ltZ31cIi8+XG4gIDxoMyBjbGFzcz1cInBvcHVwLXRpdGxlIHRleHQtd2FybmluZ1wiPiR7dGl0bGV9PC9oMz5cbiAgPGg0IGNsYXNzPVwidGV4dC13YXJuaW5nXCI+JHtwcmVtaWVyZWQuc3Vic3RyaW5nKDAsIDQpfSAtICR7ZW5kZWQgPyBlbmRlZC5zdWJzdHJpbmcoMCwgNCkgOiAnJ308L2g0PlxuICA8aDY+R2VucmU6ICR7Z2VucmVzfTwvaDY+XG4gIDxwPlJhdGluZzogJHtyYXRpbmd9PC9wPlxuICA8aDQ+U3VtbWFyeTo8L2g0PlxuICA8cD4ke3N1bW1hcnl9PC9wPmA7XG5cbiAgY29uc3QgY29tbWVudHNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudHNCb3guY2xhc3NOYW1lID0gJ2NvbW1lbnQtYm94JztcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoY29tbWVudHNCb3gpO1xuICBjb21tZW50c0JveC5pbm5lckhUTUwgPSAnPGg0PkNvbW1lbnRzICg8c3Bhbj4wPC9zcGFuPik8L2g0PjxkaXY+PC9kaXY+JztcblxuICBnZXRDb21tZW50cyhpZCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHAuY2xhc3NOYW1lID0gYGNvbW1lbnQtJHtpZH1gO1xuICAgICAgcC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9YDtcbiAgICAgIGNvbW1lbnRzQm94LmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHApO1xuICAgIH0pO1xuICAgIGNvbW1lbnRzQm94LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gY29tbWVudENvdW50ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbW1lbnQtJHtpZH1gKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkQ29tbWVudC5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQnO1xuICBwb3B1cC5hcHBlbmRDaGlsZChhZGRDb21tZW50KTtcbiAgYWRkQ29tbWVudC5pbm5lckhUTUwgPSBgPGg0PkFkZCBhIGNvbW1lbnQ8L2g0PlxuICA8Zm9ybSBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cImNvbW1lbnRNc2dcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgbXktM1wiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgPC9mb3JtPmA7XG4gIHBvcHVwLmNoaWxkcmVuWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwLnJlbW92ZSgpO1xuICB9KTtcblxuICBhZGRDb21tZW50LmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZUNvbW1lbnQoaWQsIGUudGFyZ2V0LmNoaWxkcmVuWzBdLnZhbHVlLCBlLnRhcmdldC5jaGlsZHJlblsxXS52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICBnZXRDb21tZW50cyhpZCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSAke2VsZW1lbnQudXNlcm5hbWV9OiAke2VsZW1lbnQuY29tbWVudH1gO1xuICAgICAgICBjb21tZW50c0JveC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLnZhbHVlID0gJyc7XG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMV0udmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3B1cDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwb3B1cCBmcm9tICcuL3BvcHVwLmpzJztcbmltcG9ydCB7IGNyZWF0ZUxpa2UsIGZpbmRJdGVtc0xpa2UgfSBmcm9tICcuL2xpa2VBUEkuanMnO1xuXG5jb25zdCB0dkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50di1jb250YWluZXInKTtcblxuY29uc3QgY3JlYXRlVHZDYXJkID0gKHRpdGxlLCBpbWcsIGlkLCBzdW1tYXJ5LCByYXRpbmcsIGdlbnJlcywgcHJlbWllcmVkLCBlbmRlZCkgPT4ge1xuICBjb25zdCB0dkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdHZDYXJkLmNsYXNzTmFtZSA9ICd0di1jYXJkJztcbiAgdHZDb250YWluZXIuYXBwZW5kQ2hpbGQodHZDYXJkKTtcbiAgdHZDYXJkLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7aW1nfVwiIGNsYXNzPVwiY2FyZC1pbWdcIj5cbiAgPGRpdiBjbGFzcz1cInB0LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7dGl0bGV9PC9oNj5cbiAgICA8cCBjbGFzcz1cImxpa2UgbS0wIHAtMFwiPuKZoTwvcD5cbiAgPC9kaXY+XG4gIDxwPjxzcGFuIGNsYXNzPVwibGlrZS1udW1cIj4wPC9zcGFuPiBMaWtlczwvcD5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nIG0tMlwiPkNvbW1lbnRzPC9idXR0b24+YDtcbiAgY29uc3QgbGlrZU51bSA9IHR2Q2FyZC5jaGlsZHJlblsyXS5jaGlsZHJlblswXTtcbiAgZmluZEl0ZW1zTGlrZShpZCwgbGlrZU51bSk7XG4gIHR2Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgdHZDYXJkLmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1vdXRsaW5lLXdhcm5pbmcnKTtcbiAgICB0dkNhcmQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LmFkZCgnYnRuLW91dGxpbmUtZGFyaycpO1xuICB9KTtcbiAgdHZDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgIHR2Q2FyZC5jaGlsZHJlblszXS5jbGFzc0xpc3QucmVtb3ZlKCdidG4tb3V0bGluZS1kYXJrJyk7XG4gICAgdHZDYXJkLmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5hZGQoJ2J0bi1vdXRsaW5lLXdhcm5pbmcnKTtcbiAgfSk7XG4gIHR2Q2FyZC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0dkNhcmQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSAn4p2kJztcbiAgICBjcmVhdGVMaWtlKGlkKS50aGVuKCgpID0+IHtcbiAgICAgIGZpbmRJdGVtc0xpa2UoaWQsIGxpa2VOdW0pO1xuICAgIH0pO1xuICB9KTtcbiAgdHZDYXJkLmNoaWxkcmVuWzNdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwKHR2Q2FyZCwgaWQsIHRpdGxlLCBpbWcsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUdkNhcmQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9