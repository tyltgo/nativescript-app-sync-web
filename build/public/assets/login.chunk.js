webpackJsonp([7],{

/***/ 1291:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Login__ = __webpack_require__(1502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Footer__ = __webpack_require__(507);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/LoginContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var LoginContainer = function (_Component) {
  _inherits(LoginContainer, _Component);

  function LoginContainer() {
    _classCallCheck(this, LoginContainer);

    return _possibleConstructorReturn(this, (LoginContainer.__proto__ || Object.getPrototypeOf(LoginContainer)).apply(this, arguments));
  }

  _createClass(LoginContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth') != __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(newProps, 'auth.isAuth') && __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(newProps, 'auth.isAuth')) {
        this.props.actions.goBackHistory();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.props, 'auth.isAuth')) {
        this.props.actions.goBackHistory();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          login = _props.login,
          actions = _props.actions;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Login__["a" /* default */], {
          isFetching: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'isFetching'),
          account: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'account'),
          password: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'password'),
          accountInputChange: actions.loginChangeAccountInput,
          passwordInputChange: actions.loginChangePasswordInput,
          submit: function submit() {
            return actions.fetchLogin(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'account'), __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'password'));
          },
          error: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(login, 'error'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Footer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        })
      );
    }
  }]);

  return LoginContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
  return { 'login': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'login', {}), 'auth': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'auth', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LoginContainer));

/***/ }),

/***/ 1502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(306);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Login/Login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.setInputAccount = _this.setInputAccount.bind(_this);
    _this.setInputPassword = _this.setInputPassword.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'submit',
    value: function submit() {
      if (this.props.isFetching) {
        return;
      }
      this.props.submit();
    }
  }, {
    key: 'setInputAccount',
    value: function setInputAccount(event) {
      this.props.accountInputChange(event.target.value);
    }
  }, {
    key: 'setInputPassword',
    value: function setInputPassword(event) {
      this.props.passwordInputChange(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { height: 650, paddingLeft: 20, paddingRight: 20 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["m" /* Panel */],
          { header: 'Log in', style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Form */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  },
                  __self: this
                },
                'Email address'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* FormControl */], {
                onChange: this.setInputAccount,
                value: this.props.account,
                type: 'email',
                placeholder: 'Email address',
                autoFocus: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  },
                  __self: this
                },
                'Password'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* FormControl */], {
                onChange: this.setInputPassword,
                value: this.props.password,
                type: 'password',
                placeholder: 'Password',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
              { style: { paddingTop: 20 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.errorMessage')
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Button */],
                {
                  style: { width: "100%" },
                  bsStyle: 'primary',
                  onClick: this.submit,
                  disabled: this.props.isFetching,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  },
                  __self: this
                },
                this.props.isFetching ? 'Logging in...' : 'Log in'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
              { style: { paddingTop: 28 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { marginRight: 20 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  },
                  __self: this
                },
                'No account yet?'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
                { to: '/register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  },
                  __self: this
                },
                'Register'
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Login.propTypes = {
  isFetching: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  account: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  password: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  accountInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  passwordInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  submit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
};
Login.defaultProps = {
  isFetching: false,
  account: '',
  accountInputChange: function accountInputChange(account) {},
  password: '',
  passwordInputChange: function passwordInputChange(password) {},
  submit: function submit(account, password) {},
  error: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ })

});
//# sourceMappingURL=login.chunk.js.map