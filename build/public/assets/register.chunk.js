webpackJsonp([3],{

/***/ 1294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_registersActions__ = __webpack_require__(1495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Register__ = __webpack_require__(1508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Header__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Footer__ = __webpack_require__(507);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/containers/RegisterContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var RegisterContainer = function (_Component) {
  _inherits(RegisterContainer, _Component);

  function RegisterContainer() {
    _classCallCheck(this, RegisterContainer);

    return _possibleConstructorReturn(this, (RegisterContainer.__proto__ || Object.getPrototypeOf(RegisterContainer)).apply(this, arguments));
  }

  _createClass(RegisterContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          register = _props.register,
          actions = _props.actions;

      var email = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'email');
      var validateCode = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'validateCode');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Header__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Register__["a" /* default */], {
          step: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'step', 1),
          registerClean: actions.registerClean
          //----
          , email: email,
          emailInputChange: actions.registerChangeEmailInput,
          isSubmitStepOne: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isCheckingEmail'),
          submitStepOne: function submitStepOne() {
            return actions.registerCheckEmail(email);
          }
          //----
          , error: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'error'),
          isSending: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isSending'),
          lastSendTime: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'lastSendTime', 0),
          sendValidateCode: function sendValidateCode() {
            return actions.registerSendValidateCode(email);
          },
          validateCode: validateCode,
          validateCodeInputChange: actions.registerChangeValidateCodeInput,
          isSubmitStepTwo: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isSubmitStepTwo'),
          submitStepTwo: function submitStepTwo() {
            return actions.registerCheckCodeExists(email, validateCode);
          }
          //---
          , isSubmitStepThree: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'isSubmitStepThree'),
          password: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'password'),
          passwordInputChange: actions.registerChangePasswordInput,
          passwordConfirm: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'passwordConfirm'),
          passwordConfirmInputChange: actions.registerChangePasswordConfirmInput,
          submitStepThree: function submitStepThree() {
            return actions.register(email, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(register, 'password'), validateCode);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Footer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        })
      );
    }
  }]);

  return RegisterContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
  return { 'register': __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(state, 'register', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__actions_registersActions__), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(RegisterContainer));

/***/ }),

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(1313);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
      // disallow full-width chars
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString2.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports['default'];

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}
module.exports = exports['default'];

/***/ }),

/***/ 1483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЯЄIЇҐ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nl-NL': /^[0-9A-ZÉËÏÓÖÜ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЯЄIЇҐ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];

// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
}

/***/ }),

/***/ 1484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(1313);

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(1485);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(1328);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 256 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}

/***/ }),

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halfWidth = undefined;
exports.default = isHalfWidth;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  (0, _assertString2.default)(str);
  return halfWidth.test(str);
}

/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString2.default)(str);
  return hexadecimal.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ 1491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iso8601 = undefined;

exports.default = function (str) {
  (0, _assertString2.default)(str);
  return iso8601.test(str);
};

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = exports.iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

/***/ }),

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
module.exports = exports['default'];

/***/ }),

/***/ 1493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];

/***/ }),

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString2.default)(str);
  return parseFloat(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerChangeEmailInput"] = registerChangeEmailInput;
/* harmony export (immutable) */ __webpack_exports__["registerCheckEmail"] = registerCheckEmail;
/* harmony export (immutable) */ __webpack_exports__["registerChangeValidateCodeInput"] = registerChangeValidateCodeInput;
/* harmony export (immutable) */ __webpack_exports__["registerSendValidateCode"] = registerSendValidateCode;
/* harmony export (immutable) */ __webpack_exports__["registerCheckCodeExists"] = registerCheckCodeExists;
/* harmony export (immutable) */ __webpack_exports__["registerChangePasswordInput"] = registerChangePasswordInput;
/* harmony export (immutable) */ __webpack_exports__["registerChangePasswordConfirmInput"] = registerChangePasswordConfirmInput;
/* harmony export (immutable) */ __webpack_exports__["register"] = register;
/* harmony export (immutable) */ __webpack_exports__["registerClean"] = registerClean;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_RestApi__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




function registerChangeEmailInput(email) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* REGISTER_CHANGE_EMAIL_INPUT */],
    payload: email
  };
}

function requestRegisterCheckEmail() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* REQUEST_REGISTER_CHECK_EMAIL */]
  };
}

function receiveRegisterCheckEmail(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* RECEIVE_REGISTER_CHECK_EMAIL */],
    payload: data
  };
}

function receiveRegisterCheckEmailError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["d" /* RECEIVE_REGISTER_CHECK_EMAIL_ERROR */],
    payload: error
  };
}

