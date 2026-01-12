"use client"
import Image from "next/image";
import { useState } from "react";
import Snails from "./components/snails";
import Navbar from "./components/navbar";

export default function Home() {
  const [disabled, setTitatat] = useState(true)

  function fuuuck() {
    if (disabled) {
      setTitatat(false)
      const auh = new Audio("/auughh.wav")
      auh.play()
  
      setTimeout(() => {
        setTitatat(true)
        auh.pause()
      }, Math.random() * 900.00);
    }
  }

  return (
    <div className="">
      <Navbar>
        <button id="funnyy" onClick={fuuuck}>FUNNY BUTTON</button>
        <p>main</p>
      </Navbar>
      
      {!disabled && <Image alt="HEEELP HELP" width={500} height={500} id="horrible" src={"/uiy.jpg"} className="absolute"></Image>}
      
      <div id="oihuhhhh">
        <p className="font-bold flex text-2xl items-center font-mono">hi im <Snails/> hi im <Snails/> heres my entire name:</p>
        <p className="">800 <Snails/> Lay Upon a Bed And Watch The Stars That Ruin The General Pi Illuminati Of Pomeranian and Carpathian Sorrow Mellows Within Our Sol And Mistakes Where Ancestors Shall Think Of Para Symbiosis. THE TIME OF THE REFINED AND THE DEAD PEOPLE HERE. An Invasion During Peacetime Many Sought For. Drown The <Snails/> In The Stars That Once The <Snails/> Visited Our Ancestral Consumption Of Noria. People's Yesterday: "UPON THIS HILL THERE SHALL BE A WAR AND UPON WARS THERE SHALL BE AN ANCESTOR" From Their Sole Olenekian Happiness That Nobody Discovered In A Rather Hateful Way. My Kind Go Forth For Once And You Shall Be An Ancestor And The 800 <Snails/> Will Try You For Brain-washed Thoughts That Discard & Denies Their Ancestry. People, Rejoice! Rejoice! Lava Rivers and Brittle Ground Are Signs For The <Snails/>! Taken From Our Time And Left At The End Of The Universe. General Ruin Sol. In The Pancreas Dicynodontia We Shall See The 800 <Snails/></p>
      </div>

      <div className="pt-8">
        <p>i am a game dev. i have some skills in video editing, drawing and image editing</p>
        <Image className="ml-52" alt="oosgogsogoogsr" width={500} height={300} src={"/art3.png"}></Image>
      </div>
    </div>
  );
}
