"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _isMobile = _interopRequireDefault(require("rc-util/lib/isMobile"));
var _Mask = _interopRequireDefault(require("./Mask"));
var _PopupInner = _interopRequireDefault(require("./PopupInner"));
var _MobilePopupInner = _interopRequireDefault(require("./MobilePopupInner"));
var _excluded = ["visible", "mobile"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Popup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
    mobile = _ref.mobile,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useState = (0, _react.useState)(visible),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    innerVisible = _useState2[0],
    serInnerVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    inMobile = _useState4[0],
    setInMobile = _useState4[1];
  var cloneProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    visible: innerVisible
  });

  // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash
  (0, _react.useEffect)(function () {
    serInnerVisible(visible);
    if (visible && mobile) {
      setInMobile((0, _isMobile.default)());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/React.createElement(_MobilePopupInner.default, (0, _extends2.default)({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/React.createElement(_PopupInner.default, (0, _extends2.default)({}, cloneProps, {
    ref: ref
  }));

  // We can use fragment directly but this may failed some selector usage. Keep as origin logic
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Mask.default, cloneProps), popupNode);
});
Popup.displayName = 'Popup';
var _default = exports.default = Popup;