import React from 'react'
import Image from 'next/image';
import w2 from '../public/w2.webp';
import p4 from '../public/p4.webp';
import p5 from '../public/p5.webp';
import vert4 from '../public/vert4.webp';
import Link from 'next/link';
import Prosjekter from './Prosjekter';

const Nettdisplay = () => {
  return (
    <div className="py-10 pb-20 md:px-20 lg:px-40 bg-fixed bg-center bg-cover bg-[url(../public/ab2.webp)]" >
        <div className="md:px-20 lg:px-40 text-center p-10"  data-aos="fade-up">  

        <div className="px-10 flex flex-col gap-10 py-10 xl:flex-row xl:flex-wrap  bg-white border-2 shadow-md">

        <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">

          <Prosjekter 
          title="Property Finder" 
          backgroundImg={w2} 
          projectUrl="/property" 
          objectFit='cover'
          />
          </div>
          <div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">

<Prosjekter 
title="Property Finder" 
backgroundImg={w2} 
projectUrl="/property" 
objectFit='cover'
/>
</div>

<div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">

<Prosjekter 
title="Property Finder" 
backgroundImg={w2} 
projectUrl="/property" 
objectFit='cover'
/>
</div>

<div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">
<Prosjekter 
title="Property Finder" 
backgroundImg={w2} 
projectUrl="/property" 
objectFit='cover'
/>
</div>

<div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">
<Prosjekter 
title="Property Finder" 
backgroundImg={w2} 
projectUrl="/property" 
objectFit='cover'
/>
</div>

<div className="basis-1/3 flex-1 object-cover" data-aos="fade-up">
<Prosjekter 
title="Property Finder" 
backgroundImg={w2} 
projectUrl="/property" 
objectFit='cover'
/>
</div>


        </div>
    </div>
    </div>
  )
}

export default Nettdisplay