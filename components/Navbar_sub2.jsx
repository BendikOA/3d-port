import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image'




const Navbar_sub2 = () => {
      
    const handleNav = () => {
        setNav(!nav)
      }
    
  return (
<div className="absolute md:left-0 top-0 w-full z-10 ease-in duration-300 ">
      <Link href="../">
        <h1 className='ml-[40px] mt-[30px] font-gameboy text-[16px] text-[#080808] underline	'>
          Bendik Ødven Andersen
        </h1>
      </Link>

      <ul className='ml-[55px] mt-[5px] font-gameboy text-[14px] text-[#080808] list-disc'>
        <li>
          Webutvikling
        </li>
        <li>
          3D Design
        </li>
        <li>
          Audiodesign
        </li>
      </ul>

    </div>  )
}

export default Navbar_sub2