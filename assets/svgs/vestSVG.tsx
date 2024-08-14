import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Globals from "../../Globals"

function SvgComponent() {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
    >
      <Path
        d="M7.84.055c-.889.177-1.703.6-2.333 1.208-.183.177-.59.696-.909 1.153-.319.465-.59.84-.597.84-.013 0-.074-.3-.142-.669-.143-.744-.285-.97-.624-.97-.373 0-.482.171-.658 1.011-.088.43-.23.915-.312 1.078-.203.437-.698.895-1.207 1.147-.753.362-.76.806-.014 1.181.814.403.814.335.014 1.481C.108 8.887 0 9.126 0 9.945c0 .588.02.69.21 1.093.116.245.333.573.475.73.142.15 1.343 1.25 2.652 2.437 2.4 2.164 2.502 2.239 2.828 2.116.06-.02.264-.26.46-.526l.36-.484.034 9.133.034 9.133.163.13c.156.13.447.13 12.566.13 9.549 0 12.479-.021 12.695-.083.407-.122.943-.682 1.045-1.092.142-.553.081-.962-.204-1.372-.128-.184-.128-.184 0-.375.434-.621.367-1.393-.162-1.987l-.285-.32.163-.219c.095-.116.25-.389.352-.607.156-.342.183-.485.183-1.052 0-.614-.013-.675-.257-1.167-.38-.785-1.018-1.297-1.825-1.488-.162-.034-1.329-.068-2.61-.068H26.55v-4.335c0-2.382.014-4.334.027-4.334.014 0 .183.218.38.478.366.498.57.614.855.505.21-.082 5.113-4.54 5.296-4.82.36-.538.461-.873.461-1.556 0-.56-.027-.703-.183-1.037-.217-.464-4.767-7.051-5.208-7.522C27.75.92 26.978.423 26.32.205l-.55-.191L16.954 0C12.098 0 8.002.02 7.84.055zm2.516 1.46c.278 2.219 2.014 4.362 4.17 5.154 2.374.86 4.937.32 6.748-1.427 1.044-.996 1.77-2.402 1.94-3.727l.047-.41.997-.02c1.512-.027 2.279.212 3.011.935.319.314 4.863 6.792 5.1 7.256.19.39.19.881 0 1.297-.15.328-.42.594-2.231 2.24a623.995 623.995 0 00-2.245 2.034l-.176.163-.583-.778-.584-.785V9.81h-1.085V24l-4.903.02-4.91.021-.332.205a1.628 1.628 0 00-.597 2.13l.17.354-.17.342a1.625 1.625 0 00.027 1.556c.115.198.278.41.366.471l.17.102-.23.3c-.387.513-.53.997-.496 1.707.027.594.068.73.448 1.482.013.034-1.533.054-3.438.054H8.104v-1.092h5.426V30.56H8.104V9.809H7.02v3.638l-.583.785-.583.778-.21-.198a230.36 230.36 0 00-2.245-2.034c-1.716-1.556-2.048-1.89-2.184-2.177a1.524 1.524 0 01-.081-1.14c.101-.3 1.2-1.918 1.275-1.87.027.02.108.334.176.696.142.75.285.976.624.976.373 0 .481-.17.658-1.01.088-.43.23-.915.305-1.079.217-.45.685-.887 1.2-1.14.346-.164.475-.266.522-.41.116-.327-.013-.532-.495-.778-.244-.116-.515-.293-.61-.389l-.17-.17.204-.294c.115-.164.434-.614.705-1.003.59-.847.956-1.215 1.492-1.502.617-.334 1.051-.41 2.238-.396l1.051.014.048.41zm2.156-.28c0 .233.292 1.079.502 1.427.909 1.577 2.625 2.423 4.36 2.17 1.784-.259 3.283-1.637 3.622-3.337l.088-.423h1.112l-.088.457c-.732 3.816-5.052 5.68-8.26 3.57-1.282-.833-2.095-2.061-2.387-3.57l-.088-.457h.57c.556 0 .57.006.57.163zm7.433.055c-.088.437-.448 1.085-.82 1.481a3.185 3.185 0 01-4.68 0c-.373-.396-.732-1.044-.82-1.48l-.041-.22h6.408l-.047.22zM3.323 4.423c.027.075.23.335.454.58l.407.437-.407.437c-.223.246-.427.505-.454.58-.054.185-.15.185-.203 0-.028-.075-.231-.334-.455-.58l-.407-.437.407-.437c.224-.245.427-.505.455-.58.054-.184.149-.184.203 0zm28.07 20.758c.583.177 1.125.928 1.125 1.556s-.542 1.38-1.126 1.557c-.21.061-2.102.081-7.84.081-7.547 0-7.56 0-7.744-.143a.525.525 0 010-.805c.183-.144.204-.144 6.816-.144h6.639v-1.092h-6.64c-6.611 0-6.632 0-6.815-.143-.136-.11-.176-.198-.176-.403 0-.205.04-.293.176-.403.183-.143.197-.143 7.745-.143 5.737 0 7.63.02 7.84.082zm.956 4.457c.108.103.17.246.17.376s-.062.273-.17.375l-.163.17H18.887v1.093h13.299l.163.17c.108.103.17.246.17.376s-.062.273-.17.376l-.163.17H24.57c-6.185-.007-7.663-.02-7.873-.095-.658-.24-1.065-.826-1.065-1.543s.407-1.304 1.065-1.543c.21-.075 1.688-.088 7.873-.095h7.616l.163.17z"
        fill={Globals.COLOR_GASTO}
      />
      <Path
        d="M27.635 5.44v.546H26.55v1.092h1.085v1.093h1.085V7.079h1.085V5.986H28.72V4.894h-1.085v.546zM21.613 8.014c-.135.054-.21.252-.352.955-.251 1.202-.604 1.72-1.485 2.164-.516.266-.652.464-.536.812.047.144.19.253.536.43.515.26.949.662 1.152 1.065.075.144.19.526.265.854.244 1.071.258 1.112.488 1.214.251.103.563.021.665-.177.04-.068.129-.423.203-.792.251-1.201.604-1.72 1.479-2.164.474-.239.556-.334.556-.62 0-.288-.082-.383-.516-.588-.536-.26-1.003-.71-1.22-1.174-.089-.198-.224-.662-.299-1.024-.149-.73-.21-.9-.38-.962a1.027 1.027 0 00-.556.007zm.997 3.46l.278.273-.36.376c-.196.211-.42.478-.487.6l-.13.219-.216-.32a4.107 4.107 0 00-.495-.588l-.278-.273.359-.375c.197-.212.42-.478.488-.601l.13-.219.216.321c.122.178.34.444.495.587zM18.412 19.638v.546h-1.085v1.092h1.085v1.093h1.085v-1.093h1.085v-1.092h-1.085v-1.092h-1.085v.546zM3.764 26.737v.546H2.679v1.092h1.085v1.093h1.085v-1.093h1.085v-1.092H4.849v-1.092H3.764v.546z"
        fill={Globals.COLOR_GASTO}
      />
    </Svg>
  )
}

export default SvgComponent