function registerCheckEmail(email) {
  return function (dispatch) {
    dispatch(requestRegisterCheckEmail());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].checkEmailExists(email).then(function (data) {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK" && __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'exists') == false) {
        dispatch(receiveRegisterCheckEmail(data));
      } else {
        var message = email + ' already exists';
        if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') != "OK") {
          message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        }
        dispatch(receiveRegisterCheckEmailError({ message: message }));
      }
    });
  };
}

function registerChangeValidateCodeInput(validateCode) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["e" /* REGISTER_CHANGE_VALIDATE_CODE_INPUT */],
    payload: validateCode
  };
}

function requestRegisterSendValidateCode() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["f" /* REQUEST_REGISTER_SEND_VALIDATE_CODE */]
  };
}

function receiveRegisterSendValidateCode(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["g" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE */],
    payload: data
  };
}

function receiveRegisterSendValidateCodeError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["h" /* RECEIVE_REGISTER_SEND_VALIDATE_CODE_ERROR */],
    payload: error
  };
}

function registerSendValidateCode(email) {
  return function (dispatch) {
    dispatch(requestRegisterSendValidateCode());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].sendRegisterCode(email).then(function (data) {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(receiveRegisterSendValidateCode(data));
      } else {
        var message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        dispatch(receiveRegisterSendValidateCodeError({ message: message }));
      }
    });
  };
}

function requestRegisterCheckCodeExists() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["i" /* REQUEST_REGISTER_CHECK_CODE_EXISTS */]
  };
}

function receiveRegisterCheckCodeExists(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["j" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS */],
    payload: data
  };
}

function receiveRegisterCheckCodeExistsError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["k" /* RECEIVE_REGISTER_CHECK_CODE_EXISTS_ERROR */],
    payload: error
  };
}

function registerCheckCodeExists(email, validateCode) {
  return function (dispatch) {
    dispatch(requestRegisterCheckCodeExists());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].checkRegisterCodeExists(email, validateCode).then(function (data) {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(receiveRegisterCheckCodeExists(data));
      } else {
        var message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        dispatch(receiveRegisterCheckCodeExistsError({ message: message }));
      }
    });
  };
}

function registerChangePasswordInput(password) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["l" /* REGISTER_CHANGE_PASSWORD_INPUT */],
    payload: password
  };
}

function registerChangePasswordConfirmInput(passwordConfirm) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["m" /* REGISTER_CHANGE_PASSWORD_CONFIRM_INPUT */],
    payload: passwordConfirm
  };
}

function requestRegister() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["n" /* REQUEST_REGISTER */]
  };
}

function receiveRegister(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["o" /* RECEIVE_REGISTER */],
    payload: data
  };
}

function receiveRegisterError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["p" /* RECEIVE_REGISTER_ERROR */],
    payload: error
  };
}

function register(email, password, validateCode) {
  return function (dispatch) {
    dispatch(requestRegister());
    return __WEBPACK_IMPORTED_MODULE_1__network_RestApi__["a" /* default */].register(email, password, validateCode).then(function (data) {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'status') == "OK") {
        dispatch(receiveRegister(data));
      } else {
        var message = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(data, 'message');
        dispatch(receiveRegisterError({ message: message }));
      }
    });
  };
}

function registerClean() {
  return { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["q" /* RECEIVE_REGISTER_CLEAN */] };
}

/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Countdown = function (_Component) {
  _inherits(Countdown, _Component);

  function Countdown() {
    _classCallCheck(this, Countdown);

    var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));

    Countdown.retryTimes = 0;
    _this.state = { leftTime: 0 };
    _this.leftTimeCount = _this.leftTimeCount.bind(_this);
    _this.leftTimeSplite = _this.leftTimeSplite.bind(_this);
    return _this;
  }

  _createClass(Countdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.leftTimeCount(this.props.leftTime);
    }
  }, {
    key: 'leftTimeCount',
    value: function leftTimeCount(time) {
      var _this2 = this;

      this.setState({ leftTime: time });
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(function () {
        if (_this2.state.leftTime <= 0 && _this2.timer) {
          Countdown.retryTimes += 1;
          _this2.props.timeoutCb && _this2.props.timeoutCb();
          clearInterval(_this2.timer);
        } else {
          _this2.setState({ leftTime: _this2.state.leftTime - _this2.props.second });
        }
      }, this.props.second * 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timer && clearInterval(this.timer);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.eq(this.props.leftTime, props.leftTime)) {
        this.leftTimeCount(props.leftTime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.leftTime <= 0) {
        return this.props.renderRetryFunc(Countdown.retryTimes);
      }

      return this.props.renderFunc(this.leftTimeSplite(this.state.leftTime, this.props.level));
    }
  }, {
    key: 'leftTimeSplite',
    value: function leftTimeSplite(leftTime) {
      var showLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

      var day = 0,
          hour = 0,
          minute = 0,
          second = 0; //时间默认值
      if (leftTime > 0) {
        if (showLevel >= 4) {
          day = Math.floor(leftTime / (60 * 60 * 24));
        }
        if (showLevel >= 3) {
          hour = Math.floor(leftTime / (60 * 60)) - day * 24;
        }
        if (showLevel >= 2) {
          minute = Math.floor(leftTime / 60) - day * 24 * 60 - hour * 60;
        }
        second = Math.floor(leftTime) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
      }
      return { day: day, hour: hour, minute: minute, second: second };
    }
  }]);

  return Countdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Countdown.propTypes = {
  leftTime: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
  timeoutCb: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  renderFunc: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  renderRetryFunc: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  level: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
  second: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number
};
Countdown.retryTimes = 0;
Countdown.defaultProps = {
  leftTime: 0,
  timeoutCb: function timeoutCb() {},
  renderFunc: function renderFunc() {},
  renderRetryFunc: function renderRetryFunc(retryTimes) {},
  level: 1,
  second: 1
};
/* harmony default export */ __webpack_exports__["a"] = (Countdown);

