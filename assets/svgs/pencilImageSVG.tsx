import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "width" | "height" | "viewBox" | "color" | "title" | "children" | "opacity" | "fill" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "clipPath" | "translate" | "translateX" | "translateY" | "origin" | "originX" | "originY" | "scale" | "scaleX" | "scaleY" | "skew" | "skewX" | "skewY" | "rotation" | "x" | "y" | "transform" | "pointerEvents" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "id" | "marker" | "markerStart" | "markerMid" | "markerEnd" | "mask" | "onLayout" | "accessibilityLabel" | "accessible" | "testID" | "font" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings" | "hitSlop" | "removeClippedSubviews" | "style" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessibilityActions" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage"> & { readonly preserveAspectRatio?: string | undefined } & {}) {
  return (
    <Svg
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      {...props}
    >
      <Path
        d="M4390 5104c-111-23-203-77-313-184l-98-95 424-423 423-423 95 98c68 71 104 119 132 173 119 237 76 503-112 691-149 149-345 208-551 163zM3797 4642l-57-57 423-423 422-422 60 60 60 60-420 420c-231 231-422 420-425 420s-31-26-63-58zM2030 2875L445 1290l423-422 422-423 1585 1585 1585 1585-423 423-422 422-1585-1585zM345 1129C312 1041 0 91 0 77 0 53 53 0 77 0c23 0 1063 342 1063 349 0 4-178 184-395 401-265 265-396 389-400 379z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  )
}

export default SvgComponent
