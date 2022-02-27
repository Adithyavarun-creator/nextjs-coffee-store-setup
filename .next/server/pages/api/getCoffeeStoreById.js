"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 4294:
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ 3673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);

const getCoffeeStoreById = async (req, res)=>{
    const { id  } = req.query;
    try {
        if (id) {
            const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .findRecordByFilter */ .ne)(id);
            if (records.length !== 0) {
                //if id records return the store
                res.json(records);
            } else {
                res.json({
                    message: `id could not be found`
                });
            }
        } else {
            res.status(400);
            res.json({
                message: "id not exist buddy"
            });
        }
    } catch (error) {
        res.status(500);
        res.json({
            message: "Something went wrong",
            error
        });
        console.log(error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreById);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [261], () => (__webpack_exec__(3673)));
module.exports = __webpack_exports__;

})();