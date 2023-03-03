import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl, ScrollControls, Scroll, useScroll, Html, useProgress } from "@react-three/drei";

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();

  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
      <Image position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
      <Image position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page position={[-width * 1, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 0, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 1, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 2, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 3, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />

      <Page position={[width * 4, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 5, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 6, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 7, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
      <Page position={[width * 8, 0, 0]} urls={["ab2.webp", "/w1.webp", "/w2.webp"]} />
    </>
  );
}

function Loader() {
  const progress = useProgress(state => state.progress)
  if (progress !== 100) {
    return (
      <Html center wrapperClass="loader-div">
        {progress.toFixed()}% loaded
      </Html>
    );
  }

  return null
}


const Gallery = () => {
  return (
    <div  className="h-screen bg-gradient-to-t from-[#4E6FA2] to-[#D8E3F2]">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Loader />
        <Suspense fallback={null}>
          <ScrollControls infinite horizontal damping={1} pages={6} distance={1}>
            <Scroll>
              <Pages />
            </Scroll>
            <Scroll html>
              {/* <h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "525vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "625vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "725vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "825vw" }}></h1> */}
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Gallery