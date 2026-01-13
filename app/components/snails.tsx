import Image from 'next/image'

function snails() {
  return (
    <Image unoptimized alt="Snails" width={50} height={50} src={"/nail.gif"} className='inline-block'></Image>
  )
}

export default snails