"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var React = _interopRequireWildcard(require("react"));
var _rcMotion = _interopRequireDefault(require("rc-motion"));
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var MobilePopupInner = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    children = props.children,
    _props$mobile = props.mobile,
    _props$mobile2 = _props$mobile === void 0 ? {} : _props$mobile,
    popupClassName = _props$mobile2.popupClassName,
    popupStyle = _props$mobile2.popupStyle,
    _props$mobile2$popupM = _props$mobile2.popupMotion,
    popupMotion = _props$mobile2$popupM === void 0 ? {} : _props$mobile2$popupM,
    popupRender = _props$mobile2.popupRender,
    onClick = props.onClick;
  var elementRef = React.useRef();

  // ========================= Refs =========================
  React.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });

  // ======================== Render ========================
  var mergedStyle = (0, _objectSpread2.default)({
    zIndex: zIndex
  }, popupStyle);
  var childNode = children;

  // Wrapper when multiple children
  if (React.Children.count(children) > 1) {
    childNode = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  // Mobile support additional render
  if (popupRender) {
    childNode = popupRender(childNode);
  }
  return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    var mergedClassName = (0, _classnames.default)(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/React.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onClick: onClick,
      style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
var _default = exports.default = MobilePopupInner;