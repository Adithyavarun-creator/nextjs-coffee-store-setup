"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xf": () => (/* binding */ StoreContext),
/* harmony export */   "Lp": () => (/* binding */ SET_LAT_LONG),
/* harmony export */   "oj": () => (/* binding */ SET_COFFEE_STORES),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SET_LAT_LONG = "SET_LAT_LONG";
const SET_COFFEE_STORES = "SET_COFFEE_STORES";
const storeReducer = (state, action)=>{
    if (action.type === SET_LAT_LONG) {
        return {
            ...state,
            latLong: action.payload.latLong
        };
    }
    if (action.type === SET_COFFEE_STORES) {
        return {
            ...state,
            coffeeStores: action.payload.coffeeStores
        };
    }
    return state;
};
const StoreProvider = ({ children  })=>{
    const initialState = {
        latLong: "",
        coffeeStores: []
    };
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(storeReducer, initialState);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoreContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreProvider);


/***/ })

};
;