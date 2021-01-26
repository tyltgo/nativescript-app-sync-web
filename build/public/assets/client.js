webpackJsonp([8],{

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(503);
module.exports = __webpack_require__(502);


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["fetchAuth"] = fetchAuth;
/* harmony export (immutable) */ __webpack_exports__["saveAuth"] = saveAuth;
/* harmony export (immutable) */ __webpack_exports__["deleteAuth"] = deleteAuth;
/* harmony export (immutable) */ __webpack_exports__["requestAccessKeys"] = requestAccessKeys;
/* harmony export (immutable) */ __webpack_exports__["receiveAccessKeys"] = receiveAccessKeys;
/* harmony export (immutable) */ __webpack_exports__["fetchAccessKeys"] = fetchAccessKeys;
/* harmony export (immutable) */ __webpack_exports__["requestRemoveAccessKey"] = requestRemoveAccessKey;
/* harmony export (immutable) */ __webpack_exports__["receiveRemoveAccessKey"] = receiveRemoveAccessKey;
/* harmony export (immutable) */ __webpack_exports__["reomveAccessKey"] = reomveAccessKey;
/* harmony export (immutable) */ __webpack_exports__["requestPatchAccessKey"] = requestPatchAccessKey;
/* harmony export (immutable) */ __webpack_exports__["receivePatchAccessKey"] = receivePatchAccessKey;
/* harmony export (immutable) */ __webpack_exports__["patchAccessKey"] = patchAccessKey;
/* harmony export (immutable) */ __webpack_exports__["requestCreateAccessKey"] = requestCreateAccessKey;
/* harmony export (immutable) */ __webpack_exports__["receiveCreateAccessKey"] = receiveCreateAccessKey;
/* harmony export (immutable) */ __webpack_exports__["createAccessKey"] = createAccessKey;
/* harmony export (immutable) */ __webpack_exports__["openPopShowKey"] = openPopShowKey;
/* harmony export (immutable) */ __webpack_exports__["closePopShowKey"] = closePopShowKey;
/* harmony export (immutable) */ __webpack_exports__["checkResponseAuth"] = checkResponseAuth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routesActions_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msgStackActions__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_RestApi__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function requestAuth() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["v" /* REQUEST_AUTH */]
  };
}

function receiveAuth(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["w" /* RECEIVE_AUTH */],
    payload: data
  };
}

function fetchAuth() {
  var isLogin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return function (dispatch) {
    dispatch(requestAuth());
    var auth = sessionStorage.getItem('auth');
    if (!__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isEmpty(auth)) {
      dispatch(receiveAuth(auth));
    } else {
      dispatch(receiveAuth(null));
      if (isLogin) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__routesActions_js__["showLogin"])());
      }
    }
  };
}

function saveAuth(auth) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["x" /* SAVE_AUTH */],
    payload: auth
  };
}

function deleteAuth() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["y" /* DELETE_AUTH */]
  };
}

function requestAccessKeys() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["z" /* REQUEST_ACCESS_KEYS */]
  };
}

function receiveAccessKeys(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["A" /* RECEIVE_ACCESS_KEYS */],
    payload: data
  };
}

function fetchAccessKeys() {
  return function (dispatch) {
    dispatch(requestAccessKeys());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].getAccessKeys().then(function (data) {
      dispatch(receiveAccessKeys(data));
    });
  };
}

function requestRemoveAccessKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["B" /* REQUEST_REMOVE_ACCESS_KEY */]
  };
}

function receiveRemoveAccessKey(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["C" /* RECEIVE_REMOVE_ACCESS_KEY */],
    payload: data
  };
}

function reomveAccessKey(name) {
  return function (dispatch) {
    dispatch(requestRemoveAccessKey());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].removeAccessKey(name).then(function (data) {
      if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Failed to delete key: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Deleted key: " + name, "success"));
      }
      dispatch(receiveRemoveAccessKey(data));
    });
  };
}

function requestPatchAccessKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["D" /* REQUEST_PATCH_ACCESS_KEY */]
  };
}

function receivePatchAccessKey(name, data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["E" /* RECEIVE_PATCH_ACCESS_KEY */],
    payload: _extends({ friendlyName: name }, data)
  };
}

function patchAccessKey(name) {
  var friendlyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return function (dispatch) {
    dispatch(requestPatchAccessKey());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].patchAccessKey(name, friendlyName, ttl).then(function (data) {
      if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Changing key failed: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Key modified: " + friendlyName, "success"));
      }
      dispatch(receivePatchAccessKey(name, data));
    }).catch(function (e) {
      console.log(e);
    });
  };
}

function requestCreateAccessKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["F" /* REQUEST_CREATE_ACCESS_KEY */]
  };
}

function receiveCreateAccessKey(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["G" /* RECEIVE_CREATE_ACCESS_KEY */],
    payload: data
  };
}

function createAccessKey() {
  return function (dispatch) {
    dispatch(requestCreateAccessKey());
    return __WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].createAccessKey().then(function (data) {
      if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Fail to create key: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__msgStackActions__["addShowMsg"])("Created key: " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'results.accessKey.friendlyName'), "success"));
      }
      dispatch(openPopShowKey(__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(data, 'results.accessKey.name')));
      dispatch(receiveCreateAccessKey(data));
    });
  };
}

function openPopShowKey(key) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["H" /* OPEN_POP_SHOW_KEY */],
    payload: key
  };
}

function closePopShowKey() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["I" /* CLOSE_POP_SHOW_KEY */]
  };
}

function checkResponseAuth(dispatch, data) {
  if (data.httpCode == 401) {
    dispatch(fetchAuth(true));
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addShowMsg"] = addShowMsg;
/* harmony export (immutable) */ __webpack_exports__["closeMsg"] = closeMsg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



function addShowMsg(text) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
  var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["J" /* MSG_STACK_SHOW_MSG */],
    payload: { text: text, type: type, showTime: showTime }
  };
}

function closeMsg(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["K" /* MSG_STACK_CLOSE_MSG */],
    payload: id
  };
}

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_css__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layout_css__);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Layout/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        this.props.children
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Layout_css___default.a)(Layout));

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Footer__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MsgStackContainer__ = __webpack_require__(525);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/LayoutContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var LayoutContainer = function (_Component) {
  _inherits(LayoutContainer, _Component);

  function LayoutContainer() {
    _classCallCheck(this, LayoutContainer);

    return _possibleConstructorReturn(this, (LayoutContainer.__proto__ || Object.getPrototypeOf(LayoutContainer)).apply(this, arguments));
  }

  _createClass(LayoutContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          auth = _props.auth,
          actions = _props.actions;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
          isAuth: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(auth, 'isAuth'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }),
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Footer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__MsgStackContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })
      );
    }
  }]);

  return LayoutContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
  return { 'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}) };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(LayoutContainer));

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var createBrowserHistory = __webpack_require__(900).createBrowserHistory;

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (true && createBrowserHistory());

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["setBackHistory"] = setBackHistory;
/* harmony export (immutable) */ __webpack_exports__["goBackHistory"] = goBackHistory;
/* harmony export (immutable) */ __webpack_exports__["showHome"] = showHome;
/* harmony export (immutable) */ __webpack_exports__["showLogin"] = showLogin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(43);


function setBackHistory() {
  var history = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["r" /* SET_BACK_HISTORY */],
    payload: history
  };
}

function goBackHistory() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["s" /* GO_BACK_HISTORY */] };
}

function showHome() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["t" /* SHOW_HOME */] };
}

