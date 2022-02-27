"use strict";
exports.id = 785;
exports.ids = [785];
exports.modules = {

/***/ 3018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ fetchCoffeeStores)
/* harmony export */ });
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8515);
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_0__);
//initialise unsplash API

const unsplashApi = (0,unsplash_js__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    accessKey: "a16M58mEvQhXfZzyGdBCz03nSD110J3YGnFiR-QcHAk"
});
const getUrlForCoffeeStores = (latLong, query, limit)=>{
    return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&v=20220214&limit=${limit}`;
};
const getListOfCoffeePhotos = async ()=>{
    const photos = await unsplashApi.search.getPhotos({
        query: "coffee shop",
        perPage: 20
    });
    // console.log("photos", photos);
    const unsplashResults = photos.response.results;
    //console.log("results", unsplashResults);
    return unsplashResults.map((result)=>result.urls["small"]
    );
//console.log("photos", photosResponse);
};
const fetchCoffeeStores = async (latLong = "43.65267326999575,-79.39545615725015", limit = 20)=>{
    var ref;
    const photos = await getListOfCoffeePhotos();
    const response = await fetch(getUrlForCoffeeStores(// "43.65267326999575,-79.39545615725015",
    latLong, "coffee stores", limit), {
        headers: {
            Authorization: "fsq3tMgCdlN3nv8/8FR2f2vs7Ous9pangiF7LyI0hc80ou0="
        }
    });
    const data = await response.json();
    //console.log(data);
    return ((ref = data.results) === null || ref === void 0 ? void 0 : ref.map((venue, idx)=>{
        return {
            // ...venue,
            id: venue.fsq_id,
            address: venue.location.address || "",
            name: venue.name,
            neighbourhood: venue.location.neighborhood || venue.location.crossStreet || "",
            imgUrl: photos[idx]
        };
    })) || [];
};


/***/ }),

/***/ 8090:
/***/ ((module) => {

module.exports = [];

/***/ })

};
;