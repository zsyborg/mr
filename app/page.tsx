'use client'
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {

  const[isAbout, setisAbout] = useState(false)
  
  const toggleAbout = () => {
    setisAbout(!isAbout);
    console.log('toggled')
  }

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };


  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 min-h-screen  font-[family-name:var(--font-bodoni-moda)]">
        <div className="justify-center items-center grid abt">
          <p className="p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>Brands</p>
        </div>
        <div className="justify-center items-center grid brand">
          <p className="p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>Products</p>
        </div>
        <div className="justify-center items-center grid relative videocontainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/globe.mp4"
          />
          <p className="p-2 text-white boxline z-10" style={{backgroundColor:"var(--navy)"}}>Services</p>
        </div>
        <div className="justify-center items-center grid serv" onClick={toggleAbout}>
          <p className=" p-2 text-white boxline" style={{backgroundColor:"var(--navy)"}}>About Us</p>
        </div>
    </div>

    <div className="min-h-screen min-w-screen grid items-center justify-center lg:hidden xl:hidden absolute top-0 left-0 z-10 ">
      <Image
        src="/logo.png"
          alt="MR Intl Logo"
        width={222}
        height={100}
      />
    </div>
    <div className={isAbout ? ' min-h-screen min-w-screen absolute top-0 left-0 z-10 bg-amber-700 font-[family-name:var(--font-bodoni-moda)]' : 'hidden'}>
      <div className="min-h-screen justify-center items-center grid content-center ">
        <a className="absolute top-0 right-0 z-10" onClick={toggleAbout} href="#">

      <h2 className="text-white text-4xl cursor-pointer font-light text-right  font-[family-name:var(--font-geist-sans)]">X</h2>
        </a>

          <Image
            src="/logo.png"
            alt="MR Intl Logo"
            width={200}
            height={100}
            className="justify-center text-center"
            />
          <h2 className="p-8 text-justify content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</h2>


      </div>
    </div>

    </>
  );
}
