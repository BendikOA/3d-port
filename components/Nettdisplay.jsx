import React from 'react'
import { useEffect } from 'react';
import Image from 'next/image';
import web1 from '../public/web1.webp';
import web2 from '../public/web2.webp';
import web3 from '../public/web3.webp';
import web4 from '../public/web4.webp';
import web5 from '../public/web5.webp';
import web6 from '../public/web6.webp';
import Aos from 'aos';
import "aos/dist/aos.css"


import Prosjekter from './Prosjekter';

const Nettdisplay = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (

    <div className="py-24 md:py-10 pb-20  md:px-20 lg:px-40 bg-gradient-to-t from-[#4E6FA2] to-[#D8E3F2] h-auto " >
      <div className="md:px-20 lg:px-40 text-center p-10 " data-aos="fade-up">

        <div className="px-10 flex flex-col gap-10 py-10 xl:flex-row xl:flex-wrap  bg-white border-2 rounded-lg shadow-md">

          <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">

            <Prosjekter
              title="Tamagotchi"
              backgroundImg={web1}
              projectUrl="https://tamagotchi-pi.vercel.app"
              build="Next.js/Three.js"
              objectFit='cover'
            />
          </div>
          <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">

          <Prosjekter
              title="IATL Website"
              backgroundImg={web2}
              projectUrl="https://warwick.ac.uk/fac/cross_fac/iatl/"
              build="HTML/CSS/Javascript"
              objectFit='cover'
            />
          </div>

          <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">

          <Prosjekter
              title="Property Finder"
              backgroundImg={web3}
              projectUrl="https://codaclef.com"
              build="HTML/CSS"
              objectFit='cover'
            />
          </div>

          <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">
          <Prosjekter
              title="Digital Literacy"
              backgroundImg={web4}
              projectUrl="https://warwick.ac.uk/study/cll/yourwarwick/whatcanadegreedoforme/digital"
              build="HTML/CSS"
              objectFit='cover'
            />
          </div>

          <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">
          <Prosjekter
              title="WorldCUR"
              backgroundImg={web5}
              projectUrl="https://warwick.ac.uk/fac/cross_fac/iatl/student-research/bcur_worldcur_2023/"
              build="HTML/CSS"
              objectFit='cover'
            />
          </div>

          <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">
          <Prosjekter
              title="Jordnært (under utvikling)"
              backgroundImg={web6}
              projectUrl="https://jordnaert.no"
              build="Next.js"
              objectFit='cover'
            />
          </div>


        </div>
      </div></div>
  )
}

export default Nettdisplay