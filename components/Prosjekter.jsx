import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Prosjekter = ({title, backgroundImg, projectUrl, build}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full border-4 border-black group hover:bg-slate-800'>
            <Image className='group-hover:opacity-10 cursor-pointer' src={backgroundImg} alt="/" />
             <div className='hidden group-hover:block absolute items-center justify-center '>
             <h3 className='md:text-2xl font-semibold text-white tracking-wider'> {title}</h3>
             <p className='md:pb-4 pt-2 text-white text-center'>{build}</p>
            <Link href={projectUrl} target="_blank">
              <p className='bg-slate-100 hover:scale-105 text-[#052564] font-bold py-2  border border-black rounded text-center'>Link</p>
            </Link>
        </div>
  </div>  

  
  )
}

export default Prosjekter