function showLogin() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["u" /* SHOW_LOGIN */] };
}

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Headers */
/* unused harmony export Request */
/* unused harmony export Response */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(1287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/* harmony default export */ __webpack_exports__["a"] = (self.fetch.bind(self));
var Headers = self.Headers;
var Request = self.Request;
var Response = self.Response;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployments", function() { return deployments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDetails", function() { return appDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_productsActions__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/apps/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var apps = {

  path: '/apps',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var ProductListContainer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                setTimeout(function () {
                  store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_productsActions__["getProducts"])());
                }, 100);
              }
              _context.next = 3;
              return __webpack_require__.e/* require.ensure */(4).then((function (require) {
                return __webpack_require__(1293).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 3:
              ProductListContainer = _context.sent;
              return _context.abrupt('return', {
                title: 'Manage apps',
                chunk: 'apps',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProductListContainer, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: _this
                  })
                )
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

var deployments = {
  path: '/apps/:appName/:deploymentName',

  action: function action(_ref2) {
    var _this2 = this;

    var store = _ref2.store,
        params = _ref2.params;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var appName, deploymentName, DeploymentContainer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (true) {
                // setTimeout(() => {
                //   store.dispatch(getProducts());
                // }, 100);
              }
              appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(params, 'appName');
              deploymentName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(params, 'deploymentName');
              _context2.next = 5;
              return __webpack_require__.e/* require.ensure */(6).then((function (require) {
                return __webpack_require__(1290).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 5:
              DeploymentContainer = _context2.sent;
              return _context2.abrupt('return', {
                title: deploymentName + ' ' + appName,
                chunk: 'deployment',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DeploymentContainer, { appName: appName, deploymentName: deploymentName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: _this2
                  })
                )
              });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
};

var appDetails = {
  path: '/apps/:appName',

  action: function action(_ref3) {
    var _this3 = this;

    var store = _ref3.store,
        params = _ref3.params;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var appName, ProductContainer;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(params, 'appName');

              if (true) {
                setTimeout(function () {
                  store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_productsActions__["fetchDeployments"])(appName));
                }, 100);
              }
              _context3.next = 4;
              return __webpack_require__.e/* require.ensure */(5).then((function (require) {
                return __webpack_require__(1292).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 4:
              ProductContainer = _context3.sent;
              return _context3.abrupt('return', {
                title: appName + ' \u8BE6\u60C5',
                chunk: 'product',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: _this3
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProductContainer, { appName: appName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: _this3
                  })
                )
              });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
};



/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(149);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Link/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(_this.props.to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['to', 'children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        _extends({ href: to }, props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        children
      );
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
Link.defaultProps = {
  onClick: null
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_LogoutContainer__ = __webpack_require__(524);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/login/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var login = {
  path: '/login',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var LoginContainer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {}
              _context.next = 3;
              return __webpack_require__.e/* require.ensure */(7).then((function (require) {
                return __webpack_require__(1291).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 3:
              LoginContainer = _context.sent;
              return _context.abrupt('return', {
                title: 'Log in',
                chunk: 'login',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginContainer, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: _this
                  })
                )
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

var logout = {

  path: '/logout',

  action: function action() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', {
                title: 'Log out',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_LogoutContainer__["a" /* default */], {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    },
                    __self: _this2
                  })
                )
              });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
};



/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__ = __webpack_require__(148);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/users/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var users = {

  path: '/users',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var ChangePasswordContainer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {}
              _context.next = 3;
              return __webpack_require__.e/* require.ensure */(1).then((function (require) {
                return __webpack_require__(509).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 3:
              ChangePasswordContainer = _context.sent;
              return _context.abrupt('return', {
                title: 'Change password',
                chunk: 'changePassword',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChangePasswordContainer, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: _this
                  })
                )
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

var settings = {

  path: '/users/settings',

  action: function action(_ref2) {
    var _this2 = this;

    var store = _ref2.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var ChangePasswordContainer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (true) {}
              _context2.next = 3;
              return __webpack_require__.e/* require.ensure */(1).then((function (require) {
                return __webpack_require__(509).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 3:
              ChangePasswordContainer = _context2.sent;
              return _context2.abrupt('return', {
                title: 'Change password',
                chunk: 'changePassword',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChangePasswordContainer, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: _this2
                  })
                )
              });

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
};



/***/ }),

/***/ 384:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 384;

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return REQUEST_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return RECEIVE_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SAVE_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return DELETE_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REQUEST_ACCESS_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RECEIVE_ACCESS_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REQUEST_REMOVE_ACCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RECEIVE_REMOVE_ACCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return REQUEST_PATCH_ACCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RECEIVE_PATCH_ACCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return REQUEST_CREATE_ACCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return RECEIVE_CREATE_ACCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return OPEN_POP_SHOW_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return CLOSE_POP_SHOW_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return LOGIN_CHANGE_ACCOUNT_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return LOGIN_CHANGE_PASSWORD_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return REQUEST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return RECEIVE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return RECEIVE_LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return PASSWORD_CHANGE_OLD_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return PASSWORD_CHANGE_NEW_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return PASSWORD_CHANGE_NEW_CONFIRM_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return REQUEST_MODIFY_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return RECEIVE_MODIFY_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return RECEIVE_MODIFY_PASSWORD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGISTER_CHANGE_EMAIL_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_REGISTER_CHECK_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RECEIVE_REGISTER_CHECK_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RECEIVE_REGISTER_CHECK_EMAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REGISTER_CHANGE_VALIDATE_CODE_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_REGISTER_SEND_VALIDATE_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RECEIVE_REGISTER_SEND_VALIDATE_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REQUEST_REGISTER_CHECK_CODE_EXISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RECEIVE_REGISTER_CHECK_CODE_EXISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REGISTER_CHANGE_PASSWORD_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return REQUEST_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return RECEIVE_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return RECEIVE_REGISTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return RECEIVE_REGISTER_CLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_BACK_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GO_BACK_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SHOW_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SHOW_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return REQUEST_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return RECEIVE_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return SHOW_POP_ADD_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return CLOSE_POP_ADD_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return POP_ADD_APP_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return REQUEST_ADD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return RECEIVE_ADD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return REQUEST_PRODUCTS_DEPLOYMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return RECEIVE_PRODUCTS_DEPLOYMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return MSG_STACK_SHOW_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return MSG_STACK_CLOSE_MSG; });
/*========= begin authActions   ===========*/
var REQUEST_AUTH = 'REQUEST_AUTH';
var RECEIVE_AUTH = 'RECEIVE_AUTH';

var SAVE_AUTH = 'SAVE_AUTH';
var DELETE_AUTH = 'DELETE_AUTH';

var REQUEST_ACCESS_KEYS = 'REQUEST_ACCESS_KEYS';
var RECEIVE_ACCESS_KEYS = 'RECEIVE_ACCESS_KEYS';

var REQUEST_REMOVE_ACCESS_KEY = 'REQUEST_REMOVE_ACCESS_KEY';
var RECEIVE_REMOVE_ACCESS_KEY = 'RECEIVE_REMOVE_ACCESS_KEY';

var REQUEST_PATCH_ACCESS_KEY = 'REQUEST_PATCH_ACCESS_KEY';
var RECEIVE_PATCH_ACCESS_KEY = 'RECEIVE_PATCH_ACCESS_KEY';

var REQUEST_CREATE_ACCESS_KEY = 'REQUEST_CREATE_ACCESS_KEY';
var RECEIVE_CREATE_ACCESS_KEY = 'RECEIVE_CREATE_ACCESS_KEY';

var OPEN_POP_SHOW_KEY = 'OPEN_POP_SHOW_KEY';
var CLOSE_POP_SHOW_KEY = 'CLOSE_POP_SHOW_KEY';
/*========= end authActions   ===========*/

/*========= begin usersActions   ===========*/
var USER_LOGOUT = 'USER_LOGOUT';
var LOGIN_CHANGE_ACCOUNT_INPUT = 'LOGIN_CHANGE_ACCOUNT_INPUT';
var LOGIN_CHANGE_PASSWORD_INPUT = 'LOGIN_CHANGE_PASSWORD_INPUT';

var REQUEST_LOGIN = 'REQUEST_LOGIN';
var RECEIVE_LOGIN = 'RECEIVE_LOGIN';
var RECEIVE_LOGIN_ERROR = 'RECEIVE_LOGIN_ERROR';

var PASSWORD_CHANGE_OLD_INPUT = 'PASSWORD_CHANGE_OLD_INPUT';
var PASSWORD_CHANGE_NEW_INPUT = 'PASSWORD_CHANGE_NEW_INPUT';
var PASSWORD_CHANGE_NEW_CONFIRM_INPUT = 'PASSWORD_CHANGE_NEW_CONFIRM_INPUT';

var REQUEST_MODIFY_PASSWORD = 'REQUEST_MODIFY_PASSWORD';
var RECEIVE_MODIFY_PASSWORD = 'RECEIVE_MODIFY_PASSWORD';
var RECEIVE_MODIFY_PASSWORD_ERROR = 'RECEIVE_MODIFY_PASSWORD_ERROR';
/*========= end usersActions   ===========*/

/*========= begin registersActions   ===========*/
var REGISTER_CHANGE_EMAIL_INPUT = 'REGISTER_CHANGE_EMAIL_INPUT';

var REQUEST_REGISTER_CHECK_EMAIL = 'REQUEST_REGISTER_CHECK_EMAIL';
var RECEIVE_REGISTER_CHECK_EMAIL = 'RECEIVE_REGISTER_CHECK_EMAIL';
var RECEIVE_REGISTER_CHECK_EMAIL_ERROR = 'RECEIVE_REGISTER_CHECK_EMAIL_ERROR';

var REGISTER_CHANGE_VALIDATE_CODE_INPUT = 'REGISTER_CHANGE_VALIDATE_CODE_INPUT';

var REQUEST_REGISTER_SEND_VALIDATE_CODE = 'REQUEST_REGISTER_SEND_VALIDATE_CODE';
var RECEIVE_REGISTER_SEND_VALIDATE_CODE = 'RECEIVE_REGISTER_SEND_VALIDATE_CODE';
var RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR = 'RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR';

var REQUEST_REGISTER_CHECK_CODE_EXISTS = 'REQUEST_REGISTER_CHECK_CODE_EXISTS';
var RECEIVE_REGISTER_CHECK_CODE_EXISTS = 'RECEIVE_REGISTER_CHECK_CODE_EXISTS';
var RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR = 'RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR';

var REGISTER_CHANGE_PASSWORD_INPUT = 'REGISTER_CHANGE_PASSWORD_INPUT';
var REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT = 'REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT';

var REQUEST_REGISTER = 'REQUEST_REGISTER';
var RECEIVE_REGISTER = 'RECEIVE_REGISTER';
var RECEIVE_REGISTER_ERROR = 'RECEIVE_REGISTER_ERROR';

var RECEIVE_REGISTER_CLEAN = 'RECEIVE_REGISTER_CLEAN';
/*========= end registersActions   ===========*/

/*========= begin routesActions   ===========*/
var SET_BACK_HISTORY = 'SET_BACK_HISTORY';
var GO_BACK_HISTORY = 'GO_BACK_HISTORY';
var SHOW_HOME = 'SHOW_HOME';
var SHOW_LOGIN = 'SHOW_LOGIN';
/*========= end routesActions   ===========*/

/*========= begin productsActions ===========*/
var REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
var RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
var SHOW_POP_ADD_APP = 'SHOW_POP_ADD_APP';
var CLOSE_POP_ADD_APP = 'CLOSE_POP_ADD_APP';
var POP_ADD_APP_INPUT = 'POP_ADD_APP_INPUT';
var REQUEST_ADD_PRODUCTS = 'REQUEST_ADD_PRODUCTS';
var RECEIVE_ADD_PRODUCTS = 'RECEIVE_ADD_PRODUCTS';
var REQUEST_PRODUCTS_DEPLOYMENTS = 'REQUEST_PRODUCTS_DEPLOYMENTS';
var RECEIVE_PRODUCTS_DEPLOYMENTS = 'RECEIVE_PRODUCTS_DEPLOYMENTS';
/*========= end productsActions   ===========*/

/*========= begin msgStackActions ===========*/
var MSG_STACK_SHOW_MSG = 'MSG_STACK_SHOW_MSG';
var MSG_STACK_CLOSE_MSG = 'MSG_STACK_CLOSE_MSG';
/*========= end msgStackActions   ===========*/

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fastclick__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_universal_router__ = __webpack_require__(1281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_query_string__ = __webpack_require__(1052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_configureStore__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_configureStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__store_configureStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_DOMUtils__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_devUtils__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_devUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/client.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Re-render the app when window.location changes
var onLocationChange = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location, action) {
    var route;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            };
            // Delete stored scroll position for next page if any
            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }
            currentLocation = location;

            _context.prev = 3;
            _context.next = 6;
            return __WEBPACK_IMPORTED_MODULE_3_universal_router___default.a.resolve(routes, _extends({}, context, {
              path: location.pathname,
              query: __WEBPACK_IMPORTED_MODULE_4_query_string___default.a.parse(location.search)
            }));

          case 6:
            route = _context.sent;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return');

          case 9:
            if (!route.redirect) {
              _context.next = 12;
              break;
            }

            __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].replace(route.redirect);
            return _context.abrupt('return');

          case 12:

            appInstance = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__components_App___default.a,
              { context: context, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                },
                __self: this
              },
              route.component
            ), container, function () {
              return onRenderComplete(route, location);
            });
            _context.next = 24;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](3);

            if (false) {
              _context.next = 22;
              break;
            }

            appInstance = null;
            document.title = 'Error: ' + _context.t0.message;
            __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__["ErrorReporter"], { error: _context.t0, __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              },
              __self: this
            }), container);
            throw _context.t0;

          case 22:

            console.error(_context.t0); // eslint-disable-line no-console

            // Do a full page reload if error occurs during client-side navigation
            if (action && currentLocation.key === location.key) {
              window.location.reload();
            }

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 15]]);
  }));

  return function onLocationChange(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






// import { createPath } from 'history/PathUtils';






// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_7__store_configureStore___default()(window.APP_STATE, { history: __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */] })
};

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