/***/ }),

/***/ 1507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavStep_css__ = __webpack_require__(1607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavStep_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NavStep_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/NavStep/NavStep.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NavStep = function (_Component) {
  _inherits(NavStep, _Component);

  function NavStep() {
    _classCallCheck(this, NavStep);

    return _possibleConstructorReturn(this, (NavStep.__proto__ || Object.getPrototypeOf(NavStep)).apply(this, arguments));
  }

  _createClass(NavStep, [{
    key: 'render',
    value: function render() {
      var self = this;
      var navArr = [{ key: 1, text: 'Provide your email' }, { key: 2, text: 'Verify email' }, { key: 3, text: 'Set password' }, { key: 4, text: '🚀' }];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a.progress, __WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a.clearfix), __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(navArr, function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              key: index,
              className: self.props.step == __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(item, 'key') ? __WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a.current : null,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'i',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(item, 'key')
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.get(item, 'text')
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'em',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(1601), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              })
            )
          );
        })
      );
    }
  }]);

  return NavStep;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

NavStep.propTypes = {
  step: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number
};
NavStep.defaultProps = {
  step: 1
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NavStep_css___default.a)(NavStep));

/***/ }),

/***/ 1508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Register_css__ = __webpack_require__(1608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Register_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Register_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavStep__ = __webpack_require__(1507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StepOne__ = __webpack_require__(1510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StepTwo__ = __webpack_require__(1512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__StepThree__ = __webpack_require__(1511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__StepDone__ = __webpack_require__(1509);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/Register.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
  }

  _createClass(Register, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.registerClean();
    }
  }, {
    key: 'render',
    value: function render() {
      var stepView = null;
      var step = this.props.step;
      if (step == 1) {
        stepView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__StepOne__["a" /* default */], {
          isChecking: this.props.isSubmitStepOne,
          email: this.props.email,
          emailInputChange: this.props.emailInputChange,
          submit: this.props.submitStepOne,
          error: this.props.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
      } else if (step == 2) {
        stepView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__StepTwo__["a" /* default */], {
          isChecking: this.props.isSubmitStepTwo,
          validateCode: this.props.validateCode,
          validateCodeInputChange: this.props.validateCodeInputChange,
          isSending: this.props.isSending,
          lastSendTime: this.props.lastSendTime,
          sendValidateCode: this.props.sendValidateCode,
          submit: this.props.submitStepTwo,
          error: this.props.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        });
      } else if (step == 3) {
        stepView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__StepThree__["a" /* default */], {
          isFetching: this.props.isSubmitStepThree,
          password: this.props.password,
          passwordInputChange: this.props.passwordInputChange,
          passwordConfirm: this.props.passwordConfirm,
          passwordConfirmInputChange: this.props.passwordConfirmInputChange,
          submit: this.props.submitStepThree,
          error: this.props.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        });
      } else if (step == 4) {
        stepView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__StepDone__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        });
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Register_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3__Register_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NavStep__["a" /* default */], { step: step, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }),
          stepView
        )
      );
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Register.propTypes = {
  step: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
  registerClean: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  //-----
  email: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  emailInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  isSubmitStepOne: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  submitStepOne: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  //-----
  validateCode: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  isSending: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  lastSendTime: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
  sendValidateCode: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  validateCodeInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  isSubmitStepTwo: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  submitStepTwo: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  //-----
  isSubmitStepThree: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  password: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  passwordInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  passwordConfirm: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  passwordConfirmInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  submitStepThree: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
Register.defaultProps = {
  step: 1,
  registerClean: function registerClean() {},
  email: '',
  emailInputChange: function emailInputChange(email) {},
  isSubmitStepOne: false,
  submitStepOne: function submitStepOne() {},

  validateCode: '',
  isSending: false,
  lastSendTime: 0,
  sendValidateCode: function sendValidateCode() {},
  validateCodeInputChange: function validateCodeInputChange(validateCode) {},
  isSubmitStepTwo: false,
  submitStepTwo: function submitStepTwo() {},

  isSubmitStepThree: false,
  password: '',
  passwordInputChange: function passwordInputChange(password) {},
  passwordConfirm: '',
  passwordConfirmInputChange: function passwordConfirmInputChange(passwordConfirm) {},
  submitStepThree: function submitStepThree() {}
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Register_css___default.a)(Register));

