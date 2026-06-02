import * as React from "react"
import Svg, { Rect, Circle, Ellipse } from "react-native-svg"

function SvgComponentNome(props) {
  return (
    <Svg
      width={120}
      height={1}
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={140} height={40} rx={20} fill="#CBD0FF" />
      <Circle cx={20} cy={20} r={20} fill="#B4BBF4" />
      <Ellipse cx={13} cy={20} rx={13} ry={20} fill="#A3AAEF" />
    </Svg>
  )
}

export default SvgComponentNome
