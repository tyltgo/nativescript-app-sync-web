webpackJsonp([4],{

/***/ 1293:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ProductList__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PopAddAppContainer__ = __webpack_require__(1513);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/ProductListContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var ProductListContainer = function (_Component) {
  _inherits(ProductListContainer, _Component);

  function ProductListContainer() {
    _classCallCheck(this, ProductListContainer);

    return _possibleConstructorReturn(this, (ProductListContainer.__proto__ || Object.getPrototypeOf(ProductListContainer)).apply(this, arguments));
  }

  _createClass(ProductListContainer, [{
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
          products = _props.products,
          actions = _props.actions;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__PopAddAppContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ProductList__["a" /* default */], {
          isFetching: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(products, 'isFetching'),
          rs: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(products, 'rs'),
          popAddApp: actions.showPopAddApp,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        })
      );
    }
  }]);

  return ProductListContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'products': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'products', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__, __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProductListContainer));

/***/ }),

/***/ 1504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/PopAddApp/PopAddApp.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var popoverFocus = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["r" /* Popover */],
  { id: 'popover-trigger-focus', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  },
  '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u548C\u6570\u5B57'
);

var PopAddApp = function (_Component) {
  _inherits(PopAddApp, _Component);

  function PopAddApp() {
    _classCallCheck(this, PopAddApp);

    var _this = _possibleConstructorReturn(this, (PopAddApp.__proto__ || Object.getPrototypeOf(PopAddApp)).call(this));

    _this.close = _this.close.bind(_this);
    _this.setName = _this.setName.bind(_this);
    _this.validateName = _this.validateName.bind(_this);
    _this.setSelect = _this.setSelect.bind(_this);
    _this.setPlatformSelect = _this.setPlatformSelect.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(PopAddApp, [{
    key: 'setPlatformSelect',
    value: function setPlatformSelect(event) {
      var select = event.target.value;
      this.props.input({ platform: select });
    }
  }, {
    key: 'setSelect',
    value: function setSelect(event) {
      var select = event.target.value;
      this.props.input({ os: select });
    }
  }, {
    key: 'setName',
    value: function setName(event) {
      var name = event.target.value;
      this.props.input({ appName: name });
    }
  }, {
    key: 'validateName',
    value: function validateName(name) {
      var REGEX = /^\w+$/;
      if (REGEX.test(name)) {
        this.setState({ isShowNameError: false });
      } else {
        this.setState({ isShowNameError: true });
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      if (this.props.isOnSubmiting) {
        return;
      }
      this.props.onSubmit();
    }
  }, {
    key: 'close',
    value: function close() {
      this.props.close();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["p" /* Modal */],
        { show: this.props.showModal, onHide: this.close, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["p" /* Modal */].Header,
          { closeButton: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["p" /* Modal */].Title,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            },
            'Add app'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["p" /* Modal */].Body,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
            { style: { display: 'inline-block', width: '40%' }, validationState: this.props.isShowNameError ? 'error' : null, __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ControlLabel */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                },
                __self: this
              },
              'App name'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["s" /* OverlayTrigger */],
              { trigger: ["hover"], placement: 'bottom', overlay: popoverFocus, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* FormControl */], {
                type: 'text',
                onChange: this.setName,
                value: this.props.appName,
                autoFocus: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* FormControl */].Feedback, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
            { style: { display: 'inline-block', width: '20%', paddingLeft: 15 }, validationState: this.props.isShowOSError ? 'error' : null, __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ControlLabel */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                },
                __self: this
              },
              'Platform'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* FormControl */],
              {
                componentClass: 'select',
                value: this.props.os,
                onChange: this.setSelect,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                  },
                  __self: this
                },
                'Select platform'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'iOS', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                  },
                  __self: this
                },
                'iOS'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'Android', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                  },
                  __self: this
                },
                'Android'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'Windows', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                  },
                  __self: this
                },
                'Windows'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
            { style: { display: 'inline-block', width: '20%', paddingLeft: 15 }, validationState: this.props.isShowPlatformError ? 'error' : null, __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ControlLabel */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                },
                __self: this
              },
              'App framework'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* FormControl */],
              {
                componentClass: 'select',
                value: this.props.platform,
                onChange: this.setPlatformSelect,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                  },
                  __self: this
                },
                'Select app framework'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'React-Native', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                  },
                  __self: this
                },
                'React-Native'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'Cordova', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  },
                  __self: this
                },
                'Cordova'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'NativeScript', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                  },
                  __self: this
                },
                'NativeScript \uD83D\uDE0E'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
            { validationState: 'error', __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["q" /* HelpBlock */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 143
                },
                __self: this
              },
              this.props.errorTip
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["p" /* Modal */].Footer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* Button */],
            { onClick: this.close, __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            },
            'Close'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* Button */],
            { onClick: this.onSubmit, disabled: this.props.isOnSubmiting ? true : false, __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            },
            'Save'
          )
        )
      );
    }
  }]);

  return PopAddApp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PopAddApp.propTypes = {
  onSubmit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  isOnSubmiting: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  close: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  input: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  errorTip: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  showModal: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  isShowNameError: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  isShowOSError: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  isShowPlatformError: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  os: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  platform: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  appName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};
PopAddApp.defaultProps = {
  onSubmit: function onSubmit(name) {},
  isOnSubmiting: false,
  close: function close() {},
  input: function input() {},
  errorTip: '',
  showModal: false,
  isShowNameError: false,
  isShowOSError: false,
  isShowPlatformError: false,
  os: '',
  platform: '',
  appName: ''
};

