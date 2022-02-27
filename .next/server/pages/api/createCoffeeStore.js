"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 4294:
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ 4723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
//const table = base("coffeedatas");
//console.log({ table });
// console will give you
// {
//     table: Table {
//       _base: Base { _airtable: Airtable {}, _id: 'appVYppBHYrVDcdV1' },
//       id: null,
//       name: 'coffeedatas',
//       find: [Function (anonymous)],
//       select: [Function: bound ],
//       create: [Function (anonymous)],
//       update: [Function (anonymous)],
//       replace: [Function (anonymous)],
//       destroy: [Function (anonymous)],
//       list: [Function (anonymous)],
//       forEach: [Function (anonymous)]
//     }
//   }

const createCoffeeStore = async (req, res)=>{
    //if id exists return the store else create a store and add that item
    //now get the id,name,neighbourhood,etc from  req
    const { id , name , neighbourhood , voting , address , imgUrl  } = req.body;
    if (req.method === "POST") {
        //find a record
        try {
            if (id) {
                const findCoffeeStoreRecords = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .table.select */ .Kz.select({
                    filterByFormula: `id="${id}"`
                }).firstPage();
                // console.log({ findCoffeeStoreRecords });
                if (findCoffeeStoreRecords.length !== 0) {
                    //if id exists return the store
                    const records = (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .getRecords */ .Q6)(findCoffeeStoreRecords);
                    res.json(records);
                } else {
                    //create a record
                    if (name) {
                        const createRecords = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .table.create */ .Kz.create([
                            {
                                fields: {
                                    id: id,
                                    name: name,
                                    address: address,
                                    neighbourhood: neighbourhood,
                                    voting: voting,
                                    imgUrl: imgUrl
                                }
                            }, 
                        ]);
                        const records = (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__/* .getRecords */ .Q6)(createRecords);
                        res.json({
                            message: "created a record",
                            records: records
                        });
                    } else {
                        res.status(400);
                        res.json({
                            message: "id or name are missing"
                        });
                    }
                }
            } else {
                res.status(400);
                res.json({
                    message: "id is missing"
                });
            }
        } catch (error) {
            console.log("Error creating or finding store", error);
            res.status(500);
            res.json({
                message: "Error creating or finding store",
                error
            });
        }
    }
//console.log({ req }); //by default method is GET
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeStore);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [261], () => (__webpack_exec__(4723)));
module.exports = __webpack_exports__;

})();