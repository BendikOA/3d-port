import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import benne from '../public/b_andersen.jpg';
import Image from "next/image";



const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="lg:w-1/2 flex items-center justify-center lg:ml-6">
        <div className="max-w-full md:mx-[133px] w-full">         
        <div>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);


  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 6, 1 / 2));
    setOpacityThirdSection(scroll.range(2 / 20, 3 / 3));

  });

  return (
    
    <Scroll html>
      <div class="w-screen">
            
      

        <Section opacity={opacityFirstSection}>      
        <div className="">
            <Image className=" rounded-full w-[64px] h-[64px] flex float-left mr-4" src={benne}/>
            <h1 className="font-semibold font-gameboy text-[20px] text-[#15346F] pt-4">
               Bendik
             </h1>
            </div>
        <div className="bg-[#e4e4e4] lg:bg-[#e4e4e4] rounded-lg px-8 py-12 border-l-2 shadow-md border-[#B4C6E140]">
          <h2 className="font-gameboy text-[21px] text-[#052564]">Front-end utvikler - <br /> med erfaring innen 3D og lyd</h2>
          
          <p className="mt-3 max-w-[434px] font-gameboy">Gjennom årene har jeg utviklet en lidenskap for å skape brukervennlige og estetisk tiltalende nettsteder som gir en unik opplevelse for brukerene.  </p>

          <p className="animate-bounce mt-6 text-md font-semibold">↓  Scroll gjerne videre ↓ </p></div>
        </Section>
        <Section opacity={opacitySecondSection}>
        <div className="bg-[#e4e4e4] lg:bg-[#e4e4e4] rounded-lg px-8 py-12 border-l-2 shadow-md border-[#B4C6E140]">

        <h2 className="font-gameboy text-[21px] text-[#052564]">
            Webutvikling
          </h2>
          <p className="mt-3 max-w-[434px] font-gameboy">Jeg har jobbet profesjonelt med webutvikling de siste 4 årene både i fast jobb og frilans. </p>     
          </div>        

        <p className="mt-3 max-w-[434px] font-gameboy pl-2 mb-2">Her er noen teknologier jeg er veldig komfortabel med:</p>     
        <div class="grid grid-cols-2 grid-rows-6 gap-4">
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">React.js</div>
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">Next.js</div>
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">Vite.js</div>
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">Vue.js</div>
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">Tailwind</div>
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">API/REST API</div>
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">Three.js</div>
  <div class="bg-[#e4e4e440] rounded-lg border-l-2 shadow-md border-[#B4C6E140] flex text-center justify-center items-center font-gameboy text-[18px] text-[#173D86] p-4">Drei/Fiber</div>

</div> 
 <p className="animate-bounce mt-[-140px] text-md font-semibold">↓  Scroll videre ↓ </p>

      
        </Section>
        
        <Section opacity={opacityThirdSection}>
        <div className="bg-[#e4e4e4] lg:bg-[#e4e4e4] rounded-lg px-8 py-12 border-l-2 shadow-md border-[#B4C6E140]">

<h2 className="font-gameboy text-[21px] text-[#052564]">
3D og audio-design
  </h2>
  <p className="mt-3 max-w-[434px] font-gameboy">
Jeg har drevet med 3D og audio-design i 10 år. Dette er jeg glad i å kombinere med nettutvikling for å skape en helhetlig brukeropplevelse med blant annet spesialtilpassede ikoner, 3D modeller, grafisk design, lydeffekter og produkt-display. Modellen du ser på denne siden er for eksempel skapt i Blender med innbakt lys fra Cycles render engine. </p>     </div>    
          <div className='absolute bottom-0 left-0 w-screen overflow-x-hidden	'>
      <div className="text-5xl  flex justify-center gap-5 md:gap-12 py-5  text-[#D3DEEF] mb-5">
      <a href="mailto:bendik940@gmail.com" target="_blank"><FaEnvelope /></a>

      <a href="https://www.linkedin.com/in/bendik-andersen" target="_blank"><FaLinkedin /></a>



    </div> 
  </div>

        </Section>
        
      </div>
      <div className='absolute bottom-0 left-0 w-screen overflow-x-hidden	'>
    <p className='text-[16px] text-[#D3DEEF] ml-[200px] mb-[40px]'>
    Webutvikling/3D Design/Audio

    </p>


    </div> 
    </Scroll>
    
    
  );
};
