"use client"
import React from 'react'
import Image from 'next/image';
import Navbar from '@/app/components/navbar'

export default function page() {
  return (
    <div>
        <Navbar>
            <p>eternal</p>
        </Navbar>

        <div className='p-4'>
          <p id='gameTitle'>Eternal Wakings from Poor Poor Epiphanies Has Left Man Alone In Centuries Everlasting Centuries. Unbound By Your Own Words Again has Nevertheless Let You Be Your Own Gangrene. Sisyphus You Will Awaken. Do Not Fear.</p>
          <Image className='select-none' src={"/auhh (5).png"} alt='ogh' width={600} height={400}></Image>
          <Image className='select-none' src={"/auhh (4).png"} alt='ogh' width={600} height={400}></Image>
          <Image className='select-none' src={"/auhh (3).png"} alt='ogh' width={600} height={400}></Image>
          <p>a game where you work your gun in complex ways instead of just pressing a key. <br />
          started the project sometime in august 2025<br />
          game is gonna be singleplayer</p>
        </div>
    </div>
  )
}
