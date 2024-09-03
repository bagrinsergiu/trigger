import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import * as React from 'react';
import CSSMotion from 'rc-motion';
import classNames from 'classnames';
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
  var mergedStyle = _objectSpread({
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
  return /*#__PURE__*/React.createElement(CSSMotion, _extends({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    var mergedClassName = classNames(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/React.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onClick: onClick,
      style: _objectSpread(_objectSpread({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
export default MobilePopupInner;