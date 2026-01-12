"use client"
import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/navbar'

function page() {
  return (
    <div>
        <Navbar></Navbar>

        <p>some images ive edited from exisitsitng imagesg</p>

        <div id="containgagmens">
            <div id="hope">
                <Image alt="robbbob" width={500} height={500}  src="/art1.png"></Image>
                <p id="andadarkwindblows">background photo taken during a bus trip to Vaasa. The text is my full alias</p>
            </div>
            <div id="hope">
                <Image alt="robbbob" width={500} height={500}  src="/art2.png"></Image>
                <p id="andadarkwindblows">Godspeed You! Black Emperor is my favorite band</p>
            </div>
        </div>
    </div>
  )
}

export default page