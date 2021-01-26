webpackJsonp([1],{

/***/ 1498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/ChangePassword/ChangePassword.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ChangePassword = function (_Component) {
  _inherits(ChangePassword, _Component);

  function ChangePassword() {
    _classCallCheck(this, ChangePassword);

    var _this = _possibleConstructorReturn(this, (ChangePassword.__proto__ || Object.getPrototypeOf(ChangePassword)).call(this));

    _this.state = { field1: false, field2: false, field3: false };
    _this.setOldPassword = _this.setOldPassword.bind(_this);
    _this.setNewPassword = _this.setNewPassword.bind(_this);
    _this.setNewPasswordConfirm = _this.setNewPasswordConfirm.bind(_this);
    return _this;
  }

  _createClass(ChangePassword, [{
    key: 'setOldPassword',
    value: function setOldPassword(event) {
      this.props.oldPasswordInputChange(event.target.value);
    }
  }, {
    key: 'setNewPassword',
    value: function setNewPassword(event) {
      this.props.newPasswordInputChange(event.target.value);
    }
  }, {
    key: 'setNewPasswordConfirm',
    value: function setNewPasswordConfirm(event) {
      this.props.newPasswordConfirmInputChange(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var self = this;
      var isValidate = true;
      var oldPasswordTips = '';
      if (!this.props.oldPassword) {
        isValidate = false;
        oldPasswordTips = 'Old password';
      }
      var newPasswordTips = '';
      var newPasswordConfirmTips = '';
      if (this.props.newPassword.length < 6) {
        newPasswordTips = 'Please enter 6 to 22 characters';
      }
      if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.eq(this.props.newPassword, this.props.newPasswordConfirm)) {
        isValidate = false;
        newPasswordConfirmTips = 'These passwords do not match';
      }
      var disabled = true;
      if (!this.props.isFetching && isValidate) {
        disabled = false;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { height: 650, paddingLeft: 20, paddingRight: 20 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["m" /* Panel */],
          { header: 'Change password', style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Form */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  },
                  __self: this
                },
                'Old password'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* FormControl */], {
                onChange: this.setOldPassword,
                type: 'password',
                value: this.props.oldPassword,
                placeholder: 'Old password',
                onBlur: function onBlur() {
                  return _this2.setState({ field1: true });
                },
                autoFocus: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  },
                  __self: this
                },
                this.state.field1 ? oldPasswordTips : null
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  },
                  __self: this
                },
                'New password'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* FormControl */], {
                onChange: this.setNewPassword,
                type: 'password',
                value: this.props.newPassword,
                placeholder: 'New password',
                onBlur: function onBlur() {
                  return _this2.setState({ field2: true });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                  },
                  __self: this
                },
                this.state.field2 ? newPasswordTips : null
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                  },
                  __self: this
                },
                'Confirm new password'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* FormControl */], {
                onChange: this.setNewPasswordConfirm,
                type: 'password',
                value: this.props.newPasswordConfirm,
                placeholder: 'Repeat the new password',
                onBlur: function onBlur() {
                  return _this2.setState({ field3: true });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                  },
                  __self: this
                },
                this.state.field3 ? newPasswordConfirmTips : null
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              { style: { paddingTop: 20 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 144
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { color: 'red' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(this.props, 'error.message')
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* Button */],
                {
                  style: { width: "100%" },
                  bsStyle: 'primary',
                  disabled: disabled,
                  onClick: function onClick() {
                    if (disabled) {
                      return;
                    }
                    self.props.submit();
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  },
                  __self: this
                },
                'Confirm'
              )
            )
          )
        )
      );
    }
  }]);

  return ChangePassword;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ChangePassword.propTypes = {
  isFetching: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  oldPassword: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  oldPasswordInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  newPassword: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  newPasswordInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  newPasswordConfirm: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  newPasswordConfirmInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  submit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
};
ChangePassword.defaultProps = {
  isFetching: false,
  oldPassword: '',
  oldPasswordInputChange: function oldPasswordInputChange(oldPassword) {},
  newPassword: '',
  newPasswordInputChange: function newPasswordInputChange(newPassword) {},
  newPasswordConfirm: '',
  newPasswordConfirmInputChange: function newPasswordConfirmInputChange(newPasswordConfirm) {},
  submit: function submit() {},
  error: {}
};

/* harmony default export */ __webpack_exports__["a"] = (ChangePassword);

/***/ }),

/***/ 509:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ChangePassword__ = __webpack_require__(1498);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/ChangePasswordContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var ChangePasswordContainer = function (_Component) {
  _inherits(ChangePasswordContainer, _Component);

  function ChangePasswordContainer() {
    _classCallCheck(this, ChangePasswordContainer);

    return _possibleConstructorReturn(this, (ChangePasswordContainer.__proto__ || Object.getPrototypeOf(ChangePasswordContainer)).apply(this, arguments));
  }

  _createClass(ChangePasswordContainer, [{
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
          password = _props.password,
          actions = _props.actions;

      var oldPassword = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'oldPassword');
      var newPassword = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'newPassword');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ChangePassword__["a" /* default */], {
        isFetching: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'isFetching'),
        oldPassword: oldPassword,
        oldPasswordInputChange: actions.passwordChangeOldInput,
        newPassword: newPassword,
        newPasswordInputChange: actions.passwordChangeNewInput,
        newPasswordConfirm: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'newPasswordConfirm'),
        newPasswordConfirmInputChange: actions.passwordChangeNewConfirmInput,
        submit: function submit() {
          return actions.modifyPassword(oldPassword, newPassword);
        },
        error: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(password, 'error'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    }
  }]);

  return ChangePasswordContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
  return { password: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'password') };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_usersActions__, __WEBPACK_IMPORTED_MODULE_5__actions_authActions__, __WEBPACK_IMPORTED_MODULE_6__actions_routesActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer));

/***/ })

});
//# sourceMappingURL=changePassword.chunk.js.map