/* harmony default export */ __webpack_exports__["a"] = (PopAddApp);

/***/ }),

/***/ 1506:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProductList_css__ = __webpack_require__(1606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ProductList_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(306);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/ProductList/ProductList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ProductList = function (_Component) {
  _inherits(ProductList, _Component);

  function ProductList() {
    _classCallCheck(this, ProductList);

    var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this));

    _this.renderRow = _this.renderRow.bind(_this);
    return _this;
  }

  _createClass(ProductList, [{
    key: 'renderRow',
    value: function renderRow(rowData, index) {
      var _this2 = this;

      var appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'name');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        { key: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'name'), __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */],
            { to: '/apps/' + appName, __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            },
            appName
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          { style: { textAlign: 'left' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'collaborators'), function (item, email) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { key: email, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this2
                },
                email,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.permission, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this2
                  },
                  '(',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'em',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(item, 'permission')
                  ),
                  ')'
                ),
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(item, 'isCurrentAccount') ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.label, __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.labelSuccess), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: _this2
                  },
                  'it\'s you'
                ) : null
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(rowData, 'deployments'), function (item, email) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { key: email, style: item === 'Production' ? { color: 'green' } : null, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: _this2
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */],
                  { to: '/apps/' + appName + '/' + item, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: _this2
                  },
                  item
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var tipText = 'No data';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["n" /* Breadcrumb */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["n" /* Breadcrumb */].Item,
              { active: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                },
                __self: this
              },
              'Apps'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["g" /* Col */],
            { style: { marginBottom: '20px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* Button */],
              {
                onClick: this.props.popAddApp,
                bsStyle: 'primary',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              },
              'Add an app'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["o" /* Table */],
            { striped: true, bordered: true, condensed: true, hover: true, responsive: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    },
                    __self: this
                  },
                  'Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    },
                    __self: this
                  },
                  'Member'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    },
                    __self: this
                  },
                  'Deployments'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
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
                  lineNumber: 99
                },
                __self: this
              },
              this.props.rs.length > 0 ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(this.props.rs, function (item, index) {
                return self.renderRow(item, index);
              }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { colSpan: '4', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
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
  }]);

  return ProductList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ProductList.propTypes = {
  isFetching: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  rs: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].array,
  popAddApp: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
ProductList.defaultProps = {
  isFetching: true,
  rs: [],
  popAddApp: function popAddApp() {}
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__ProductList_css___default.a)(ProductList));

/***/ }),

/***/ 1513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_authActions__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_PopAddApp__ = __webpack_require__(1504);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/PopAddAppContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var PopAddAppContainer = function (_Component) {
  _inherits(PopAddAppContainer, _Component);

  function PopAddAppContainer() {
    _classCallCheck(this, PopAddAppContainer);

    return _possibleConstructorReturn(this, (PopAddAppContainer.__proto__ || Object.getPrototypeOf(PopAddAppContainer)).apply(this, arguments));
  }

  _createClass(PopAddAppContainer, [{
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
          addProducts = _props.addProducts,
          actions = _props.actions;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_PopAddApp__["a" /* default */], _extends({}, addProducts, {
        input: actions.popAddAppInput,
        close: actions.closePopAddApp,
        onSubmit: function onSubmit() {
          var appName = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(addProducts, 'appName');
          var os = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(addProducts, 'os');
          var platform = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(addProducts, 'platform');
          actions.addProducts(appName, os, platform);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }));
    }
  }]);

  return PopAddAppContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PopAddAppContainer.propTypes = {
  appName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};
PopAddAppContainer.defaultProps = {
  appName: ''
};


function mapStateToProps(state, ownProps) {
  return {
    'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}),
    'addProducts': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'addProducts', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__, __WEBPACK_IMPORTED_MODULE_7__actions_productsActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(PopAddAppContainer));

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.ProductList-root-3AV4k {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.ProductList-container-3-pwX {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  min-height: 480px;\n  max-width: 1000px;\n}\n\ntable{\n  font-size: 1.2em;\n  width: 100%;\n  text-align: center;\n}\n\nli {\n  list-style: none;\n}\n\nli a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.ProductList-permission-2-yGN {\n  padding-left: 10px;\n  padding-right: 5px;\n}\n\n.ProductList-label-3o5bn {\n  padding: 2px 4px;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: normal;\n  display: inline-block;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25em;\n}\n\n.ProductList-labelSuccess-2W088 {\n  background-color: #2faa60;\n}\n\n.ProductList-permission-2-yGN em {\n  color: green;\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/ProductList/ProductList.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AC3BD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;CACpB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,sBAAsB;EACtB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;EACzB,sBAAsB;CACvB;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,aAAa;CACd","file":"ProductList.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  min-height: 480px;\n  max-width: var(--max-content-width);\n}\n\ntable{\n  font-size: 1.2em;\n  width: 100%;\n  text-align: center;\n}\n\nli {\n  list-style: none;\n}\n\nli a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.permission {\n  padding-left: 10px;\n  padding-right: 5px;\n}\n\n.label {\n  padding: 2px 4px;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: normal;\n  display: inline-block;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25em;\n}\n\n.labelSuccess {\n  background-color: #2faa60;\n}\n\n.permission em {\n  color: green;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "ProductList-root-3AV4k",
	"container": "ProductList-container-3-pwX",
	"permission": "ProductList-permission-2-yGN",
	"label": "ProductList-label-3o5bn",
	"labelSuccess": "ProductList-labelSuccess-2W088"
};

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1518);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ProductList.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./ProductList.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

});
//# sourceMappingURL=apps.chunk.js.map