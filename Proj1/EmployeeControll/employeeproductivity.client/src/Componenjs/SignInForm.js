"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SignInForm = function SignInForm() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", null, "Sign In"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Email"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Password"
  }), /*#__PURE__*/React.createElement("div", {
    className: "remindPass"
  }, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "Forgot password?")), /*#__PURE__*/React.createElement("div", {
    className: "signInButton"
  }, /*#__PURE__*/React.createElement("button", null, "Sign in")), /*#__PURE__*/React.createElement("div", {
    className: "signUp"
  }, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "Or sign up?")));
};
var _default = exports.default = SignInForm;