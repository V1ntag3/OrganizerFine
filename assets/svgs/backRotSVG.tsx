import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg
      width={22}
      height={23}
      viewBox="0 0 22 23"
      fill="none">
      <Path
        transform="rotate(-90 .222 22.083)"
        fill="url(#pattern0)"
        d="M0.222412 22.0833H21.750211999999998V43.6111H0.222412z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_41_3338" transform="scale(.00195)" />
        </Pattern>
        <Image
          id="image0_41_3338"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent