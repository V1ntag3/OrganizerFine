import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function BarChartSVG(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "fontSize" | "fontWeight" | "color" | "fontFamily" | "opacity" | "height" | "width" | "transform" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "children" | "hitSlop" | "id" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "fill" | "title" | "clipPath" | "marker" | "mask" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "viewBox" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "translate" | "origin" | "originX" | "originY" | "scale" | "skew" | "skewX" | "skewY" | "x" | "y" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "markerStart" | "markerMid" | "markerEnd" | "font" | "fontStyle" | "fontVariant" | "fontStretch" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings"> & { readonly preserveAspectRatio?: string | undefined } & {}) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <Path
        d="M75.86.664c-.47.469-.665.84-.665 1.29 0 .448.196.8.664 1.288l.665.664h7.949l-9.668 9.668-9.668 9.668-3.907-3.906c-3.925-3.906-3.925-3.906-4.785-3.906h-.879L37.578 33.438c-12.5 12.5-18.027 18.183-18.086 18.515-.195 1.348.586 2.344 1.875 2.344h.801l17.129-17.129L56.445 20.02l3.848 3.847c3.867 3.828 4.414 4.238 5.371 3.965.254-.078 5.176-4.844 10.957-10.605L87.11 6.738l.02 3.223c0 3.77.156 4.434 1.172 4.96.82.45 1.543.333 2.246-.37l.469-.469V7.715c0-4.004-.079-6.504-.196-6.758C90.332.059 89.883 0 82.988 0h-6.465l-.664.664zM74.219 29.121c-1.172.527-2.09 1.445-2.656 2.617l-.47.977V96.094H60.157V78.75c0-11.191-.078-17.578-.195-18.047-.352-1.21-1.387-2.5-2.54-3.164l-1.073-.605h-6.25c-6.035 0-6.27.02-7.051.43-1.055.566-1.992 1.542-2.5 2.597-.41.879-.41.996-.469 18.496l-.059 17.637H29.317l-.058-9.336c-.059-9.239-.059-9.317-.508-10.293-.625-1.348-1.68-2.363-2.91-2.832-.957-.352-1.543-.39-6.68-.39-6.191 0-6.738.077-8.086 1.19-.39.333-.957 1.016-1.27 1.504l-.527.919-.058 9.609-.059 9.629H6.72c-3.203 0-3.985.37-3.985 1.953 0 .82.293 1.309.977 1.66.508.254 5.898.293 46.289.293 40.39 0 45.781-.04 46.29-.293.683-.351.976-.84.976-1.66 0-1.563-.782-1.953-3.907-1.953h-2.343V32.714l-.47-.976c-.566-1.23-1.327-1.992-2.558-2.558-.957-.45-1.094-.47-6.933-.47-5.567 0-6.016.04-6.836.411zm12.539 3.828c.332.293.351 1.543.351 31.739v31.406H75V64.707c0-28.926.02-31.406.332-31.738.293-.332.723-.352 5.684-.352 4.726 0 5.43.04 5.742.332zM55.8 61.172l.449.41v34.512H43.945V61.699l.489-.468.468-.489h5.215c5.098 0 5.235.02 5.684.43zM24.766 77.46l.43.293v18.34h-12.11v-9.082c0-8.828.02-9.102.39-9.473.372-.371.645-.39 5.626-.39 4.414 0 5.293.038 5.664.312zM14.316 57.363c-.234.04-.644.313-.918.586-1.132 1.133-.273 3.184 1.329 3.184 2.05 0 2.675-2.852.8-3.633a5.452 5.452 0 00-.722-.254c-.04.02-.254.078-.489.117z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BarChartSVG
