import React, { useState } from 'react'

const styles = {
  svg: {
    width: '2rem',
    cursor: 'pointer',
    userSelect: 'none'
  },
  text: {
    fontSize: '80pt',
    fontWeight: 'bold',
    dominantBaseLine: 'middle',
    pointerEvents: 'none'
  }
}

const Heart = ({ orderId }) => {
  const [totalLikes, setTotalLikes] = useState(0)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.23 258.19" style={ styles.svg } onClick={ () => setTotalLikes(totalLikes + 1) }>
      <path id={'heart' + orderId}
        d="M140.32,248.11c-9.8-10.06-18.64-19.29-27.66-28.35q-33.14-33.27-66.4-66.41c-7.5-7.5-15.68-14.46-22.29-22.67a74.78,74.78,0,0,1-16.74-42C5.8,69.62,11.09,52.59,22,37.37A66.86,66.86,0,0,1,46,16.92c11.87-6.11,24.43-10.33,38-9.6,18.16,1,34.6,6.66,48.19,19.29,2.52,2.35,5.27,4.45,7.66,6.45,6.63-5,12.62-10.7,19.68-14.37a114.62,114.62,0,0,1,27-10.27c16.1-3.65,31.73,0,46,7.67,25.42,13.59,39.09,35,40.61,64,1,18.74-4.93,35.32-16.11,49.77-6.55,8.46-14.95,15.48-22.56,23.1q-37.08,37.09-74.16,74.19C153.75,233.77,147.46,240.61,140.32,248.11Z"
        style={{
          fill: totalLikes ? '#fa6137' : '#fff',
          stroke: totalLikes ? '#fa6137' : '#ccc'
        }}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="14"
      />
      <path
        id={'highlight' + orderId}
        d="M36.17,79c-.85-23.71,32.14-49.81,54-44.74"
        style={{
          fill: totalLikes ? '#fa6137' : '#fff',
          stroke: totalLikes ? '#fff' : '#ccc'
        }}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="14"
      />
      <text
        style={{
          dominantBaseline: 'middle',
          fontSize: '80pt',
          fontWeight: 'bold',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
        x="50%"
        y="50%"
        textAnchor="middle"
        fill={totalLikes ? '#fff' : '#ccc'}
      >
        {totalLikes}
      </text>
      <animateTransform
        href={'#heart' + orderId}
        attributeName="transform"
        type="scale"
        values="1;.9;1"
        dur=".25s"
        begin="click"
        additive="sum"
        accumulate="sum"
        id={'heart-scale' + orderId}
      />
      <animateTransform
        href={'#heart' + orderId}
        attributeName="transform"
        type="translate"
        values="0 0;20 20;0 0"
        dur=".25s"
        begin={'heart-scale' + orderId + '.begin + 0s'}
        additive="sum"
        accumulate="sum"
      />
      <animateTransform
        href={'#highlight' + orderId}
        attributeName="transform"
        type="scale"
        values="1;.95;1"
        dur=".25s"
        begin={'heart-scale' + orderId + '.begin + 0s'}
        additive="sum"
        accumulate="sum"
      />
      <animateTransform
        href={'#highlight' + orderId}
        attributeName="transform"
        type="translate"
        values="0 0;20 20;0 0"
        dur=".25s"
        begin={'heart-scale' + orderId + '.begin + 0s'}
        additive="sum"
        accumulate="sum"
      />
    </svg>
  )
}

export default Heart
