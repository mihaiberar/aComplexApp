import React from 'react'

function Icon(props) {
  return (
    <svg width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill} xmlns={props.xmlns}>
      <path
        d={props.d}
        stroke={props.pathStroke}
        strokeWidth={props.pathStrokeWidth}
        strokeLinecap={props.pathStrokeLinecap}
        fill={props.pathFill}
      />
      <circle
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        fill={props.circleFill}
        stroke={props.circleStroke}
        strokeWidth={props.circleStrokeWidth}
      />
    </svg>
  )
}

export { Icon }
