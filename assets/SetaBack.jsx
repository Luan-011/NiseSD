import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponentVoltar(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        y={40}
        width={40}
        height={40}
        rx={20}
        transform="rotate(-90 0 40)"
        fill="#FFD098"
      />
      <Path
        d="M30 19.75H10m0 0l8.75 8.75M10 19.75L18.75 11"
        stroke="#000"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponentVoltar
