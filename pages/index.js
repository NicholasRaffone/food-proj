import Head from 'next/head'
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useMapContext } from '../context/mapContext';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="w-screen relative">
        <div className="h-screen relative bg-black">
          <img className="w-full h-full object-cover object-cover opacity-70" alt="restaurant img" src="https://cdn.vox-cdn.com/thumbor/CE4w2i6O6ityC7IRDcKxaksGL7o=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/66901034/Jerk_Chicken_139_LP.0.jpg"/>
          <div className="absolute bottom-[5%] py-5 px-4">
            <p className="text-4xl text-white font-bold px-1" data-aos="fade-up">Peppa’s</p>
            <p className="text-xl text-white my-3 px-1" data-aos="fade-up" data-aos-delay="200"> Unfussy counter-service operation turning out jerk chicken & other traditional Jamaican eats. </p>
            <Link href="/restaurant/ChIJlzOELhVbwokRS2DEZPC635M" className="group flex border-white border-2 justify-center items-center w-fit cursor-pointer rounded-xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <p className="text-xl text-white px-4 py-1 font-bold">VISIT</p>
              <div className='group-hover:translate-y-0 translate-y-[100%] duration-300 absolute top-0 left-0 w-full h-full bg-white'>
                <p className="text-xl text-black  px-4 py-1 font-bold">VISIT</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-screen relative bg-black">
          <img className="w-full h-full object-cover opacity-70" alt="restaurant img" src="https://www.travelandleisure.com/thmb/JIxnDP8_g6rnEK0OEkApyY19JCU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chef-shenarri-cadence-NYCBLKOWN0521-3f04fd8445ce4e92849bdd29097a2c50.jpg"/>
          <div className="absolute bottom-[5%] py-5 px-4">
            <p className="text-4xl text-white font-bold px-1" data-aos="fade-up">Cadence</p>
            <p className="text-xl text-white my-3 px-1" data-aos="fade-up" data-aos-delay="200">Plant-based Southern Food and a Black-owned Wine List in NYC</p>
            <Link href="/restaurant/ChIJqWOfDa9ZwokR8S9r58dyv5Y" className="group flex border-white border-2 justify-center items-center w-fit cursor-pointer rounded-xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <p className="text-xl text-white px-4 py-1 font-bold">VISIT</p>
                <div className='group-hover:translate-y-0 translate-y-[100%] duration-300 absolute top-0 left-0 w-full h-full bg-white'>
                  <p className="text-xl text-black  px-4 py-1 font-bold">VISIT</p>
                </div>
            </Link>
          </div>
        </div>
        <div className="h-screen relative bg-black">
          <img className="w-full h-full object-cover opacity-70" alt="restaurant img" src="https://thegarnettereport.com/wp-content/uploads/2022/02/chocolat.jpeg"/>
          <div className="absolute bottom-[5%] py-5 px-4">
            <p className="text-4xl text-white font-bold px-1" data-aos="fade-up">Chocolat Restaurant & Bar</p>
            <p className="text-xl text-white my-3 px-1" data-aos="fade-up" data-aos-delay="200"> Casual eatery serving an American comfort food menu in a modern setting with an easygoing vibe. </p>
            <Link href="/restaurant/ChIJkbNGdhT2wokRJ1wWesV8yK0" className="group flex border-white border-2 justify-center items-center w-fit cursor-pointer rounded-xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <p className="text-xl text-white px-4 py-1 font-bold">VISIT</p>
                <div className='group-hover:translate-y-0 translate-y-[100%] duration-300 absolute top-0 left-0 w-full h-full bg-white'>
                  <p className="text-xl text-black  px-4 py-1 font-bold">VISIT</p>
                </div>
            </Link>
          </div>
        </div>
        <div className="h-16 w-screen bg-black flex justify-center items-center divide-x-2 divide-gray-200">
          <Link href="/about" className="text-gray-200 px-2 text-md cursor-pointer">About</Link>
          <Link href="/bibliography" className="text-gray-200 px-2 text-md cursor-pointer">Bibliography</Link>
        </div>
      </main>

    </div>
  )
}
