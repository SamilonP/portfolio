"use client"
import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/navbar'

function page() {
  return (
    <div>
        <Navbar></Navbar>

        <div id="containgagmens">
            <Image alt="robbbob" width={500} height={500} src="/art1.png"></Image>
            <Image alt="robbbob" width={500} height={500} src="/art2.png"></Image>
        </div>
    </div>
  )
}

export default page