/***/ }),

/***/ 1509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(306);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/StepDone/StepDone.js';




function StepDone() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Form */],
    { style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* FormGroup */],
      { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          'Congrats! You have successfully registered \uD83D\uDE0A'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */],
          { to: '/login', style: 'font-weight: bold', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          'Log in'
        )
      )
    )
  );
}
/* harmony default export */ __webpack_exports__["a"] = (StepDone);

/***/ }),

/***/ 1510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator__ = __webpack_require__(1612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(306);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/StepOne/StepOne.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var StepOne = function (_Component) {
  _inherits(StepOne, _Component);

  function StepOne() {
    _classCallCheck(this, StepOne);

    var _this = _possibleConstructorReturn(this, (StepOne.__proto__ || Object.getPrototypeOf(StepOne)).call(this));

    _this.setInputEmail = _this.setInputEmail.bind(_this);
    return _this;
  }

  _createClass(StepOne, [{
    key: 'setInputEmail',
    value: function setInputEmail(event) {
      this.props.emailInputChange(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var emailIsValidate = __WEBPACK_IMPORTED_MODULE_2_validator___default.a.isEmail(this.props.email);
      var disabled = true;
      if (!this.props.isChecking && emailIsValidate) {
        disabled = false;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["a" /* Form */],
        { style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["c" /* ControlLabel */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            'Email address'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["d" /* FormControl */], {
            onChange: this.setInputEmail,
            value: this.props.email,
            type: 'email',
            placeholder: 'Email address',
            autoComplete: 'off',
            autoFocus: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["b" /* FormGroup */],
          { style: { paddingTop: 20 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { color: 'red' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.message')
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["e" /* Button */],
            {
              style: { width: "100%" },
              bsStyle: 'primary',
              onClick: function onClick() {
                if (disabled) {
                  return;
                }
                self.props.submit();
              },
              disabled: disabled,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            },
            'Next step'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["b" /* FormGroup */],
          { style: { paddingTop: 28, textAlign: 'center' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { to: '/login', __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            },
            'Existing account'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { style: { fontWeight: 300 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            },
            'This service is in BETA. By registering for this service, you agree with its ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'https://github.com/EddyVerbruggen/nativescript-app-sync-web/blob/master/EULA.pdf', target: '_blank', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                },
                __self: this
              },
              'EULA'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return StepOne;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

StepOne.propTypes = {
  isChecking: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  email: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  emailInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  submit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
};
StepOne.defaultProps = {
  isChecking: false,
  email: '',
  emailInputChange: function emailInputChange(email) {},
  submit: function submit() {},
  error: {}
};

/* harmony default export */ __webpack_exports__["a"] = (StepOne);

/***/ }),

/***/ 1511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(195);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/StepThree/StepThree.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var StepThree = function (_Component) {
  _inherits(StepThree, _Component);

  function StepThree() {
    _classCallCheck(this, StepThree);

    var _this = _possibleConstructorReturn(this, (StepThree.__proto__ || Object.getPrototypeOf(StepThree)).call(this));

    _this.state = { field1: false, field2: false };
    _this.setInputPassword = _this.setInputPassword.bind(_this);
    _this.setInputPasswordConfirm = _this.setInputPasswordConfirm.bind(_this);
    return _this;
  }

  _createClass(StepThree, [{
    key: 'setInputPassword',
    value: function setInputPassword(event) {
      this.setState({ field1: true });
      this.props.passwordInputChange(event.target.value);
    }
  }, {
    key: 'setInputPasswordConfirm',
    value: function setInputPasswordConfirm(event) {
      this.setState({ field2: true });
      this.props.passwordConfirmInputChange(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var self = this;
      var passwordTips = '';
      var passwordConfirmTips = '';
      if (this.state.field1 && this.props.password.length < 6) {
        passwordTips = 'Must be at least 6 characters';
      }
      if (this.state.field2 && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.eq(this.props.passwordConfirm, this.props.password)) {
        passwordConfirmTips = 'Make sure those passwords are the same';
      }
      var isValidate = false;
      if (this.props.password.length >= 6 && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.eq(this.props.passwordConfirm, this.props.password)) {
        isValidate = true;
      }
      var disabled = true;
      if (!this.props.isFetching && isValidate) {
        disabled = false;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Form */],
        { style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        },
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
            onBlur: function onBlur() {
              return _this2.setState({ field1: true });
            },
            value: this.props.password,
            type: 'password',
            placeholder: 'Password',
            autoComplete: 'off',
            autoFocus: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { color: 'red' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            },
            passwordTips
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* ControlLabel */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            },
            'Confirm password'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* FormControl */], {
            onChange: this.setInputPasswordConfirm,
            onBlur: function onBlur() {
              return _this2.setState({ field2: true });
            },
            type: 'password',
            value: this.props.passwordConfirm,
            placeholder: 'Repeat your password',
            autoComplete: 'off',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { color: 'red' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            },
            passwordConfirmTips
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          { style: { paddingTop: 20 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { color: 'red' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.message')
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Button */],
            {
              style: { width: "100%" },
              bsStyle: 'primary',
              onClick: function onClick() {
                if (disabled) {
                  return;
                }
                self.props.submit();
              },
              disabled: disabled,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            },
            'Register'
          )
        )
      );
    }
  }]);

  return StepThree;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

StepThree.propTypes = {
  isFetching: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  password: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  passwordInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  passwordConfirm: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  passwordConfirmInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  submit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
};
StepThree.defaultProps = {
  isFetching: false,
  password: '',
  passwordInputChange: function passwordInputChange(password) {},
  passwordConfirm: '',
  passwordConfirmInputChange: function passwordConfirmInputChange(passwordConfirm) {},
  submit: function submit() {},
  error: {}
};

/* harmony default export */ __webpack_exports__["a"] = (StepThree);

/***/ }),

/***/ 1512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Countdown__ = __webpack_require__(1499);
var _jsxFileName = '/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/StepTwo/StepTwo.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var StepTwo = function (_Component) {
  _inherits(StepTwo, _Component);

  _createClass(StepTwo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (120 - (parseInt(new Date().getTime() / 1000) - this.props.lastSendTime) <= 0) {
        this.props.sendValidateCode();
      }
    }
  }]);

  function StepTwo() {
    _classCallCheck(this, StepTwo);

    var _this = _possibleConstructorReturn(this, (StepTwo.__proto__ || Object.getPrototypeOf(StepTwo)).call(this));

    _this.setInputValidateCode = _this.setInputValidateCode.bind(_this);
    return _this;
  }

  _createClass(StepTwo, [{
    key: 'setInputValidateCode',
    value: function setInputValidateCode(event) {
      this.props.validateCodeInputChange(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var self = this;
      var leftTime = 120 - (parseInt(new Date().getTime() / 1000) - this.props.lastSendTime);
      var isValidate = this.props.validateCode ? true : false;
      var disabled = true;
      if (!this.props.isChecking && isValidate) {
        disabled = false;
      }
      var countDownView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Countdown__["a" /* default */], {
        leftTime: leftTime < 0 ? 0 : leftTime,
        renderFunc: function renderFunc(_ref) {
          var second = _ref.second;

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Button */],
            { disabled: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: _this2
            },
            second
          );
        },
        renderRetryFunc: function renderRetryFunc(times) {
          var sendText = 'Send email';
          if (times > 0) {
            sendText = 'Resend';
          }
          if (self.props.isSending) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Button */],
              { disabled: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                },
                __self: _this2
              },
              '\u53D1\u9001\u4E2D'
            );
          }
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Button */],
            {
              onClick: function onClick() {
                if (!self.props.isSending) {
                  self.props.sendValidateCode();
                }
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: _this2
            },
            sendText
          );
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Form */],
        { style: { maxWidth: 350, marginLeft: "auto", marginRight: "auto" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Alert */],
            { bsStyle: 'warning', __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            },
            'Check your verification code (make sure to check your SPAM folder!)'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["g" /* Col */],
            { sm: 8, style: { marginBottom: 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* FormControl */], {
              onChange: this.setInputValidateCode,
              value: this.props.validateCode,
              type: 'text',
              placeholder: 'Enter the verification code',
              autoComplete: 'off',
              autoFocus: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["g" /* Col */],
            { sm: 4, style: { marginBottom: 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              },
              __self: this
            },
            countDownView
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          { style: { paddingTop: 20 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { color: 'red', paddingLeft: 15 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.props, 'error.message')
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* FormGroup */],
          { style: { textAlign: "center", paddingTop: 20 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Button */],
            {
              style: { width: "100%" },
              bsStyle: 'primary',
              onClick: function onClick() {
                if (disabled) {
                  return;
                }
                self.props.submit();
              },
              disabled: disabled,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            },
            'Next step'
          )
        )
      );
    }
  }]);

  return StepTwo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

StepTwo.propTypes = {
  isChecking: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  validateCode: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  validateCodeInputChange: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  isSending: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  lastSendTime: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
  sendValidateCode: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  submit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
};
StepTwo.defaultProps = {
  isChecking: false,
  validateCode: '',
  validateCodeInputChange: function validateCodeInputChange(code) {},
  isSending: false,
  lastSendTime: 0,
  sendValidateCode: function sendValidateCode() {},
  submit: function submit() {},
  error: {}
};

/* harmony default export */ __webpack_exports__["a"] = (StepTwo);

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NavStep-progress-2PFpa {\n  font-size: 62.5%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  padding-left: 0px;\n  margin: 0 auto 30px;\n}\n\n.NavStep-progress-2PFpa li {\n  float: left;\n  width: 25%;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  font-size: 1.6em;\n  color: #666;\n  background-color: #ededed;\n  position: relative;\n  list-style: none;\n  display: block;\n}\n\n.NavStep-progress-2PFpa li i {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-style: normal;\n  background-color: #3cb371;\n  color: #fff;\n  margin-right: 5px;\n  line-height: 1.3;\n}\n\n@media (max-width: 600px) {\n  .NavStep-progress-2PFpa li span {\n    display: none;\n  }\n}\n\n.NavStep-progress-2PFpa li em {\n  display: inline-block;\n  width: 28px;\n  position: absolute;\n  top: -1px;\n  right: -14px;\n  z-index: 1;\n}\n\n.NavStep-progress-2PFpa li:last-child em {\n  display: none;\n}\n\n.NavStep-progress-2PFpa .NavStep-current-E4Fzb {\n  background-color: #3cb371;\n  color: #fff;\n}\n\n.NavStep-progress-2PFpa .NavStep-current-E4Fzb i {\n  color: #3cb371;\n  background-color: #fff;\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/NavStep/NavStep.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ACxBD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,0BAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE;IACE,cAAc;GACf;CACF;;AAED;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,WAAW;CACZ;;AAED;EACE,cAAc;CACf;;AAED;EACE,0BAAoC;EACpC,YAAY;CACb;;AAED;EACE,eAAyB;EACzB,uBAAuB;CACxB","file":"NavStep.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../variables.css';\n\n:root {\n  --main-color: #3cb371;\n}\n\n.progress {\n  font-size: 62.5%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  padding-left: 0px;\n  margin: 0 auto 30px;\n}\n\n.progress li {\n  float: left;\n  width: 25%;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  font-size: 1.6em;\n  color: #666;\n  background-color: #ededed;\n  position: relative;\n  list-style: none;\n  display: block;\n}\n\n.progress li i {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-style: normal;\n  background-color: var(--main-color);\n  color: #fff;\n  margin-right: 5px;\n  line-height: 1.3;\n}\n\n@media (max-width: 600px) {\n  .progress li span {\n    display: none;\n  }\n}\n\n.progress li em {\n  display: inline-block;\n  width: 28px;\n  position: absolute;\n  top: -1px;\n  right: -14px;\n  z-index: 1;\n}\n\n.progress li:last-child em {\n  display: none;\n}\n\n.progress .current {\n  background-color: var(--main-color);\n  color: #fff;\n}\n\n.progress .current i {\n  color: var(--main-color);\n  background-color: #fff;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"progress": "NavStep-progress-2PFpa",
	"current": "NavStep-current-E4Fzb"
};

/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(141)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Register-root-2JqUI {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Register-container-cDS84 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 700px;\n  min-height: 480px;\n}\n", "", {"version":3,"sources":["/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/variables.css","/home/adnan/codes/tylts/nativescript-app-sync-web/src/components/Register/Register.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AC5BD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;CACnB","file":"Register.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 700px;\n  min-height: 480px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Register-root-2JqUI",
	"container": "Register-container-cDS84"
};

/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/Register/NavStep/arrow.png?49d04bb9";

/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1519);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/index.js??ref--1-2!./NavStep.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/index.js??ref--1-2!./NavStep.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(1520);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Register.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/index.js??ref--1-2!./Register.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = __webpack_require__(1329);

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = __webpack_require__(1494);

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = __webpack_require__(1656);

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = __webpack_require__(1655);

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = __webpack_require__(1614);

var _equals2 = _interopRequireDefault(_equals);

var _contains = __webpack_require__(1613);

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__(1652);

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = __webpack_require__(1486);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = __webpack_require__(1647);

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = __webpack_require__(1640);

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = __webpack_require__(1490);

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = __webpack_require__(1328);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = __webpack_require__(1622);

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = __webpack_require__(1617);

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = __webpack_require__(1618);

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = __webpack_require__(1645);

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isLowercase = __webpack_require__(1639);

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = __webpack_require__(1649);

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = __webpack_require__(1619);

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = __webpack_require__(1487);

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = __webpack_require__(1488);

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = __webpack_require__(1650);

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = __webpack_require__(1644);

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = __webpack_require__(1646);

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = __webpack_require__(1636);

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = __webpack_require__(1630);

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = __webpack_require__(1627);

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = __webpack_require__(1489);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = __webpack_require__(1628);

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = __webpack_require__(1631);

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isMD = __webpack_require__(1641);

var _isMD2 = _interopRequireDefault(_isMD);

var _isJSON = __webpack_require__(1637);

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = __webpack_require__(1629);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = __webpack_require__(1638);

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = __webpack_require__(1485);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = __webpack_require__(1648);

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = __webpack_require__(1643);

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isDate = __webpack_require__(1626);

var _isDate2 = _interopRequireDefault(_isDate);

var _isAfter = __webpack_require__(1616);

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = __webpack_require__(1621);

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = __webpack_require__(1635);

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = __webpack_require__(1623);

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = __webpack_require__(1633);

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = __webpack_require__(1632);

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = __webpack_require__(1634);

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = __webpack_require__(1642);

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = __webpack_require__(1624);

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = __webpack_require__(1491);

var _isISO2 = _interopRequireDefault(_isISO);

var _isBase = __webpack_require__(1620);

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = __webpack_require__(1625);

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _ltrim = __webpack_require__(1492);

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = __webpack_require__(1493);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = __webpack_require__(1657);

var _trim2 = _interopRequireDefault(_trim);

var _escape = __webpack_require__(1615);

var _escape2 = _interopRequireDefault(_escape);

var _unescape = __webpack_require__(1658);

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = __webpack_require__(1654);

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = __webpack_require__(1659);

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = __webpack_require__(1484);

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = __webpack_require__(1651);

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = __webpack_require__(1653);

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = __webpack_require__(1330);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '6.3.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isMD5: _isMD2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isDate: _isDate2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];

/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(1330);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString2.default)(str);
  return str.indexOf((0, _toString2.default)(elem)) >= 0;
}
module.exports = exports['default'];

/***/ }),