var onRenderComplete = function initialRenderComplete() {
  var elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);
  onRenderComplete = function renderComplete(route, location) {
    document.title = route.title;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__core_DOMUtils__["a" /* updateMeta */])('description', route.description);
    // Update necessary tags in <head> at runtime here, ie:
    // updateMeta('keywords', route.keywords);
    // updateCustomMeta('og:url', route.canonicalUrl);
    // updateCustomMeta('og:image', route.imageUrl);
    // updateLink('canonical', route.canonicalUrl);
    // etc.

    var scrollX = 0;
    var scrollY = 0;
    var pos = scrollPositionsHistory[location.key];
    if (pos) {
      scrollX = pos.scrollX;
      scrollY = pos.scrollY;
    } else {
      var targetHash = location.hash.substr(1);
      if (targetHash) {
        var target = document.getElementById(targetHash);
        if (target) {
          scrollY = window.pageYOffset + target.getBoundingClientRect().top;
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    window.scrollTo(scrollX, scrollY);

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    // if (window.ga) {
    //   window.ga('send', 'pageview', createPath(location));
    // }
  };
};

// Make taps on links and buttons work fast on mobiles
__WEBPACK_IMPORTED_MODULE_2_fastclick___default.a.attach(document.body);

var container = document.getElementById('app');
var appInstance = void 0;
var currentLocation = __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].location;
var routes = __webpack_require__(537).default;__WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].listen(onLocationChange);
onLocationChange(currentLocation);

// Handle errors that might happen after rendering
// Display the error in full-screen for development mode
if (true) {
  window.addEventListener('error', function (event) {
    appInstance = null;
    document.title = 'Runtime Error: ' + event.error.message;
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__["ErrorReporter"], { error: event.error, __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: _this
    }), container);
  });
}

// Enable Hot Module Replacement (HMR)
if (false) {
  module.hot.accept('./routes', function () {
    routes = require('./routes').default; // eslint-disable-line global-require

    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        deepForceUpdate(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = 'Hot Update Error: ' + error.message;
        ReactDOM.render(React.createElement(ErrorReporter, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: _this
        }), container);
        return;
      }
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["logout"] = logout;
/* harmony export (immutable) */ __webpack_exports__["loginChangeAccountInput"] = loginChangeAccountInput;
/* harmony export (immutable) */ __webpack_exports__["loginChangePasswordInput"] = loginChangePasswordInput;
/* harmony export (immutable) */ __webpack_exports__["fetchLogin"] = fetchLogin;
/* harmony export (immutable) */ __webpack_exports__["passwordChangeOldInput"] = passwordChangeOldInput;
/* harmony export (immutable) */ __webpack_exports__["passwordChangeNewInput"] = passwordChangeNewInput;
/* harmony export (immutable) */ __webpack_exports__["passwordChangeNewConfirmInput"] = passwordChangeNewConfirmInput;
/* harmony export (immutable) */ __webpack_exports__["modifyPassword"] = modifyPassword;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_RestApi__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authActions__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routesActions__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__msgStackActions__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);







function logout() {
  return function (dispatch) {
    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["deleteAuth"])());
    return dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["L" /* USER_LOGOUT */] });
  };
}

