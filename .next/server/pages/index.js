(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4416:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "banner_container__dnbLV",
	"title": "banner_title__PYWm4",
	"title1": "banner_title1__ZXVyc",
	"title2": "banner_title2__JqiuP",
	"subTitle": "banner_subTitle__0Nyze",
	"buttonWrapper": "banner_buttonWrapper__R1ZGV",
	"button": "banner_button__e1xYN"
};


/***/ }),

/***/ 6481:
/***/ ((module) => {

// Exports
module.exports = {
	"cardLink": "card_cardLink___xt_C",
	"container": "card_container__UHSnS",
	"cardHeaderWrapper": "card_cardHeaderWrapper__mj_rt",
	"cardHeader": "card_cardHeader__KpFux",
	"cardImageWrapper": "card_cardImageWrapper__fA2sL",
	"cardImage": "card_cardImage__x25Ih"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"heroImage": "Home_heroImage__K_jeP",
	"cardLayout": "Home_cardLayout__5gqjA",
	"card": "Home_card___LpL1",
	"heading2": "Home_heading2__AYxqI",
	"sectionWrapper": "Home_sectionWrapper___hbAJ"
};


/***/ }),

/***/ 7555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/banner.module.css
var banner_module = __webpack_require__(4416);
var banner_module_default = /*#__PURE__*/__webpack_require__.n(banner_module);
;// CONCATENATED MODULE: ./components/banner.js


const Banner = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (banner_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (banner_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (banner_module_default()).title1,
                        children: "Coffee"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (banner_module_default()).title2,
                        children: "Connoisseur"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (banner_module_default()).subTitle,
                children: "Discover your local coffee shops"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (banner_module_default()).buttonWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (banner_module_default()).button,
                    onClick: props.handleOnClick,
                    children: props.buttonText
                })
            })
        ]
    }));
};
/* harmony default export */ const banner = (Banner);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/card.module.css
var card_module = __webpack_require__(6481);
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/card.js





const Card = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: props.href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: (card_module_default()).cardLink,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()("glass", (card_module_default()).container),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (card_module_default()).cardHeaderWrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (card_module_default()).cardHeader,
                            children: props.name
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (card_module_default()).cardImageWrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            className: (card_module_default()).cardImage,
                            src: props.imgUrl,
                            width: 260,
                            height: 160
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const card = (Card);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./data/coffee-stores.json
var coffee_stores = __webpack_require__(8090);
// EXTERNAL MODULE: ./lib/coffee-stores.js
var lib_coffee_stores = __webpack_require__(3018);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./store/store-context.js
var store_context = __webpack_require__(960);
;// CONCATENATED MODULE: ./hooks/use-track-location.js


const useTrackLocation = ()=>{
    const { 0: locationErrorMsg , 1: setLocationErrorMsg  } = (0,external_react_.useState)("");
    // const [latLong, setLatLong] = useState("");
    const { 0: isFindingLocation , 1: setIsFindingLocation  } = (0,external_react_.useState)(false);
    const { dispatch  } = (0,external_react_.useContext)(store_context/* StoreContext */.xf);
    const success = (position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // setLatLong(`${latitude},${longitude}`);
        dispatch({
            type: store_context/* SET_LAT_LONG */.Lp,
            payload: {
                latLong: `${latitude},${longitude}`
            }
        });
        setLocationErrorMsg("");
        setIsFindingLocation(false);
    };
    const error = ()=>{
        setIsFindingLocation(false);
        setLocationErrorMsg("Unable to retrieve your location");
    };
    const handleTrackLocation = ()=>{
        setIsFindingLocation(true);
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser");
            setIsFindingLocation(false);
        } else {
            //   status.textContent = "Locating…";
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };
    return {
        //latLong,
        handleTrackLocation,
        locationErrorMsg,
        isFindingLocation
    };
};
/* harmony default export */ const use_track_location = (useTrackLocation);

;// CONCATENATED MODULE: ./pages/index.js











//coffeestores is a static data
//create a new account and add credentials
async function getStaticProps(context) {
    const coffeeStores = await (0,lib_coffee_stores/* fetchCoffeeStores */.M)();
    return {
        props: {
            coffeeStores: coffeeStores
        }
    };
}
function Home(props) {
    //const { coffeeStores } = props;
    //console.log(coffeeStores);
    const { isFindingLocation , // latLong,
    handleTrackLocation , locationErrorMsg ,  } = use_track_location();
    //console.log(latLong, locationErrorMsg);
    //const [stores, setStores] = useState("");
    const { 0: error1 , 1: setError  } = (0,external_react_.useState)(null);
    const { dispatch , state  } = (0,external_react_.useContext)(store_context/* StoreContext */.xf);
    const { coffeeStores: coffeeStores1 , latLong  } = state;
    const handleOnBannerBtnClick = ()=>{
        console.log("Hi iam clicked");
        //handleTrackLocation() should operate here
        handleTrackLocation();
    };
    (0,external_react_.useEffect)(async ()=>{
        if (latLong) {
            try {
                //calling from api folder
                const response = await fetch(`/api/getCoffeeStoresByLocation?latLong=${latLong}&limit=30`);
                const coffeeStores = await response.json();
                //console.log("fetched coffeestores are", { fetchedCoffeeStores });
                //setStores(fetchedCoffeeStores);
                dispatch({
                    type: store_context/* SET_COFFEE_STORES */.oj,
                    payload: {
                        coffeeStores: coffeeStores
                    }
                });
                setError("");
            } catch (error) {
                setError(error.message);
                console.log(error.message);
            }
        }
    }, [
        latLong
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Coffee Connoisseur"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(banner, {
                        buttonText: isFindingLocation ? "Loading..." : "View stores nearby",
                        handleOnClick: handleOnBannerBtnClick
                    }),
                    locationErrorMsg && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Something went wrong : ",
                            locationErrorMsg
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).heroImage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/static/hero-image.png",
                            width: 700,
                            height: 400
                        })
                    }),
                    coffeeStores1.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Home_module_default()).heading2,
                                children: "Search results by your location"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Home_module_default()).cardLayout,
                                children: coffeeStores1.map((coffeeStore)=>/*#__PURE__*/ jsx_runtime_.jsx(card, {
                                        name: coffeeStore.name,
                                        imgUrl: coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
                                        href: `/coffee-store/${coffeeStore.id}`,
                                        className: (Home_module_default()).card
                                    }, coffeeStore.id)
                                )
                            })
                        ]
                    }),
                    props.coffeeStores.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Home_module_default()).heading2,
                                children: "Torronto Stores"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Home_module_default()).cardLayout,
                                children: props.coffeeStores.map((coffeeStore)=>/*#__PURE__*/ jsx_runtime_.jsx(card, {
                                        name: coffeeStore.name,
                                        imgUrl: coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
                                        href: `/coffee-store/${coffeeStore.id}`,
                                        className: (Home_module_default()).card
                                    }, coffeeStore.id)
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8515:
/***/ ((module) => {

"use strict";
module.exports = require("unsplash-js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,960,785], () => (__webpack_exec__(7555)));
module.exports = __webpack_exports__;

})();