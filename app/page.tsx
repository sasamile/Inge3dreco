"use client";
import React from "react";
import Header from "./components/Header";
import Carousel from "./components/carousel";
import { SliderInfo } from "./constants";
import HeaderCardSlider from "./components/HeaderCardSlider";
import Image from "next/image";
import { motion, transform } from "framer-motion";
import { Taladro1 } from "@/public/assets";
import { Button } from "@/components/ui/button";
import { BrickWall, Home, Landmark, Mail, Phone } from "lucide-react";
import { TbPuzzle2 } from "react-icons/tb";
import VideoPlayer from "./components/VideoPlayer";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function page() {
  return (
    <div className="bg-black/90 h-full">
      <Header />
      <div className="flex items-center justify-center text-center">
        <h1 className="text-5xl text-white font-bold py-28">
          Construyendo Puentes Entre <br />{" "}
          <span className="text-orange-400">Sueños Y Realidad</span>
        </h1>
      </div>
      <div className="relative isolate ">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl "
        >
          <div className="relative mx-auto aspect-[700/600] rounded-full w-[35rem]  bg-orange-500 opacity-30 " />
        </div>
      </div>
      {/**CArousel Img */}
      <Carousel
        slidesLenght={SliderInfo.length}
        autoSlide
        isButtonB={true}
        isbutton={true}
      >
        {SliderInfo.map(({ img, tilte }) => (
          <HeaderCardSlider img={img} tilte={tilte} />
        ))}
      </Carousel>
      {/**Servicios */}
      <div className="flex mt-20 w-[80%] mx-auto items-center gap-16 text-white/70 max-md:flex-col">
        <div className="max-md:hidden">
          <Image
            src={Taladro1}
            alt="persona"
            className="w-[2000px] rounded-2xl"
          />
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 ">
            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            <h1 className="text-white uppercase font-bold text-sm">
              Ing<span className="text-orange-400">3D</span>reco
            </h1>
          </div>
          <h1 className="text-5xl text-white font-bold text-center pt-8">
            Servicios
          </h1>
          <p className="py-4  text-xl text-center">
            Ofrecemos una amplia gama de servicios en el sector de bienes raíces
            y la construcción, nos enfocamos en el desarrollo de proyectos
            inmobiliarios, remodelaciones, compra y venta de propiedades
            inmobiliarias y más.
          </p>
          <div className="grid place-items-center mt-4">
            <Button className="bg-orange-400 hover:bg-orange-800 ">
              Mas Información
            </Button>
          </div>
        </div>
      </div>
        <div className="md:hidden">
          <Image
            src={Taladro1}
            alt="persona"
            className="w-[90%] mt-12 mx-auto rounded-2xl"
          />
        </div>
      {/**Experiencias */}
      <motion.div whileInView={{ x: [100, 0] }} transition={{ duration: 3 }}>
        <div className="text-black flex justify-center items-center gap-32 mt-12 max-md:hidden">
          <div className="flex flex-col justify-center items-center gap-4 bg-white  p-4 rounded-2xl shadow-md shadow-orange-400">
            <Home className="w-12 h-12" />
            <h1 className=" text-black font-bold">Experiencia y Compromiso</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-white  p-4 rounded-2xl shadow-md shadow-orange-400">
            <TbPuzzle2 className="w-12 h-12" />
            <h1 className=" text-black font-bold">Equipo Expert</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-white  p-4 rounded-2xl shadow-md shadow-orange-400">
            <BrickWall className="w-12 h-12" />
            <h1 className=" text-black font-bold">Enforque Ecologico</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-white  p-4 rounded-2xl shadow-md shadow-orange-400">
            <Landmark className="w-12 h-12" />
            <h1 className=" text-black font-bold">
              Innovacion y Sostenibilidad
            </h1>
          </div>
        </div>
      </motion.div>
      {/**Enfoque */}
      <div className="flex mt-20 w-[80%] mx-auto items-center gap-16 text-white/70 max-md:flex-col">
        <div>
          <div className="flex items-center justify-center gap-2">
            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            <h1 className="text-white uppercase font-bold text-sm">
              Ing<span className="text-orange-400">3D</span>reco
            </h1>
          </div>
          <h1 className="text-5xl text-white font-bold text-center pt-8">
            Enfoque
          </h1>
          <p className="py-4 w-[90%] mx-auto text-center text-xl">
            En ING3DRECO S.A.S, nos comprometemos a brindar soluciones
            integrales en bienes raíces, adaptadas a las necesidades de nuestros
            clientes. Nuestro enfoque innovador y sostenible nos permite liderar
            la transformación del sector hacia un futuro próspero y sostenible.
          </p>
          <div className="grid place-items-center mt-4">
            <Button className="bg-orange-400 hover:bg-orange-800 ">
              Mas Información
            </Button>
          </div>
        </div>
        <Image
          src={"/Enfoque.png"}
          alt="persona"
          className="w-[600px] h-[600px] rounded-2xl"
          width={500}
          height={500}
        />
      </div>

      {/**Videos */}
      <div className="mt-12">
        <h2 className="font-bold md:text-4xl text-3xl text-white text-center py-8">
          Nuestras Propiedades
        </h2>
        {/**videos */}
        <div className="flex justify-center items-center gap-12 max-md:flex-col max-md:w-[90%] max-md:mx-auto ">
          <div>
            <div>
              <p className="text-white text-xl ">
                Casa Urbanizacion 15 De Junio
              </p>
              <VideoPlayer src="/video1.mp4" />
            </div>
          </div>
          <div>
            <p className="text-white text-xl ">Lote La Floresta</p>
            <VideoPlayer src="/video3.mp4" />
          </div>
        </div>
        <div className="grid place-items-center mt-4">
          <Button className="bg-orange-400 hover:bg-orange-800 ">
            Mas Información
          </Button>
        </div>
      </div>

      {/**Footer */}
      <div className=" text-white bg-orange-600/30 py-4 mt-20 text-sm">
        <div className="flex items-center justify-center gap-2">
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
          <h1 className="text-white uppercase font-bold text-sm">
            Ing<span className="text-orange-400">3D</span>reco
          </h1>
        </div>
        <div className="flex justify-around items-start py-7 max-md:flex-col max-md:items-center max-md:justify-start max-md:gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <Home />
              <p>
                CL 11 A 3 A 56 Brr Divino Niño <br />
                <span>CARTAGENA DEL CHAIRA-CAQUETA</span>
              </p>
            </div>
            <div className="flex text-white text-2xl gap-6 max-md:hidden"  >
              <Link href={""}>
                <FaFacebook />
              </Link>
              <Link href={""}>
                <BsInstagram />
              </Link>
              <Link href={""}>
                <FaWhatsapp />
              </Link>
              <Link href={""}>
                <FaTiktok />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Mail />
            <p>ing3dreco@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <Phone />
            <p>+57-3227590147</p>
          </div>
        </div>
        <p className="text-center">© 2024 - ING3DRECO S.A.S</p>
      </div>
    </div>
  );
}

export default page;
