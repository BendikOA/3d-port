useGLTF.preload("./models/whjy.glb");
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Keys(props) {
  const { nodes, materials } = useGLTF("./models/whjy.glb");
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();
  const wholeRef = useRef();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Use the screen width state to set the position prop
  const position = screenWidth < 680 ? [-1.7, -1, -1.7] : [1, -1, -1.5];
  const y_ani = screenWidth < 680 ? [-2] : [-0.8];


  // ... other code


  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });


  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: y_ani
      },
      0
    );

     // Office Rotation
     tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 192, z: 0 },
      0
    );

  

    // LIBRARY FLOOR
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 1,
        y: 4,
      },
      1
    );



    // ATTIC
    tl.current.from(
      atticRef.current.position,
      {
        duration: 2,
        x: 6,
      },
      3
    );

     // Office Rotation
     tl.current.to(
      ref.current.rotation,
      { duration: 2, x: 0, y: -0.2, z: 0 },
      3
    );


  }, []);

  return (

    <group 
      {...props}
      dispose={null}
      ref={ref}
      position={position}
      rotation={[0, -Math.PI / 9, 0]}
    >
      <mesh

geometry={nodes.Room.geometry}
material={materials["1"]}
      />      <group >
        <group ref={libraryRef}>
        <mesh

geometry={nodes.Pulje1.geometry}
material={materials["2"]}
position={[0.54, 0.13, -0.59]}
scale={0.1}
      />
        </group>
      </group>
      <group >
        <group ref={atticRef}>
        <mesh
   
   geometry={nodes.Pulje3.geometry}
   material={materials["3"]}
   position={[-0.57, 0.34, 0.88]}
   rotation={[0, 0.13, 0]}
   scale={[0.16, 0.3, 0.16]}
      />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/whjy.glb");