import * as React from "react"
import Svg, { Path, Ellipse, G, Circle, SvgProps } from "react-native-svg"
import Globals from "@/Globals"

function SvgComponent(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "width" | "height" | "viewBox" | "color" | "title" | "children" | "opacity" | "fill" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "clipPath" | "translate" | "translateX" | "translateY" | "origin" | "originX" | "originY" | "scale" | "scaleX" | "scaleY" | "skew" | "skewX" | "skewY" | "rotation" | "x" | "y" | "transform" | "pointerEvents" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "id" | "marker" | "markerStart" | "markerMid" | "markerEnd" | "mask" | "onLayout" | "accessibilityLabel" | "accessible" | "testID" | "font" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings" | "hitSlop" | "removeClippedSubviews" | "style" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessibilityActions" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage"> & { readonly preserveAspectRatio?: string | undefined } & {}) {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <Path
        d="M96.11 434.09c85.82 42.11 225 42.11 310.77 0s85.81-110.4 0-152.51-224.95-42.12-310.77 0-85.82 110.42 0 152.51z"
        fill="#f5f5f5"
      />
      <Ellipse cx={144.11} cy={406.32} rx={46.7} ry={22.26} fill="#e0e0e0" />
      <Ellipse cx={379.01} cy={340.84} rx={46.7} ry={22.26} fill="#e0e0e0" />
      <Path
        d="M201.76 245l-39.61 22.87a7.45 7.45 0 00-3.19 4.56l-9.84 56.83a4.74 4.74 0 002.14 4.57l25.54 14.74a5.87 5.87 0 005.32 0l54.58-31.51a5 5 0 000-8.84l-19.64-11.34a6.73 6.73 0 01-3-4.59l-4.37-42.88a6.52 6.52 0 00-2.81-4.5 5.7 5.7 0 00-5.12.09z"
        fill="#263238"
      />
      <Path
        d="M179.46 338.59v10.63a5.51 5.51 0 002.66-.64l54.58-31.51a5.71 5.71 0 002.66-4.42 5.2 5.2 0 00-1.05-2.88h-8.93z"
        fill="#455a64"
      />
      <Path
        d="M206.75 247.9l-39.61 22.86a7.43 7.43 0 00-3.18 4.57L155 326.91a4.73 4.73 0 002.14 4.57l19.64 11.34a5.93 5.93 0 005.32 0l54.6-31.52c1.47-.85 1.47-2.22 0-3.07l-19.64-11.34a6.73 6.73 0 01-3-4.59l-4.37-42.88a1.84 1.84 0 00-2.94-1.52z"
        fill="#263238"
      />
      <Path
        d="M236.7 308.23l-19.64-11.34a6.25 6.25 0 01-1.95-1.95l-59.71 34.48a4.46 4.46 0 001.76 2.06l19.64 11.34a5.93 5.93 0 005.32 0l54.58-31.52c1.47-.85 1.47-2.22 0-3.07z"
        fill="#37474f"
      />
      <Path
        d="M75.89 358l-2.53-1.46a8.24 8.24 0 01-3.73-6.46V180a8.21 8.21 0 013.73-6.44l207.8-119.3a8.25 8.25 0 017.45 0l1.94 1.12a8.2 8.2 0 013.72 6.45V232a8.23 8.23 0 01-3.72 6.45L83.34 358a8.22 8.22 0 01-7.45 0z"
        fill="#455a64"
      />
      <Path
        d="M84.61 184.38l-13.88-8a7.59 7.59 0 00-1.1 3.67v170.07a8.24 8.24 0 003.73 6.46l2.53 1.42a8.22 8.22 0 007.45 0l1.27-.73z"
        fill="#263238"
      />
      <Path
        d="M79.62 355.89V185.8a8.24 8.24 0 013.72-6.45L290.55 59.72c2.06-1.19 3.72-.23 3.72 2.15V232a8.23 8.23 0 01-3.72 6.45L83.34 358c-2.05 1.23-3.72.26-3.72-2.11z"
        fill="#37474f"
      />
      <Path
        d="M176.92 292.49l19.63-11.34c1.47-.85 2.67-.24 2.67 1.35a5.72 5.72 0 01-2.67 4.42l-19.63 11.33c-1.47.85-2.66.25-2.66-1.34a5.71 5.71 0 012.66-4.42z"
        fill="#e0e0e0"
      />
      <Path
        d="M89.16 184.55l195.15-113c1.17-.68 2.12-.14 2.12 1.22V221a4.71 4.71 0 01-2.12 3.69L89.17 337.38c-1.18.68-2.13.13-2.13-1.22V188.24a4.71 4.71 0 012.12-3.69z"
        fill="#fff"
      />
      <Path
        d="M96.44 187.39L275.48 84c3.25-1.87 5.91-.34 5.91 3.41v128.75a6.08 6.08 0 01-2.74 4.75L95.38 326.7c-1.51.88-2.74.16-2.74-1.58V194a8.44 8.44 0 013.8-6.61z"
        fill="#e6e6e6"
      />
      <Path
        d="M169.85 164.91L268.52 107.94 268.52 127.76 169.85 184.72 169.85 164.91z"
        fill="#f5f5f5"
      />
      <Path
        d="M169.85 192.57L268.52 135.6 268.52 185.24 169.85 242.21 169.85 192.57z"
        fill="#f0f0f0"
      />
      <Path
        d="M281.39 90.53v-3.09c0-3.75-2.66-5.28-5.91-3.41l-179 103.36a8.44 8.44 0 00-3.8 6.59v5.51z"
        fill={Globals.COLOR.LIGHT.COLOR4}
      />
      <Path
        d="M256.61 97.55a4.51 4.51 0 00-2 3.53c0 1.3.91 1.82 2 1.17a4.48 4.48 0 002-3.52c.04-1.3-.87-1.82-2-1.18zM264.69 92.89a4.49 4.49 0 00-2 3.53c0 1.29.91 1.82 2 1.17a4.51 4.51 0 002-3.52c.03-1.3-.88-1.83-2-1.18zM272.76 88.23a4.51 4.51 0 00-2 3.52c0 1.3.91 1.83 2 1.18a4.49 4.49 0 002-3.53c.04-1.29-.87-1.82-2-1.17z"
        fill="#fff"
      />
      <Path
        d="M101.21 270a1.07 1.07 0 01-.52-.14 1.05 1.05 0 01-.53-.91v-64.4a1 1 0 01.52-.91l55.68-32.26a1.08 1.08 0 011.06 0 1.06 1.06 0 01.53.92v64.45a1.05 1.05 0 01-.53.91l-55.68 32.2a1.08 1.08 0 01-.53.14zm1.06-64.84v62l53.57-31v-62z"
        fill="#fafafa"
      />
      <Path
        d="M120.4 246.75a11 11 0 01-5.56-1.44c-4-2.31-6.21-7.09-6.21-13.48 0-12.68 8.92-28.18 19.89-34.53 5.51-3.19 10.75-3.68 14.75-1.37s6.21 7.09 6.21 13.48c0 12.7-8.93 28.19-19.9 34.54a18.63 18.63 0 01-9.18 2.8zm17.31-50.14a16.49 16.49 0 00-8.13 2.52c-10.39 6-18.84 20.69-18.84 32.7 0 5.6 1.83 9.74 5.15 11.65s7.81 1.43 12.63-1.36c10.39-6 18.85-20.68 18.85-32.71 0-5.6-1.83-9.74-5.16-11.65a8.87 8.87 0 00-4.5-1.15z"
        fill="#fafafa"
      />
      <G>
        <Path
          d="M339.52 278.63l-3.87-2.24a.64.64 0 00-.6 0l-7 3.15a.83.83 0 01-1.16-.54 15.75 15.75 0 00-1.56-3.47 1.9 1.9 0 01-.11-1.69l4.66-9.4a1.06 1.06 0 00-.41-1.37l-5.06-2.92a1 1 0 00-1.39.32l-5.81 8.74a2 2 0 01-1.52.76 14 14 0 00-2 .09v-6.39l-3.89-2.24a.64.64 0 00-.63.06l-7.86 4.54a2.13 2.13 0 00-.94 1.46l-.78 8.75a2.89 2.89 0 01-.82 1.63 48.06 48.06 0 00-4.37 4.62 1.49 1.49 0 01-1.54.44l-5.05-1.76a1.23 1.23 0 00-1.41.52l-5.78 10a1.23 1.23 0 00.25 1.49l4.05 3.49a1.5 1.5 0 01.39 1.56 46.38 46.38 0 00-1.81 6.09 2.93 2.93 0 01-1 1.52l-7.18 5.05a2.15 2.15 0 00-.8 1.55v9.07a.65.65 0 00.28.59l3.87 2.23 5.75-2.72a14.19 14.19 0 00.71 1.34 1.9 1.9 0 01.11 1.69l-4.66 9.4a1.06 1.06 0 00.41 1.37l5.06 2.92a1.06 1.06 0 001.39-.32l5.81-8.74a2 2 0 011.52-.76 15.78 15.78 0 003.79-.38.83.83 0 011.05.74l.76 7.63a.66.66 0 00.31.54l3.87 2.23 4.64-6.82a2.13 2.13 0 00.94-1.47l.78-8.74a1.76 1.76 0 011-1.32 18.51 18.51 0 006.1-4.29 1.61 1.61 0 011.57-.41l3.1 1.09a1.22 1.22 0 001.41-.53l5.78-10a1.23 1.23 0 00-.25-1.49l-2.66-2.3a1.62 1.62 0 01-.44-1.57 26.09 26.09 0 00.73-7.25 2 2 0 01.75-1.54l7.18-5.06a2.12 2.12 0 00.8-1.54l3.43-4.11zm-34.32 36c-7.33 4.24-11.89 1.23-11.89-7.23s6.06-18.84 13.39-23.07 11.78-1.16 11.78 7.31-5.95 18.72-13.28 22.95z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M339.52 278.63l-3.87-2.24a.64.64 0 00-.6 0l-7 3.15a.83.83 0 01-1.16-.54 15.75 15.75 0 00-1.56-3.47 1.9 1.9 0 01-.11-1.69l4.66-9.4a1.06 1.06 0 00-.41-1.37l-5.06-2.92a1 1 0 00-1.39.32l-5.81 8.74a2 2 0 01-1.52.76 14 14 0 00-2 .09v-6.39l-3.89-2.24a.64.64 0 00-.63.06l-7.86 4.54a2.13 2.13 0 00-.94 1.46l-.78 8.75a2.89 2.89 0 01-.82 1.63 48.06 48.06 0 00-4.37 4.62 1.49 1.49 0 01-1.54.44l-5.05-1.76a1.23 1.23 0 00-1.41.52l-5.78 10a1.23 1.23 0 00.25 1.49l4.05 3.49a1.5 1.5 0 01.39 1.56 46.38 46.38 0 00-1.81 6.09 2.93 2.93 0 01-1 1.52l-7.18 5.05a2.15 2.15 0 00-.8 1.55v9.07a.65.65 0 00.28.59l3.87 2.23 5.75-2.72a14.19 14.19 0 00.71 1.34 1.9 1.9 0 01.11 1.69l-4.66 9.4a1.06 1.06 0 00.41 1.37l5.06 2.92a1.06 1.06 0 001.39-.32l5.81-8.74a2 2 0 011.52-.76 15.78 15.78 0 003.79-.38.83.83 0 011.05.74l.76 7.63a.66.66 0 00.31.54l3.87 2.23 4.64-6.82a2.13 2.13 0 00.94-1.47l.78-8.74a1.76 1.76 0 011-1.32 18.51 18.51 0 006.1-4.29 1.61 1.61 0 011.57-.41l3.1 1.09a1.22 1.22 0 001.41-.53l5.78-10a1.23 1.23 0 00-.25-1.49l-2.66-2.3a1.62 1.62 0 01-.44-1.57 26.09 26.09 0 00.73-7.25 2 2 0 01.75-1.54l7.18-5.06a2.12 2.12 0 00.8-1.54l3.43-4.11zm-34.32 36c-7.33 4.24-11.89 1.23-11.89-7.23s6.06-18.84 13.39-23.07 11.78-1.16 11.78 7.31-5.95 18.72-13.28 22.95z"
          opacity={0.1}
        />
        <Path
          d="M328.33 267.57l1.54-3.11a1.06 1.06 0 00-.41-1.37l-5.06-2.92a1 1 0 00-1.39.32l-5.81 8.74a1.72 1.72 0 01-.39.37l6.5 3.76zM283 305.28a2.24 2.24 0 01-.55.59l-7.18 5.05a1.82 1.82 0 00-.47.55l4.38 2.53 9.53-5.43zM287.37 281.13a1.23 1.23 0 00-1 .58l-5.78 10a1.23 1.23 0 00-.13.73l5 2.88 7.91-10.7zM300.49 267l6.16 3.56 7-4v-2.82l-3.89-2.24a.64.64 0 00-.63.06l-7.86 4.54a2.09 2.09 0 00-.78.9zM339.52 278.63a.64.64 0 00-.62 0l-7 3.16a.83.83 0 01-1.16-.54 15.06 15.06 0 00-1-2.46l5.26-2.39a.68.68 0 01.61 0z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <G opacity={0.4}>
          <Path
            d="M328.33 267.57l1.54-3.11a1.06 1.06 0 00-.41-1.37l-5.06-2.92a1 1 0 00-1.39.32l-5.81 8.74a1.72 1.72 0 01-.39.37l6.5 3.76zM283 305.28a2.24 2.24 0 01-.55.59l-7.18 5.05a1.82 1.82 0 00-.47.55l4.38 2.53 9.53-5.43zM287.37 281.13a1.23 1.23 0 00-1 .58l-5.78 10a1.23 1.23 0 00-.13.73l5 2.88 7.91-10.7zM300.49 267l6.16 3.56 7-4v-2.82l-3.89-2.24a.64.64 0 00-.63.06l-7.86 4.54a2.09 2.09 0 00-.78.9zM339.52 278.63a.64.64 0 00-.62 0l-7 3.16a.83.83 0 01-1.16-.54 15.06 15.06 0 00-1-2.46l5.26-2.39a.68.68 0 01.61 0z"
            fill="#fff"
          />
        </G>
        <Path
          d="M339.8 288.29v-9.08a.59.59 0 00-.9-.58l-7 3.16a.84.84 0 01-1.17-.54 15.75 15.75 0 00-1.56-3.47 1.93 1.93 0 01-.1-1.69l4.66-9.41a1.05 1.05 0 00-.42-1.36l-5.06-2.93a1.06 1.06 0 00-1.39.33l-5.81 8.74a1.91 1.91 0 01-1.52.75 15.72 15.72 0 00-3.78.39.83.83 0 01-1.05-.74l-.77-7.64a.59.59 0 00-.95-.48l-7.85 4.54a2.11 2.11 0 00-.94 1.46l-.79 8.75a2.93 2.93 0 01-.82 1.63 46.76 46.76 0 00-4.36 4.62 1.5 1.5 0 01-1.55.44l-5-1.76a1.23 1.23 0 00-1.42.52l-5.77 10a1.22 1.22 0 00.25 1.49l4.05 3.49a1.49 1.49 0 01.39 1.55 48.65 48.65 0 00-1.82 6.1 2.91 2.91 0 01-1 1.52l-7.17 5a2.11 2.11 0 00-.81 1.55v9.07a.59.59 0 00.9.58l7-3.15a.83.83 0 011.17.54 15.22 15.22 0 001.56 3.52 2 2 0 01.1 1.7l-4.66 9.4a1.07 1.07 0 00.41 1.37l5.06 2.92a1.06 1.06 0 001.4-.33l5.81-8.73a2 2 0 011.52-.76 15.7 15.7 0 003.78-.38.83.83 0 011.05.74l.77 7.63a.59.59 0 00.95.49l7.85-4.54a2.13 2.13 0 00.94-1.47l.79-8.74a3 3 0 01.82-1.64 46.83 46.83 0 004.36-4.62 1.51 1.51 0 011.54-.43l5.05 1.76a1.24 1.24 0 001.42-.53l5.77-10a1.22 1.22 0 00-.25-1.48l-4.05-3.49a1.51 1.51 0 01-.39-1.56 48 48 0 001.82-6.09 2.91 2.91 0 011-1.52l7.18-5.06a2.09 2.09 0 00.76-1.55zm-30.74 28.53c-7.33 4.24-13.27.8-13.27-7.66s5.94-18.76 13.27-23 13.28-.8 13.28 7.67-5.94 18.76-13.28 22.99zM300.82 349.75a.64.64 0 00-.68.06l-3.31 2.19a1 1 0 01-1.33-.3 7.11 7.11 0 00-.64-.79 1.64 1.64 0 01-.39-1.57l5.26-3.33-3.93-2.27a.76.76 0 00-.26-.11l-2.49-.56a1.36 1.36 0 00-1.41.66l-2.35 4.46a2.45 2.45 0 01-1.41 1.07h-.15a5.31 5.31 0 00.21-1L284 346a.62.62 0 00-.73.1l-3.74 2.9a2.14 2.14 0 00-.71 1.59l.22 3.55a2.75 2.75 0 01-.58 1.72 28.19 28.19 0 00-1.73 2.3 1.92 1.92 0 01-1.52.77l-2.4-.12a1.53 1.53 0 00-1.38.85l-2.26 5.06a1 1 0 00.39 1.21l2.66 1.53a1.25 1.25 0 01.06.69 21.16 21.16 0 00-.42 2.42 3 3 0 01-.81 1.64l-3.31 3a2 2 0 00-.55 1.63l.62 3.61a.67.67 0 00.3.49l3.95 2.28.05-4.52a1 1 0 011.33.3 6.36 6.36 0 00.65.79 1.64 1.64 0 01.38 1.58l-1.69 4.63a.83.83 0 00.33 1l3.95 2.28 1.07-2.94 1.52-3.78a2.48 2.48 0 011.42-1.07 10.9 10.9 0 001.53-.5.84.84 0 011.18.53l.85 2.8a.69.69 0 00.32.44l4 2.28-.7-4.37 1.21-.95a2.07 2.07 0 00.71-1.59l-.22-3.55a2.83 2.83 0 01.58-1.72c.61-.73 1.54-1.12 2.08-1.92.31-.45.64-1.17 1.18-1.15l2.4.12a1.54 1.54 0 001.38-.84l2.25-5.07a1 1 0 00-.5-1.28l-1.94-.82a1.2 1.2 0 01-.66-1.34 23.08 23.08 0 00.41-2.42 3 3 0 01.81-1.64l3.31-3a2 2 0 00.55-1.13l3-2.34zm-15 23.35c-4 3.18-7.92 2.31-8.65-1.94s2.58-9.66 6.63-12.84 7.3-2.94 8 1.31-1.96 10.28-6.01 13.47z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M300.82 349.75a.64.64 0 00-.68.06l-3.31 2.19a1 1 0 01-1.33-.3 7.11 7.11 0 00-.64-.79 1.64 1.64 0 01-.39-1.57l5.26-3.33-3.93-2.27a.76.76 0 00-.26-.11l-2.49-.56a1.36 1.36 0 00-1.41.66l-2.35 4.46a2.45 2.45 0 01-1.41 1.07h-.15a5.31 5.31 0 00.21-1L284 346a.62.62 0 00-.73.1l-3.74 2.9a2.14 2.14 0 00-.71 1.59l.22 3.55a2.75 2.75 0 01-.58 1.72 28.19 28.19 0 00-1.73 2.3 1.92 1.92 0 01-1.52.77l-2.4-.12a1.53 1.53 0 00-1.38.85l-2.26 5.06a1 1 0 00.39 1.21l2.66 1.53a1.25 1.25 0 01.06.69 21.16 21.16 0 00-.42 2.42 3 3 0 01-.81 1.64l-3.31 3a2 2 0 00-.55 1.63l.62 3.61a.67.67 0 00.3.49l3.95 2.28.05-4.52a1 1 0 011.33.3 6.36 6.36 0 00.65.79 1.64 1.64 0 01.38 1.58l-1.69 4.63a.83.83 0 00.33 1l3.95 2.28 1.07-2.94 1.52-3.78a2.48 2.48 0 011.42-1.07 10.9 10.9 0 001.53-.5.84.84 0 011.18.53l.85 2.8a.69.69 0 00.32.44l4 2.28-.7-4.37 1.21-.95a2.07 2.07 0 00.71-1.59l-.22-3.55a2.83 2.83 0 01.58-1.72c.61-.73 1.54-1.12 2.08-1.92.31-.45.64-1.17 1.18-1.15l2.4.12a1.54 1.54 0 001.38-.84l2.25-5.07a1 1 0 00-.5-1.28l-1.94-.82a1.2 1.2 0 01-.66-1.34 23.08 23.08 0 00.41-2.42 3 3 0 01.81-1.64l3.31-3a2 2 0 00.55-1.13l3-2.34zm-15 23.35c-4 3.18-7.92 2.31-8.65-1.94s2.58-9.66 6.63-12.84 7.3-2.94 8 1.31-1.96 10.28-6.01 13.47z"
          opacity={0.1}
        />
        <Path
          d="M271 372.29l-3.28 3a1.94 1.94 0 00-.5.94l4.86 2.81v-.26a1 1 0 011.33.3l4.68-2.71zM279.36 363.18a17.46 17.46 0 011.2-1.66l-4.67-2.7a1.52 1.52 0 01-.68.15l-2.4-.12a1.54 1.54 0 00-1 .36l7.18 4.15zM304.75 352a.66.66 0 00-.68.08l-3.31 2.18a1 1 0 01-1.32-.3 7.4 7.4 0 00-.65-.79 1.65 1.65 0 01-.39-1.58l.32-.84 1.42-.94a.64.64 0 01.68-.06zM295 351.05a1.71 1.71 0 00-.11-.14 1.64 1.64 0 01-.39-1.57l5.26-3.33-3.93-2.27a.76.76 0 00-.26-.11l-2.49-.56a1.36 1.36 0 00-1.41.66l-2.35 4.46a1.87 1.87 0 01-.53.6l5.29 3.06zM278.92 350l4.86 2.81 4-3.66a6.71 6.71 0 00.16-.9L284 346a.62.62 0 00-.73.1l-3.74 2.9a2.05 2.05 0 00-.61 1z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <G opacity={0.4}>
          <Path
            d="M271 372.29l-3.28 3a1.94 1.94 0 00-.5.94l4.86 2.81v-.26a1 1 0 011.33.3l4.68-2.71zM279.36 363.18a17.46 17.46 0 011.2-1.66l-4.67-2.7a1.52 1.52 0 01-.68.15l-2.4-.12a1.54 1.54 0 00-1 .36l7.18 4.15zM304.75 352a.66.66 0 00-.68.08l-3.31 2.18a1 1 0 01-1.32-.3 7.4 7.4 0 00-.65-.79 1.65 1.65 0 01-.39-1.58l.32-.84 1.42-.94a.64.64 0 01.68-.06zM295 351.05a1.71 1.71 0 00-.11-.14 1.64 1.64 0 01-.39-1.57l5.26-3.33-3.93-2.27a.76.76 0 00-.26-.11l-2.49-.56a1.36 1.36 0 00-1.41.66l-2.35 4.46a1.87 1.87 0 01-.53.6l5.29 3.06zM278.92 350l4.86 2.81 4-3.66a6.71 6.71 0 00.16-.9L284 346a.62.62 0 00-.73.1l-3.74 2.9a2.05 2.05 0 00-.61 1z"
            fill="#fff"
          />
        </G>
        <Path
          d="M305.68 356.13l-.62-3.61a.6.6 0 00-1-.43l-3.31 2.18a1 1 0 01-1.32-.3 7.19 7.19 0 00-.65-.79 1.66 1.66 0 01-.39-1.57l1.69-4.57a.83.83 0 00-.62-1.13l-2.49-.56a1.34 1.34 0 00-1.41.66l-2.34 4.46a2.54 2.54 0 01-1.42 1.07 11.09 11.09 0 00-1.54.51.84.84 0 01-1.17-.54l-.85-2.8a.62.62 0 00-1.05-.33l-3.74 2.93a2.14 2.14 0 00-.71 1.59l.23 3.55a2.87 2.87 0 01-.58 1.72 26.17 26.17 0 00-1.74 2.3 2 2 0 01-1.52.77l-2.4-.12a1.53 1.53 0 00-1.38.85L273.1 367a1 1 0 00.51 1.28l1.94.83a1.2 1.2 0 01.66 1.33 23.53 23.53 0 00-.41 2.42 3.07 3.07 0 01-.81 1.64l-3.31 3a2 2 0 00-.56 1.63l.62 3.61a.6.6 0 001 .43l3.31-2.18a1 1 0 011.32.3 6.36 6.36 0 00.65.79 1.67 1.67 0 01.39 1.58l-1.69 4.56a.83.83 0 00.62 1.13l2.49.56a1.34 1.34 0 001.41-.66l2.34-4.46a2.54 2.54 0 011.42-1.07 12.51 12.51 0 001.54-.5.84.84 0 011.17.53l.85 2.8a.62.62 0 001.05.33l3.74-2.93a2.14 2.14 0 00.71-1.59l-.23-3.55a2.87 2.87 0 01.58-1.72 26.17 26.17 0 001.74-2.3 2 2 0 011.52-.77l2.4.12a1.53 1.53 0 001.38-.85l2.26-5.06a1 1 0 00-.51-1.28l-1.94-.83a1.2 1.2 0 01-.66-1.33 23.53 23.53 0 00.41-2.42 3.11 3.11 0 01.81-1.64l3.31-3a2 2 0 00.55-1.6zm-15.95 19.23c-4.05 3.19-7.93 2.32-8.66-1.93s2-10.28 6-13.46 7.93-2.32 8.66 1.93-1.96 10.28-6 13.46zM268.67 343.13l-3.87-2.23a.69.69 0 00-.61 0l-7 3.15a.82.82 0 01-1.16-.53 15.54 15.54 0 00-1.56-3.47 2 2 0 01-.11-1.7L259 329a1.06 1.06 0 00-.42-1.37l-5.06-2.92a1.06 1.06 0 00-1.39.33l-5.81 8.74a1.91 1.91 0 01-1.52.75 14 14 0 00-2 .1v-6.43l-3.88-2.2a.65.65 0 00-.64.06l-7.86 4.53a2.08 2.08 0 00-.93 1.47l-.79 8.74a3 3 0 01-.82 1.64 46.76 46.76 0 00-4.36 4.62 1.53 1.53 0 01-1.55.44l-5-1.77a1.25 1.25 0 00-1.42.53l-5.78 10a1.24 1.24 0 00.26 1.49l4 3.48a1.53 1.53 0 01.4 1.56 46.44 46.44 0 00-1.82 6.09 2.94 2.94 0 01-1 1.53l-7.18 5.05a2.12 2.12 0 00-.8 1.54v9.08a.64.64 0 00.28.58l3.87 2.24 5.75-2.73c.22.47.46.92.71 1.34a1.92 1.92 0 01.11 1.7l-4.66 9.4a1.06 1.06 0 00.41 1.37l5.06 2.92a1.06 1.06 0 001.39-.33l5.81-8.74a1.92 1.92 0 011.53-.75 15.77 15.77 0 003.78-.39.84.84 0 011.05.74l.77 7.64a.63.63 0 00.3.53l3.86 2.23 4.64-6.81a2.15 2.15 0 00.94-1.47l.79-8.75a1.72 1.72 0 011-1.32 18.42 18.42 0 006.11-4.28 1.56 1.56 0 011.56-.42l3.1 1.09a1.22 1.22 0 001.41-.52l5.78-10a1.23 1.23 0 00-.25-1.49l-2.66-2.29a1.62 1.62 0 01-.43-1.57 26.49 26.49 0 00.72-7.25 2 2 0 01.75-1.55l7.18-5.05a2.12 2.12 0 00.8-1.55l3.43-4.11zm-34.32 36c-7.33 4.23-11.89 1.23-11.89-7.24s6.06-18.84 13.39-23.07 11.78-1.15 11.78 7.31-5.95 18.74-13.28 22.97z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M268.67 343.13l-3.87-2.23a.69.69 0 00-.61 0l-7 3.15a.82.82 0 01-1.16-.53 15.54 15.54 0 00-1.56-3.47 2 2 0 01-.11-1.7L259 329a1.06 1.06 0 00-.42-1.37l-5.06-2.92a1.06 1.06 0 00-1.39.33l-5.81 8.74a1.91 1.91 0 01-1.52.75 14 14 0 00-2 .1v-6.43l-3.88-2.2a.65.65 0 00-.64.06l-7.86 4.53a2.08 2.08 0 00-.93 1.47l-.79 8.74a3 3 0 01-.82 1.64 46.76 46.76 0 00-4.36 4.62 1.53 1.53 0 01-1.55.44l-5-1.77a1.25 1.25 0 00-1.42.53l-5.78 10a1.24 1.24 0 00.26 1.49l4 3.48a1.53 1.53 0 01.4 1.56 46.44 46.44 0 00-1.82 6.09 2.94 2.94 0 01-1 1.53l-7.18 5.05a2.12 2.12 0 00-.8 1.54v9.08a.64.64 0 00.28.58l3.87 2.24 5.75-2.73c.22.47.46.92.71 1.34a1.92 1.92 0 01.11 1.7l-4.66 9.4a1.06 1.06 0 00.41 1.37l5.06 2.92a1.06 1.06 0 001.39-.33l5.81-8.74a1.92 1.92 0 011.53-.75 15.77 15.77 0 003.78-.39.84.84 0 011.05.74l.77 7.64a.63.63 0 00.3.53l3.86 2.23 4.64-6.81a2.15 2.15 0 00.94-1.47l.79-8.75a1.72 1.72 0 011-1.32 18.42 18.42 0 006.11-4.28 1.56 1.56 0 011.56-.42l3.1 1.09a1.22 1.22 0 001.41-.52l5.78-10a1.23 1.23 0 00-.25-1.49l-2.66-2.29a1.62 1.62 0 01-.43-1.57 26.49 26.49 0 00.72-7.25 2 2 0 01.75-1.55l7.18-5.05a2.12 2.12 0 00.8-1.55l3.43-4.11zm-34.32 36c-7.33 4.23-11.89 1.23-11.89-7.24s6.06-18.84 13.39-23.07 11.78-1.15 11.78 7.31-5.95 18.74-13.28 22.97z"
          opacity={0.1}
        />
        <Path
          d="M257.48 332.07L259 329a1.06 1.06 0 00-.42-1.37l-5.06-2.92a1.06 1.06 0 00-1.39.33l-5.81 8.74a1.39 1.39 0 01-.39.37l6.51 3.75zM212.16 369.79a2.65 2.65 0 01-.56.59l-7.18 5.05a1.78 1.78 0 00-.47.54l4.38 2.53 9.53-5.42zM216.52 345.64a1.22 1.22 0 00-1 .58l-5.78 10a1.21 1.21 0 00-.13.73l5 2.87 7.91-10.7zM229.64 331.5l6.16 3.56 7-4v-2.86l-3.88-2.2a.65.65 0 00-.64.06l-7.86 4.53a2.12 2.12 0 00-.78.91zM268.67 343.13a.62.62 0 00-.62 0l-7 3.15a.84.84 0 01-1.17-.54 14.59 14.59 0 00-1-2.45l5.3-2.39a.69.69 0 01.61 0z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <G opacity={0.4}>
          <Path
            d="M257.48 332.07L259 329a1.06 1.06 0 00-.42-1.37l-5.06-2.92a1.06 1.06 0 00-1.39.33l-5.81 8.74a1.39 1.39 0 01-.39.37l6.51 3.75zM212.16 369.79a2.65 2.65 0 01-.56.59l-7.18 5.05a1.78 1.78 0 00-.47.54l4.38 2.53 9.53-5.42zM216.52 345.64a1.22 1.22 0 00-1 .58l-5.78 10a1.21 1.21 0 00-.13.73l5 2.87 7.91-10.7zM229.64 331.5l6.16 3.56 7-4v-2.86l-3.88-2.2a.65.65 0 00-.64.06l-7.86 4.53a2.12 2.12 0 00-.78.91zM268.67 343.13a.62.62 0 00-.62 0l-7 3.15a.84.84 0 01-1.17-.54 14.59 14.59 0 00-1-2.45l5.3-2.39a.69.69 0 01.61 0z"
            fill="#fff"
          />
        </G>
        <Path
          d="M269 352.79v-9.07a.59.59 0 00-.9-.58l-7 3.15a.83.83 0 01-1.17-.54 15.22 15.22 0 00-1.56-3.46 2 2 0 01-.1-1.7l4.66-9.4a1.06 1.06 0 00-.41-1.37l-5.06-2.92a1.06 1.06 0 00-1.4.33l-5.85 8.77a2 2 0 01-1.52.76 15.75 15.75 0 00-3.78.38.83.83 0 01-1-.74l-.77-7.63a.58.58 0 00-.94-.49l-7.86 4.54a2.13 2.13 0 00-.94 1.47l-.79 8.74a3 3 0 01-.81 1.64 46.91 46.91 0 00-4.37 4.62 1.51 1.51 0 01-1.54.43l-5.05-1.76a1.24 1.24 0 00-1.42.53l-5.77 10a1.22 1.22 0 00.25 1.48l4.05 3.49a1.51 1.51 0 01.39 1.56 48 48 0 00-1.82 6.09 2.91 2.91 0 01-1 1.52l-7.18 5.06a2.08 2.08 0 00-.8 1.54v9.08a.59.59 0 00.89.58l7-3.16a.84.84 0 011.17.54 15.75 15.75 0 001.56 3.47 1.92 1.92 0 01.1 1.7l-4.66 9.4a1.05 1.05 0 00.42 1.36l4.98 2.9a1.06 1.06 0 001.39-.33l5.81-8.74a1.91 1.91 0 011.52-.75 15.72 15.72 0 003.78-.39.83.83 0 011 .74l.77 7.64a.59.59 0 00.95.48l7.86-4.54a2.09 2.09 0 00.93-1.46l.79-8.75a2.93 2.93 0 01.82-1.63 46.76 46.76 0 004.36-4.62 1.51 1.51 0 011.55-.44l5 1.76a1.23 1.23 0 001.42-.52l5.78-10a1.23 1.23 0 00-.26-1.49l-4.05-3.49a1.49 1.49 0 01-.39-1.55 47 47 0 001.82-6.1 2.91 2.91 0 011-1.52l7.18-5.05a2.14 2.14 0 00.97-1.56zm-30.73 28.54c-7.34 4.23-13.28.8-13.28-7.67s5.94-18.76 13.28-23 13.27-.8 13.27 7.66-5.99 18.77-13.32 23.01z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
      </G>
      <G>
        <Path
          d="M359.44 182.75h32.65v-29.26a16.33 16.33 0 00-16.33-16.33 16.33 16.33 0 00-16.32 16.33z"
          fill="#263238"
        />
        <Path
          d="M369.71 174.81l-23.37.9c-.81-.7-5.44-6.22-5.44-6.22s-12.7-1.63-12.77-1.17 12.49 13.91 13.73 15.26a3.75 3.75 0 003 1.45l21.39 1.34z"
          fill="#ffa8a7"
        />
        <Path
          d="M249.34 280.15l-.7-.4a4.48 4.48 0 01-2-3.5v-71.79a4.48 4.48 0 012-3.5l92.22-53.23a4.43 4.43 0 014 0l.69.4a4.44 4.44 0 012 3.49v71.8a4.43 4.43 0 01-2 3.49l-92.22 53.24a4.47 4.47 0 01-3.99 0z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M347.59 151.3c-.14-1.05-1-1.43-2-.85l-92.22 53.25a4.06 4.06 0 00-1.43 1.5l-4.72-2.73a4.16 4.16 0 011.43-1.51l92.21-53.23a4.43 4.43 0 014 0l.69.4a4.5 4.5 0 012.04 3.17z"
          fill="#fff"
          opacity={0.4}
        />
        <Path
          d="M253 280.31a4.49 4.49 0 01-3.68-.16l-.71-.4a4.48 4.48 0 01-2-3.5v-71.79a4 4 0 01.59-2l4.72 2.73a4.18 4.18 0 00-.59 2V279c.02 1.14.75 1.68 1.67 1.31z"
          opacity={0.1}
        />
        <Path
          d="M260.67 207.65l6.94-4c.5-.29.91-.06.91.53V212a2 2 0 01-.92 1.58l-6.92 3.91c-.51.29-.92 0-.92-.54v-7.68a2 2 0 01.91-1.62z"
          fill="#fafafa"
        />
        <Path
          d="M266.71 212.44a.55.55 0 01-.6 0l-2.11-1.6c-.29-.21-.25-.81.08-1.33s.83-.77 1.11-.55l1.5 1.13 4.15-8.92c.26-.56.75-.93 1.11-.84s.42.63.17 1.18l-4.74 10.18a1.71 1.71 0 01-.61.73z"
          fill="#37474f"
        />
        <Path
          d="M260.67 224.65l6.94-4c.5-.29.91 0 .91.53V229a2 2 0 01-.92 1.58l-6.92 3.92c-.51.28-.92 0-.92-.54v-7.69a2 2 0 01.91-1.62z"
          fill="#fafafa"
        />
        <Path
          d="M266.71 229.43a.55.55 0 01-.6 0l-2.11-1.59c-.29-.22-.25-.82.08-1.34s.83-.77 1.11-.55l1.5 1.13 4.15-8.92c.26-.56.75-.93 1.11-.83s.42.62.17 1.18l-4.74 10.18a1.68 1.68 0 01-.61.72z"
          fill="#37474f"
        />
        <Path
          d="M260.67 241.64l6.94-4c.5-.3.91-.06.91.52V246a2 2 0 01-.92 1.57l-6.92 3.92c-.51.29-.92.05-.92-.54v-7.69a2 2 0 01.91-1.62z"
          fill="#fafafa"
        />
        <Path
          d="M266.71 246.42a.51.51 0 01-.6 0l-2.11-1.59c-.29-.21-.25-.81.08-1.33s.83-.77 1.11-.56l1.5 1.13 4.15-8.92c.26-.55.75-.93 1.11-.83s.42.62.17 1.18l-4.74 10.18a1.71 1.71 0 01-.61.73z"
          fill="#37474f"
        />
        <Path
          d="M260.67 258.68l6.94-4c.5-.29.91 0 .91.53V263a2 2 0 01-.92 1.57l-6.92 3.92c-.51.29-.92.05-.92-.54v-7.69a2 2 0 01.91-1.58z"
          fill="#fafafa"
        />
        <Path
          d="M266.71 263.46a.51.51 0 01-.6 0l-2.11-1.59c-.29-.22-.25-.81.08-1.34s.83-.76 1.11-.55l1.5 1.13 4.15-8.92c.26-.55.75-.93 1.11-.83s.42.62.17 1.18l-4.74 10.18a1.68 1.68 0 01-.61.72z"
          fill="#37474f"
        />
        <Path
          d="M277.1 200.34c0 .94.82 1.23 1.83.65l26.37-15.23a3.7 3.7 0 001.83-2.76c0-.94-.82-1.24-1.83-.65l-26.37 15.22a3.71 3.71 0 00-1.83 2.77z"
          fill="#455a64"
        />
        <Path
          d="M277.1 206.06c0 .95.82 1.24 1.83.66l56.4-32.52a3.7 3.7 0 001.83-2.77c0-.94-.82-1.23-1.83-.65l-56.4 32.52a3.7 3.7 0 00-1.83 2.76z"
          fill="#f0f0f0"
        />
        <Path
          d="M277.1 217c0 .94.82 1.24 1.83.65l26.37-15.22a3.71 3.71 0 001.83-2.77c0-.94-.82-1.23-1.83-.65l-26.37 15.19a3.7 3.7 0 00-1.83 2.8z"
          fill="#455a64"
        />
        <Path
          d="M277.1 222.69c0 .94.82 1.23 1.83.65l56.4-32.52a3.7 3.7 0 001.83-2.76c0-.94-.82-1.24-1.83-.65l-56.4 32.51a3.71 3.71 0 00-1.83 2.77z"
          fill="#f0f0f0"
        />
        <Path
          d="M277.1 234.64c0 1 .82 1.24 1.83.65l26.37-15.22a3.7 3.7 0 001.83-2.77c0-.94-.82-1.23-1.83-.65l-26.37 15.23a3.7 3.7 0 00-1.83 2.76z"
          fill="#455a64"
        />
        <Path
          d="M277.1 240.37c0 .94.82 1.23 1.83.65l56.4-32.52a3.7 3.7 0 001.83-2.76c0-.94-.82-1.24-1.83-.65l-56.4 32.52a3.7 3.7 0 00-1.83 2.76z"
          fill="#f0f0f0"
        />
        <Path
          d="M277.1 252.32c0 1 .82 1.24 1.83.66l26.37-15.23a3.7 3.7 0 001.83-2.76c0-1-.82-1.24-1.83-.66l-26.37 15.23a3.7 3.7 0 00-1.83 2.76z"
          fill="#455a64"
        />
        <Path
          d="M277.1 258.05c0 .94.82 1.24 1.83.65l56.4-32.51a3.73 3.73 0 001.83-2.77c0-.94-.82-1.23-1.83-.65l-56.4 32.52a3.7 3.7 0 00-1.83 2.76z"
          fill="#f0f0f0"
        />
        <Path
          d="M359.14 333.58A42.35 42.35 0 01353 339a2.71 2.71 0 00-.86.89c-.29.61-.75 2.11 2 3.08a10.34 10.34 0 008.55-.82c2.27-1.43 2.38-4.39 4.52-6.08 1.59-1.25 3.58-1.57 4.86-3.2.9-1.14.66-2.66.2-4.53-.51-2.05-.75-3.6-1.42-3.44l.11.94c-.85 1.35-5.23 1.75-7.18.82a79.48 79.48 0 01-4.64 6.92z"
          fill="#263238"
        />
        <Path
          d="M357.22 335.5a26.44 26.44 0 001.92-1.9 50.85 50.85 0 003.58-5.27 5.87 5.87 0 001-3.77c-.15-1.42-.54-5.05-.54-5.05l6.94-.49.81 6.81c.17 1.54-1.11 2.91-3.37 4.86s-5.13 6.49-7.17 7.63-3.51 1.1-4.38.51-1.01-1.08 1.21-3.33z"
          fill="#ffa8a7"
        />
        <Path
          d="M390.33 334.2v-1c-.41 1.23-2.32 6.5-5.21 9.14-2.3 2.1-5.44 4.52-6.24 6.86s4.37 3.25 6.52 2.87a13.26 13.26 0 007.49-4c1.24-1.52 2-3.32 2.91-4.52s2.92-2.53 3.4-3.91a8.85 8.85 0 00-.42-3.83c-.34-1.29-.71-2.71-1.15-2.59v.8a5.78 5.78 0 01-3.65 1.23c-1.06-.02-3.65-.25-3.65-1.05z"
          fill="#263238"
        />
        <Path
          d="M383 344.14c.72-.63 1.44-1.26 2.09-1.85 2-1.85 3.56-5 4.45-7.11a10.11 10.11 0 00.76-3.84v-4.16h7.3v7c-.36 1.52-3.7 5.55-5.61 8.18-1.27 1.76-3.7 4-6.59 4.39s-4.15-.53-2.4-2.61z"
          fill="#ffa8a7"
        />
        <Path
          d="M396.18 220.8c5.66 12.35-.2 55.88-.2 55.88.17 2 2.46 5.95 3.31 14.77 1 10.43-1.58 36.61-1.58 36.61a7.92 7.92 0 01-7.38.3s-6.95-39.44-8.26-49.8c-1.14-9.05-3.33-30.32-3.33-30.32l-6.57 30.33a38.48 38.48 0 011.28 9c-.1 6.13-2.95 33-2.95 33s-2.54 1.48-7.32.78c0 0-4.61-35.27-4.47-43.49.07-4.4 2-51.24 2-51.24z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <G opacity={0.15}>
          <Path
            d="M378.74 248.24l-1.84-10.1s-7.77-1.61-11.29-4.93a20.14 20.14 0 009.19 6.11l2.06 8.84-3.73 26z"
            fill="#263238"
          />
        </G>
        <Path
          d="M379.42 138.16l.38-4.28a2.08 2.08 0 00-2.37 1.87 2.27 2.27 0 001.99 2.41z"
          fill="#263238"
        />
        <Path
          d="M379.65 138.59l3.46-2.54a2.09 2.09 0 00-3-.54 2.27 2.27 0 00-.46 3.08z"
          fill="#263238"
        />
        <Path
          d="M383.25 175.12s8.33.73 9.5 1.25c-6 6.55 3.12 9.27 3.12 9.27l-6.23 22.28c3.74 5.71 6.12 10.12 7.53 15.74-4.2 7.4-27.81 8.43-36.47 2.91.76-10.33 2.44-17.73 1.88-20.84-2.95-12.67-2.84-15.35-2.46-18.25.76-5.66 6.38-10.6 9.59-12.67h3z"
          fill="#37474f"
        />
        <Path
          d="M366.31 145.14c-1.76 1-3.93 5.46-3.72 14.74.18 7.86 2.73 9.8 4 10.36s3.75.22 6.15-.18v4.72s-3.32 3.85-3.11 6 4.79 2.67 7.89.56a25.27 25.27 0 005.72-6.24l-.06-10.85s1.41 1.38 3.81-.72c2-1.73 2.64-4.64 1.1-6.2a3.44 3.44 0 00-5.48 1.09c-.66 1.43-2.16 1.45-2.17-.18-.07-8.36-1.06-8.8-1.9-12.23-4.99-1.61-8.54-1.01-12.23-.87z"
          fill="#ffa8a7"
        />
        <Path d="M371.37 157.9a1 1 0 102 .1 1 1 0 10-2-.1z" fill="#263238" />
        <Path
          d="M371.1 164.57l-2.29.73a1.17 1.17 0 001.49.82 1.24 1.24 0 00.8-1.55z"
          fill="#f28f8f"
        />
        <Path
          d="M363.42 155.28l2-1.38a1.18 1.18 0 00-1.67-.35 1.29 1.29 0 00-.33 1.73zM374.25 155.6l-2-1.39a1.17 1.17 0 011.66-.34 1.29 1.29 0 01.34 1.73zM363.72 157.19a1 1 0 101-1 1 1 0 00-1 1z"
          fill="#263238"
        />
        <Path
          d="M368.39 156.62L368.23 162.57 365.1 161.6 368.39 156.62z"
          fill="#f28f8f"
        />
        <Path
          d="M372.75 170.06c2.53-.33 7.73-1.82 8.54-3.88a5.3 5.3 0 01-1.83 2.62c-1.55 1.34-6.71 2.84-6.71 2.84z"
          fill="#f28f8f"
        />
        <Path
          d="M371.52 138.25A13.71 13.71 0 00357.81 152v1.77h6.71a6.23 6.23 0 006.18-5.4l.25 5.4a5 5 0 004.94-4.53l.08-.88a5.88 5.88 0 005.86 5.41h.6l.68-9.68z"
          fill="#263238"
        />
        <Path
          d="M387.29 180c-1.86 2.76-12.47 26-12.47 26s-16-1.08-22.76-1.8c-2.13-.23-1.66-2.51-2.51-4.77s-1.94-1.82-1.94-1.82v3c.07 2-3.28 3.12-4.72 3.68-2.36.92-4.95 1.5-7.39 2.26a3.58 3.58 0 00-2.16 1.32 2.29 2.29 0 00.07 2.24 7.09 7.09 0 005.48 3.35c2.72.33 5.36-.45 8-.93 3.13-.55 5.52-1 8.62-.59s6.86 1.22 9.81 1.76a101.12 101.12 0 0011.43 1.32c2.13.1 3.68-.32 5.52-2.92s12-23.53 12-23.53c4.23-6 1.8-11.08-1.34-12.15-1.93-.64-3.77.86-5.64 3.58zM322.72 157.64a11.87 11.87 0 012.37.57 9.19 9.19 0 014.78 3.75 4.8 4.8 0 01.59 2.85 2.06 2.06 0 01-.23.74 2.66 2.66 0 01-1.11.9 4.36 4.36 0 01-4.81.08 33.41 33.41 0 00-6.16-2.78 13.54 13.54 0 00-3.33-.59 3 3 0 00-1.79.65 2.61 2.61 0 01.45-2.68 8.61 8.61 0 014.45-3.13 10.93 10.93 0 014.79-.36z"
          fill="#ffa8a7"
        />
      </G>
      <G>
        <Circle cx={145.81} cy={216.03} r={10.49} fill="#263238" />
        <Path
          transform="rotate(180 124.4 399.77)"
          d="M120.71 393.45H128.1V406.09H120.71z"
          fill="#ffa8a7"
        />
        <Path
          d="M146.31 392.77L153.69 393.02 154.06 379.64 146.31 379.39 146.31 392.77z"
          fill="#ffa8a7"
        />
        <Path
          d="M121.19 285.08c0 7.05-.91 57.93-.91 57.93-.17 2-2.08 5.77-1.66 13.57.55 10.59 1.77 43.19 1.77 43.19a9.72 9.72 0 008.22.16s6.52-43.31 7.84-53.81c1.16-9.15 3.12-34 3.12-34l4 29.89a41.94 41.94 0 00-.91 11.74c.34 4.85 3.19 34.91 3.19 34.91a10.05 10.05 0 008.52.65s3.74-42.84 3.82-47.3c.1-5.07-2.46-56.9-2.46-56.9z"
          fill="#37474f"
        />
        <Path
          d="M154.72 242.15c4.33 3.56 12.15 10.79 12.15 10.79l-12.2 6.71-7.76-20.81s3.09-.6 7.81 3.31z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M154.72 242.15c4.33 3.56 12.15 10.79 12.15 10.79l-12.2 6.71-7.76-20.81s3.09-.6 7.81 3.31z"
          opacity={0.1}
        />
        <Path
          d="M123.7 243.91s-2.76 2.77-2.76 9.47v14.47l-.21 27.33c10.6 5.59 24 5.91 35.29-2.35 0 0-.54-35.12-.54-40.88s-3.2-13.23-12-13.74l-11.39 2.65z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M127.69 223.48s1.7 8 2.38 9.3a3.6 3.6 0 002.09 1.68l-.12-5.61zM129.82 212.05a3.9 3.9 0 00-3.25 1.14c-1.4 1.43-.62 5.91 1.12 10.29l3.2.37z"
          fill="#263238"
        />
        <Path
          d="M131.85 223.85c-.64.39-1.56-.85-2.35-1.67s-3.37-2-4.66.75S126 229.36 128 230c3.5 1.1 4-1.14 4-1.14l.27 12.64s3 5 10.79 6.2c4 .62 4.94-3.24.61-6.53v-3.85a22.17 22.17 0 004.73.24c2.58-.4 4.2-2.43 5-5.22 1.26-4.48 1.73-8.1.67-16.92-1.17-9.66-12.41-9.76-18.48-5.94s-3.74 14.37-3.74 14.37z"
          fill="#ffa8a7"
        />
        <Path
          d="M131.85 224.93c-.32 0-1.55-2-2.35-2.75-1.11-1 .32-10.13.32-10.13a4.34 4.34 0 011.07-4.62c1.52-1.66 4.05-1.85 8.38-2.53 2.27-.36 5.71-1 8-1.41 2.7-.51 4.94-1 6.86.62a4.82 4.82 0 011.32 5.38 4.63 4.63 0 01-.77 1.15 4.36 4.36 0 01-1.94 1.34s-1.18 1.05-5.29 1.55a60.59 60.59 0 01-11.38-.22c-1.19-.16-1.44 1-2.08 4.14-.59 2.77-1.06 7.46-2.14 7.48z"
          fill="#263238"
        />
        <Path
          d="M129.83 212.76l-3.83-2.09a2.14 2.14 0 012.94-1 2.32 2.32 0 01.89 3.09z"
          fill="#263238"
        />
        <Path
          d="M143.7 237.31s-5.75-1.16-7.76-2.23a6.62 6.62 0 01-2.78-2.75 8.94 8.94 0 001.58 3.24c1.47 1.88 9 3.27 9 3.27z"
          fill="#f28f8f"
        />
        <Path
          d="M142.32 222.41a1.16 1.16 0 11-1.15-1.2 1.17 1.17 0 011.15 1.2zM141.1 218.06l-2.47 1.36a1.47 1.47 0 01.57-2 1.38 1.38 0 011.9.64z"
          fill="#263238"
        />
        <Path
          d="M143.18 230.38l2.63 1a1.38 1.38 0 01-1.78.87 1.47 1.47 0 01-.85-1.87z"
          fill="#f28f8f"
        />
        <Path
          d="M152.6 219l-2.25-1.73a1.36 1.36 0 012-.3 1.49 1.49 0 01.25 2.03zM151.91 222.09a1.16 1.16 0 11-1.15-1.21 1.19 1.19 0 011.15 1.21z"
          fill="#263238"
        />
        <Path
          d="M146.04 220.99L146.41 227.93 150.03 226.69 146.04 220.99z"
          fill="#f28f8f"
        />
        <Path
          d="M128.09 402.44v-1.05c.71.31 2.35 6.57 5.28 9.24 2.33 2.13 5.51 4.58 6.32 6.95s-4.43 3.82-6.61 3.44c-2.52-.45-6.91-2.23-8-3.88s-1.61-4.09-2.51-5.3-3-2.56-3.44-4a8.9 8.9 0 01.43-3.87c.34-1.31.71-2.74 1.16-2.62v.8a5.77 5.77 0 003.69 1.25c1.07.08 3.69-.13 3.68-.96zM153.77 390.75c.39 0 .7.55 1.54 1.47a16.3 16.3 0 004.35 3.12c2.76 1.39 8.14 3.52 10.57 4.61 1.53.69 1.45 2.53-.12 3.57s-5.36 1.8-9.92.78c-2.48-.56-5.71-2.85-7.76-2.72s-5.87.09-7.38-.95-.9-3.26-.47-5.17c.46-2.09 1-5.33 1.73-5.19v.73c.89 1.34 5.47 1.89 7.42.9zM139.57 312.09a27.44 27.44 0 0010.28-5.9s-2 3.72-7.88 7.17l1.26 26.06z"
          fill="#263238"
        />
        <Path
          d="M148.78 340.07l-.7-.4a4.49 4.49 0 01-2-3.5v-71.79a4.49 4.49 0 012-3.5L210.26 225a4.47 4.47 0 014 0l.7.41a4.45 4.45 0 012 3.49v71.8a4.47 4.47 0 01-2 3.49l-62.18 35.9a4.47 4.47 0 01-4-.02z"
          fill="#f5f5f5"
        />
        <Path
          d="M182.73 254.26c10.77-6.22 19.51-1.17 19.51 11.27s-8.74 27.57-19.51 33.79-19.52 1.18-19.52-11.26 8.79-27.57 19.52-33.8z"
          fill="#455a64"
        />
        <Path
          d="M182.59 264.06c3.49-2 6.33-.39 6.33 3.65a14 14 0 01-6.33 11c-3.5 2-6.33.39-6.33-3.65a14 14 0 016.33-11zM195.06 285.58c0-6.63-4.65-9.32-10.4-6l-3.59 2.07c-5.74 3.32-10.4 11.38-10.4 18v1.79c3.32 1.1 7.5.5 12.06-2.13a38.42 38.42 0 0012.33-12.2z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M217 228.56c-.14-1.05-1-1.43-2-.85l-62.18 35.91a4.14 4.14 0 00-1.43 1.5l-4.72-2.73a4.16 4.16 0 011.43-1.51L210.26 225a4.41 4.41 0 014 0l.7.4a4.54 4.54 0 012.04 3.16z"
          fill="#fafafa"
        />
        <Path
          d="M152.47 340.23a4.51 4.51 0 01-3.69-.16l-.71-.4a4.49 4.49 0 01-2-3.5v-71.79a4 4 0 01.59-2l4.72 2.73a4.18 4.18 0 00-.59 2v71.81c0 1.14.73 1.68 1.68 1.31z"
          fill="#e0e0e0"
        />
        <Path
          d="M161.28 322.17c0 2 1.43 2.87 3.2 1.85L201 303a7.06 7.06 0 003.2-5.54c0-2-1.43-2.87-3.2-1.85l-36.49 21.07a7.1 7.1 0 00-3.23 5.49z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M111.85 287.16c-3.79-2.64-3.74-6.56-2.53-11 8.25-30.5 10.78-30.67 14.38-32.21l2.89 12-7.71 25a48.71 48.71 0 0017.25 8.05 7.2 7.2 0 003.85-.41c2.35-1.32 3.67-1.32 6.08-2v3.94a20.36 20.36 0 006.47-.22c5-.93 7.17.11 4.12 5.81-1.91 3.57-5.62 4.75-14.92 3.15a75.81 75.81 0 01-10-2.61 85.58 85.58 0 01-19.88-9.5z"
          fill="#ffa8a7"
        />
        <Path
          d="M123.7 243.91s3.55 2.23 4.31 7.82-4.62 20.8-4.62 20.8-8.69-.83-12.29-5.11c0 0 5-13.91 6-17.05a9.19 9.19 0 016.6-6.46z"
          fill={Globals.COLOR.LIGHT.COLOR4}
        />
        <Path
          d="M123.7 243.91s3.55 2.23 4.31 7.82-4.62 20.8-4.62 20.8-8.69-.83-12.29-5.11c0 0 5-13.91 6-17.05a9.19 9.19 0 016.6-6.46z"
          opacity={0.1}
        />
        <Path
          d="M217 245.87v4.45s-2.4 3.65-5 5-2.56 6.74.65 7.5 7.63-3.21 8-5.39-.42-11.79-3.65-11.56z"
          fill="#ffa8a7"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
