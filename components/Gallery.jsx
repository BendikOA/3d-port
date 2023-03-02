import React from 'react';
import Image from 'next/image';
import vert3 from '../public/vert3.gif'
import vert1 from '../public/vert1.webp'
import vert4 from '../public/vert4.webp'
import vert2 from '../public/vert2.webp'
import w1 from '../public/w1.webp'
import w2 from '../public/w2.webp'

const Gallery = () => {
  return (
    <div>
        <div className="py-10 pb-20 md:px-20 lg:px-40 bg-gradient-to-r from-[#B8C6DB] to-[#FFFFFF" id="3d" >
        <div className="md:px-20 lg:px-40 text-center p-10"  data-aos="fade-up">  
          </div>
        <div className="px-10 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">
              <Image className=" border-2 border-black" src={w1} width={"100%"} />
            </div>
            <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up" data-aos-delay="100">
              <Image className=" border-2 border-black" src={w2} width={"100%"} />
            </div>
          </div>
          
          <div className="px-10 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/6 flex-1 object-cover" data-aos="fade-up" data-aos-delay="200">
              <Image className=" border-2 border-black" src={vert1} width={"100%"} />
            </div>
            <div className="basis-1/6 flex-1 object-cover" data-aos="fade-up" data-aos-delay="300">
              <Image className=" border-2 border-black" src={vert2} width={"100%"} />
            </div>
            <div className="basis-1/6 flex-1 object-cover mx-auto" data-aos="fade-up" data-aos-delay="400">
              <Image className=" border-2 border-black" src={vert3} width={"100%"} />
            </div>
            <div className="basis-1/6 flex-1 object-cover" data-aos="fade-up" data-aos-delay="500">
              <Image className=" border-2 border-black" src={vert4} width={"100%"} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Gallery