/***/ 1614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString2.default)(str);
  return str === comparison;
}
module.exports = exports['default'];

/***/ }),

/***/ 1615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = escape;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
      (0, _assertString2.default)(str);
      return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
module.exports = exports['default'];

/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(1329);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original > comparison);
}
module.exports = exports['default'];

/***/ }),

/***/ 1617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(1483);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(1483);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString2.default)(str);
  return ascii.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString2.default)(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports['default'];

/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(1329);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original < comparison);
}
module.exports = exports['default'];

/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString2.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
module.exports = exports['default'];

/***/ }),

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[^0-9]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];

/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = __webpack_require__(1313);

var _merge2 = _interopRequireDefault(_merge);

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
  var pattern = whole_dollar_amount + decimal_amount;

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  /* eslint-disable prefer-template */
  return new RegExp('^' +
  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  '(?!-? )(?=.*\\d)' + pattern + '$');
  /* eslint-enable prefer-template */
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

function isDataURI(str) {
  (0, _assertString2.default)(str);
  return dataURI.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDate;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _isISO = __webpack_require__(1491);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTimezoneOffset(str) {
  var iso8601Parts = str.match(_isISO.iso8601);
  var timezone = void 0,
      sign = void 0,
      hours = void 0,
      minutes = void 0;
  if (!iso8601Parts) {
    str = str.toLowerCase();
    timezone = str.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/);
    if (!timezone) {
      return str.indexOf('gmt') !== -1 ? 0 : null;
    }
    sign = timezone[1];
    var offset = timezone[2];
    if (offset.length === 3) {
      offset = '0' + offset;
    }
    if (offset.length <= 2) {
      hours = 0;
      minutes = parseInt(offset, 10);
    } else {
      hours = parseInt(offset.slice(0, 2), 10);
      minutes = parseInt(offset.slice(2, 4), 10);
    }
  } else {
    timezone = iso8601Parts[21];
    if (!timezone) {
      // if no hour/minute was provided, the date is GMT
      return !iso8601Parts[12] ? 0 : null;
    }
    if (timezone === 'z' || timezone === 'Z') {
      return 0;
    }
    sign = iso8601Parts[22];
    if (timezone.indexOf(':') !== -1) {
      hours = parseInt(iso8601Parts[23], 10);
      minutes = parseInt(iso8601Parts[24], 10);
    } else {
      hours = 0;
      minutes = parseInt(iso8601Parts[23], 10);
    }
  }
  return (hours * 60 + minutes) * (sign === '-' ? 1 : -1);
}

function isDate(str) {
  (0, _assertString2.default)(str);
  var normalizedDate = new Date(Date.parse(str));
  if (isNaN(normalizedDate)) {
    return false;
  }

  // normalizedDate is in the user's timezone. Apply the input
  // timezone offset to the date so that the year and day match
  // the input
  var timezoneOffset = getTimezoneOffset(str);
  if (timezoneOffset !== null) {
    var timezoneDifference = normalizedDate.getTimezoneOffset() - timezoneOffset;
    normalizedDate = new Date(normalizedDate.getTime() + 60000 * timezoneDifference);
  }

  var day = String(normalizedDate.getDate());
  var dayOrYear = void 0,
      dayOrYearMatches = void 0,
      year = void 0;
  // check for valid double digits that could be late days
  // check for all matches since a string like '12/23' is a valid date
  // ignore everything with nearby colons
  dayOrYearMatches = str.match(/(^|[^:\d])[23]\d([^T:\d]|$)/g);
  if (!dayOrYearMatches) {
    return true;
  }
  dayOrYear = dayOrYearMatches.map(function (digitString) {
    return digitString.match(/\d+/g)[0];
  }).join('/');

  year = String(normalizedDate.getFullYear()).slice(-2);
  if (dayOrYear === day || dayOrYear === year) {
    return true;
  } else if (dayOrYear === '' + day / year || dayOrYear === '' + year / day) {
    return true;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

function isDecimal(str) {
  (0, _assertString2.default)(str);
  return str !== '' && decimal.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _toFloat = __webpack_require__(1494);

var _toFloat2 = _interopRequireDefault(_toFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString2.default)(str);
  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ 1629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(str) {
  (0, _assertString2.default)(str);
  return str.length === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ 1630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var float = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

function isFloat(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};
  if (str === '' || str === '.') {
    return false;
  }
  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
}
module.exports = exports['default'];

/***/ }),

/***/ 1631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString2.default)(str);
  return hexcolor.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString2.default)(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
module.exports = exports['default'];

/***/ }),

