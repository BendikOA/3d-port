import React from 'react'
import { FaSoundcloud, FaSpotify, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    
  <div className='absolute bottom-0 left-0 w-screen overflow-x-hidden	'>
      <div className="text-5xl  flex justify-center gap-5 md:gap-12 py-5  text-gray-600 ">
      <a href="https://open.spotify.com/artist/7iHVfd0HAA1CxplQrZcPjt" target="_blank"><FaSpotify /></a>

      <a href="https://www.youtube.com/channel/UCXgQ1yEpiMfV-rKAuiAP6gg" target="_blank"><FaYoutube /></a>
      <a href="https://soundcloud.com/codaclef/popular-tracks" target="_blank"><FaSoundcloud /></a>


      <a href="https://www.instagram.com/codaclefmusic/" target="_blank"><FaInstagram /></a>

      <a href="https://www.tiktok.com/@codaclef" target="_blank"><FaTiktok /></a>


    </div> 
  </div>
    );
};

export default Footer