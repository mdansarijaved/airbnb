import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import { IoMapSharp } from 'react-icons/io5'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='absolute'>
      <Navbar />
      <Hero />
      <Show />
    </div>
    </>
  )
}

function Show(){
  return(
    <>
    <div className='rounded-full bg-[#222222] flex justify-center items-center w-fit py-3 px-4 text-white gap-2 left-1/2 -translate-x-1/2 fixed z-20 bottom-16 '>
      <h3>Show map</h3>
      <IoMapSharp/>
    </div>
    </>
  )
}