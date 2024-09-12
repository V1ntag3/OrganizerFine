import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Globals from "../../Globals"

function SvgComponent() {
  return (
    <Svg
      width={23}
      height={29}
      viewBox="0 0 23 29"
      fill="none"

    >
      <Path
        d="M.44.641l-.135.13v11.6c0 10.254.011 11.615.082 11.719.13.184 2.153 1.318 2.354 1.318.326 0 .516-.413.288-.64-.05-.05-.5-.326-.999-.608l-.911-.515V12.642c0-6.05.01-10.997.033-10.997.06 0 7.709 4.356 7.888 4.497.103.082.255.277.342.44l.146.293v9.733c0 7.232-.016 9.793-.065 9.945-.125.423-.57.802-1.036.89-.423.08-.619 0-2.295-.95-1.752-.998-1.872-1.042-2.078-.781-.146.184-.141.309.01.477.18.206 3.218 1.904 3.593 2.013.927.271 2.029-.244 2.484-1.161l.174-.353.027-1.199.027-1.193 3.825-.027 3.825-.028.31-.146c.433-.2.824-.58 1.035-1.015l.174-.358.016-3.342.017-3.347.797-.022c.857-.022 1.08-.081 1.346-.38.314-.341.32-.385.32-1.996 0-1.427-.006-1.503-.12-1.71a1.545 1.545 0 00-.27-.363c-.278-.265-.484-.314-1.314-.314h-.765l-.01-4.601-.017-4.595-.157-.326a2.26 2.26 0 00-1.053-1.02l-.363-.173-1.612-.017L14.737.5 14.6.636c-.174.173-.174.38 0 .548l.13.135h1.46c1.578 0 1.73.022 2.1.299.102.081.243.271.325.423l.135.277v8.93h-.976V2.562l-.136-.13-.13-.136H3.973l-.836-.478-.835-.472 5.56-.027c5.372-.027 5.567-.032 5.676-.13a.377.377 0 00-.027-.57c-.147-.113-.152-.113-6.543-.113H.57L.441.64zM16.962 7.18v4.069h-.922v-.315c0-.727-.575-1.232-1.194-1.047-.244.07-3.732 3.098-3.836 3.331a1.35 1.35 0 00-.07.44c0 .227.032.325.152.482.173.24 3.385 3.05 3.613 3.169.206.108.575.103.82-.017.303-.14.471-.433.504-.89l.027-.379h.906v5.642h-6.619V14.27c0-6.598-.01-7.428-.087-7.694a2.357 2.357 0 00-.602-.982c-.114-.108-1.096-.7-2.186-1.318a175.865 175.865 0 01-2.002-1.145c-.011-.01 2.566-.021 5.734-.021h5.762v4.069zm-1.747 4.085c.022.873-.277.798 3.033.798h2.734l.13.135.136.13v1.254c0 1.307-.032 1.513-.244 1.595-.049.016-1.313.032-2.81.032-3.261 0-2.968-.076-2.968.792 0 .407-.016.56-.07.58-.104.039-3.402-2.837-3.386-2.956.016-.114 3.282-2.984 3.37-2.957.037.011.064.228.075.597zm3.537 7.97v3.217l-.13.277c-.146.314-.434.575-.732.667-.147.043-1.286.06-3.88.06h-3.667v-.977h7.183l.125-.12.125-.113v-6.223h.976v3.212z"
        fill={Globals.COLOR.LIGHT.COLOR4}
      />
      <Path
        d="M6.121 14.177c-.57.288-.879.755-.922 1.384-.06.944.597 1.693 1.54 1.752.51.033.858-.081 1.21-.401.391-.353.56-.727.56-1.243 0-.515-.169-.89-.56-1.242-.325-.293-.656-.412-1.133-.412-.293 0-.424.032-.695.162zm1.183.776c.38.255.51.754.293 1.129-.331.564-1.134.58-1.46.021-.347-.586.038-1.27.711-1.275.2 0 .331.033.456.125z"
        fill={Globals.COLOR.LIGHT.COLOR4}
      />
    </Svg>
  )
}

export default SvgComponent
