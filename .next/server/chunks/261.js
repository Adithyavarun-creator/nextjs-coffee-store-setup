"use strict";
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kz": () => (/* binding */ table),
/* harmony export */   "Q6": () => (/* binding */ getRecords),
/* harmony export */   "ne": () => (/* binding */ findRecordByFilter)
/* harmony export */ });
const Airtable = __webpack_require__(4294);
const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_KEY);
const table = base("coffeedatas");
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
const mappedRecords = (record)=>{
    return {
        recordId: record.id,
        ...record.fields
    };
};
const getRecords = (records)=>{
    return records.map((record)=>mappedRecords(record)
    );
};
const findRecordByFilter = async (id)=>{
    const findCoffeeStoreRecords = await table.select({
        filterByFormula: `id="${id}"`
    }).firstPage();
    return getRecords(findCoffeeStoreRecords);
};



/***/ })

};
;