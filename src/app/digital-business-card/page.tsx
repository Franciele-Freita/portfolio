export default function DigitalBusinessCard() {
  return (
    <div className="bg-[#1A0A3B] w-full min-h-screen p-4">
      <div className="container sm:min-w-96 max-w-md bg-background mx-auto rounded-lg overflow-hidden flex flex-col items-center" style={{ height: 'calc(100vh - 32px)' }}>
       
          <div className="pt-8 px-32 bg-[url('/img/banner-img.png')] bg-cover bg-center">
            <div className="h-[95px] w-full"></div>
            <div className="h-[95px] ">
              <div className="w-[190px] mx-auto aspect-square rounded-full overflow-hidden border-8 border-background">
                <img src="/img/img-fran.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="h-[95px] ">

          </div>
          <div className=" px-4 text-center pb-8   flex flex-col flex-1 justify-around">
            <div className="mb-4 flex flex-col items-center">
            <img src="/img/logo.svg" alt="" className="w-16 mb-2" />
              <h3 className="font-extrabold leading-none md:text-5xl">FRANCIELE<br /> FREITA</h3>
              <p className="text-sm text-offwhite">Web Developer</p>
            </div>
            <nav className="mb-4">
              <ul className="flex flex-row items-center justify-center gap-4 text-background font-semibold">
                <li className="hover:scale-105 transition"><a href="https://wa.me/+5527995330712?text=Olá, recebi seu cartão visita e gostaria de saber mais sobre seus serviços." className="flex  items-center justify-center aspect-square px-4 py-4 bg-pink rounded-full"><img src="/img/logo-whatsapp.svg" alt="" className="w-10" /></a></li>
                <li className="hover:scale-105 transition"><a href="mailto:franciele_freita@hotmail.com" className="flex  items-center justify-center aspect-square px-4 py-4 bg-orange rounded-full"><img src="/img/mail-outline.svg" alt="" className="w-10" /></a></li>

              </ul>
            </nav>
            <a href="/" className="hover:scale-105 transition px-4 py-2 border border-white font-semibold  rounded-full ">MEU PORTFOLIO</a>
          </div>
      </div>
    </div>
  );
}