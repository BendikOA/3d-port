import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import web1 from '../public/web1.gif'
import web4 from '../public/web4.gif'
import web8 from '../public/web8.gif'
import web6 from '../public/web6.gif'
import web5 from '../public/web5.gif'
import web7 from '../public/web7.gif'

const Nettdisplay = () => {
  return (

      <main className='flex justify-center items-center h-100 mx-0 pt-2'>


      <section className="px-10 md:px-20 lg:px-40 ">
        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:pl-12 lg:flex-wrap">
        <div className="basis-1/4 flex-1 object-cover hover:scale-110 duration-200">
          <a href="https://tamagotchi-781gphu17-bendikoa.vercel.app" target="blank"> <Image className="rounded-md shadow-lg shadow-slate-400 hover:scale-105" src={web8} width={"100%"} /></a>
          </div>
          <div className="basis-1/4 flex-1 object-cover hover:scale-110 duration-200">
            <a href="https://warwick.ac.uk/study/cll/yourwarwick/whatcanadegreedoforme/digital" target="blank"><Image className="rounded-md shadow-lg shadow-slate-400" src={web1} width={"100%"} /></a>
          </div>
          <div className="basis-1/4 flex-1 object-cover hover:scale-110 duration-200">
          <a href="https://codaclef.com" target="blank"><Image className="rounded-md shadow-lg shadow-slate-400" src={web7} width={"100%"} /></a>
          </div>
          <div className="basis-1/4 flex-1 object-cover hover:scale-110 duration-200">
           <a href="https://warwick.ac.uk/fac/cross_fac/iatl/" target="blank"><Image className="rounded-md shadow-lg shadow-slate-400" src={web4} width={"100%"} /></a> 
          </div>
   
          <div className="basis-1/4 flex-1 object-cover hover:scale-110 duration-200">
          <a href="https://warwick.ac.uk/fac/cross_fac/iatl/study/iatlugmodules/" target="blank"> <Image className="rounded-md shadow-lg shadow-slate-400" src={web5} width={"100%"} /></a>
          </div>
          <div className="basis-1/4 flex-1 object-cover hover:scale-110 duration-200">
          <a href="https://warwick.ac.uk/fac/cross_fac/iatl/student-research/bcur_worldcur_2023/" target="blank"> <Image className="rounded-md shadow-lg shadow-slate-400" src={web6} width={"100%"} /></a>
          </div>
        </div>
      </section>
      </main>
     )
}

export default Nettdisplay