function loginChangeAccountInput(account) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["M" /* LOGIN_CHANGE_ACCOUNT_INPUT */],
    payload: account
  };
}

function loginChangePasswordInput(password) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["N" /* LOGIN_CHANGE_PASSWORD_INPUT */],
    payload: password
  };
}

function requestLogin() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["O" /* REQUEST_LOGIN */]
  };
}

function receiveLogin(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["P" /* RECEIVE_LOGIN */],
    payload: data
  };
}

function receiveLoginError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["Q" /* RECEIVE_LOGIN_ERROR */],
    payload: error
  };
}

function fetchLogin(account, password) {
  return function (dispatch) {
    dispatch(requestLogin());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].login(account, password).then(function (data) {
      var auth = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'results.tokens');
      if (!__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isEmpty(auth)) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["saveAuth"])(auth));
        dispatch(receiveLogin(data));
      } else {
        dispatch(receiveLoginError({ errorMessage: __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'errorMessage') }));
      }
    });
  };
}

function passwordChangeOldInput(oldPassword) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["R" /* PASSWORD_CHANGE_OLD_INPUT */],
    payload: oldPassword
  };
}

function passwordChangeNewInput(newPassword) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["S" /* PASSWORD_CHANGE_NEW_INPUT */],
    payload: newPassword
  };
}

function passwordChangeNewConfirmInput(newPasswordConfirm) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["T" /* PASSWORD_CHANGE_NEW_CONFIRM_INPUT */],
    payload: newPasswordConfirm
  };
}

function requestModifyPassword() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["U" /* REQUEST_MODIFY_PASSWORD */]
  };
}

function receiveModifyPassword(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["V" /* RECEIVE_MODIFY_PASSWORD */],
    payload: data
  };
}

function receiveModifyPasswordError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["W" /* RECEIVE_MODIFY_PASSWORD_ERROR */],
    payload: error
  };
}

function modifyPassword(oldPassword, newPassword) {
  return function (dispatch) {
    dispatch(requestModifyPassword());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].password(oldPassword, newPassword).then(function (data) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["checkResponseAuth"])(dispatch, data);
      if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__authActions__["deleteAuth"])());
        dispatch(receiveModifyPassword(data));
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__routesActions__["showLogin"])());
      } else {
        dispatch(receiveModifyPasswordError({ message: __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(data, 'message') }));
      }
    });
  };
}

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestProducts"] = requestProducts;
/* harmony export (immutable) */ __webpack_exports__["receiveProducts"] = receiveProducts;
/* harmony export (immutable) */ __webpack_exports__["getProducts"] = getProducts;
/* harmony export (immutable) */ __webpack_exports__["showPopAddApp"] = showPopAddApp;
/* harmony export (immutable) */ __webpack_exports__["closePopAddApp"] = closePopAddApp;
/* harmony export (immutable) */ __webpack_exports__["popAddAppInput"] = popAddAppInput;
/* harmony export (immutable) */ __webpack_exports__["requestAddProducts"] = requestAddProducts;
/* harmony export (immutable) */ __webpack_exports__["receiveAddProducts"] = receiveAddProducts;
/* harmony export (immutable) */ __webpack_exports__["addProducts"] = addProducts;
/* harmony export (immutable) */ __webpack_exports__["requestDeployments"] = requestDeployments;
/* harmony export (immutable) */ __webpack_exports__["receiveDeployments"] = receiveDeployments;
/* harmony export (immutable) */ __webpack_exports__["fetchDeployments"] = fetchDeployments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_RestApi__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authActions__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__msgStackActions__ = __webpack_require__(146);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








function requestProducts() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["X" /* REQUEST_PRODUCTS */]
  };
}

function receiveProducts(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Y" /* RECEIVE_PRODUCTS */],
    payload: data
  };
}

function getProducts() {
  return function (dispatch) {
    dispatch(requestProducts());
    return __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].getProducts().then(function (data) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__authActions__["checkResponseAuth"])(dispatch, data);
      dispatch(receiveProducts(data));
    });
  };
}

function showPopAddApp() {
  return { type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Z" /* SHOW_POP_ADD_APP */] };
}

function closePopAddApp() {
  return { type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_0" /* CLOSE_POP_ADD_APP */] };
}

function popAddAppInput(params) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_1" /* POP_ADD_APP_INPUT */],
    payload: params
  };
}

function requestAddProducts() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_2" /* REQUEST_ADD_PRODUCTS */]
  };
}

function receiveAddProducts(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_3" /* RECEIVE_ADD_PRODUCTS */],
    payload: data
  };
}

function addProducts(appName, os, platform) {
  return function (dispatch) {
    dispatch(requestAddProducts());
    return __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].addProducts(appName, os, platform).then(function (data) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__authActions__["checkResponseAuth"])(dispatch, data);
      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(data, 'status') !== "OK") {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__msgStackActions__["addShowMsg"])("创建应用: " + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(data, 'errorMessage'), "danger"));
      } else {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__msgStackActions__["addShowMsg"])("创建 " + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(data, 'results.app.name') + " 应用成功", "success"));
      }
      dispatch(receiveAddProducts(data));
      dispatch(getProducts());
    });
  };
}

function requestDeployments(appName) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_4" /* REQUEST_PRODUCTS_DEPLOYMENTS */],
    payload: appName
  };
}

function receiveDeployments(appName, data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_5" /* RECEIVE_PRODUCTS_DEPLOYMENTS */],
    payload: _extends({ appName: appName }, data)
  };
}

function fetchDeployments(appName) {
  return function (dispatch) {
    dispatch(requestDeployments(appName));
    return __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].getDeployments(appName).then(function (data) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__authActions__["checkResponseAuth"])(dispatch, data);
      dispatch(receiveDeployments(appName, data));
    });
  };
}

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(306);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Footer/Footer.js';






function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'footer',
    { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.text, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        '\xA9 NativeScript AppSync'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        '\xB7'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        'Home'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        '\xB7'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, target: '_blank', href: 'https://github.com/EddyVerbruggen/nativescript-app-sync-server/issues/new', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        },
        'Report an issue'
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Navigation__ = __webpack_require__(522);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Header/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["h" /* Navbar */],
        { style: { fontWeight: 400 }, inverse: true, collapseOnSelect: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["h" /* Navbar */].Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["h" /* Navbar */].Brand,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */],
              { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brand, to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: this
                },
                'NativeScript AppSync'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["h" /* Navbar */].Toggle, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(this.props, 'noNav') !== true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Navigation__["a" /* default */], { isAuth: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(this.props, 'isAuth'), __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }) : null
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Header.propTypes = {
  isAuth: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  noNav: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool
};
Header.defaultProps = {
  isAuth: false,
  noNav: false
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Header_css___default.a)(Header));

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_RestApi__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(144);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/App/App.prod.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








var ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
  }).isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var aQQGuid = localStorage.getItem('aQQ_guid');
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(aQQGuid) || aQQGuid.length < 10) {
        aQQGuid = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v1();
        localStorage.setItem('aQQ_guid', aQQGuid);
      }
      var sessid = sessionStorage.getItem('sessid');
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(sessid) || sessid.length < 10) {
        sessid = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v1();
        sessionStorage.setItem('sessid', sessid);
      }
      __WEBPACK_IMPORTED_MODULE_4__network_RestApi__["a" /* default */].setUUID(sessid, aQQGuid);
      this.props.context.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_authActions__["fetchAuth"])());
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.props.context.store;
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children)
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  module.exports = require('./App.dev');
} else {
  module.exports = __webpack_require__(518);
}

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_dock_monitor__ = __webpack_require__(1237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_dock_monitor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_dock_monitor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_multiple_monitors__ = __webpack_require__(1259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_multiple_monitors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_multiple_monitors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_inspector__ = __webpack_require__(1246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_inspector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_inspector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_devtools_dispatch__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_devtools_dispatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_devtools_dispatch__);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/DevTools/index.js';







/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_devtools__["createDevTools"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_redux_devtools_dock_monitor___default.a,
  {
    toggleVisibilityKey: 'ctrl-h',
    changePositionKey: 'ctrl-q',
    defaultIsVisible: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_redux_devtools_multiple_monitors___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_inspector___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_redux_devtools_dispatch___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })
  )
)));

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(195);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/MsgStack/MsgStack.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MsgStack = function (_Component) {
  _inherits(MsgStack, _Component);

  _createClass(MsgStack, [{
    key: 'checkItemsInterval',
    value: function checkItemsInterval() {
      var self = this;
      if (this.props.items && this.props.items.length > 0) {
        if (this.intervalId) {
          return;
        }
        this.intervalId = setInterval(function () {
          var time = parseInt(new Date().getTime() / 1000);
          __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(self.props.items, function (item) {
            if (parseInt(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'time')) + parseInt(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'showTime')) < time) {
              self.props.close(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'id'));
            }
          });
        }, 1000);
      } else {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }]);

  function MsgStack() {
    _classCallCheck(this, MsgStack);

    var _this = _possibleConstructorReturn(this, (MsgStack.__proto__ || Object.getPrototypeOf(MsgStack)).call(this));

    _this.intervalId = null;

    _this.checkItemsInterval = _this.checkItemsInterval.bind(_this);
    return _this;
  }

  _createClass(MsgStack, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(this.checkItemsInterval, 200);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      setTimeout(this.checkItemsInterval, 200);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(self.props.items, function (item) {
          var bsStyle = "info";
          if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.indexOf(["info", "warning", "danger", "success"], item.type) !== -1) {
            bsStyle = item.type;
          }
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Alert */],
            { key: item.id, style: { marginTop: -15 }, bsStyle: bsStyle, onDismiss: function onDismiss() {
                self.props.close(item.id);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            },
            item.text
          );
        })
      );
    }
  }]);

  return MsgStack;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MsgStack.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].array,
  close: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
MsgStack.defaultProps = {
  items: [],
  close: function close() {}
};


/* harmony default export */ __webpack_exports__["a"] = (MsgStack);

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(149);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Navigation/Navigation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'handleSelect',
    value: function handleSelect(selectedKey) {
      if (selectedKey === 1) {
        __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/apps');
      } else if (selectedKey === 2) {
        __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/accessKeys');
      } else if (selectedKey === 3.1) {
        __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/users/settings');
      } else if (selectedKey === 3.2) {
        __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/logout');
      } else if (selectedKey === 4) {
        __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/login');
      } else if (selectedKey === 5) {
        __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push('/register');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var loginView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["i" /* NavItem */],
        { eventKey: 4, href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        },
        'Log in'
      );
      var registerView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["i" /* NavItem */],
        { eventKey: 5, href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        },
        'Register'
      );
      var personNav = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["j" /* NavDropdown */],
        { eventKey: 3, title: 'Settings', id: 'basic-nav-dropdown', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["k" /* MenuItem */],
          { eventKey: 3.1, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          },
          'Change password'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["k" /* MenuItem */], { divider: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["k" /* MenuItem */],
          { eventKey: 3.2, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          },
          'Log out'
        )
      );
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["h" /* Navbar */].Collapse,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["l" /* Nav */],
          { onSelect: this.handleSelect, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["i" /* NavItem */],
            { eventKey: 1, href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            'Manage apps'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["i" /* NavItem */],
            { eventKey: 2, href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            },
            'Access keys'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["l" /* Nav */],
          { onSelect: this.handleSelect, pullRight: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'isAuth') === true ? personNav : null,
          __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'isAuth') !== true ? loginView : null,
          __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'isAuth') !== true ? registerView : null
        )
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Navigation.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  isAuth: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool
};


/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export port */
/* unused harmony export host */
/* unused harmony export analytics */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return common; });
/* eslint-disable max-len */

var port = process.env.PORT || 3001;
// export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
var host = process.env.WEBSITE_HOSTNAME || 'https://appsync-server.tyltgoapp.com';

var analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
  }

};

var common = {
  api: {
    URL: process.env.PROD_SERVER_URL || 'https://appsync-server.tyltgoapp.com', // production code-push-server address
    devURL: process.env.DEV_SERVER_URL || 'https://appsync-server.tyltgoapp.com' // development code-push-server address
  }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(100)))

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__ = __webpack_require__(196);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var LogoutContainer = function (_Component) {
  _inherits(LogoutContainer, _Component);

  function LogoutContainer() {
    _classCallCheck(this, LogoutContainer);

    return _possibleConstructorReturn(this, (LogoutContainer.__proto__ || Object.getPrototypeOf(LogoutContainer)).apply(this, arguments));
  }

  _createClass(LogoutContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
        this.props.actions.logout();
      }
      this.props.actions.showHome();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return LogoutContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
  return { 'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LogoutContainer));

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MsgStack__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_msgStackActions__ = __webpack_require__(146);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/MsgStackContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MsgStackContainer = function (_Component) {
  _inherits(MsgStackContainer, _Component);

  function MsgStackContainer() {
    _classCallCheck(this, MsgStackContainer);

    return _possibleConstructorReturn(this, (MsgStackContainer.__proto__ || Object.getPrototypeOf(MsgStackContainer)).apply(this, arguments));
  }

  _createClass(MsgStackContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          msgStack = _props.msgStack,
          actions = _props.actions;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { position: 'fixed', top: 80, right: 20, minWidth: 100, maxWidth: 300 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_MsgStack__["a" /* default */], {
          items: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(msgStack, 'rs', []),
          close: function close(id) {
            actions.closeMsg(id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        })
      );
    }
  }]);

  return MsgStackContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
  return { 'msgStack': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'msgStack', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__actions_msgStackActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(MsgStackContainer));

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateTag */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateMeta;
/* unused harmony export updateCustomMeta */
/* unused harmony export updateLink */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

if (true) {
  module.exports = {
    // The red box (aka red screen of death) component to display your errors
    // https://github.com/commissure/redbox-react
    ErrorReporter: __webpack_require__(1231).default,

    // Force-updates React component tree recursively
    // https://github.com/gaearon/react-deep-force-update
    deepForceUpdate: __webpack_require__(1116)
  };
}

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auth;
/* harmony export (immutable) */ __webpack_exports__["b"] = accessKeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_RestApi__ = __webpack_require__(80);




function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["v" /* REQUEST_AUTH */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["w" /* RECEIVE_AUTH */]:
      var isAuth = false;
      var auth = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload');
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(auth)) {
        isAuth = true;
        __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].setAuthToken(['auth', auth]);
      }
      return Object.assign({}, state, {
        token: auth,
        isFetching: false,
        isAuth: isAuth
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["x" /* SAVE_AUTH */]:
      var auth = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload');
      __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].setAuthToken(['auth', auth]);
      sessionStorage.setItem('auth', auth);
      return Object.assign({}, state, { token: auth, isAuth: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["y" /* DELETE_AUTH */]:
      __WEBPACK_IMPORTED_MODULE_2__network_RestApi__["a" /* default */].deleteAuthToken();
      sessionStorage.removeItem('auth');
      return Object.assign({}, state, { token: null, isAuth: false });

    default:
      return state;
  }
}

function accessKeys() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["z" /* REQUEST_ACCESS_KEYS */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["A" /* RECEIVE_ACCESS_KEYS */]:
      return Object.assign({}, state, {
        isFetching: false,
        rs: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.accessKeys')
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["B" /* REQUEST_REMOVE_ACCESS_KEY */]:
      return Object.assign({}, state, { isRemoving: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["C" /* RECEIVE_REMOVE_ACCESS_KEY */]:
      var friendlyName = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.friendlyName');
      var data = Object.assign({}, state);
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.remove(data.rs, function (row) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(row, 'friendlyName') == friendlyName;
      });
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, 'isRemoving', false);
      return data;
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["D" /* REQUEST_PATCH_ACCESS_KEY */]:
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["E" /* RECEIVE_PATCH_ACCESS_KEY */]:
      var friendlyName = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.friendlyName');
      var data = Object.assign({}, state);
      var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(data.rs, function (row) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(row, 'friendlyName') == friendlyName;
      });
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey')) {
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, 'rs.' + index, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey'));
      }
      return data;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["F" /* REQUEST_CREATE_ACCESS_KEY */]:
      return Object.assign({}, state, { isCreating: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["G" /* RECEIVE_CREATE_ACCESS_KEY */]:
      var data = Object.assign({}, state);
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey')) {
        data.rs.unshift(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload.results.accessKey'));
      }
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, 'isCreating', false);
      return data;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["H" /* OPEN_POP_SHOW_KEY */]:
      var isOpen = false;
      var token = '';
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload')) {
        isOpen = true;
        token = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload');
      }
      return Object.assign({}, state, { showKey: { isOpen: isOpen, token: token } });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["I" /* CLOSE_POP_SHOW_KEY */]:
      return Object.assign({}, state, { showKey: { isOpen: false, token: '' } });

    default:
      return state;
  }
}

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registers__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__msgStack__ = __webpack_require__(530);










var appReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({
  users: __WEBPACK_IMPORTED_MODULE_3__users__["a" /* users */],
  password: __WEBPACK_IMPORTED_MODULE_3__users__["b" /* password */],
  login: __WEBPACK_IMPORTED_MODULE_3__users__["c" /* login */],
  register: __WEBPACK_IMPORTED_MODULE_4__registers__["a" /* register */],
  auth: __WEBPACK_IMPORTED_MODULE_5__auth__["a" /* auth */],
  accessKeys: __WEBPACK_IMPORTED_MODULE_5__auth__["b" /* accessKeys */],
  routes: __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routes */],
  products: __WEBPACK_IMPORTED_MODULE_7__products__["a" /* products */],
  addProducts: __WEBPACK_IMPORTED_MODULE_7__products__["b" /* addProducts */],
  deployments: __WEBPACK_IMPORTED_MODULE_7__products__["c" /* deployments */],
  msgStack: __WEBPACK_IMPORTED_MODULE_8__msgStack__["a" /* msgStack */]
});

var rootReducer = function rootReducer(state, action) {
  if (action.type === __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["L" /* USER_LOGOUT */]) {
    var data = Object.assign({}, state);
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'auth', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'users', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'password', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'products', {});
    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.set(data, 'accessKeys', {});
    return appReducer(data, action);
  }
  return appReducer(state, action);
};

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = msgStack;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_RestApi__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);





function msgStack() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { rs: [] };
  var action = arguments[1];

  var payload = action.payload;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["J" /* MSG_STACK_SHOW_MSG */]:
      var id = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v4();
      var data = Object.assign({}, state);
      var msg = {
        id: id,
        type: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(payload, 'type'),
        text: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(payload, 'text'),
        showTime: parseInt(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(payload, 'showTime')),
        time: parseInt(new Date().getTime() / 1000)
      };
      var rs = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'rs', []);
      rs.unshift(msg);
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(data, 'rs', rs);
      return data;

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["K" /* MSG_STACK_CLOSE_MSG */]:
      var id = payload;
      var data = Object.assign({}, state);
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.remove(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'rs', []), function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(item, 'id') === id;
      });
      return data;

    default:
      return state;
  }
}

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = products;
/* harmony export (immutable) */ __webpack_exports__["c"] = deployments;
/* harmony export (immutable) */ __webpack_exports__["b"] = addProducts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(43);




function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["X" /* REQUEST_PRODUCTS */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["Y" /* RECEIVE_PRODUCTS */]:
      return Object.assign({}, state, {
        isFetching: false,
        rs: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload.apps')
      });

    default:
      return state;
  }
}

function deployments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { rs: {} };
  var action = arguments[1];

  var payload = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload');
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_4" /* REQUEST_PRODUCTS_DEPLOYMENTS */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_5" /* RECEIVE_PRODUCTS_DEPLOYMENTS */]:
      var data = Object.assign({}, state, { isFetching: false });
      var appName = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'appName');
      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(data, 'rs.' + appName, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'results.deployments'));
      return data;

    default:
      return state;
  }
}

function addProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var payload = action.payload;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["Z" /* SHOW_POP_ADD_APP */]:
      return { showModal: true };

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_0" /* CLOSE_POP_ADD_APP */]:
      return Object.assign({}, state, { showModal: false });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_1" /* POP_ADD_APP_INPUT */]:
      var appName = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'appName');
      var os = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'os');
      var platform = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'platform');
      if (appName !== undefined) {
        var REGEX = /^\w+$/;
        if (REGEX.test(appName)) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowNameError', false);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowNameError', true);
        }
      }
      if (os !== undefined) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.indexOf(['iOS', 'Android', 'Windows'], os) !== -1) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowOSError', false);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowOSError', true);
        }
      }
      if (platform !== undefined) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.indexOf(['React-Native', 'Cordova', 'NativeScript'], platform) !== -1) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowPlatformError', false);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(payload, 'isShowPlatformError', true);
        }
      }
      return Object.assign({}, state, payload);

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_2" /* REQUEST_ADD_PRODUCTS */]:
      return Object.assign({}, state, { isOnSubmiting: true });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["_3" /* RECEIVE_ADD_PRODUCTS */]:
      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'status') == 'OK') {
        return { isOnSubmiting: false };
      } else {
        return Object.assign({}, state, { isOnSubmiting: false, errorTip: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(payload, 'errorMessage') });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);



