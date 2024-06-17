"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { animate, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeaderCardProps {
  img: StaticImageData;
  tilte: number | undefined;
}

function HeaderCardSlider({ img, tilte }: HeaderCardProps) {
  return (
    <div className="min-w-full h-[500px] max-md:h-[300px] relative">
      <div className="bg-black/30 absolute inset-y-0 left-0 z-10 w-[90%]  right-0 mx-auto" />
      <Image src={img} alt="card" className="w-[90%] max-md:h-[300px]  mx-auto relative" />

      {tilte === 1 ? (
        <div>
          <div className="absolute inset-0">
            <motion.h1
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              animate={{ y: [60, 0], opacity: 1 }}
              className="text-orange-500 md:text-7xl font-bold font-Acme md:ml-52 ml-12 mt-12"
            >
              Quiero <br />
              <span className="text-black md:text-5xl">Puedo</span>
              <br />
              <span className="text-white md:text-4xl"> Y Me lo Merezco!</span>
            </motion.h1>
          </div>
          <div className="absolute inset-0">
            <h1 className=" md:text-5xl font-bold font-Flower text-end md:mr-32 mt-12 mr-12">
              Somos La <span className="text-orange-500">LLave</span> Al <br />
              <span className="text-orange-500"> Hogar </span>Que Buscas!
            </h1>
            <div className=" mt-4 bg-orange-500 p-2 text-center max-md:mx-auto max-md:mt-28 w-[300px] text-xl text-white font-bold font-Acme md:ml-[63rem]">
              Quiero Comprar Una Propiedad
            </div>
            <div className="flex items-center justify-end max-md:hidden mr-64 gap-2">
              <Image src={"/logo.png"} alt="logo" width={50} height={50} />
              <h1 className="text-black uppercase font-bold font-Acme text-sm">
                Ing<span className="text-orange-400">3D</span>reco
              </h1>
            </div>
          </div>
        </div>
      ) : tilte === 2 ? (
        <div>
          <div className="absolute inset-0">
            <motion.h1
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              animate={{ opacity: 1, x: [-60, 0] }}
              className="text-orange-500 md:text-7xl font-bold font-Acme md:ml-64 mt-4 ml-20"
            >
              SORTEOS
            </motion.h1>
          </div>
          <div className="absolute inset-0">
            <motion.h1
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              animate={{ opacity: 1, x: [60, 0] }}
              className=" md:text-5xl font-bold font-Flower text-end md:mr-32 mt-12  mr-12"
            >
              ¿Te Imaginas Ganar <br /> La Propiedad de tus <br /> sueños?
            </motion.h1>
            <p className="absolute right-0 max-md:left-0 max-md:mt-6 md:mr-32 text-center text-sm md:text-xl">
              <span className="text-orange-500 font-Acme md:text-2xl">
                Participa y hazlo realidad!
              </span>{" "}
              <br />
              Casas, lotes y mas te esperan. Descrubren <br />
              como una propiedad puede ser tuya
            </p>
            <div>
              <div className="grid place-items-center md:mt-32 mt-24 relative z-10">
                <Button className="bg-orange-500 hover:bg-orange-800  max-md:text-xs">
                  Ver Sorteos
                </Button>
              </div>
              <div className="flex items-center justify-center mt-5 gap-2 max-md:hidden">
                <Image src={"/logo.png"} alt="logo" width={50} height={50} />
                <h1 className="text-black uppercase font-bold font-Acme text-sm">
                  Ing<span className="text-orange-400">3D</span>reco
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : tilte === 3 ? (
        <div>
          <div className="absolute inset-0">
            <h1 className="text-black md:text-7xl font-bold font-Acme text-center mt-4">
              No solo es una <span className="text-orange-500"> Casa</span>, es
              tu futuro!
            </h1>
          </div>
          <div className="absolute inset-0">
            <h1 className=" md:text-3xl  font-Flower  md:ml-32 md:mt-32 mt-12 ml-12">
              Tu familia merece <br /> lo mejor. <br />
              <br />
              Encurntra el hogar <br /> donde crecerán <br />juntos.
            </h1>
            <div>
              <div className="flex items-center justify-end mr-48 gap-2 max-md:hidden">
                <Image src={"/logo.png"} alt="logo" width={50} height={50} />
                <h1 className="text-black uppercase font-bold font-Acme text-sm">
                  Ing<span className="text-orange-400">3D</span>reco
                </h1>
              </div>
            </div>
            <p className="absolute right-0 max-md:left-0 max-md:w-[300px] max-md:mx-auto md:mr-48 mt-4 text-center font-Acme bg-orange-600 text-white p-2">
              Haszlo realidad HOY!
          
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HeaderCardSlider;
