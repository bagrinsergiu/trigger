"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mask;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcMotion = _interopRequireDefault(require("rc-motion"));
var _legacyUtil = require("../utils/legacyUtil");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Mask(props) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    mask = props.mask,
    maskMotion = props.maskMotion,
    maskAnimation = props.maskAnimation,
    maskTransitionName = props.maskTransitionName;
  if (!mask) {
    return null;
  }
  var motion = {};
  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = (0, _objectSpread2.default)({
      motionAppear: true
    }, (0, _legacyUtil.getMotion)({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }
  return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: (0, _classnames.default)("".concat(prefixCls, "-mask"), className)
    });
  });
}