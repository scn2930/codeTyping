(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/features/Header/style.ts

const HeaderStyle = (external_styled_components_default()).div`
  .nav {
    background-color: beige;
    width: 100%;
    height: 100px;
    padding: 0 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .left {
    width: 30%;
    height: 100%;
    line-height: 100px;
    font-size: 2rem;
    cursor: pointer;
    text-align: center;
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 100px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .right li {
    cursor: pointer;
  }

  .right li:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.3s;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .left {
      width: 40%;
      font-size: 1.5rem;
    }

    .right {
      width: 60%;
      font-size: 0.9rem;
      flex-direction: row;
      align-items: flex-start;
      height: auto;
    }

    .right li {
      margin: 5px 0;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    .left {
      width: 50%;
      font-size: 1.2rem;
    }

    .right {
      width: 100%;
      font-size: 0.8rem;
    }

    .right li {
      margin: 5px 0;
      text-align: center;
    }
  }
`;

;// CONCATENATED MODULE: ./src/features/Header/index.tsx



const Header = ()=>{
    const router = (0,router_.useRouter)();
    const routingPage = (type)=>{
        if (type === "home") {
            router.push("/");
        } else if (type === "practice") {
            router.push("/practice");
        } else if (type === "game") {
            router.push("/game");
        } else if (type === "ranking") {
            router.push("/ranking");
        } else if (type === "signup") {
            router.push("/signup");
        } else if (type === "login") {
            router.push("/login");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(HeaderStyle, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "nav",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>{
                            routingPage("home");
                        },
                        children: "CodeType"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>{
                                routingPage("practice");
                            },
                            children: "타자 연습"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>{
                                routingPage("game");
                            },
                            children: "게임"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>{
                                routingPage("ranking");
                            },
                            children: "랭킹"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>{
                                routingPage("signup");
                            },
                            children: "회원가입"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>{
                                routingPage("login");
                            },
                            children: "로그인"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const features_Header = (Header);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(features_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(516));
module.exports = __webpack_exports__;

})();