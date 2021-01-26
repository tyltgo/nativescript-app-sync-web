webpackJsonp([6],{

/***/ 1290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Deployment__ = __webpack_require__(1500);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/DeploymentContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var DeploymentContainer = function (_Component) {
  _inherits(DeploymentContainer, _Component);

  function DeploymentContainer() {
    _classCallCheck(this, DeploymentContainer);

    return _possibleConstructorReturn(this, (DeploymentContainer.__proto__ || Object.getPrototypeOf(DeploymentContainer)).apply(this, arguments));
  }

  _createClass(DeploymentContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
        var path = location.pathname;
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(location.search)) {
          path += '?' + location.search;
        }
        this.props.actions.setBackHistory(path);
        this.props.actions.fetchAuth(true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          appName = _props.appName,
          deploymentName = _props.deploymentName,
          actions = _props.actions;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Deployment__["a" /* default */], { appName: appName, deploymentName: deploymentName, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    }
  }]);

  return DeploymentContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DeploymentContainer.propTypes = {
  appName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  deploymentName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};
DeploymentContainer.defaultProps = {
  appName: '',
  deploymentName: ''
};


function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'products': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'products', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(DeploymentContainer));

/***/ }),

/***/ 1500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Deployment_css__ = __webpack_require__(1603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Deployment_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Deployment_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(306);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Deployment/Deployment.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Deployment = function (_Component) {
  _inherits(Deployment, _Component);

  function Deployment() {
    _classCallCheck(this, Deployment);

    return _possibleConstructorReturn(this, (Deployment.__proto__ || Object.getPrototypeOf(Deployment)).call(this));
  }

  _createClass(Deployment, [{
    key: 'render',
    value: function render() {
      var self = this;
      var tipText = 'No data';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__Deployment_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__Deployment_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["n" /* Breadcrumb */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["n" /* Breadcrumb */].Item,
              { active: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */],
                { to: '/apps', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                },
                'Apps'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["n" /* Breadcrumb */].Item,
              { active: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */],
                { to: '/apps/' + this.props.appName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                },
                this.props.appName
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["n" /* Breadcrumb */].Item,
              { active: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                },
                __self: this
              },
              this.props.deploymentName
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["o" /* Table */],
            { striped: true, bordered: true, condensed: true, hover: true, responsive: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46
                    },
                    __self: this
                  },
                  'AppVersion'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    },
                    __self: this
                  },
                  'PackageInfo'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: this
                  },
                  'Install Metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  'Actions'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tbody', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Deployment;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Deployment.propTypes = {
  appName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  deploymentName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};
Deployment.defaultProps = {
  appName: '',
  deploymentName: ''
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Deployment_css___default.a)(Deployment));

/***/ }),

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Deployment-root-1R8uX {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Deployment-container-1-vLN {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  min-height: 480px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Deployment/Deployment.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AC5BD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAoC;CACrC","file":"Deployment.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  min-height: 480px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Deployment-root-1R8uX",
	"container": "Deployment-container-1-vLN"
};

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1515);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Deployment.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Deployment.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

});
//# sourceMappingURL=deployment.chunk.js.map