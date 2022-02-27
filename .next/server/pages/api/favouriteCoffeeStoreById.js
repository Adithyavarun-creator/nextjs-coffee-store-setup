"use strict";
(() => {
var exports = {};
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 4294:
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ 8405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);

const favouriteCoffeeStoreById = async (req, res)=>{
    if (req.method === "PUT") {
        try {
            const { id  } = req.body;
            if (id) {
                const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .findRecordByFilter */ .ne)(id);
                if (records.length !== 0) {
                    const record = records[0];
                    const calculateVoting = parseInt(record.voting) + 1;
                    console.log({
                        calculateVoting
                    });
                    //update a record
                    const updateRecord = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .table.update */ .Kz.update([
                        {
                            id: record.recordId,
                            fields: {
                                voting: calculateVoting
                            }
                        }, 
                    ]);
                    if (updateRecord) {
                        const minifiedRecord = (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .getRecords */ .Q6)(updateRecord);
                        res.json(minifiedRecord);
                    }
                } else {
                    res.json({
                        message: "coffeestore id does not exist"
                    });
                }
            } else {
                res.status(400);
                res.json({
                    message: "id missing"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({
                message: "Error upvoting",
                error
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favouriteCoffeeStoreById);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [261], () => (__webpack_exec__(8405)));
module.exports = __webpack_exports__;

})();