/***/ 1634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assertString2.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var issnDigits = str.replace('-', '');
  var position = 8;
  var checksum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;

      var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
      checksum += digitValue * position;
      --position;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return checksum % 11 === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ 1635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isIn;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(1330);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIn(str, options) {
  (0, _assertString2.default)(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString2.default)(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ 1636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports['default'];

/***/ }),

/***/ 1637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isJSON;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ 1638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isLength;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),

/***/ 1639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toLowerCase();
}
module.exports = exports['default'];

/***/ }),

/***/ 1640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
  (0, _assertString2.default)(str);
  return macAddress.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString2.default)(str);
  return md5.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'da-DK': /^(\+?45)?(\d{8})$/,
  'el-GR': /^(\+?30)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[789]\d{9}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale) {
  (0, _assertString2.default)(str);
  if (locale in phones) {
    return phones[locale].test(str);
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ 1643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _isHexadecimal = __webpack_require__(1489);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString2.default)(str);
  return (0, _isHexadecimal2.default)(str) && str.length === 24;
}
module.exports = exports['default'];

/***/ }),

/***/ 1644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString2.default)(str);
  return multibyte.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString2.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = __webpack_require__(1328);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = __webpack_require__(1490);

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = __webpack_require__(1313);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ 1648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

  (0, _assertString2.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toUpperCase();
}
module.exports = exports['default'];

/***/ }),

/***/ 1650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = __webpack_require__(1487);

var _isHalfWidth = __webpack_require__(1488);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString2.default)(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString2.default)(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
module.exports = exports['default'];

/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _isEmail = __webpack_require__(1486);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _merge = __webpack_require__(1313);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

function normalizeEmail(email, options) {
  options = (0, _merge2.default)(options, default_normalize_email_options);

  if (!(0, _isEmail2.default)(email)) {
    return false;
  }

  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmail_remove_dots) {
      parts[0] = parts[0].replace(/\./g, '');
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (~icloud_domains.indexOf(parts[1])) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~outlookdotcom_domains.indexOf(parts[1])) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~yahoo_domains.indexOf(parts[1])) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}
module.exports = exports['default'];

/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = __webpack_require__(1484);

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];

/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString2.default)(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
module.exports = exports['default'];

/***/ }),

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString2.default)(str);
  return parseInt(str, radix || 10);
}
module.exports = exports['default'];

/***/ }),

/***/ 1657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = __webpack_require__(1493);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _ltrim = __webpack_require__(1492);

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
}
module.exports = exports['default'];

/***/ }),

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = unescape;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
      (0, _assertString2.default)(str);
      return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#96;/g, '`');
}
module.exports = exports['default'];

/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = __webpack_require__(1296);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=register.chunk.js.map