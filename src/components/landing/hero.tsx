'use client'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {  MoveRightIcon } from 'lucide-react'

const Hero = () => {
  return (
    <div className='h-full w-full flex justify-center items-end pb-10 fixed inset-0 z-0 '>
        {/* background video */}
        <video src="/videos/landing/hero-bg.mp4" autoPlay muted loop className='absolute inset-0 w-full h-full object-cover' />
        {/* content */}
        <div className='relative z-10 flex flex-col items-center justify-center gap-2'>
            {/* update */}
            <div className="flex justify-center items-center gap-2 md:gap-8 bg-black/20 rounded-full p-2 backdrop-blur-sm">
                <Badge variant="secondary" className='text-[8px] lg:text-xs lg:px-2 lg:py-2 font-secondary uppercase'>update</Badge>
                    <p className='text-[9px] lg:text-xs text-secondary font-secondary uppercase pr-2'>Launch Beta: March 2026 | 12:00 PM UTC</p>
            </div>
           {/* title */}
           <p className='text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white w-[450px] lg:w-[600px]'>
           Find peace in overwhelming moments.
           </p>
           {/* buttons */}
           <div className='flex justify-center items-center gap-2'>
            <Button className='cursor-pointer rounded-full px-4 border border-primary md:text-lg md:p-6 '>Get Started <MoveRightIcon className='w-4 h-4'/></Button>
            <Button className='cursor-pointer rounded-full px-4 py-2 md:text-lg md:p-6 md:py-5   bg-white/10 backdrop-blur-sm text-white border border-white' variant="outline">Subscribe</Button>
           </div>
        </div>

        {/* instagram button */}
        <div className='hidden lg:block absolute bottom-5 right-5'>
            <button onClick={() => window.open('https://www.instagram.com/coco_caregiver/', '_blank')} className='rounded-2xl p-4  bg-white/10 backdrop-blur-sm text-white flex items-center gap-2 flex-col cursor-pointer hover:scale-105 transition-all duration-300'>
            <Image className='rounded-xl' src="https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_rp_progressive&w=740&q=80" alt="instagram" width={70} height={100} /> 
            <span className='text-white text-[10px] font-secondary uppercase'>Follow Us</span>
            </button>
        </div>
    </div>
  )
}

export default Hero 