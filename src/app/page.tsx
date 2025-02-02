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
              <Image src={"/img/menu.svg"} width={32} height={32} alt="logo" />
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
              <li className="hover:scale-105 transition"><a href="/#why-me" className="px-4 py-2 bg-pink  rounded-full ">Pilares</a></li>
              <li className="hover:scale-105 transition"><a href="/#projects" className="px-4 py-2 bg-orange rounded-full">Projetos</a></li>
              <li className="hover:scale-105 transition"><a href="/#services" className="px-4 py-2 bg-blue rounded-full">Serviços</a></li>
              <li className="hover:scale-105 transition"><a href="/#about-me" className="px-4 py-2 bg-green rounded-full">Quem sou</a></li>
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
              <a href="https://wa.me/+5527995330712?text=Olá, quero criar uma Pagina Web, pode me ajudar?" className="w-fit mx-auto px-4 py-2 bg-orange rounded-full text-background font-semibold hover:scale-105 transition">Desenvolva sua página comigo</a>
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
        <h2 className="text-4xl font-semibold mb-8">O que ofereço de melhor</h2>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="hover:bg-purple transition p-4 rounded-lg">
            <img className="mb-2 w-10" src="/img/hardware-chip-outline.svg" alt="" />
            <h3 className="text-xl font-bold">Desenvolvimento Moderno</h3>
            <p className="text-offwhite">Criando sites rápidos, responsivos e otimizados para proporcionar a melhor experiência ao usuário.</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg text-end md:text-start">
            <div className="flex justify-end md:justify-start">
              <img className="mb-2 w-10" src="/img/code-slash-sharp.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">Código Limpo e Eficiente</h3>
            <p className="text-offwhite">Escrevo códigos bem estruturados, garantindo fácil manutenção e escalabilidade para seu projeto.</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg">
            <img className="mb-2 w-10" src="/img/trending-up.svg" alt="" />
            <h3 className="text-xl font-bold">Foco em Resultados</h3>
            <p className="text-offwhite">Cada projeto é pensado para converter visitantes em clientes, com design estratégico e performance otimizada.</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg text-end md:text-start">
          <div className="flex justify-end md:justify-start">
            <img className="mb-2 w-10" src="/img/color-filter-outline.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">UX/UI Estratégico</h3>
            <p className="text-offwhite">Desenvolvimento focado na experiência do usuário e design intuitivo</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg">
            <img className="mb-2 w-10" src="/img/speedometer-outline.svg" alt="" />
            <h3 className="text-xl font-bold">SEO e Performance</h3>
            <p className="text-offwhite">Código otimizado para velocidade e bom ranqueamento nos buscadores.</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg text-end md:text-start">
          <div className="flex justify-end md:justify-start">
            <img className="mb-2 w-10" src="/img/shield-checkmark-outline.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">Segurança e Estabilidade</h3>
            <p className="text-offwhite">Aplicações protegidas e com boas práticas de desenvolvimento.</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg">
            <img className="mb-2 w-10" src="/img/briefcase-outline.svg" alt="" />
            <h3 className="text-xl font-bold">Experiência e Versatilidade</h3>
            <p className="text-offwhite">Atuo com diversas tecnologias para entregar soluções sob medida.</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg text-end md:text-start">
          <div className="flex justify-end md:justify-start">
            <img className="mb-2 w-10" src="/img/options-outline.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold">Soluções Personalizadas</h3>
            <p className="text-offwhite">Cada projeto é pensado para atender exatamente às suas necessidades.</p>
          </div>
          <div className="hover:bg-purple transition p-4 rounded-lg">
            <img className="mb-2 w-10" src="/img/alarm-outline.svg" alt="" />
            <h3 className="text-xl font-bold">Compromisso com Prazo</h3>
            <p className="text-offwhite">Entregas pontuais sem comprometer a qualidade do trabalho.
              Se precisar de mais ajustes, só falar!</p>
          </div>
        </div>
      </div>
      <div id="projects" className="container mx-auto py-16">
        <h2 className="text-4xl font-semibold mb-8 text-center">Meus Projetos</h2>
        <div className="w-2/3 xl:w-2/3 md:w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3  gap-8">

          <div className="relative group hover:scale-110 transition w-full aspect-square bg-purple rounded-lg overflow-hidden pt-4 border border-purple text-center">
            <div className="absolute w-full group-hover:bg-black/60 transition h-full flex flex-col items-center justify-center">
              <p className="text-lg font-bold hidden group-hover:block">Landing Page + Convite Interativo</p>
              <a target="_blank" href="https://janduy-e-rafael.vercel.app" className="border border-white px-2 py-1 rounded-full mt-4 text-sm hidden group-hover:block hover:bg-white hover:text-background font-semibold transition">Visualizar</a>
            </div>
            <img src="/img/project01.png" alt="" />
          </div>
          <div className="relative group hover:scale-110 transition w-full aspect-square bg-purple rounded-lg overflow-hidden pt-4 border border-purple text-center">
            <div className="absolute w-full group-hover:bg-black/60 transition h-full flex flex-col items-center justify-center">
              <p className="text-lg font-bold hidden group-hover:block">Landing Page</p>
              <a target="_blank" href="https://www.rodrigoguedes.vercel.app" className="border border-white px-2 py-1 rounded-full mt-4 text-sm hidden group-hover:block hover:bg-white hover:text-background font-semibold transition">Visualizar</a>
            </div>
            <img src="/img/project02.png" alt="" />
          </div>
          <div className="relative group hover:scale-110 transition w-full aspect-square bg-purple rounded-lg overflow-hidden pt-4 border border-purple text-center">
            <div className="absolute w-full group-hover:bg-black/60 transition h-full flex flex-col items-center justify-center">
              <p className="text-lg font-bold hidden group-hover:block">Site e Aplicativo Web</p>
              <p className="text-sm hidden group-hover:block">Em contrução</p>
            </div>
            <img src="/img/project04.png" alt="" />
          </div>


        </div>
      </div>
      <div id="services" className="container mx-auto py-16">
        <h2 className="text-4xl font-semibold  text-center">O que Posso Criar para Você?</h2>
        <p className="text-center text-offwhite mb-8">Transformo ideias em soluções digitais. Escolha o que precisa e veja como posso ajudar!</p>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="border border-white/20 rounded-lg bg-purple p-8 hover:scale-110 transition">
            <img className="mb-2 w-10" src="/img/earth-outline.svg" alt="" />
            <h3 className="text-xl font-bold">Landing Page</h3>
            <p className="text-offwhite font-bold mt-2">O que é?</p>
            <p className="text-offwhite">Uma Landing Page é uma página criada para conversão. Seja para captar leads, vender um produto ou apresentar um serviço, ela é focada em um único objetivo.</p>
            <ul className="mt-2">
              <li className="text-offwhite list-disc ms-8">Captura de leads para e-mail marketing</li>
              <li className="text-offwhite list-disc ms-8">Divulgação de cursos e eventos</li>
              <li className="text-offwhite list-disc ms-8">Página de lançamento de produto</li>
            </ul>
          </div>
          <div className="border border-white/20 rounded-lg bg-purple p-8 hover:scale-110 transition">
            <img className="mb-2 w-10" src="/img/desktop-outline.svg" alt="" />
            <h3 className="text-xl font-bold">Site</h3>
            <p className="text-offwhite font-bold mt-2">O que é?</p>
            <p className="text-offwhite">Um site completo para apresentar sua empresa, serviços ou portfólio. Pode incluir várias páginas, blog, formulários de contato e mais.</p>
            <ul className="mt-2">
              <li className="text-offwhite list-disc ms-8">Site institucional para empresas</li>
              <li className="text-offwhite list-disc ms-8">Portfólio profissional</li>
              <li className="text-offwhite list-disc ms-8">Blog ou site de notícias</li>
            </ul>
          </div>
          <div className="border border-white/20 rounded-lg bg-purple p-8 hover:scale-110 transition">
            <img className="mb-2 w-10" src="/img/id-card-outline.svg" alt="" />
            <h3 className="text-xl font-bold">Cartão de Visita Digital</h3>
            <p className="text-offwhite font-bold mt-2">O que é?</p>
            <p className="text-offwhite">Um cartão interativo acessível por link ou NFC. Pode conter seus contatos, redes sociais, localização e até um botão de WhatsApp para facilitar conexões.</p>
            <ul className="mt-2">
              <li className="text-offwhite list-disc ms-8">Substituição do cartão de papel</li>
              <li className="text-offwhite list-disc ms-8">Link compartilhável em redes sociais</li>
              <li className="text-offwhite list-disc ms-8">Integração com WhatsApp e e-mail</li>
            </ul>
          </div>
        </div>

      </div>
      <div id="depoiments" className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Depoimentos</h2>
        <div className="grid md:grid-cols-2  gap-8">
          <div className="border border-white/20 rounded-lg p-4">
            <div className="flex flex-row gap-2 mb-4">
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
            </div>
            <p className="font-bold text-lg">Excelente Trabalho!</p>
            <p>"Contratar esse serviço foi a melhor decisão que tomei para o meu negócio. O site ficou incrível, rápido e bem estruturado. Além disso, o suporte durante todo o processo foi impecável!"</p>
            <p className="font-bold text-end">Ana Souza, Empreendedora</p>
          </div>
          <div className="border border-white/20 rounded-lg p-4">
            <div className="flex flex-row gap-2 mb-4">
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
            </div>
            <p className="font-bold text-lg">Profissionalismo e Qualidade</p>
            <p>"Desde o primeiro contato, ficou claro que eu estava lidando com um profissional que entende do assunto. O site ficou exatamente como eu queria, com um design moderno e ótima performance!"</p>
            <p className="font-bold text-end"> Carlos Mendes, CEO de Startup</p>
          </div>
        </div>

      </div>

      <div id="about-me" className="container mx-auto py-16 flex flex-col gap-8 xl:flex-row items-center justify-between">
        <div className="xl:w-1/2">
          <h2 className="text-4xl font-semibold mb-8 ">Quem Sou</h2>
          <p className="font-bold text-lg mb-4">Franciele Bungenstab de Freita</p>
          <p className="text-offwhite mb-8">Sou uma Web Developer apaixonada por criar soluções digitais inovadoras e funcionais. Com experiência em design de interfaces, front-end e otimização de desempenho, trabalho para transformar ideias em experiências digitais que encantam os usuários.
            Meu foco é sempre entregar resultados que atendam às necessidades dos meus clientes, garantindo qualidade, usabilidade e eficiência em cada projeto. Estou sempre em busca de aprender novas tecnologias e técnicas, para oferecer as melhores soluções para o seu negócio.</p>
          <p className="font-bold text-xl mb-4">Minhas Habilidades</p>
          <ul className="flex flex-wrap gap-4 items-center">
            <li className="flex items-center gap-2 font-medium">
              <div className="w-2 h-2 rounded-full bg-orange"></div>
              Front-end
            </li>
            <li className="flex items-center gap-2 font-medium">
              <div className="w-2 h-2 rounded-full bg-pink"></div>
              Back-end
            </li>
            <li className="flex items-center gap-2 font-medium">
              <div className="w-2 h-2 rounded-full bg-blue"></div>
              Banco de Dados e Serviços
            </li>
            <li className="flex items-center gap-2 font-medium">
              <div className="w-2 h-2 rounded-full bg-green"></div>
              Design & UI
            </li>
          </ul>
          <div className="flex flex-wrap itens-center gap-4 mt-4">
            <button typeof="button" className="text-nowrap px-4 py-1 bg-orange rounded-full text-background font-bold">
              HTML
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-orange rounded-full text-background font-bold">
              CSS
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-orange rounded-full text-background font-bold">
              Next.js
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-orange rounded-full text-background font-bold">
              JavaScript
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-orange rounded-full text-background font-bold">
              React Native
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-pink rounded-full text-background font-bold">
              PHP
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-pink rounded-full text-background font-bold">
              Laravel
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-pink rounded-full text-background font-bold">
              Livewire
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-pink rounded-full text-background font-bold">
              Node.js
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-pink rounded-full text-background font-bold">
              NestJS
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-blue rounded-full text-background font-bold">
              MySQL
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-blue rounded-full text-background font-bold">
              PostgreSQL
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-blue rounded-full text-background font-bold">
              Firebase
            </button>
            <button typeof="button" className="text-nowrap  px-4 py-1 bg-green rounded-full text-background font-bold">
              Figma
            </button>
          </div>
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
            <p className="xl:w-2/3 text-sm text-offwhite">Programadora apaixonada por criar experiências digitais únicas e funcionais. Vamos construir algo incrível juntos!</p>
          </div>
          <nav>
            <ul className="flex flex-row items-center gap-4 text-background font-semibold">
              <li className="hover:scale-105 transition"><a href="https://wa.me/+5527995330712?text=Olá, vi seu portfólio e gostaria de saber mais sobre seus serviços." className="flex  items-center justify-center aspect-square px-2 py-2 bg-pink rounded-full"><img src="/img/logo-whatsapp.svg" alt="" /></a></li>
              <li className="hover:scale-105 transition"><a href="mailto:franciele_freita@hotmail.com" className="flex  items-center justify-center aspect-square px-2 py-2 bg-orange rounded-full"><img src="/img/mail-outline.svg" alt="" /></a></li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
