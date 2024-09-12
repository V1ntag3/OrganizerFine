import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Globals from "../../Globals"

function SvgComponent() {
  return (
    <Svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
    >
      <Path
        d="M8.357.086c-.98.27-1.645 1.006-1.807 2.018-.084.496-.084 5.376 0 5.588a.325.325 0 00.516.136c.117-.103.123-.252.142-2.959.02-2.572.033-2.868.136-3.1.148-.323.516-.71.852-.89.252-.135.335-.142 2.697-.161l2.433-.02v1.426H11.01c-2.18-.001-2.323.005-2.465.122l-.155.122v3.997c0 4.248 0 4.203.304 4.203.07 0 .18-.033.251-.065.117-.064.123-.18.123-3.868V2.832h4.246l.071.187c.104.245.44.554.71.645.142.045.91.07 2.246.07 1.678 0 2.065-.019 2.259-.096.31-.129.458-.264.606-.567l.123-.239h4.582v5.699c0 6.214-.02 5.872.368 5.827.355-.039.342.142.322-6.163l-.013-5.827-.154-.122c-.142-.117-.284-.123-2.627-.123h-2.478V.698l2.6.02c2.517.02 2.601.026 2.853.16.336.181.703.568.852.89.11.245.116.716.135 8.2l.013 7.948h-2.388l-.103.161c-.129.194-.064.406.149.49.09.032 1.38.058 3.013.058 2.13 0 2.872.02 2.93.078.052.051.078.335.078.85l.006.78-1.194 1.16c-.742.723-1.245 1.27-1.342 1.451-.148.29-.148.297-.148 2.72v2.437H14.746v-5.415l-.161-.103c-.149-.097-.175-.097-.323 0l-.161.103v5.641l-.581 1.74c-.316.954-.58 1.811-.58 1.908 0 .303.27.716.58.877l.277.148h8.319c6.918 0 8.35-.013 8.525-.09.29-.123.535-.413.62-.729.07-.257.05-.354-.323-1.482-.22-.67-.407-1.244-.426-1.283-.013-.039.226-.09.651-.129.568-.058.723-.097.988-.258.342-.212.69-.677.793-1.063.046-.168.065-1.064.052-2.527l-.02-2.27-.173-.322c-.123-.245-.484-.619-1.394-1.444l-1.233-1.121-.02-.858c-.019-.947-.064-1.063-.503-1.366-.206-.136-.264-.142-1.684-.142h-1.471l-.02-7.98-.02-7.974-.148-.374c-.2-.49-.574-.948-.98-1.199-.665-.413-.284-.393-8.874-.387-5.995 0-7.873.02-8.099.084zm10.261 1.65c0 .948-.013 1.045-.129 1.16-.123.123-.213.13-2.155.13-1.898 0-2.033-.007-2.175-.123-.149-.122-.155-.161-.175-1.16L13.966.705H18.618v1.031zm12.584 20.428c1.2 1.096 1.097.78 1.097 3.416 0 2.115-.006 2.224-.135 2.45a1.31 1.31 0 01-.362.393l-.238.161h-3.518l-.2-.193c-.393-.367-.387-.342-.387-2.707 0-1.709.02-2.205.09-2.373.052-.116.497-.612 1-1.108l.91-.903v.567c0 .413-.019.561-.083.561-.155 0-.581.406-.697.67-.168.362-.155.665.045 1.058.549 1.109 2.213.8 2.336-.432a1.786 1.786 0 00-.045-.541c-.09-.258-.484-.677-.697-.729-.142-.038-.148-.07-.148-.619 0-.683-.123-.722 1.032.33zm-.968 1.09c.2.244.168.547-.07.747-.259.22-.478.213-.71-.02-.298-.302-.233-.715.148-.87.251-.109.477-.057.632.142zm-2.8 5.724c.36.277.638.341 1.51.348h.806l.445 1.321c.42 1.27.433 1.335.336 1.483l-.103.16h-8.274c-7.602 0-8.28-.005-8.389-.109-.064-.058-.116-.148-.116-.206 0-.084.813-2.598 1-3.088.02-.058 1.343-.077 6.292-.077h6.267l.225.168z"
        fill={Globals.COLOR_GASTO}
      />
      <Path
        d="M16.733 30.39a.355.355 0 000 .322l.078.16h5.285c4.724 0 5.299-.012 5.389-.102a.348.348 0 00.103-.22.348.348 0 00-.103-.219c-.09-.09-.665-.103-5.389-.103h-5.285l-.078.161zM2.136 2.226c-.155.148-.142.812.013.948.161.142.31.135.465-.02.16-.16.174-.676.025-.89a.327.327 0 00-.503-.038zM.78 3.58a.327.327 0 00.04.503c.213.148.664.135.826-.026.155-.155.161-.245.025-.438-.077-.116-.16-.142-.445-.142-.226 0-.38.032-.445.103zM3.117 3.548c-.168.096-.149.412.026.535.148.103.535.135.729.064.174-.07.245-.341.129-.516-.084-.128-.155-.154-.439-.154-.18 0-.387.032-.445.07zM2.097 4.566c-.032.071-.064.27-.064.451 0 .271.026.342.148.42.187.128.426.064.504-.136.09-.238.07-.554-.046-.716-.129-.18-.445-.193-.542-.019zM16.166 7.01c-2.156.122-4.02 1.398-4.995 3.435a5.81 5.81 0 00-.6 2.256c-.046.76.045 1.412.335 2.437.22.754.226.8.226 1.953 0 .993.02 1.212.116 1.399.187.38.4.49 1.013.516.497.019.542.032.562.154.032.239.277.303 1.2.303.826 0 .865-.006 1.013-.161l.162-.155v-2.005c0-1.914-.007-2.004-.13-2.127-.116-.116-.212-.129-1.051-.129-.981 0-1.207.058-1.207.323 0 .103-.065.122-.549.142l-.555.019-.122-.42-.2-.708c-.13-.452-.11-1.999.032-2.514.516-1.902 1.955-3.359 3.814-3.874.703-.194 1.781-.194 2.517 0 1.484.393 2.678 1.386 3.388 2.81.393.8.51 1.231.561 2.095.039.722-.045 1.315-.297 2.166l-.129.445-.555-.02c-.484-.019-.548-.038-.548-.141 0-.265-.226-.323-1.207-.323-.839 0-.936.013-1.052.13-.123.122-.129.212-.129 2.126v2.005l.161.155c.149.155.188.161 1.013.161.923 0 1.169-.064 1.2-.303.02-.122.065-.135.562-.154.613-.026.826-.136 1.014-.516.096-.187.116-.406.116-1.399 0-1.154.006-1.199.226-1.953.296-1.038.38-1.67.335-2.501-.18-3.269-3-5.815-6.24-5.628zm-1.678 10.165v1.58h-.968v-3.16h.968v1.58zm4.969 0v1.58h-.968v-3.16h.968v1.58zm-6.647 0v1.128h-.407c-.232 0-.439-.032-.484-.078-.084-.083-.116-2.056-.032-2.133.02-.026.239-.045.484-.045h.439v1.128zm8.312-.071c.013.696-.007 1.05-.058 1.109-.052.058-.213.09-.484.09h-.413V16.04l.47.02.465.019.02 1.025zM6.55 9.15c-.264.264-.045.773.336.773.155 0 .439-.284.439-.438 0-.38-.51-.6-.775-.336zM2.872 11.283a1.229 1.229 0 00-.549.51c-.045.09-.29 1.115-.555 2.275l-.47 2.12-.343.155c-.361.174-.587.4-.813.825L0 17.433v9.346l.194.349c.2.36.567.683.955.825.148.051 1.194.077 3.685.077 2.749.006 3.465.026 3.44.084-.014.045-.227.954-.465 2.017-.246 1.09-.478 1.986-.536 2.044-.09.103-.278.116-2.143.116-1.632 0-2.065-.02-2.123-.084-.038-.051-.174-.56-.31-1.14-.129-.575-.277-1.09-.329-1.135-.122-.13-.361-.11-.49.032-.11.122-.103.174.129 1.244.258 1.141.361 1.38.69 1.625.175.128.265.135 2.356.154 2.155.02 2.175.013 2.465-.129.155-.084.336-.238.4-.348.065-.11.336-1.167.6-2.346.265-1.18.49-2.153.504-2.16.006-.006.135-.058.284-.122.348-.155.684-.503.871-.91.136-.302.148-.418.168-1.914l.026-1.598h.542c.806 0 .8.013.8-1.354s.006-1.354-.8-1.354h-.542l-.033-1.598c-.02-1.102-.051-1.67-.11-1.837-.128-.361-.554-.813-.935-.987l-.323-.154H5.505c-1.91 0-3.472-.02-3.472-.052 0-.174.916-4.048.974-4.119.058-.065.484-.084 2.117-.084 1.123 0 2.078.026 2.13.058.051.033.206.574.367 1.27.271 1.18.355 1.38.575 1.38.135 0 .355-.2.355-.33 0-.263-.523-2.41-.633-2.597a1.139 1.139 0 00-.374-.342c-.245-.141-.29-.148-2.381-.141-1.259 0-2.194.025-2.291.064zm6.26 5.75c.122.077.277.245.348.367.136.22.136.303.136 4.706 0 4.364-.007 4.487-.13 4.7a1.513 1.513 0 01-.31.354c-.18.135-.232.135-3.975.155l-3.788.012-.22-.148a1.507 1.507 0 01-.367-.36l-.148-.22v-8.986l.148-.219c.077-.116.245-.284.361-.361l.22-.148h7.512l.213.148zm1.871 5.073v.645h-.645v-1.29h.645v.645z"
        fill={Globals.COLOR_GASTO}
      />
      <Path
        d="M4.266 18.722c-.872.238-1.73.896-2.156 1.65a3.502 3.502 0 00.568 4.184c1.381 1.392 3.537 1.386 4.943-.026.697-.703.994-1.418.994-2.424 0-1.025-.29-1.721-1.026-2.45-.523-.522-.949-.767-1.587-.934-.459-.116-1.304-.116-1.736 0zm2.032.85c1.156.536 1.807 1.741 1.607 2.953a2.889 2.889 0 01-1.613 2.12c-.755.355-1.82.304-2.556-.128-.406-.239-.91-.812-1.142-1.296-.193-.406-.206-.49-.206-1.115 0-.645.013-.703.232-1.16a2.877 2.877 0 011.64-1.496c.25-.09.464-.116.967-.096.568.012.697.038 1.071.219z"
        fill={Globals.COLOR_GASTO}
      />
      <Path
        d="M4.098 20.108c-.123.122-.13.212-.13 1.998s.007 1.876.13 1.998c.07.071.168.13.22.13.109 0 .49-.265 1.761-1.206 1.33-.993 1.349-.851-.336-2.095-.71-.522-1.342-.954-1.4-.954-.064 0-.174.058-.245.129zm1.33 1.463c.367.277.67.516.67.535 0 .039-1.258.973-1.368 1.018-.026.013-.051-.444-.051-1.011 0-.574.019-1.038.038-1.038.026 0 .342.225.71.496zM30.337 11.354c-.148.213-.135.728.026.89.162.16.336.167.471.012.149-.16.149-.799.007-.94a.328.328 0 00-.504.038zM28.976 12.72c-.071.11-.084.194-.039.31.071.193.187.245.516.245.317 0 .523-.148.523-.387 0-.238-.148-.322-.574-.322-.271 0-.342.026-.426.154zM31.305 12.708c-.135.193-.129.283.026.438.09.09.213.129.407.129.329 0 .561-.142.561-.355 0-.251-.161-.354-.548-.354-.284 0-.368.026-.446.142zM30.337 13.675a.694.694 0 00-.103.354c0 .477.245.703.549.51.135-.091.161-.155.161-.433 0-.18-.032-.38-.064-.45-.097-.175-.413-.162-.543.018zM24.058 15.402a.44.44 0 00-.148.71c.264.263.774.077.774-.284 0-.303-.342-.535-.626-.426zM14.25 20.688a.44.44 0 00-.15.709c.265.264.775.077.775-.284 0-.303-.342-.535-.626-.425z"
        fill={Globals.COLOR_GASTO}
      />
    </Svg>
  )
}

export default SvgComponent
