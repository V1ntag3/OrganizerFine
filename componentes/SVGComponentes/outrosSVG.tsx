import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Globals from "../../Globals"

function SvgComponent() {
  return (
    <Svg
      width={33}
      height={11}
      viewBox="0 0 33 11"
      fill="none"
      style={
        {
          marginTop:13
        }
      }
    >
      <Path
        d="M3.897.147C2.053.634.614 2.164.127 4.14c-.17.694-.17 2.017 0 2.71.598 2.431 2.641 4.145 4.95 4.145 1.505 0 3.025-.781 3.94-2.025a5.903 5.903 0 00.7-5.714c-.235-.574-.376-.71-.76-.765-.265-.04-.324-.016-.56.239-.317.342-.332.59-.081 1.18a3.97 3.97 0 01-.76 4.295c-.73.79-1.46 1.116-2.479 1.116-.988 0-1.704-.31-2.442-1.052-1.482-1.506-1.49-4.04-.007-5.54.797-.804 1.571-1.107 2.656-1.043.738.048 1.247.223 1.778.613.398.295.605.343.892.216.318-.144.48-.415.48-.797 0-.407-.325-.742-1.129-1.156C6.25.012 4.981-.14 3.897.147zM15.369.124c-.996.223-2.199 1.044-2.84 1.928-.746 1.013-1.1 2.12-1.1 3.443 0 2.184 1.033 3.962 2.87 4.95 2.84 1.522 6.33-.223 7.119-3.563.2-.845.2-2.024-.008-2.821-.62-2.431-2.64-4.08-4.95-4.057-.339 0-.826.056-1.091.12zm2.604 1.888c.922.47 1.564 1.236 1.903 2.256.221.662.221 1.793 0 2.455-.531 1.61-1.83 2.598-3.416 2.598-1.003 0-1.822-.39-2.552-1.227-1.527-1.746-1.202-4.48.7-5.842.62-.455 1.115-.59 2.022-.558.723.024.826.047 1.343.318zM26.803.124c-.265.055-.797.27-1.18.478-1.195.645-2.117 1.809-2.56 3.26-.162.541-.192.789-.2 1.594-.007 1.562.259 2.191.93 2.191.229 0 .34-.055.517-.239.213-.23.22-.27.177-.701-.17-1.57-.126-2.088.265-2.941 1.004-2.224 3.792-2.806 5.533-1.148 1.579 1.507 1.579 4.248 0 5.755-.583.55-1.453.948-2.102.948-.782 0-1.218.606-.9 1.267.154.335.464.439 1.091.383 1.24-.112 2.214-.622 3.158-1.65C32.55 8.221 33 7.041 33 5.495c0-.94-.14-1.602-.531-2.47-.251-.558-.413-.797-.974-1.395-.546-.582-.79-.79-1.298-1.052a4.9 4.9 0 00-3.394-.454z"
        fill={Globals.COLOR.LIGHT.COLOR4}
      />
      <Path
        d="M24.472 8.006c-.384.215-.531.733-.325 1.148.111.231.93.956 1.144 1.012.487.128.922-.247.922-.789 0-.398-.059-.486-.671-1.036-.472-.43-.745-.51-1.07-.335z"
        fill={Globals.COLOR.LIGHT.COLOR4}
      />
    </Svg>
  )
}

export default SvgComponent