function register() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["a" /* REGISTER_CHANGE_EMAIL_INPUT */]:
      return Object.assign({}, state, { email: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["b" /* REQUEST_REGISTER_CHECK_EMAIL */]:
      return Object.assign({}, state, { isCheckingEmail: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["c" /* RECEIVE_REGISTER_CHECK_EMAIL */]:
      return Object.assign({}, state, { isCheckingEmail: false, step: 2, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["d" /* RECEIVE_REGISTER_CHECK_EMAIL_ERROR */]:
      return Object.assign({}, state, { isCheckingEmail: false, error: action.payload });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["e" /* REGISTER_CHANGE_VALIDATE_CODE_INPUT */]:
      return Object.assign({}, state, { validateCode: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["f" /* REQUEST_REGISTER_SEND_VALIDATE_CODE */]:
      return Object.assign({}, state, { isSending: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["g" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE */]:
      var lastSendTime = parseInt(new Date().getTime() / 1000);
      return Object.assign({}, state, {
        isSending: false,
        lastSendTime: lastSendTime,
        validateCode: '',
        error: null
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["h" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR */]:
      return Object.assign({}, state, { isSending: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["i" /* REQUEST_REGISTER_CHECK_CODE_EXISTS */]:
      return Object.assign({}, state, { isSubmitStepTwo: true, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["j" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS */]:
      return Object.assign({}, state, { isSubmitStepTwo: false, step: 3, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["k" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR */]:
      return Object.assign({}, state, { isSubmitStepTwo: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["l" /* REGISTER_CHANGE_PASSWORD_INPUT */]:
      return Object.assign({}, state, { password: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["m" /* REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT */]:
      return Object.assign({}, state, { passwordConfirm: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["n" /* REQUEST_REGISTER */]:
      return Object.assign({}, state, { isSubmitStepThree: true, error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["o" /* RECEIVE_REGISTER */]:
      return Object.assign({}, state, {
        isSubmitStepThree: false,
        step: 4,
        password: '',
        passwordConfirm: '',
        error: null
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["p" /* RECEIVE_REGISTER_ERROR */]:
      return Object.assign({}, state, { isSubmitStepThree: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["q" /* RECEIVE_REGISTER_CLEAN */]:
      return {};

    default:
      return state;
  }
}

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(149);




function routes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["s" /* GO_BACK_HISTORY */]:
      var historyUri = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, 'history', '/');
      __WEBPACK_IMPORTED_MODULE_2__core_history__["a" /* default */].replace(historyUri);
      return Object.assign({}, state, { history: '/' });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["r" /* SET_BACK_HISTORY */]:
      return Object.assign({}, state, { history: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["t" /* SHOW_HOME */]:
      __WEBPACK_IMPORTED_MODULE_2__core_history__["a" /* default */].replace('/');
      return state;

    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__["u" /* SHOW_LOGIN */]:
      __WEBPACK_IMPORTED_MODULE_2__core_history__["a" /* default */].replace('/login');
      return state;

    default:
      return state;
  }
}

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = users;
/* harmony export (immutable) */ __webpack_exports__["c"] = login;
/* harmony export (immutable) */ __webpack_exports__["b"] = password;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {

    default:
      return state;
  }
}

function login() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["M" /* LOGIN_CHANGE_ACCOUNT_INPUT */]:
      return Object.assign({}, state, { account: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["N" /* LOGIN_CHANGE_PASSWORD_INPUT */]:
      return Object.assign({}, state, { password: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["O" /* REQUEST_LOGIN */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["P" /* RECEIVE_LOGIN */]:
      return Object.assign({}, state, {
        isFetching: false,
        password: '',
        error: null
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["Q" /* RECEIVE_LOGIN_ERROR */]:
      return Object.assign({}, state, {
        isFetching: false,
        error: _extends({}, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'))
      });
    default:
      return state;
  }
}

function password() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["R" /* PASSWORD_CHANGE_OLD_INPUT */]:
      return Object.assign({}, state, { oldPassword: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["S" /* PASSWORD_CHANGE_NEW_INPUT */]:
      return Object.assign({}, state, { newPassword: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["T" /* PASSWORD_CHANGE_NEW_CONFIRM_INPUT */]:
      return Object.assign({}, state, { newPasswordConfirm: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload'), error: null });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["U" /* REQUEST_MODIFY_PASSWORD */]:
      return Object.assign({}, state, { isFetching: true });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["V" /* RECEIVE_MODIFY_PASSWORD */]:
      return { isFetching: false };

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["W" /* RECEIVE_MODIFY_PASSWORD_ERROR */]:
      return Object.assign({}, state, { isFetching: false, error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(action, 'payload') });

    default:
      return state;
  }
}

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_authActions__ = __webpack_require__(144);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/accessKeys/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/accessKeys',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var AccessKeysContainer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                setTimeout(function () {
                  store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_authActions__["fetchAccessKeys"])());
                }, 100);
              }
              _context.next = 3;
              return __webpack_require__.e/* require.ensure */(2).then((function (require) {
                return __webpack_require__(1289).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 3:
              AccessKeysContainer = _context.sent;
              return _context.abrupt('return', {
                title: 'My access keys',
                chunk: 'accessKeys',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AccessKeysContainer, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: _this
                  })
                )
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_LayoutContainer__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_RestApi__ = __webpack_require__(80);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/home/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action: function action() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var HomeContainer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e/* require.ensure */(0).then((function (require) {
                return __webpack_require__(510).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 2:
              HomeContainer = _context.sent;
              return _context.abrupt('return', {
                title: 'AppSync Server',
                chunk: 'home',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HomeContainer, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: _this
                  })
                )
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  actionORIG: function actionORIG() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var resp, data, HomeContainer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__network_RestApi__["a" /* default */].buildWebUsageUrl(), {
                method: 'get',
                timeout: 5000,
                headers: {
                  Accept: 'text/html',
                  'Content-Type': 'text/html'
                }
              });

            case 2:
              resp = _context2.sent;

              if (!(resp.status !== 200)) {
                _context2.next = 5;
                break;
              }

              throw new Error(resp.statusText);

            case 5:
              _context2.next = 7;
              return resp.text();

            case 7:
              data = _context2.sent;
              _context2.next = 10;
              return __webpack_require__.e/* require.ensure */(0).then((function (require) {
                return __webpack_require__(510).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 10:
              HomeContainer = _context2.sent;
              return _context2.abrupt('return', {
                title: 'AppSync Server',
                chunk: 'home',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__containers_LayoutContainer__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HomeContainer, { html: data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: _this2
                  })
                )
              });

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(536).default, __webpack_require__(309).default, __webpack_require__(309).logout, __webpack_require__(200).default, __webpack_require__(200).appDetails, __webpack_require__(200).deployments, __webpack_require__(535).default, __webpack_require__(310).default, __webpack_require__(310).settings, __webpack_require__(540).default,
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(539).default],

  action: function action(_ref) {
    var _this = this;

    var next = _ref.next;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              route = _context.sent;


              // Provide default values for title, description etc.
              route.title = '' + (route.title || 'Untitled Page');
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/notFound/NotFound.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(538);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action: function action() {
    return {
      title: title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      ),
      status: 404
    };
  }
});

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(147);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/register/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/register',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var RegisterContainer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              if (true) {}

              _context.next = 3;
              return __webpack_require__.e/* require.ensure */(3).then((function (require) {
                return __webpack_require__(1294).default;
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 3:
              RegisterContainer = _context.sent;
              return _context.abrupt('return', {
                title: 'Register',
                chunk: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RegisterContainer, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    },
                    __self: _this
                  })
                )
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(1267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createHelpers__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DevTools__ = __webpack_require__(520);








function configureStore(initialState, helpersConfig) {
  var helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createHelpers__["a" /* default */])(helpersConfig);
  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk__["a" /* default */].withExtraArgument(helpers)];

  var enhancer = void 0;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };
    if (true && window.devToolsExtension) {
      devToolsExtension = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_devtools__["persistState"])(window.location.href.match(/[?&]debug_session=([^&#]+)\b/));
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* applyMiddleware */].apply(undefined, middleware), __WEBPACK_IMPORTED_MODULE_6__components_DevTools__["a" /* default */].instrument(), devToolsExtension);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', function () {
      return (
        // eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(541);
} else {
  module.exports = require('./configureStore.prod');
}

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(199);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, variables) {
      var fetchConfig, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchConfig = {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query, variables: variables }),
                credentials: 'include'
              };
              _context.next = 3;
              return fetchKnowingCookie('/graphql', fetchConfig);

            case 3:
              resp = _context.sent;

              if (!(resp.status !== 200)) {
                _context.next = 6;
                break;
              }

              throw new Error(resp.statusText);

            case 6:
              return _context.abrupt('return', resp.json());

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  }();
}

function createFetchKnowingCookie(_ref2) {
  var cookie = _ref2.cookie;

  if (false) {
    return function (url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        var headers = _extends({}, options.headers, {
          cookie: cookie
        });
        return fetch(url, _extends({}, options, { headers: headers }));
      }

      return fetch(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  var fetchKnowingCookie = createFetchKnowingCookie(config);
  var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest: graphqlRequest,
    history: config.history
  };
}

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(1266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);


function createLogger() {
  return __WEBPACK_IMPORTED_MODULE_0_redux_logger___default()({
    collapsed: true
  });
}

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buffer__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(199);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;




var TIMEOUT = 10000;

var RestApi = function () {
  function RestApi() {
    _classCallCheck(this, RestApi);

    if (instance) return instance;
    instance = this;
    if (true) {
      this.baseURI = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* common */], 'api.devURL', 'http://localhost:3000');
    } else {
      this.baseURI = _.get(common, 'api.URL', 'http://localhost:3000');
    }
    this.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    this.dealResponse = this.dealResponse.bind(this);
    this.jsonDecode = this.jsonDecode.bind(this);
    this.setAuthToken = this.setAuthToken.bind(this);
    this.deleteAuthToken = this.deleteAuthToken.bind(this);
  }

  _createClass(RestApi, [{
    key: 'setUUID',
    value: function setUUID(sessid, aQQGuid) {
      this.uuid = sessid;
      this.aQQGuid = aQQGuid;
    }
  }, {
    key: 'getProducts',
    value: function getProducts() {
      return this.get('/apps').then(this.jsonDecode);
    }
  }, {
    key: 'login',
    value: function login(account, password) {
      return this.post('/auth/login', { account: account, password: password, minutes: 43200 }).then(this.jsonDecode);
    }
  }, {
    key: 'getAccessKeys',
    value: function getAccessKeys() {
      return this.get('/accessKeys').then(this.jsonDecode);
    }
  }, {
    key: 'getDeployments',
    value: function getDeployments(appName) {
      var _this = this;

      return this.get('/apps/' + appName + '/deployments').then(function (data) {
        if (data.httpCode == 200) {
          var rs = _this.jsonDecode(data);
          if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
            return { status: "OK", httpCode: data.httpCode, results: rs };
          } else {
            return rs;
          }
        } else {
          return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
        }
      });
    }
  }, {
    key: 'addProducts',
    value: function addProducts(appName, os, platform) {
      var _this2 = this;

      return this.post('/apps', { name: appName, os: os, platform: platform }).then(function (data) {
        if (data.httpCode == 200) {
          var rs = _this2.jsonDecode(data);
          if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
            return { status: "OK", httpCode: data.httpCode, results: rs };
          } else {
            return rs;
          }
        } else {
          return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
        }
      });
    }
  }, {
    key: 'removeAccessKey',
    value: function removeAccessKey(name) {
      var _this3 = this;

      return this.delete('/accessKeys/' + encodeURI(name)).then(function (data) {
        if (data.httpCode == 200) {
          var rs = _this3.jsonDecode(data);
          if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
            return { status: "OK", httpCode: data.httpCode, results: rs };
          } else {
            return rs;
          }
        } else {
          return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
        }
      });
    }
  }, {
    key: 'patchAccessKey',
    value: function patchAccessKey(name) {
      var _this4 = this;

      var friendlyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      return this.patch('/accessKeys/' + encodeURI(name), { friendlyName: friendlyName, ttl: ttl }).then(function (data) {
        if (data.httpCode == 200) {
          var rs = _this4.jsonDecode(data);
          if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
            return { status: "OK", httpCode: data.httpCode, results: rs };
          } else {
            return rs;
          }
        } else {
          return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
        }
      });
    }
  }, {
    key: 'createAccessKey',
    value: function createAccessKey() {
      var _this5 = this;

      var time = new Date().getTime();
      var friendlyName = 'Login-' + time;
      var ttl = 30 * 2 * 24 * 60 * 60 * 1000;
      var createdBy = friendlyName;
      var isSession = true;
      return this.post('/accessKeys', { friendlyName: friendlyName, ttl: ttl, createdBy: createdBy, isSession: isSession }).then(function (data) {
        if (data.httpCode == 200) {
          var rs = _this5.jsonDecode(data);
          if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(rs, 'status') != "ERROR") {
            return { status: "OK", httpCode: data.httpCode, results: rs };
          } else {
            return rs;
          }
        } else {
          return { status: "ERROR", httpCode: data.httpCode, errorCode: 0, errorMessage: data.text };
        }
      });
    }
  }, {
    key: 'checkEmailExists',
    value: function checkEmailExists(email) {
      return this.get('/users/exists?email=' + encodeURI(email)).then(this.jsonDecode);
    }
  }, {
    key: 'sendRegisterCode',
    value: function sendRegisterCode(email) {
      return this.post('/users/registerCode', { email: email }).then(this.jsonDecode);
    }
  }, {
    key: 'checkRegisterCodeExists',
    value: function checkRegisterCodeExists(email, code) {
      var query = 'email=' + encodeURI(email) + '&token=' + encodeURI(code);
      return this.get('/users/registerCode/exists?' + query).then(this.jsonDecode);
    }
  }, {
    key: 'register',
    value: function register(email, password, token) {
      return this.post('/users', { email: email, password: password, token: token }).then(this.jsonDecode);
    }
  }, {
    key: 'password',
    value: function password(oldPassword, newPassword) {
      return this.patch('/users/password', { oldPassword: oldPassword, newPassword: newPassword }).then(this.jsonDecode);
    }
  }, {
    key: 'buildReadmeUrl',
    value: function buildReadmeUrl() {
      return this.baseURI + '/README.md';
    }
  }, {
    key: 'buildWebUsageUrl',
    value: function buildWebUsageUrl() {
      return this.baseURI + '/WEB_USAGE.md';
    }
  }, {
    key: 'dealResponse',
    value: function dealResponse(response) {
      var self = this;
      return response.text().then(function (text) {
        if (true) {
          console.log(self.headers);
          console.log(response.url);
          console.log(text);
        }
        return { httpCode: response.status, text: text };
      });
    }
  }, {
    key: 'jsonDecode',
    value: function jsonDecode(response) {
      try {
        return JSON.parse(response.text);
      } catch (e) {
        return { status: 'ERROR', httpCode: response.httpCode, errorCode: 0, errorMessage: e.message, results: response.text };
      }
    }
  }, {
    key: 'get',
    value: function get(uri) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
        method: 'GET',
        headers: this.headers,
        timeout: TIMEOUT
      }).then(this.dealResponse).catch(function (e) {
        return { httpCode: 0, text: '网络错误，请重试!' };
      });
    }
  }, {
    key: 'post',
    value: function post(uri) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(params),
        timeout: TIMEOUT
      }).then(this.dealResponse).catch(function (e) {
        return { httpCode: 0, text: '网络错误，请重试!' };
      });
    }
  }, {
    key: 'patch',
    value: function patch(uri) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(params),
        timeout: TIMEOUT
      }).then(this.dealResponse).catch(function (e) {
        return { httpCode: 0, text: '网络错误，请重试!' };
      });
    }
  }, {
    key: 'delete',
    value: function _delete(uri) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])(this.baseURI + uri, {
        method: 'DELETE',
        headers: this.headers,
        body: JSON.stringify(params),
        timeout: TIMEOUT
      }).then(this.dealResponse).catch(function (e) {
        return { httpCode: 0, text: '网络错误，请重试!' };
      });
    }
  }, {
    key: 'isAuth',
    value: function isAuth() {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.headers.Authorization) ? false : true;
    }
  }, {
    key: 'getHeaders',
    value: function getHeaders() {
      return this.headers;
    }
  }, {
    key: 'deleteAuthToken',
    value: function deleteAuthToken() {
      delete this.headers.Authorization;
    }
  }, {
    key: 'setAuthToken',
    value: function setAuthToken(creds) {
      if (typeof creds === 'string') {
        var index = creds.indexOf(':');
        if (index !== -1) {
          creds = [creds.substr(0, index), creds.substr(index + 1)];
        }
      }

      if (!Array.isArray(creds)) creds = [].slice.call(arguments);

      switch (creds.length) {
        case 0:
          creds = ['', ''];
          break;
        case 1:
          creds.push('');
          break;
        case 2:
          break;
        default:
          throw new Error('auth option can only have two keys `[user, pass]`');
      }

      if (typeof creds[0] !== 'string') throw new Error('auth option `user` must be a string');

      if (typeof creds[1] !== 'string') throw new Error('auth option `pass` must be a string');

      if (!creds[0] && !creds[1]) delete this.headers.Authorization;else this.headers.Authorization = 'Basic ' + new __WEBPACK_IMPORTED_MODULE_0_buffer___default.a.Buffer(creds.join(':')).toString('base64');

      return this;
    }
  }]);

  return RestApi;
}();

/* harmony default export */ __webpack_exports__["a"] = (new RestApi());

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer-root-3Jihw {\n  /*position: absolute;*/\n  /*bottom: 0;*/\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  background-color: #222;\n  border-color: #080808;\n}\n\n.Footer-container-n1bVC {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text-2mr6B {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-3HO-I {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-2mr6B,\n.Footer-link-1sUkm {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-1sUkm,\n.Footer-link-1sUkm:active,\n.Footer-link-1sUkm:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-1sUkm:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Footer/Footer.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AC5BD;EACE,uBAAuB;EACvB,cAAc;EACd,YAAY;EACZ,6CAA6C;EAC7C,aAAa;EACb,uBAAuB;EACvB,sBAAsB;CACvB;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../variables.css';\n\n.root {\n  /*position: absolute;*/\n  /*bottom: 0;*/\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  background-color: #222;\n  border-color: #080808;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Footer-root-3Jihw",
	"container": "Footer-container-n1bVC",
	"text": "Footer-text-2mr6B",
	"spacer": "Footer-spacer-3HO-I",
	"link": "Footer-link-1sUkm"
};

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Header-brand-19lnX {\n  color: lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Header/Header.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AC3BD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","\n@import '../variables.css';\n\n.brand {\n  color: lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"brand": "Header-brand-19lnX"
};

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n  height: 100%;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Layout/Layout.css","/home/adnan/codes/tylts/nativescript-app-sync-web/node_modules/normalize.css/normalize.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;ADjcD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;EAC/B,aAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n  height: 100%;\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound-root-3whbd {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-1BOHG {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/routes/notFound/NotFound.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-3whbd",
	"container": "NotFound-container-1BOHG"
};

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(862);
    var insertCss = __webpack_require__(142);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(863);
    var insertCss = __webpack_require__(142);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(864);
    var insertCss = __webpack_require__(142);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(865);
    var insertCss = __webpack_require__(142);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./diff_match_patch_uncompressed": 383,
	"./diff_match_patch_uncompressed.js": 383
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 909;

/***/ })

},[1288]);
//# sourceMappingURL=client.js.map