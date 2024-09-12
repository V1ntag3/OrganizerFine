import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import Globals from "@/Globals"

function SvgComponent() {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"

    >
      <G clipPath="url(#clip0_41_3365)" fill={Globals.COLOR_GASTO}>
        <Path d="M26.62 4.207c-.407.448-1.546 2.15-1.546 2.326 0 .414.583.63.861.319.075-.081.454-.59.84-1.133.55-.773.7-1.03.7-1.214 0-.454-.53-.644-.855-.298zM23.23 4.41c-.17.204-.177.306-.055 1.004.142.841.163.882.42.99.265.109.53-.02.631-.298.082-.251-.129-1.512-.285-1.689-.142-.162-.576-.162-.712-.007zM1.82 5.516a1.245 1.245 0 00-.713.502C.972 6.2.965 6.296.945 9.354c-.02 3.086-.014 3.154.128 3.486.163.387.604.82 1.167 1.153l.393.237-.04 1.594c-.02.875-.089 4.68-.143 8.457-.088 5.5-.088 6.917-.02 7.12.42 1.296 1.973 1.655 2.916.679.529-.543.502.081.38-8.58-.061-4.238-.13-8.063-.15-8.49l-.034-.78.32-.17c.44-.237 1.07-.827 1.234-1.18.135-.277.142-.393.142-3.424 0-2.563-.02-3.167-.095-3.316a1.235 1.235 0 00-.787-.617c-.36-.082-4.19-.088-4.537-.007zm.888 3.601l.02 2.584.19.163c.23.196.38.203.617.02l.176-.136V6.533h.746v2.55c0 1.662.028 2.59.075 2.679.17.325.712.298.868-.048.048-.115.075-.956.075-2.672V6.533h.746V12.454l-.292.278c-.156.156-.509.393-.78.535-.305.163-.515.32-.556.414-.027.088 0 3.533.075 7.847.067 4.231.122 8.13.129 8.66v.976l-.231.23c-.176.177-.285.231-.468.231-.292 0-.63-.257-.692-.529-.02-.101.027-4.035.102-8.748.095-5.927.115-8.6.068-8.694-.04-.068-.292-.244-.563-.387-.265-.142-.617-.38-.773-.535l-.292-.278V6.533h.739l.02 2.584zM33.897 5.685c-1.174.38-2.137 1.37-2.476 2.544-.135.447-.17.996-.46 6.395l-.218 4.198.19.366c.251.475.74.902 1.438 1.261.508.265.563.278.76.197a.596.596 0 00.284-.278c.122-.299-.027-.522-.542-.794-.556-.305-1.01-.671-1.058-.875-.048-.19.42-9.182.508-9.779.163-1.064.943-1.987 1.94-2.292l.305-.088v.285c0 .156-.047 3.221-.102 6.809-.101 6.32-.101 6.686.034 11.942.088 3.52.115 5.48.075 5.588a.769.769 0 01-.665.461c-.176 0-.291-.054-.468-.23l-.23-.23v-.672c0-.366.047-2.326.101-4.354.061-2.448.075-3.73.027-3.811a.499.499 0 00-.8-.102l-.156.163-.108 4.408c-.122 5.011-.143 4.76.434 5.33.943.95 2.53.509 2.882-.793.047-.19.027-1.825-.068-5.704-.142-5.316-.142-5.58-.034-12.41.122-7.765.143-7.284-.325-7.568-.292-.177-.651-.17-1.268.033zM27.244 7.415c-.787.149-.841.17-.95.373-.183.339.061.712.462.712.515 0 1.39-.197 1.553-.353.284-.264.135-.753-.251-.827-.095-.014-.461.027-.814.095z" />
        <Path d="M17.173 7.483c-4.272.488-7.9 3.16-9.535 7.032a11.567 11.567 0 00-.264 8.43c1.464 4.103 5.025 7.005 9.358 7.636 1.051.15 2.93.102 3.886-.108 2.435-.523 4.429-1.635 6.13-3.418a11.635 11.635 0 003.209-7.99c0-5.004-3.208-9.446-7.99-11.04-1.417-.475-3.404-.698-4.794-.542zm2.923 1.119a10.664 10.664 0 018.647 8.43c.068.365.149 1.05.17 1.539.257 5.269-3.371 9.867-8.62 10.932-.963.19-3.08.176-4.063-.034-5.988-1.282-9.677-7.162-8.178-13.035.447-1.77 1.35-3.363 2.638-4.7 1.79-1.844 4.008-2.943 6.537-3.227.72-.082 2.096-.034 2.869.095z" />
        <Path d="M17.417 11.22a7.966 7.966 0 00-6.164 4.367c-.332.671-.624 1.566-.672 2.075-.034.325-.02.4.109.529.081.081.23.142.339.142.325 0 .461-.183.61-.834a6.58 6.58 0 01.97-2.224c2.116-3.167 6.32-4.029 9.474-1.953 1.451.956 2.448 2.346 2.903 4.055.23.855.257 2.313.06 3.16-.63 2.733-2.814 4.822-5.547 5.297-.813.142-2.102.095-2.855-.102a6.857 6.857 0 01-4.36-3.425 7.586 7.586 0 01-.706-1.905c-.095-.441-.257-.645-.529-.645-.298 0-.488.224-.488.57 0 .766.692 2.441 1.41 3.404 1.126 1.513 2.639 2.523 4.524 3.018.773.204 2.292.251 3.147.102a7.952 7.952 0 006.171-5.303 7.95 7.95 0 000-4.991c-.895-2.666-3.242-4.72-5.995-5.243-.665-.129-1.79-.176-2.4-.095z" />
      </G>
      <Defs>
        <ClipPath id="clip0_41_3365">
          <Path
            fill="#fff"
            transform="translate(.93 .972)"
            d="M0 0H34.7222V34.7222H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
