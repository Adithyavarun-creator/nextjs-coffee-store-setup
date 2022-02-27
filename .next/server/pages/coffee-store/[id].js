(() => {
var exports = {};
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 4208:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "coffee-store_container__hK4Qg",
	"layout": "coffee-store_layout__Vf0fs",
	"col1": "coffee-store_col1__VnuIx",
	"backToHomeLink": "coffee-store_backToHomeLink__iqPWe",
	"nameWrapper": "coffee-store_nameWrapper__hs8UX",
	"name": "coffee-store_name__QrPVr",
	"storeImgWrapper": "coffee-store_storeImgWrapper__OqMHN",
	"storeImg": "coffee-store_storeImg__z5r9A",
	"col2": "coffee-store_col2__TASOZ",
	"iconWrapper": "coffee-store_iconWrapper__ASgsk",
	"text": "coffee-store_text__PO_iM",
	"upvoteButton": "coffee-store_upvoteButton__Bubpv"
};


/***/ }),

/***/ 3515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4208);
/* harmony import */ var _styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_coffee_stores_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8090);
/* harmony import */ var _lib_coffee_stores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3018);
/* harmony import */ var _store_store_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(960);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5313);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_10__]);
swr__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];













//runs on server
async function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log(params);
    const coffeeStores = await (0,_lib_coffee_stores__WEBPACK_IMPORTED_MODULE_8__/* .fetchCoffeeStores */ .M)();
    //console.log(params);
    const coffeeStoreById = coffeeStores.find((coffeeStore)=>{
        return coffeeStore.id.toString() === params.id;
    });
    return {
        props: {
            coffeeStore: coffeeStoreById ? coffeeStoreById : {}
        }
    };
}
async function getStaticPaths() {
    const coffeeStores = await (0,_lib_coffee_stores__WEBPACK_IMPORTED_MODULE_8__/* .fetchCoffeeStores */ .M)();
    const paths = coffeeStores.map((coffeeStore)=>{
        return {
            params: {
                id: coffeeStore.id.toString()
            }
        };
    });
    return {
        paths: paths,
        fallback: true
    };
}
const CoffeeStore = (initialProps)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    if (router.isFallback) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        }));
    }
    const id1 = router.query.id;
    const { 0: coffeeStore1 , 1: setCoffeeStore  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialProps.coffeeStore);
    const { state: { coffeeStores  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_store_store_context__WEBPACK_IMPORTED_MODULE_9__/* .StoreContext */ .xf);
    const handleCreateCoffeeStore = async (coffeeStore)=>{
        try {
            const { name , neighbourhood , imgUrl , voting , address , id  } = coffeeStore;
            const response = await fetch("/api/createCoffeeStore", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id,
                    name,
                    voting: 0,
                    imgUrl,
                    neighbourhood: neighbourhood[0] || "",
                    address: address || ""
                })
            });
            const dbCoffeeStore = await response.json();
            console.log({
                dbCoffeeStore
            });
        } catch (error) {
            console.log(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .isEmpty */ .x)(initialProps.coffeeStore)) {
            if (coffeeStores.length > 0) {
                const coffeeStoreFromContext = coffeeStores.find((coffeeStore)=>{
                    return coffeeStore.id.toString() === id1;
                });
                if (coffeeStoreFromContext) {
                    setCoffeeStore(coffeeStoreFromContext);
                    handleCreateCoffeeStore(coffeeStoreFromContext);
                }
            }
        } else {
            //statically generated datas
            handleCreateCoffeeStore(initialProps.coffeeStore);
        }
    }, [
        id1,
        initialProps,
        initialProps.coffeeStore
    ]);
    const { address: address1 , name: name1 , neighbourhood: neighbourhood1 , imgUrl: imgUrl1  } = coffeeStore1;
    const { 0: votingCount , 1: setVotingCount  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    //console.log(coffeeStore);
    const fetcher = (url)=>fetch(url).then((res)=>res.json()
        )
    ;
    const { data , error: error1  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__["default"])(`/api/getCoffeeStoreById?id=${id1}`, fetcher);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (data && data.length > 0) {
            console.log("data from SWR", data);
            setCoffeeStore(data[0]);
            setVotingCount(data[0].voting);
        }
    }, [
        data
    ]);
    //console.log(id); //will give you id of the store{ id: '4b7bedfbf964a5204e742fe3' }
    const handleUpVoteButton = async ()=>{
        console.log("handle upvote");
        try {
            //const { name, neighbourhood, imgUrl, voting, address, id } = coffeeStore;
            const response = await fetch("/api/favouriteCoffeeStoreById", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id1
                })
            });
            const dbCoffeeStore = await response.json();
            console.log({
                dbCoffeeStore
            });
            if (dbCoffeeStore && dbCoffeeStore.length > 0) {
                let count = votingCount + 1;
                setVotingCount(count);
            }
        } catch (error) {
            console.log("Error upvoting the coffee store", error);
        }
    };
    if (error1) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Something went wrong"
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().layout),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: name1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `${name1} coffee store`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().col1),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().backToHomeLink),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: "← Back to home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().nameWrapper),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().name),
                                    children: name1
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                src: imgUrl1 || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
                                width: 600,
                                height: 360,
                                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().storeImg),
                                alt: name1
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("glass", (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().col2)),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().iconWrapper),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        src: "/static/icons/places.svg",
                                        width: "24",
                                        height: "24",
                                        alt: "places icon"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),
                                        children: address1
                                    })
                                ]
                            }),
                            neighbourhood1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().iconWrapper),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        src: "/static/icons/nearMe.svg",
                                        width: "24",
                                        height: "24",
                                        alt: "near me icon"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),
                                        children: neighbourhood1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().iconWrapper),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        src: "/static/icons/star.svg",
                                        width: "24",
                                        height: "24",
                                        alt: "star icon"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),
                                        children: votingCount
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_coffee_store_module_css__WEBPACK_IMPORTED_MODULE_12___default().upvoteButton),
                                onClick: handleUpVoteButton,
                                children: "Up vote!"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoffeeStore);

});

/***/ }),

/***/ 5313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ isEmpty)
/* harmony export */ });
const isEmpty = (obj)=>{
    return obj && Object.keys(obj).length === 0;
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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,960,785], () => (__webpack_exec__(3515)));
module.exports = __webpack_exports__;

})();