import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
export default function Footer() {
  return (
    <>
    <div className='bg-[#f7f7f7] flex  gap-36 items-center flex-wrap py-12 px-16 mt-16'>
        <div className=''>
            <h3 className='text-2xl'>About</h3>
            <p className=''>How Airbnb works</p>
            <p className=''>Newsroom</p>
            <p className=''>Investors</p>
            <p className=''>Airbnb Plus</p>
            <p className=''>Airbnb Luxe</p>
        </div>
        <div className=''>
            <h3 className='text-2xl'>Community</h3>
            <p className=''>Accessibility</p>
            <p className=''>This is not a real site</p>
            <p className=''>Its a pretty awesome clone</p>
            <p className=''>Referrals accepted</p>
            <p className=''>Papafam</p>
        </div>
        <div className=''>
            <h3 className='text-2xl'>Host</h3>
            <p className=''>Papa React</p>
            <p className=''>Present</p>
            <p className=''>Zero to Full Stack Hero</p>
            <p className=''>Hundred days of code</p>
            <p className=''>Join Now</p>
        </div>
        
    </div>
    <div className='bg-[#222] py-2 px-12 child:invert flex gap-4 justify-end items-center text-2xl '>
            <AiOutlineTwitter/>
            <AiFillFacebook/>
            <AiFillInstagram/>
            <AiFillYoutube/>
        </div>
    </>
  )
}
