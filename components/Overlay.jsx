import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { FaSoundcloud, FaSpotify, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";


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
    setOpacitySecondSection(scroll.curve(1 / 25, 1 / 6));
    setOpacityThirdSection(scroll.range(2 / 20, 1 / 3));

  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Bendik Ødven Andersen
          </h1>
          <p className="text-blue-800 ">Webutvikling/3D Design/Audio </p>
          
          <p className="mt-3">Hei og velkommen til min portefølje! Jeg er en front-end webutvikler med erfaring innen 3D og lyd. Gjennom årene har jeg utviklet en lidenskap for å skape brukervennlige og estetisk tiltalende nettsteder som gir en unik opplevelse for brukerene. </p>

          <p className="animate-bounce mt-6 text-md font-semibold">↓  Scroll gjerne videre ↓ </p>
        </Section>
        <Section opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Webdesign
          </h1>
          <p className="mt-3">Hei og velkommen til min portefølje! Jeg er en front-end webutvikler med erfaring innen 3D og lyd. Gjennom årene har jeg utviklet en lidenskap for å skape brukervennlige og estetisk tiltalende nettsteder som gir en unik opplevelse for brukerene. </p>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityThirdSection}>
        <h1 className="font-semibold font-serif text-2xl">
            Webdesign
          </h1>
          <p className="mt-3">Hei og velkommen til min portefølje! Jeg er en front-end webutvikler med erfaring innen 3D og lyd. Gjennom årene har jeg utviklet en lidenskap for å skape brukervennlige og estetisk tiltalende nettsteder som gir en unik opplevelse for brukerene. </p>
        </Section>
        
      </div>
      
    </Scroll>
    
    
  );
};
