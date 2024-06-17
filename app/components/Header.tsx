"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import {motion} from "framer-motion"

function Header() {
  const pathname = usePathname();
  const navbar = [
    { title: "Inicio", href: "/" },
    { title: "Nosotros", href: "/nosotros" },
    { title: "Propiedades", href: "/propiedades" },
    { title: "Sorteos", href: "/sorteos" },
    { title: "Contacto", href: "/contacto" },
  ];

  return (
    <div className="w-[90%] mx-auto py-4">
      <div className="flex items-center justify-between max-md:justify-center">
        <div className="flex items-center gap-12 ">
          <div className="flex items-center gap-4 ">
            <Image src={"/logo.png"} alt="logo" width={100} height={100} />
            <h1 className="text-white uppercase font-bold text-xl max-md:text-3xl">
              Ing<span className="text-orange-400">3D</span>reco
            </h1>
          </div>
          <div className="max-md:hidden">
            <ul className="text-white flex gap-6 ">
              {navbar.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    whileHover={{scale:1.1}}
                    className={`relative hover:text-orange-400 ${
                      isActive &&
                      "before:absolute before:left-0 before:right-0 before:top-6 before:rounded-full before:h-1 before:bottom-0 before:bg-orange-500"
                    }`}
                    key={index}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex text-white text-2xl gap-6 max-md:hidden">
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
    </div>
  );
}

export default Header;
