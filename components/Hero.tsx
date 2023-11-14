"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Los Zorros de Tortuguitas
        </h1>
        <p className="hero__subtitle">
          Equipo amateur de futbol
        </p>
        <CustomButton 
          title="Ver estadisticas"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/tomascatalan.jpg" alt="Nombre de Jugador" fill className="object-contain"/>
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero