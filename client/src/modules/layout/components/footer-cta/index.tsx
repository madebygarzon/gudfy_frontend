"use client"
import { useCollections } from "medusa-react"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import BotonWhatsApp from "@modules/common/components/whatsapp"
import Link from "next/link"
import Image from "next/image"

const FooterCTA = () => {
  const { collections } = useCollections()
  return (
    <div className="bg-blue-gf text-white content-container flex flex-col gap-y-8 pt-[50px] pb-8">
      <div className="footer-menu">
        <div className="block">
          <div>
            <Link href="/">
              <Image
                className="ml-auto mr-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                alt="gudfy"
                src="/footer/gudfy_logo_2.svg"
                width={251.76}
                height={81.63}
              />
            </Link>
          </div>
          <div className="text-[#C7C7C7] font-[300] text-sm/[14px] grid grid-cols-1 gap-y-4">
            <p className="ml-auto mr-auto mt-10 mb-16">
              Copyright © 2023 | Powered by Gudfy
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-10">
          <div className="flex flex-col gap-y-7">
            <span className="text-[#FFFFFF] font-[500] text-[14px]">
              Sobre Gudfy
            </span>
            <ul className="text-[#C7C7C7] font-[300] text-sm/[14px] grid grid-cols-1 gap-y-4">
              <li>
                <a
                  href="https://gudfy.com/sobre-nosotros/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="https://gudfy.com/contacto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-7">
            <span className="text-[#FFFFFF] font-[500] text-[14px]">Ayuda</span>
            <ul className="text-[#C7C7C7] font-[300] text-sm/[14px] grid grid-cols-1 gap-y-4">
              <li>
                <a
                  href="https://gudfy.com/preguntas-frecuentes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  ¿Cómo comprar?
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  Sobre nuestra Wallet
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-7">
            <span className="text-[#FFFFFF] font-[500] text-[14px]">
              Comunidad
            </span>
            <ul className="text-[#C7C7C7] font-[300] text-sm/[14px] grid grid-cols-1 gap-y-4">
              <li>
                <a
                  href="https://gudfy.com/blog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://gudfy.com/crear-un-ticket/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Crear un ticket
                </a>
              </li>
              <li>
                <a
                  href="https://gudfy.com/sorteos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sorteos
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-7">
            <span className="text-[#FFFFFF] font-[500] text-[14px]">
              Síguenos en Redes
            </span>
            <div className="flex justify-between w-28">
              <Link
                href="https://www.facebook.com/profile.php?id=100087656820749"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="ml-auto mr-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  alt="gudfy"
                  src="/social/icon_facebook.svg"
                  width={30}
                  height={30}
                />
              </Link>

              <Link
                href="https://instagram.com/gudfycom?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="ml-auto mr-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  alt="gudfy"
                  src="/social/icon_instagram.svg"
                  width={30}
                  height={30}
                />
              </Link>

              <Link
                href="https://www.youtube.com/@Gudfydotcom/featured?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="ml-auto mr-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  alt="gudfy"
                  src="/social/icon_youtube.svg"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
        <BotonWhatsApp />
      </div>
    </div>
  )
}

export default FooterCTA
