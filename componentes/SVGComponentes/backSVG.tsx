import * as React from "react"
import Svg, { Path, Defs, ClipPath, G } from "react-native-svg"

type backSVGProps = {

  width: number;
  height: number;
  style: object;
};

function backSVG(props: backSVGProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      style={props.style}
      viewBox="0 0 13 23"
      fill="none"
    >
      <G clipPath="url(#clip0_44_3009)">
        <Path
          d="M15.04 6.573l-.1.045-2.977 2.855-1.488 1.43-1.489 1.428-.027.097a.567.567 0 000 .352l.027.097 2.977 2.858 2.978 2.855.099.045.1.045h.143a.546.546 0 00.394-.14l.087-.073.057-.124.054-.123-.012-.135a.779.779 0 00-.055-.214l-.042-.08-2.704-2.593-2.707-2.594 2.707-2.594 2.704-2.592.042-.081a.779.779 0 00.055-.214l.012-.135-.054-.123-.057-.124-.087-.073a.545.545 0 00-.394-.14h-.144l-.1.045z"
          fill="#fff"
        />
        <G clipPath="url(#clip1_44_3009)">
          <Path
            d="M-13.125-307.722h-341.333v682.666h682.667v-682.666H-13.125zM155.01 145.344c-7.734 14.934-24.267 20.4-38.667 12.667-5.733-3.2-17.733-16.533-82.4-92.133-60.533-70.8-75.867-88-77.067-86.667-.933.933-35.866 41.6-77.6 90.4-84.266 98.533-79.733 94.133-95.466 93.067-6.8-.4-9.867-1.334-14.134-4.267-10.533-7.333-15.066-23.067-9.733-34.4 1.2-2.8 42.267-51.733 91.2-108.933C-52.191-97.722-55.391-94.39-41.658-94.39c13.733.133 10.267-3.467 106 108.267 48.667 56.666 89.6 105.2 90.8 107.733 3.2 6.133 3.067 17.333-.133 23.733z"
            fill="#fff"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_44_3009">
          <Path
            fill="#fff"
            transform="rotate(90 11.966 12.243)"
            d="M0 0H24.6528V23.2639H0z"
          />
        </ClipPath>
        <ClipPath id="clip1_44_3009">
          <Path
            fill="#fff"
            transform="rotate(90 317.966 10.244)"
            d="M0 0H682.667V682.667H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default backSVG
