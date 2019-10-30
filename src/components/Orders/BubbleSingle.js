import React from 'react'

const styles = {
  bottom: 0,
  left: 0,
  marginBlockStart: '80%',
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: '2'
}
const BubbleSingle = () =>
  <svg style={styles} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1000 630" preserveAspectRatio="xMidYMid meet" >
    <defs id="svgEditorDefs">
      <polygon id="svgEditorShapeDefs"
        style="fill:rosybrown;stroke:black;vector-effect:non-scaling-stroke;stroke-width:1px;"/>
      <radialGradient gradientUnits="objectBoundingBox" id="rgrd3-c" x1="0" x2="100%" y1="0" y2="100%">
        <stop offset="0%" stopColor="#000000"/>
        <stop offset="60%" stopColor="#331A0F"/>
        <stop offset="90%" stopColor="#733B20"/>
      </radialGradient>
    </defs>
    <path d="M18.025974025973962,21.870129870129883h4.000000000000014a4,4,0,0,0,-4.000000000000014,-3.999999999999993v3.999999999999993v-3.999999999999993a4,4,0,0,0,-3.9999999999999716,3.999999999999993h3.9999999999999716h-3.9999999999999716a4,4,0,0,0,3.9999999999999716,4.000000000000007v-4.000000000000007v4.000000000000007a4,4,0,0,0,4.000000000000014,-4.000000000000007h-4.000000000000014Z"
      style={{ fill: 'url(#rgrd3-c)', stroke: 'none', vectorEffect: 'non-scaling-stroke', strokeWidth: '1px' }}
      id="e9_shape"
      transform="matrix(9.625 0 0 9.625 192.5 135.5)"/>
  </svg>

export default BubbleSingle
