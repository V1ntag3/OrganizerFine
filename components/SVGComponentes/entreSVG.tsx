import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Globals from "../../Globals"

function SvgComponent() {
  return (
    <Svg
      width={33}
      height={36}
      viewBox="0 0 33 36"
      fill="none"
    >
      <Path
        d="M.21.188l-.207.18V17.63l.206.18.198.187h32.189l.198-.187.206-.18V.368l-.206-.18L32.596 0H.407L.21.188zM3.962 1.8v.6h-.454c-.38 0-.495.03-.66.187l-.206.18v12.464l.206.18c.165.157.28.187.66.187h.454v1.2h-2.64V1.2h2.64v.6zm3.96 0v.6h-2.64V1.2h2.64v.6zm3.959 0v.6h-2.64V1.2h2.64v.6zm3.96 0v.6h-2.64V1.2h2.64v.6zm3.96 0v.6h-2.64V1.2h2.64v.6zm3.959 0v.6h-2.64V1.2h2.64v.6zm3.96 0v.6h-2.64V1.2h2.64v.6zm3.96 7.199v7.8h-2.64v-1.2h.453c.38 0 .495-.03.66-.188l.206-.18V2.767l-.206-.18c-.165-.157-.28-.187-.66-.187h-.454V1.2h2.64V9zm-2.64 0v5.4H3.962v-10.8H29.04V9zM7.921 16.2v.6h-2.64v-1.2h2.64v.6zm3.96 0v.6h-2.64v-1.2h2.64v.6zm3.96 0v.6h-2.64v-1.2h2.64v.6zm3.96 0v.6h-2.64v-1.2h2.64v.6zm3.959 0v.6h-2.64v-1.2h2.64v.6zm3.96 0v.6h-2.64v-1.2h2.64v.6z"
        fill={Globals.COLOR_GASTO}
      />
      <Path
        d="M13.408 5.587l-.206.18v6.464l.206.18a.686.686 0 00.43.188c.156 0 1.138-.518 3.035-1.598 2.21-1.26 2.821-1.635 2.879-1.8.181-.45.107-.51-2.88-2.204-1.896-1.08-2.878-1.598-3.035-1.598a.685.685 0 00-.429.188zm2.78 2.437c.875.495 1.592.938 1.592.975 0 .06-3.11 1.875-3.217 1.875-.025 0-.041-.848-.041-1.875 0-1.035.016-1.875.041-1.875s.759.405 1.625.9zM7.716 19.288a2.757 2.757 0 00-.404.18c-.107.067-.215.075-.355.022-.107-.037-.396-.067-.635-.067-.487 0-1.188.27-1.435.555-.1.12-.264.18-.57.217a2.186 2.186 0 00-1.295.57c-.198.188-.313.233-.585.233-.446 0-1.122.307-1.403.645-.313.375-.478.877-.429 1.29.033.292.009.382-.19.607-.56.652-.552 1.462.017 2.13.24.277.24.277.891 5.024.363 2.602.66 4.785.66 4.837 0 .053.09.18.206.278l.198.187h5.519c5.28 0 5.535-.007 5.717-.142.181-.135.222-.375.866-5.025l.684-4.882.24-.277c.437-.503.536-1.073.305-1.665-.1-.27-.1-.337 0-.57.346-.75-.1-1.762-.973-2.19-.19-.097-.462-.135-.933-.135-.47 0-.726-.037-.874-.127a4.096 4.096 0 00-.495-.233 1.079 1.079 0 01-.462-.375c-.371-.54-1.287-.877-1.98-.735-.23.045-.363.038-.396-.007-.033-.045-.247-.158-.478-.255-.454-.195-.99-.225-1.41-.09zm1.015 1.252c.074.075.23.233.338.338.231.232.478.247.916.045.528-.248.866-.098 1.072.472.107.315.413.503.817.503.181 0 .305.067.478.255.347.382.635.457 1.031.27.421-.203.693-.188.933.037.437.39.684.375-6.08.353-3.457-.008-6.303-.038-6.327-.053-.017-.022.008-.12.057-.225.14-.277.438-.375.875-.285.503.105.792-.015.99-.405.198-.405.453-.51.965-.39.338.083.42.075.61-.037a.786.786 0 00.297-.33c.207-.48.644-.6 1.163-.315.372.202.495.187.891-.113s.743-.345.974-.12zm5.585 3.645c.272.24.272.585 0 .825l-.199.187H1.727l-.198-.187a.563.563 0 01-.206-.413c0-.142.074-.3.206-.412l.198-.188h12.391l.197.188zm-9.38 6.202c.149 2.197.272 4.087.264 4.2v.21h-.99c-.544 0-.99-.023-.99-.046 0-.082-1.072-7.874-1.113-8.114l-.05-.24h2.615l.264 3.99zM9.82 26.6c.008.12-.116 2.01-.264 4.2l-.264 3.996H6.553L6.289 30.8c-.148-2.19-.272-4.08-.264-4.2v-.202H9.82v.203zm3.918.037c-.041.24-1.114 8.032-1.114 8.114 0 .023-.445.045-.99.045h-.99v-.21c-.008-.112.116-2.002.265-4.2l.264-3.989h2.615l-.05.24zM27.943 19.363c-.14.135-.272.547-.585 1.8l-.413 1.635h-4.76l-.198.187c-.206.18-.206.195-.206 1.612 0 1.418 0 1.433.206 1.613.108.105.264.187.347.187.14 0 .173.27.429 4.027.37 5.602.33 5.197.552 5.4l.19.172H30.616l.19-.172c.222-.203.181.202.552-5.4.256-3.757.29-4.027.43-4.027.082 0 .238-.082.346-.187.206-.18.206-.195.206-1.613 0-1.417 0-1.432-.206-1.612l-.198-.187h-1.823c-1.7 0-1.823-.008-1.782-.135.016-.068.157-.608.305-1.2l.272-1.065h.85c.8 0 .874-.015 1.056-.188a.562.562 0 00.206-.412c0-.143-.074-.3-.206-.413-.19-.18-.231-.187-1.444-.187-1.18 0-1.254.008-1.427.165zm3.077 5.234v.6H23.1v-1.2h7.92v.6zm-.75 2.34c0 .3-.025.682-.058.84l-.058.3-3.052.69c-1.675.382-3.053.69-3.069.682-.025-.03-.19-2.31-.19-2.684v-.368H30.278l-.009.54zm-.157 2.587c0 .12-.025.383-.05.6l-.057.383-2.88.652c-1.583.36-2.887.645-2.903.63-.017-.015-.058-.27-.091-.562l-.058-.533 2.962-.682c1.625-.368 2.978-.683 3.019-.683.033-.007.058.083.058.195zm-.19 2.737c-.033.263-.074.938-.107 1.5l-.058 1.035h-5.42l-.016-.6a51 51 0 01-.017-.877l-.008-.278 2.681-.614c1.477-.338 2.747-.623 2.838-.623.14-.007.148.038.107.457z"
        fill={Globals.COLOR_GASTO}
      />
      <Path
        d="M17.838 25.295c-.355.105-.949.585-1.122.907a.866.866 0 01-.429.39c-.38.165-.89.698-1.006 1.065-.231.682-.066 1.252.52 1.777.453.42.899.585 1.484.555.28-.015.404.023.652.21.792.593 1.815.525 2.565-.165.76-.682.834-1.612.182-2.332-.206-.225-.248-.338-.231-.592.033-.533-.149-.938-.61-1.35-.57-.525-1.263-.683-2.005-.465zm1.097 1.29c.24.21.256.457.066.817-.173.337-.066.585.346.802.504.27.603.69.248 1.005-.346.323-.808.233-1.105-.225-.24-.375-.512-.472-.883-.315-.396.173-.668.158-.9-.06-.412-.367-.123-1.012.454-1.012.339 0 .66-.293.66-.6s.322-.6.66-.6c.157 0 .33.068.454.188zM15.842 31.294c-.157.045-.479.255-.702.465-.585.525-.75 1.095-.52 1.777.116.368.628.9 1.007 1.065a.866.866 0 01.43.39c.073.143.296.39.494.547a2.04 2.04 0 002.368.143c.222-.142.222-.142.453 0 .792.503 1.733.405 2.45-.247.586-.525.751-1.095.52-1.778-.115-.367-.627-.9-1.006-1.065a.866.866 0 01-.43-.39c-.074-.142-.296-.39-.494-.547-.693-.547-1.625-.607-2.36-.142-.23.142-.23.142-.453 0-.495-.308-1.155-.39-1.757-.218zm1.113 1.29c.132.112.207.27.207.412 0 .308.321.6.66.6.338 0 .66-.292.66-.6 0-.307.321-.6.66-.6.338 0 .66.293.66.6 0 .308.32.6.66.6.577 0 .865.645.453 1.013-.404.375-1.114.112-1.114-.413 0-.307-.321-.6-.66-.6-.338 0-.66.293-.66.6 0 .308-.321.6-.66.6-.338 0-.66-.292-.66-.6 0-.307-.321-.6-.66-.6-.338 0-.66-.292-.66-.6 0-.307.322-.6.66-.6.157 0 .33.068.454.188z"
        fill={Globals.COLOR_GASTO}
      />
    </Svg>
  )
}

export default SvgComponent