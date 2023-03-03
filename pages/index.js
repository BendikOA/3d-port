import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';
import Navbar_sub from '@/components/Navbar_sub'
import { motion as m } from "framer-motion";
import { useFrame } from '@react-three/fiber';



export default function Home() {
  return (
    <>
      <Head>
        <title>Bendik Odven Andersen</title>
        <meta name="description" content="B.O.A Webdev og Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="root">
      <Navbar_sub />
      <Canvas camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3] , }}
        controls={false} >
      <Experience />
      </Canvas>
      <Footer />
      </div>
    </>
  )
}
