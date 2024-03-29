import * as React from "react"
import Svg, { Path,SvgProps } from "react-native-svg"

function AddSVG(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "fontSize" | "fontWeight" | "color" | "fontFamily" | "opacity" | "height" | "width" | "transform" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "children" | "hitSlop" | "id" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "fill" | "title" | "clipPath" | "marker" | "mask" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "viewBox" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "translate" | "origin" | "originX" | "originY" | "scale" | "skew" | "skewX" | "skewY" | "x" | "y" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "markerStart" | "markerMid" | "markerEnd" | "font" | "fontStyle" | "fontVariant" | "fontStretch" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings"> & { readonly preserveAspectRatio?: string | undefined } & {}) {
  return (
    <Svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
      fill="none"
      {...props}

    >
      <Path
        d="M15.307 2.108C9.371 2.623 4.28 6.774 2.655 12.439c-.438 1.515-.56 2.405-.554 4.093 0 1.605.103 2.398.503 3.855 1.328 4.808 5.201 8.681 10.01 10.01 1.443.392 2.249.495 3.854.502 1.56.006 2.21-.071 3.603-.42 4.002-.998 7.483-3.815 9.365-7.566.58-1.147 1.102-2.83 1.347-4.318.174-1.057.16-3.255-.026-4.35-.548-3.223-1.96-5.918-4.248-8.128a14.285 14.285 0 00-8.656-3.984c-.69-.064-1.953-.077-2.546-.025zm3.159 2.172c1.302.232 2.236.535 3.377 1.076 2.572 1.231 4.563 3.223 5.807 5.807a12.261 12.261 0 01-.006 10.687c-2.971 6.168-10.325 8.752-16.487 5.794a12.214 12.214 0 01-5.807-5.807c-.542-1.135-.832-2.05-1.077-3.403-.155-.858-.155-3.01 0-3.868.245-1.353.535-2.268 1.077-3.403a12.11 12.11 0 013.19-4.125c1.876-1.572 4.112-2.54 6.606-2.842.69-.09 2.63-.039 3.32.084z"
        fill="#fff"
      />
      <Path
        d="M16.081 9.371c-.238.11-.451.336-.541.574-.045.116-.071 1.115-.071 2.849v2.668l-2.765.02c-2.681.019-2.772.025-2.946.154-.341.252-.445.458-.445.864 0 .406.104.612.445.864.174.129.265.135 2.94.154l2.764.02.02 2.765c.019 2.674.025 2.765.154 2.939.252.341.458.444.864.444.406 0 .612-.103.864-.444.129-.174.135-.265.154-2.94l.02-2.764 2.765-.02c2.674-.019 2.765-.025 2.939-.154.341-.252.444-.458.444-.864 0-.406-.103-.612-.444-.864-.174-.129-.265-.135-2.94-.154l-2.764-.02-.02-2.765c-.019-2.674-.025-2.765-.154-2.939a1.655 1.655 0 00-.297-.303c-.219-.16-.728-.206-.986-.084z"
        fill="#fff"
      />
    </Svg>
  )
}

export default AddSVG
