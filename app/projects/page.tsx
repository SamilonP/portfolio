"use client"
import Image from 'next/image';
import Navbar from '../components/navbar';
import { useRouter } from 'next/navigation';

export default function page() {
  const route = useRouter()
  function GoToNextPage(name: string) {
    route.push(name)
  }

  return (
    <div>
        <Navbar>pojep</Navbar>

        <div className='m-5'>
          <Image className='select-none' onClick={() => {GoToNextPage("/projects/eternal")}} src={"/auhh (2).png"} alt='ogh' width={300} height={300}></Image>
          <p id='projectTitle'>Eternal wakings...</p>
        </div>
    </div>
  )
}
