import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
function Home() {

  return (
      <div className="bg-orange-100  ">
      <header className='flex-col' >
        <div className="bg-[url('./assets/p3.jpg')] h-[400px] bg-cover flex justify-evenly items-center mb-4 shadow-2xl">
          <div class="name-bar">
            <h1 class="text-3xl font-bold">Abhed Ramani Urjasrot Solutions</h1>
            <p class="text-xl font-semibold">"Bringing Sunshine in your life"</p>
          </div>
        </div>
        <Navbar/>

        <div class="about-us">
          <h2>Introduction</h2>
          <p>
            At <strong>[ARUS Solar Solution]</strong>, we specialize in providing cutting-edge solar energy
            solutions tailored to meet
            your needs. <br />
            Whether you're looking to reduce your energy costs, lessen your environmental impact, or make your
            property more energy-efficient, we've got you covered. <br />
            Our team of expert technicians is committed to delivering the highest-quality solar panel installations
            with unbeatable customer services."
          </p>
        </div>

      </header>

    </div>
  )
}

export default Home