import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";


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
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white lg:bg-transparent rounded-lg px-8 py-12">
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
    setOpacityThirdSection(scroll.range(2 / 20, 1 / 3));

  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-sans text-xl">
            Bendik Ødven Andersen
          </h1>
          <p className="text-blue-800">Webutvikling/3D Design/Audio </p>
          
          <p className="mt-3">Hei og velkommen til min portefølje! Jeg er en front-end webutvikler med erfaring innen 3D og lyd. Gjennom årene har jeg utviklet en lidenskap for å skape brukervennlige og estetisk tiltalende nettsteder som gir en unik opplevelse for brukerene. </p>

          <p className="animate-bounce mt-6 text-md font-semibold">↓  Scroll gjerne videre ↓ </p>
        </Section>
        <Section opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Webutvikling
          </h1>
          <p className="mt-3">Jeg har jobbet profesjonelt med webutvikling de siste 4 årene både i fast jobb og frilans. </p>
          <p className="pt-2">   <i >Her er noen teknologier jeg er veldig komfortabel i:</i></p>
            <ul className="list-disc mt-4 pl-4">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Vite.js</li>
              <li>Vue.js</li>
              <li>Tailwind</li>
              <li>API/REST API</li>
              <li>Three.js/Drei/Fiber</li>
            </ul>
        <p className="animate-bounce mt-6 text-md font-semibold">↓  Scroll videre ↓ </p>
        </Section>
        <Section opacity={opacityThirdSection}>
        <h1 className="font-semibold font-serif text-2xl">
            3D og audio-design
          </h1>
          <p className="mt-3">Jeg har drevet med 3D og audio-design i 10 år. Dette er jeg glad i å kombinere med nettutvikling for å skape en helhetlig brukeropplevelse med blant annet spesialtilpassede ikoner, 3D modeller, grafisk design, lydeffekter og produkt-display. Modellen du ser på denne siden er for eksempel skapt i Blender med innbakt lys fra Cycles render engine. </p>
          <div className='absolute bottom-0 left-0 w-screen overflow-x-hidden	'>
      <div className="text-5xl  flex justify-center gap-5 md:gap-12 py-5  text-gray-600 mb-5">
      <a href="mailto:bendik940@gmail.com" target="_blank"><FaEnvelope /></a>

      <a href="https://www.linkedin.com/in/bendik-andersen" target="_blank"><FaLinkedin /></a>



    </div> 
  </div>

        </Section>
        
      </div>
      
    </Scroll>
    
    
  );
};
