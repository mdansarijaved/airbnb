import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function Hero() {
    return (
        <section className="grid grid-cols-4 px-16 gap-7 pt-5 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </section>
    )
}


function Card() {
    return (
        <>
            <div className=' overflow-clip'>
                    <Image src={'/images/image1.webp'} width={800} height={1000} alt='cardimage' className='h-[300px] w-[300px]object-cover rounded-xl'/>
                
                <div className='flex justify-between items-center'>
                    <h3>Jibhi, India</h3>
                    <p className='flex justify-center items-center'><AiFillStar />4.9</p>
                </div>
                <div className='text-gray-500 text-sm '>
                <p>332 kilometer away</p>
                <p>24-29 April</p>
                </div>
                <h3>₹6,486 night</h3>
            </div>
        </>
    )
}
