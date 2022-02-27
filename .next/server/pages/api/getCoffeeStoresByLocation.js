"use strict";
(() => {
var exports = {};
exports.id = 710;
exports.ids = [710];
exports.modules = {

/***/ 2164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_getCoffeeStoresByLocation)
});

;// CONCATENATED MODULE: external "unsplash-js"
const external_unsplash_js_namespaceObject = require("unsplash-js");
;// CONCATENATED MODULE: ./lib/coffee-stores.js
//initialise unsplash API

const unsplashApi = (0,external_unsplash_js_namespaceObject.createApi)({
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

;// CONCATENATED MODULE: ./pages/api/getCoffeeStoresByLocation.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default function handler(req, res) {
//   //console.log({ req, res });
//   res.status(200).json({ name: "John Doe" });
// }

const getCoffeeStoresByLocation = async (req, res)=>{
    //configure latlong
    try {
        const { latLong , limit  } = req.query;
        const response = await fetchCoffeeStores(latLong, limit);
        res.status(200);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({
            message: "Something went wrong"
        });
    }
//return something
};
/* harmony default export */ const api_getCoffeeStoresByLocation = (getCoffeeStoresByLocation);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2164));
module.exports = __webpack_exports__;

})();