import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image'

const Navbar = () => {
    const [nav, setNav] = useState(false) ;
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('#080808');

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect (() => {
        const changeColor = () => {
        if (window.scrollY >=90) {
            setColor('transparent');
            setTextColor('#080808');
        } else {
            setColor('transparent');
            setTextColor('#080808')
        }
    }; 
    window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300 ">
        <div className="max-w-[100%] m-auto flex justify-between items-center p-4 text-[#080808]">
            <Link href="../">
            <h1 style={{color: `${textColor}`}} className="absolute left-[41px] top-[34px] text-[16px] hover:scale-105 font-gameboy font-normal">
            </h1>
            </Link>
            <ul style={{color: `${textColor}`}} className="hidden sm:flex flex-0 mr-4 md:mr-4 font-semibold">
                <Link href="CV_BOA.pdf" target="_blank">  
                  <li className="p-4 text-sm lg:text-md font-gameboy  mr-1 ml-1 lg:mr-2 lg:ml-2 border-2 shadow-md rounded-md  bg-slate-100 hover:scale-105">
                      CV
                  </li>
                </Link>
                <Link href="nettsider" >
                    <li className="p-4 text-sm lg:text-md font-gameboy  mr-1 ml-1 lg:mr-2 lg:ml-2 border-2 shadow-md rounded-md  bg-slate-100 hover:scale-105">
                        Nettsider
                </li>
                </Link>
                <Link href="portefolje">
                    <li className="p-4 text-sm lg:text-md font-gameboy  mr-1 ml-1 lg:mr-2 lg:ml-2 border-2 shadow-md rounded-md  bg-slate-100 hover:scale-105">
                    3D Portifolio
                    </li>
                </Link>
            </ul>
            {/*mobile*/}
            <div onClick={handleNav} className="block sm:hidden z-10 mr-4">
                {nav ? <AiOutlineClose className="text-4xl rounded-md" style={{color: `${textColor}`}} /> : <AiOutlineMenu size={30} style={{color: `${textColor}`}} />}
            </div>
            {/* mob menu*/}
            <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-orange-300 text-center ease-in duration-300 bg-fixed bg-center bg-cover custom-img3" : "sm:hidden absolute top-0 left-[120%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-500 text-center ease-in duration-300"}>
            <ul className="pb-12 ">
            <li className="font-gameboy p-4 text-2xl text-gray-200  border-2 border-white m-4 bg-black/70 shadow-lg rounded-md">
                    <Link href="../" onClick={handleNav}>Hjem</Link>
                </li>
                <li className="font-gameboy p-4 text-2xl text-gray-200  border-2 border-white m-4 bg-black/70 shadow-lg rounded-md">
                    <Link href="CV_BOA.pdf" onClick={handleNav} target="_blank">CV</Link>
                </li>
                <li className="font-gameboy p-4 text-2xl  border-2 border-white m-4 bg-black/70 shadow-lg rounded-md">
                <Link href="#3d" onClick={handleNav}>Nettsider</Link>
                </li>
                <li className="font-gameboy p-4 text-2xl  border-2 border-white m-4 bg-black/70 shadow-lg rounded-md">
                    <Link href="#music" onClick={handleNav}>3D</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar