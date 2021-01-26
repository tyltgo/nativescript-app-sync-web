webpackJsonp([5],{

/***/ 1292:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Product__ = __webpack_require__(1505);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/ProductContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var ProductContainer = function (_Component) {
  _inherits(ProductContainer, _Component);

  function ProductContainer() {
    _classCallCheck(this, ProductContainer);

    return _possibleConstructorReturn(this, (ProductContainer.__proto__ || Object.getPrototypeOf(ProductContainer)).apply(this, arguments));
  }

  _createClass(ProductContainer, [{
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
          deployments = _props.deployments,
          appName = _props.appName,
          actions = _props.actions;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Product__["a" /* default */], {
        appName: appName,
        items: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(deployments, 'rs.' + appName),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
    }
  }]);

  return ProductContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ProductContainer.propTypes = {
  appName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};
ProductContainer.defaultProps = {
  appName: ''
};


function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'deployments': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'deployments', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProductContainer));

/***/ }),

/***/ 1505:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Product_css__ = __webpack_require__(1605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Product_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Product_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(306);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Product/Product.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Product = function (_Component) {
  _inherits(Product, _Component);

  function Product() {
    _classCallCheck(this, Product);

    var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this));

    _this.renderRow = _this.renderRow.bind(_this);
    return _this;
  }

  _createClass(Product, [{
    key: 'render',
    value: function render() {
      var self = this;
      var tipText = 'No data';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__Product_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__Product_css___default.a.container, __source: {
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
              this.props.appName
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["o" /* Table */],
            { striped: true, bordered: true, condensed: true, hover: true, responsive: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  'Deployments'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  'DeploymentKey'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: this
                  },
                  'Description'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46
                    },
                    __self: this
                  },
                  'Update Metadata'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    },
                    __self: this
                  },
                  'Install Metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: this
                  },
                  'Actions'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              },
              this.props.items.length > 0 ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(this.props.items, function (item, index) {
                return self.renderRow(item, index);
              }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { colSpan: '6', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    },
                    __self: this
                  },
                  tipText
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'renderRow',
    value: function renderRow(rowData, index) {
      var deployName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'name');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */],
            { to: '/apps/' + this.props.appName + '/' + deployName, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            },
            deployName
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          { style: { textAlign: 'left' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'key')
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })
      );
    }
  }]);

  return Product;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Product.propTypes = {
  appName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  items: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].array
};
Product.defaultProps = {
  appName: '',
  items: []
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Product_css___default.a)(Product));

/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Product-root-3bNak {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Product-container-2WGpY {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  min-height: 480px;\n  max-width: 1000px;\n}\n\ntable{\n  font-size: 1.2em;\n  width: 100%;\n  text-align: center;\n}\n\nli {\n  list-style: none;\n}\n\nli a {\n  text-decoration: none;\n  color: inherit;\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Product/Product.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AC5BD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;CACpB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,sBAAsB;EACtB,eAAe;CAChB","file":"Product.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  min-height: 480px;\n  max-width: var(--max-content-width);\n}\n\ntable{\n  font-size: 1.2em;\n  width: 100%;\n  text-align: center;\n}\n\nli {\n  list-style: none;\n}\n\nli a {\n  text-decoration: none;\n  color: inherit;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Product-root-3bNak",
	"container": "Product-container-2WGpY"
};

/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1517);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Product.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Product.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

});
//# sourceMappingURL=product.chunk.js.map