import Image from 'next/image'
import React from 'react'
import kobe from '../images/kobe.gif'
import kobe2 from '../images/dribbble_outer_3.gif'

export default function Right() {
  return (
    <div className="right-0 absolute top-[72px] -z-10">
      <Image
      src={kobe2}
     
      height="928h"
      alt='kobe bryant'
      width='500%'
      />
    </div>
  )
}
