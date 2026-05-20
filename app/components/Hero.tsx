import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden max-h-[950px] lg:max-h-[958px]">
      {/* Background Image */}
      <Image
        src={"/images/hero/hero-bg.png"}
        alt="Hero Background"
        aria-hidden="true"
        width={1440}
        height={900}
        className="absolute inset-0 w-full h-full object-cover z-1"
      />

      {/* Hero Lanyard */}
      <Image
        src={"/images/hero/home-lanyard-1.png"}
        alt="Hero Lanyard 1"
        aria-hidden="true"
        width={284}
        height={842}
        className="w-52.5 h-165.5 absolute -top-9.5 left-1/2 -translate-x-1/2 z-4 sm:-top-30.5 lg:w-71 lg:h-210.5 lg:-top-4"
      />

      <Image
        src={"/images/hero/home-lanyard-2.png"}
        alt="Hero Lanyard 1"
        aria-hidden="true"
        width={284}
        height={842}
        className="w-52.5 h-165.5 absolute -top-6 left-[42%] -translate-x-1/2 z-5 sm:-top-27 lg:w-71 lg:h-210.5 lg:top-0 lg:left-[47.5%]"
      />

      <Image
        src={"/images/hero/home-lanyard-3.png"}
        alt="Hero Lanyard 1"
        aria-hidden="true"
        width={284}
        height={842}
        className="w-52.5 h-165.5 absolute -top-18 left-[60%] -translate-x-1/2 -rotate-13  origin-center z-6 sm:-top-39 lg:w-71 lg:h-210.5 lg:-top-18 lg:left-[53.5%]"
        loading="eager"
      />

      {/* Hero Content */}
      <div className="relative max-w-[1440px] mx-auto z-3 px-4 sm:px-8 lg:px-10 pt-121.5 sm:pt-40.5 pb-24.5 sm:pb-26 flex flex-col items-center gap-15 sm:gap-21">
        <div className="w-full relative">
          {/* Mobile Title */}
          <Image
            src={"/images/hero/hero-title-mobile.svg"}
            alt="Hero Title Mobile"
            width={388}
            height={284}
            className="w-full h-auto block sm:hidden"
          />

          {/* Desktop Title */}
          <Image
            src={"/images/hero/hero-title-desktop.svg"}
            alt="Hero Title Mobile"
            width={1360}
            height={576}
            className="w-full h-auto hidden sm:block"
          />

          <Image
            src={"/images/hero/hero-logo.svg"}
            alt="Hero Logo"
            aria-hidden="true"
            width={56}
            height={56}
            className="w-14.5 h-auto absolute top-0 right-0 sm:w-22 sm:top-auto sm:bottom-0 lg:w-41"
          />

          <p className="block sm:hidden absolute bottom-2 right-0 w-56.5 font-roboto-mono text-xs leading-[130%] opacity-80">
            Humans live with limitations. The desire to transcend them drives
            progress and innovation.
          </p>
        </div>

        <div className="w-full flex justify-center sm:justify-between sm:items-start">
          <p className="hidden sm:block w-88 font-roboto-mono text-xs leading-[130%] opacity-80">
            Humans live with limitations. The desire to transcend them drives
            progress and innovation.
          </p>

          <div className="flex gap-4 cursor-pointer">
            <p className="font-fira-mono text-3xl leading-[66%] uppercase">
              Get the ticket
            </p>

            <Image
              src={"/icons/arrow-top-right-home.svg"}
              alt="Hero Arrow Right"
              width={20}
              height={20}
              className="w-auto h-5"
            />
          </div>
        </div>
      </div>

      {/* Bottom Blur Effect */}
      <div className="w-[150%] h-27 bg-background absolute -bottom-10 left-1/2 -translate-x-1/2 z-2 blur-lg" />
    </section>
  );
};

export default Hero;
