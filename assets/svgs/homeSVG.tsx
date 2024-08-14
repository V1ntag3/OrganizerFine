import * as React from "react"
import Svg, { G, Path, SvgProps } from "react-native-svg"
import Globals from "../../Globals"

function HomeSVG(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "width" | "height" | "viewBox" | "color" | "title" | "children" | "opacity" | "fill" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "clipPath" | "translate" | "translateX" | "translateY" | "origin" | "originX" | "originY" | "scale" | "scaleX" | "scaleY" | "skew" | "skewX" | "skewY" | "rotation" | "x" | "y" | "transform" | "pointerEvents" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "id" | "marker" | "markerStart" | "markerMid" | "markerEnd" | "mask" | "onLayout" | "accessibilityLabel" | "accessible" | "testID" | "font" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings" | "hitSlop" | "removeClippedSubviews" | "style" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessibilityActions" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage"> & { readonly preserveAspectRatio?: string | undefined } & {}) {
  return (
    <Svg

      viewBox="0 0 512.000000 512.000000"
      {...props}
    >
      <G fill={Globals.COLOR.LIGHT.COLOR4}>
        <Path
          d="M2523 5114c-13-6-2441-1900-2485-1939-32-29-43-63-33-102 7-31 362-395 407-419 35-18 62-18 98 1l30 16V200H310c-180 0-237-3-259-14-66-35-66-137 0-172C93-7 5027-7 5069 14c66 35 66 137 0 172-22 11-79 14-259 14h-230v475c0 509-1 514-51 541-35 18-63 18-98 0-50-27-51-32-51-541V200H1220v480c0 514 0 519-51 546-35 18-63 18-98 0-51-27-51-32-51-546V200H740l2 1317 3 1316 908 709 907 709 908-709 907-708 5-494c3-272 9-503 14-513 10-21 57-47 86-47 33 0 75 26 88 55 9 19 12 138 12 431v405l30-16c34-18 63-19 93-4 31 16 385 369 403 401 21 41 17 74-15 110-16 18-160 134-319 258l-291 225v512c-1 375-4 519-13 538-24 53-41 55-378 55-328 0-355-3-376-47-5-10-11-114-14-230l-5-213-125 98c-490 385-948 741-967 750-22 12-58 14-80 6zm1153-1092c611-477 1128-881 1150-899l39-32-105-105c-57-58-108-106-112-106-3 0-465 358-1024 795-564 440-1031 797-1046 800-16 4-40 1-55-7-16-8-482-368-1036-801S476 2880 472 2880s-54 47-112 105c-67 67-101 108-95 114 19 18 2290 1791 2295 1791 3 0 505-391 1116-868zm604 157c0-293-3-369-12-363-7 5-93 70-190 147l-178 138v449h380v-371z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
        <Path
          d="M1551 2926c-52-29-50 11-51-1044 0-1068-2-1024 55-1050 19-9 267-12 1006-12 1065 0 1021-2 1047 55 17 38 17 1972 0 2010-26 57 18 55-1050 55-797-1-988-3-1007-14zm909-566v-380h-760v760h760v-380zm960 0v-380h-760v760h760v-380zm-960-960v-380h-760v760h760v-380zm960 0v-380h-760v760h760v-380zM1055 1607c-17-14-28-36-32-63-5-36-1-46 25-75 25-28 37-34 72-34s47 6 72 34c26 29 30 39 25 75-7 54-44 86-97 86-26 0-48-8-65-23zM4431 1566c-87-48-50-186 49-186 51 0 100 49 100 99 0 75-83 124-149 87z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </G>
    </Svg>
  )
}

export default HomeSVG
