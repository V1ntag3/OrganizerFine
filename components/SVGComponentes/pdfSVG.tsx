import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "width" | "height" | "viewBox" | "color" | "title" | "children" | "opacity" | "fill" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "clipPath" | "translate" | "translateX" | "translateY" | "origin" | "originX" | "originY" | "scale" | "scaleX" | "scaleY" | "skew" | "skewX" | "skewY" | "rotation" | "x" | "y" | "transform" | "pointerEvents" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "id" | "marker" | "markerStart" | "markerMid" | "markerEnd" | "mask" | "onLayout" | "accessibilityLabel" | "accessible" | "testID" | "font" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings" | "hitSlop" | "removeClippedSubviews" | "style" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessibilityActions" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage"> & { readonly preserveAspectRatio?: string | undefined } & {}) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      {...props}
    >
      <Path
        d="M6.913.063a1.682 1.682 0 00-1.069.92c-.112.243-.116.288-.13 1.16l-.013.903-1.088.018c-1.078.013-1.087.013-1.334.134-.395.194-.606.405-.795.791l-.17.341v17.39l.12.26c.167.35.351.58.612.741.462.297.072.283 6.864.27l6.15-.014.256-.12c.341-.158.665-.468.826-.787.13-.26.13-.265.144-1.19l.013-.926 1.088-.018 1.087-.013.265-.13c.355-.176.629-.459.804-.827l.143-.301V4.312L18.53 2.156 16.374 0l-4.627.004c-3.517 0-4.676.014-4.834.059zm8.953 2.35l.014 1.697.126.216c.157.26.386.418.7.48.135.023.921.046 1.761.046h1.523v6.77c0 4.59-.013 6.827-.05 6.944-.058.22-.282.472-.511.575-.171.081-.476.086-6.226.086H7.16l-.23-.113a.977.977 0 01-.354-.3l-.13-.185-.014-8.589c-.01-9.38-.027-8.75.247-9.025.067-.072.207-.166.305-.21.171-.082.405-.086 4.524-.086h4.344l.013 1.693zm2.18.246c.772.773 1.405 1.42 1.405 1.442 0 .018-.606.032-1.352.023l-1.352-.014-.085-.108c-.081-.098-.086-.193-.086-1.424 0-.727.014-1.32.032-1.32.022 0 .669.633 1.437 1.401zM5.713 11.24l.014 7.47.12.257c.167.355.441.638.796.813l.296.144 4.82.013 4.82.01-.013.866c-.013.858-.013.872-.135 1.051a.912.912 0 01-.354.301l-.239.117H9.842c-4.123 0-6.055-.013-6.176-.05-.247-.067-.54-.377-.602-.633-.072-.287-.077-16.84-.005-17.124a.995.995 0 01.508-.615c.162-.072.31-.086 1.159-.086h.98l.008 7.466z"
        fill="#fff"
      />
      <Path
        d="M8.198 5.714c-.229.121-.27.377-.09.553l.108.112h4.982c4.68 0 4.99-.005 5.08-.08a.42.42 0 00.122-.221c.022-.121.004-.166-.108-.283l-.135-.135H13.22c-3.481.005-4.959.018-5.022.054zM8.108 8.558a.35.35 0 00-.112.247c0 .085.04.18.112.247l.108.112h4.969c3.095 0 5-.018 5.049-.045a.398.398 0 00.139-.18.344.344 0 00-.162-.444c-.08-.036-1.478-.05-5.053-.05H8.216l-.108.113zM8.108 11.343a.35.35 0 00-.112.247c0 .085.04.18.112.247l.108.112h4.942c3.575 0 4.973-.013 5.053-.05.162-.076.234-.273.162-.444a.398.398 0 00-.14-.18c-.049-.027-1.953-.045-5.048-.045H8.216l-.108.113zM8.108 14.128a.35.35 0 00-.112.247c0 .085.04.18.112.247l.108.112h4.982c4.937 0 4.977 0 5.076-.09.18-.17.166-.417-.031-.57-.054-.045-1.209-.054-5.05-.058H8.217l-.108.112zM8.095 16.904a.33.33 0 00.018.485l.117.108h9.972l.108-.126c.13-.152.14-.296.014-.453l-.09-.117H8.189l-.094.103z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
