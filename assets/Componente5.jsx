import * as React from "react"
import { StyleSheet } from "react-native"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponentComponente5(props) {
  return (
    <Svg
      width={380}
      height={132}
      viewBox="20 0 330 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles.svg}
      {...props}
    >
      <Rect width={380} height={131.133} rx={20} fill="#B8CFF1" />
      <Path
        d="M380 112c0 10.493-8.507 19-19 19H244V30c0-5.523 4.477-10 10-10h126v92z"
        fill="#8C91FD"
        fillOpacity={0.6}
      />
      <Path
        d="M0 19C0 8.507 8.507 0 19 0h19.287v28.287c0 5.523-4.477 10-10 10H0V19z"
        fill="#8C91FD"
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
    svg: {
        position: 'absolute'
    }
})

export default SvgComponentComponente5
