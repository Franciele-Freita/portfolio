'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4">
      <div className="header py-8">
        <div className=" container mx-auto flex flex-row  items-center justify-between">
          <div className="flex flex-row gap-4">
            <img src="/img/logo.svg" alt="" />
            <h1 className="font-bold text-2xl leading-none">Franciele <br />Freita</h1>
          </div>
          <div className="relative inline-block text-left  xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=""
            >
              <Image src={"/img/menu.svg"} width={32} height={32} alt="logo Rodrigo Guedes" />
            </button>


            {isOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-[#1A0A3B] rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <nav>
                    <ul className="flex flex-col gap-4 text-background font-semibold">
                      <li className="hover:scale-105 transition"><a href="/#why-me" className="px-4 py-2 bg-pink  rounded-full w-full flex items-center justify-center">Porque me escolher</a></li>
                      <li className="hover:scale-105 transition"><a href="/#projects" className="px-4 py-2 bg-orange rounded-full w-full flex items-center justify-center">Meus Projetos</a></li>
                      <li className="hover:scale-105 transition"><a href="/#about-me" className="px-4 py-2 bg-blue rounded-full w-full flex items-center justify-center">Sobre Mim</a></li>
                    </ul>
                  </nav>

                </div>
              </div>
            )}
          </div>
          <nav className="hidden xl:block">
            <ul className="flex flex-row items-center gap-4 text-background font-semibold">
              <li className="hover:scale-105 transition"><a href="/#why-me" className="px-4 py-2 bg-pink  rounded-full ">Porque me escolher</a></li>
              <li className="hover:scale-105 transition"><a href="/#projects" className="px-4 py-2 bg-orange rounded-full">Meus Projetos</a></li>
              <li className="hover:scale-105 transition"><a href="/#about-me" className="px-4 py-2 bg-blue rounded-full">Sobre Mim</a></li>
            </ul>
          </nav>

        </div>
      </div>
      <div className="py-16">
        <div>
          <div className="container mx-auto text-center">
            <div className="xl:w-3/5 mx-auto flex flex-col gap-10">
              <h1 className="text-6xl font-extrabold">Criando Experiências Digitais</h1>
              <p className="text-xl text-offwhite">Transformo ideias em interfaces funcionais, modernas e responsivas. Com foco em desempenho, design e usabilidade, desenvolvo soluções web que conectam marcas e pessoas de forma intuitiva e eficiente.</p>
              <a href="" className="w-fit mx-auto px-4 py-2 bg-orange rounded-full text-background font-semibold hover:scale-105 transition">Desenvolva sua página comigo</a>
            </div>
          </div>
        </div>
        <div className="mt-16 xl:py-16">
          <div className="container mx-auto flex flex-col items-center justify-center bg-[url('/img/banner-img.png')] bg-cover bg-center text-center p-16 rounded-lg">
            <h1 className="text-6xl font-extrabold xl:w-1/2  text-shadow-background">Transforme suas ideias em soluções digitais inovadoras!</h1>
          </div>
        </div>
      </div>
      <div id="why-me" className="container mx-auto py-8 xl:py-16">
        <h2 className="text-4xl font-semibold mb-8">Porque me escolher?</h2>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="">
            <img className="mb-2 w-10" src="/img/speedometer-outline.svg" alt="" />
            <h3 className="text-xl font-bold">Desenvolvimento Moderno</h3>
            <p className="text-offwhite">Criando sites rápidos, responsivos e otimizados para proporcionar a melhor experiência ao usuário.</p>
          </div>
          <div>
            <img className="mb-2 w-10" src="/img/code-slash-sharp.svg" alt="" />
            <h3 className="text-xl font-bold">Código Limpo e Eficiente</h3>
            <p className="text-offwhite">Escrevo códigos bem estruturados, garantindo fácil manutenção e escalabilidade para seu projeto.</p>
          </div>
          <div>
            <img className="mb-2 w-10" src="/img/trending-up.svg" alt="" />
            <h3 className="text-xl font-bold">Foco em Resultados</h3>
            <p className="text-offwhite">Cada projeto é pensado para converter visitantes em clientes, com design estratégico e performance otimizada.</p>
          </div>
        </div>
      </div>
      <div id="projects" className="container mx-auto py-16">
        <h2 className="text-4xl font-semibold mb-8 text-center">Meus Projetos</h2>
        <div className="w-2/3 xl:w-2/3 md:w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3  gap-8">

          <div className="relative group hover:scale-110 transition w-full aspect-square bg-purple rounded-lg overflow-hidden pt-4 border border-purple text-center">
            <div className="absolute w-full group-hover:bg-black/60 transition h-full flex flex-col items-center justify-center">
              <p className="text-lg font-bold hidden group-hover:block">Landing Page + Convite Interativo</p>
              <p className="text-sm hidden group-hover:block">Projeto particular</p>
              <a href="https://janduy-e-rafael.vercel.app" className="border border-white px-2 py-1 rounded-full mt-4 text-sm hidden group-hover:block hover:bg-white hover:text-background font-semibold transition">Visualizar</a>
            </div>
            <img src="/img/project01.png" alt="" />
          </div>
          <div className="relative group hover:scale-110 transition w-full aspect-square bg-purple rounded-lg overflow-hidden pt-4 border border-purple text-center">
            <div className="absolute w-full group-hover:bg-black/60 transition h-full flex flex-col items-center justify-center">
              <p className="text-lg font-bold hidden group-hover:block">Landing Page</p>
              <p className="text-sm hidden group-hover:block">Projeto particular</p>
              <a href="https://www.rodrigoguedes.vercel.app" className="border border-white px-2 py-1 rounded-full mt-4 text-sm hidden group-hover:block hover:bg-white hover:text-background font-semibold transition">Visualizar</a>
            </div>
            <img src="/img/project02.png" alt="" />
          </div>
          <div className="relative group hover:scale-110 transition w-full aspect-square bg-purple rounded-lg overflow-hidden pt-4 border border-purple text-center">
            <div className="absolute w-full group-hover:bg-black/60 transition h-full flex flex-col items-center justify-center">
              <p className="text-lg font-bold hidden group-hover:block">Site e Aplicativo Web</p>
              <p className="text-sm hidden group-hover:block">Projeto particular</p>
              <p className="text-sm hidden group-hover:block">Em contrução</p>
            </div>
            <img src="/img/project04.png" alt="" />
          </div>


        </div>
      </div>
      <div id="about-me" className="container mx-auto py-16 flex flex-col gap-8 xl:flex-row items-center justify-between">
        <div className="xl:w-1/2">
          <h2 className="text-4xl font-semibold mb-8 ">Sobre Mim</h2>
          <p className="text-offwhite">Sou uma Web Developer apaixonada por criar soluções digitais inovadoras e funcionais. Com experiência em design de interfaces, front-end e otimização de desempenho, trabalho para transformar ideias em experiências digitais que encantam os usuários.
            Meu foco é sempre entregar resultados que atendam às necessidades dos meus clientes, garantindo qualidade, usabilidade e eficiência em cada projeto. Estou sempre em busca de aprender novas tecnologias e técnicas, para oferecer as melhores soluções para o seu negócio.</p>
        </div>
        <div className="">
          <div className="bg-purple rounded-lg overflow-hidden">
            <div className="pt-8 px-16 bg-[url('/img/banner-img.png')] bg-cover bg-center">
              <div className="h-[80px]">
                <div className="w-[190px] aspect-square rounded-full overflow-hidden border-8 border-purple">
                  <img src="/img/img-fran.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="h-[80px] ">

            </div>
            <div className="py-8 px-4 text-center mt-4">
              <h3 className="font-extrabold leading-none">FRANCIELE<br /> FREITA</h3>
              <p className="text-sm text-offwhite">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto">
        <div className="w-full h-1 bg-orange"></div>
        <div className="w-full h-1 bg-pink"></div>
        <div className="w-full h-1 bg-green"></div>
        <div className="w-full h-1 bg-blue"></div>
      </div>
      <div className="footer py-8">
        <div className="container mx-auto flex flex-col gap-8 xl:flex-row items-center justify-between">
          <div className=" flex flex-col gap-2">
            <div className="flex flex-col xl:flex-row gap-4 self-center xl:self-start items-center">
              <img src="/img/logo.svg" alt="" className="w-10" />
              <h1 className="font-bold text-2xl leading-none text-center xl:text-start">Franciele <br />Freita</h1>
            </div>
            <p className="xl:w-2/3 text-sm text-offwhite">Desenvolvedor apaixonado por criar experiências digitais únicas e funcionais. Vamos construir algo incrível juntos!</p>
          </div>
          <nav>
            <ul className="flex flex-row items-center gap-4 text-background font-semibold">
              <li className="hover:scale-105 transition"><a href="" className="flex  items-center justify-center aspect-square px-2 py-2 bg-pink rounded-full"><img src="/img/logo-whatsapp.svg" alt="" /></a></li>
              <li className="hover:scale-105 transition"><a href="" className="flex  items-center justify-center aspect-square px-2 py-2 bg-orange rounded-full"><img src="/img/mail-outline.svg" alt="" /></a></li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
