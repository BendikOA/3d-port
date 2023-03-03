import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Nettdisplay from '@/components/Nettdisplay'
import Navbar_sub from '@/components/Navbar_sub'



export default function Home() {
  return (
    <>
      <Head>
      <title>Bendik Odven Andersen</title>
        <meta name="description" content="B.O.A Webdev og Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar_sub />
      <Nettdisplay />
    </>
  )
}
