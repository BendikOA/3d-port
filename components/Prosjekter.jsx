import React from 'react'
import w1 from '../public/w1.webp';
import web1 from '../public/web1.gif';
import Link from 'next/link';
import Image from 'next/image';


const Prosjekter = () => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full border-4 border-black group hover:bg-gradient-to-b from-[#5641D5] to-[#709DFF]'>
            <Image className='group-hover:opacity-10 cursor-pointer' src={web1} alt="/" />
             <div className='hidden group-hover:block absolute items-center justify-center '>
             <h3 className='text-2xl font-semibold text-white tracking-wider'> University of Warwick</h3>
             <p className='pb-4 pt-2 text-white text-center'>HTML/CSS</p>
            <Link href="/" >
              <p className='bg-slate-100 hover:bg-orange-200 text-gray-900 font-bold py-2  border border-black rounded text-center'>Go to website</p>
            </Link>
        </div>
  </div>  
  

  
  
  )
}

export default Prosjekter