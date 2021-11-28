/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const electron = __webpack_require__(/*! electron */ "electron");

if (typeof electron === 'string') {
	throw new TypeError('Not running in an Electron environment!');
}

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

module.exports = isEnvSet ? getFromEnv : !app.isPackaged;


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

function _electron() {
  var data = __webpack_require__(/*! electron */ "electron");

  _electron = function _electron() {
    return data;
  };

  return data;
}

function _electronIsDev() {
  var data = _interopRequireDefault(__webpack_require__(/*! electron-is-dev */ "./node_modules/electron-is-dev/index.js"));

  _electronIsDev = function _electronIsDev() {
    return data;
  };

  return data;
}

function _path() {
  var data = __webpack_require__(/*! path */ "path");

  _path = function _path() {
    return data;
  };

  return data;
}

// 主进程
function createWindow() {
  var mainWindow = new (_electron().BrowserWindow)({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (_electronIsDev()["default"]) {
    var urlLocation = 'http://localhost:3000';
    mainWindow.loadURL(urlLocation);
    console.log('tesdfassssdfdft'); // Open the DevTools.

    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL("file://".concat((0, _path().join)(__dirname, '../dist/index.html')));
  } // require('@electron/remote/main').initialize() // 初始化
  // require('@electron/remote/main').enable(mainWindow.webContents)

}

_electron().app.on('ready', function () {
  console.log('xxssssssddsdf');
});

_electron().app.whenReady().then(function () {
  createWindow();
  console.log('whenReady 123234sdds');

  _electron().app.on('activate', function () {
    console.log('activate');
    if (_electron().BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

_electron().app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') _electron().app.quit();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7OztBQ1B4RDtBQUNiLGlCQUFpQixtQkFBTyxDQUFDLDBCQUFVOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUhBO0FBS0EsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QixNQUFNQyxVQUFVLEdBQUcsS0FBSUMseUJBQUosRUFBa0I7QUFDbkNDLElBQUFBLEtBQUssRUFBRSxJQUQ0QjtBQUVuQ0MsSUFBQUEsTUFBTSxFQUFFLEdBRjJCO0FBR25DQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsZUFBZSxFQUFFLElBREg7QUFFZEMsTUFBQUEsZ0JBQWdCLEVBQUU7QUFGSjtBQUhtQixHQUFsQixDQUFuQjs7QUFTQSxNQUFHQywyQkFBSCxFQUFTO0FBQ1AsUUFBTUMsV0FBVyxHQUFHLHVCQUFwQjtBQUNBUixJQUFBQSxVQUFVLENBQUNTLE9BQVgsQ0FBbUJELFdBQW5CO0FBQ0FFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBSE8sQ0FJUDs7QUFDQVgsSUFBQUEsVUFBVSxDQUFDWSxXQUFYLENBQXVCQyxZQUF2QjtBQUNELEdBTkQsTUFNSztBQUNIYixJQUFBQSxVQUFVLENBQUNTLE9BQVgsa0JBQTZCLGtCQUFLSyxTQUFMLEVBQWdCLG9CQUFoQixDQUE3QjtBQUNELEdBbEJxQixDQW9CdEI7QUFDQTs7QUFFRDs7QUFFREMsZ0JBQUlDLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFlBQU07QUFDcEJOLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxDQUZEOztBQUlBSSxnQkFBSUUsU0FBSixHQUFnQkMsSUFBaEIsQ0FBcUIsWUFBTTtBQUN6Qm5CLEVBQUFBLFlBQVk7QUFDWlcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7O0FBRUFJLGtCQUFJQyxFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFZO0FBQzdCTixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsUUFBSVYsMEJBQWNrQixhQUFkLEdBQThCQyxNQUE5QixLQUF5QyxDQUE3QyxFQUFnRHJCLFlBQVk7QUFDN0QsR0FIRDtBQUlELENBUkQ7O0FBVUFnQixnQkFBSUMsRUFBSixDQUFPLG1CQUFQLEVBQTRCLFlBQVk7QUFDdEMsTUFBSUssT0FBTyxDQUFDQyxRQUFSLEtBQXFCLFFBQXpCLEVBQW1DUCxnQkFBSVEsSUFBSjtBQUNwQyxDQUZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nLWNsaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9nLWNsaS8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1pcy1kZXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZy1jbGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZy1jbGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9nLWNsaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nLWNsaS8uL2FwcC9tYWluL2VsZWN0cm9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xuXG5pZiAodHlwZW9mIGVsZWN0cm9uID09PSAnc3RyaW5nJykge1xuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdOb3QgcnVubmluZyBpbiBhbiBFbGVjdHJvbiBlbnZpcm9ubWVudCEnKTtcbn1cblxuY29uc3QgYXBwID0gZWxlY3Ryb24uYXBwIHx8IGVsZWN0cm9uLnJlbW90ZS5hcHA7XG5cbmNvbnN0IGlzRW52U2V0ID0gJ0VMRUNUUk9OX0lTX0RFVicgaW4gcHJvY2Vzcy5lbnY7XG5jb25zdCBnZXRGcm9tRW52ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuRUxFQ1RST05fSVNfREVWLCAxMCkgPT09IDE7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbnZTZXQgPyBnZXRGcm9tRW52IDogIWFwcC5pc1BhY2thZ2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8g5Li76L+b56iLXHJcbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJ1xyXG5pbXBvcnQgaXNEZXYgZnJvbSAnZWxlY3Ryb24taXMtZGV2J1xyXG5pbXBvcnQge3Jlc29sdmUsIGpvaW59IGZyb20gJ3BhdGgnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XHJcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcclxuICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xyXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYoaXNEZXYpe1xyXG4gICAgY29uc3QgdXJsTG9jYXRpb24gPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKHVybExvY2F0aW9uKVxyXG4gICAgY29uc29sZS5sb2coJ3Rlc2RmYXNzc3NkZmRmdCcpXHJcbiAgICAvLyBPcGVuIHRoZSBEZXZUb29scy5cclxuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKClcclxuICB9ZWxzZXtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTChgZmlsZTovLyR7am9pbihfX2Rpcm5hbWUsICcuLi9kaXN0L2luZGV4Lmh0bWwnKX1gKVxyXG4gIH1cclxuXHJcbiAgLy8gcmVxdWlyZSgnQGVsZWN0cm9uL3JlbW90ZS9tYWluJykuaW5pdGlhbGl6ZSgpIC8vIOWIneWni+WMllxyXG4gIC8vIHJlcXVpcmUoJ0BlbGVjdHJvbi9yZW1vdGUvbWFpbicpLmVuYWJsZShtYWluV2luZG93LndlYkNvbnRlbnRzKVxyXG5cclxufVxyXG5cclxuYXBwLm9uKCdyZWFkeScsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygneHhzc3Nzc3NkZHNkZicpXHJcbn0pXHJcblxyXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgY3JlYXRlV2luZG93KClcclxuICBjb25zb2xlLmxvZygnd2hlblJlYWR5IDEyMzIzNHNkZHMnKVxyXG5cclxuICBhcHAub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FjdGl2YXRlJylcclxuICAgIGlmIChCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5sZW5ndGggPT09IDApIGNyZWF0ZVdpbmRvdygpXHJcbiAgfSlcclxufSlcclxuXHJcbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSBhcHAucXVpdCgpXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVXaW5kb3ciLCJtYWluV2luZG93IiwiQnJvd3NlcldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJub2RlSW50ZWdyYXRpb24iLCJjb250ZXh0SXNvbGF0aW9uIiwiaXNEZXYiLCJ1cmxMb2NhdGlvbiIsImxvYWRVUkwiLCJjb25zb2xlIiwibG9nIiwid2ViQ29udGVudHMiLCJvcGVuRGV2VG9vbHMiLCJfX2Rpcm5hbWUiLCJhcHAiLCJvbiIsIndoZW5SZWFkeSIsInRoZW4iLCJnZXRBbGxXaW5kb3dzIiwibGVuZ3RoIiwicHJvY2VzcyIsInBsYXRmb3JtIiwicXVpdCJdLCJzb3VyY2VSb290IjoiIn0=