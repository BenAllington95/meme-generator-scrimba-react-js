/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\benja\\OneDrive\\Documents\\GitHub\\meme-generator-scrimba-react-js\\node_modules\\react\\index.js'");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = App;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Meme = __webpack_require__(7);

var _Meme2 = _interopRequireDefault(_Meme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
function App() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Meme2.default, null)
    );
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\benja\\OneDrive\\Documents\\GitHub\\meme-generator-scrimba-react-js\\node_modules\\react-dom\\index.js'");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Header;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
    return _react2.default.createElement(
        "header",
        { className: "header" },
        _react2.default.createElement("img", {
            src: "./images/troll-face.png",
            className: "header--image"
        }),
        _react2.default.createElement(
            "h2",
            { className: "header--title" },
            "Meme Generator"
        ),
        _react2.default.createElement(
            "h4",
            { className: "header--project" },
            "React Course - Project 3"
        )
    );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Meme;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function Meme() {
    var _React$useState = _react2.default.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        meme = _React$useState2[0],
        setMeme = _React$useState2[1];

    var _React$useState3 = _react2.default.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        allMemes = _React$useState4[0],
        setAllMemes = _React$useState4[1];

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */


    _react2.default.useEffect(function () {
        var getMemes = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch("https://api.imgflip.com/get_memes");

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                data = _context.sent;

                                setAllMemes(data.data.memes);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            return function getMemes() {
                return _ref.apply(this, arguments);
            };
        }();

        getMeme();
    }, []);

    function getMemeImage() {
        var randomNumber = Math.floor(Math.random() * allMemes.length);
        var url = allMemes[randomNumber].url;
        setMeme(function (prevMeme) {
            return {
                prevMeme: prevMeme,
                randomImage: url
            };
        });
    }

    function handleChange(event) {
        var _event$target = event.target,
            name = _event$target.name,
            value = _event$target.value;

        setMeme(function (prevMeme) {
            return _defineProperty({
                prevMeme: prevMeme
            }, name, value);
        });
    }

    return _react2.default.createElement(
        "main",
        null,
        _react2.default.createElement(
            "div",
            { className: "form" },
            _react2.default.createElement("input", {
                type: "text",
                placeholder: "Top text",
                className: "form--input",
                name: "topText",
                value: meme.topText,
                onChange: handleChange
            }),
            _react2.default.createElement("input", {
                type: "text",
                placeholder: "Bottom text",
                className: "form--input",
                name: "bottomText",
                value: meme.bottomText,
                onChange: handleChange
            }),
            _react2.default.createElement(
                "button",
                {
                    className: "form--button",
                    onClick: getMemeImage
                },
                "Get a new meme image \uD83D\uDDBC"
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "meme" },
            _react2.default.createElement("img", { src: meme.randomImage, className: "meme--image" }),
            _react2.default.createElement(
                "h2",
                { className: "meme--text top" },
                meme.topText
            ),
            _react2.default.createElement(
                "h2",
                { className: "meme--text bottom" },
                meme.bottomText
            )
        )
    );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById("root"));

/***/ })
/******/ ]);