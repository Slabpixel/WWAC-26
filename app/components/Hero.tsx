import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden lg:min-h-screen max-h-[950px] lg:max-h-[958px]">
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
        className="w-52.5 h-165.5 absolute -top-9.5 sm:-top-25.5 left-1/2 -translate-x-1/2 z-4"
      />

      <Image
        src={"/images/hero/home-lanyard-2.png"}
        alt="Hero Lanyard 1"
        aria-hidden="true"
        width={284}
        height={842}
        className="w-52.5 h-165.5 absolute -top-6 sm:-top-22 left-[42%] -translate-x-1/2 z-5"
      />

      <Image
        src={"/images/hero/home-lanyard-3.png"}
        alt="Hero Lanyard 1"
        aria-hidden="true"
        width={284}
        height={842}
        className="w-60 h-165.5 absolute -top-18 sm:-top-34 left-[60%] -translate-x-1/2 -rotate-13 origin-center z-6"
      />

      {/* Hero Content */}
      <div className="relative z-3 px-4 sm:px-8 pt-121.5 sm:pt-40.5 pb-24.5 sm:pb-26 flex flex-col items-center gap-15 sm:gap-21">
        <div className="w-full flex items-start justify-center sm:justify-start flex-wrap gap-y-5 sm:gap-y-8.5">
          <Image
            src={"/images/hero/hero-text-world.svg"}
            alt="Hero Title Icon"
            width={100}
            height={100}
            className="w-auto h-14 sm:h-22"
          />

          <Image
            src={"/images/hero/hero-logo.svg"}
            alt="Hero Title Icon"
            width={100}
            height={100}
            className="w-auto h-14 sm:h-22 ml-auto sm:order-last"
          />

          <Image
            src={"/images/hero/hero-text-wide.svg"}
            alt="Hero Title Icon"
            width={100}
            height={100}
            className="w-auto h-14 sm:h-22 sm:ml-26.5"
          />

          <Image
            src={"/images/hero/hero-text-ai.svg"}
            alt="Hero Title Icon"
            width={100}
            height={100}
            className="w-auto h-14 sm:h-22 ml-auto sm:ml-0"
          />

          <Image
            src={"/images/hero/hero-text-conference.svg"}
            alt="Hero Title Icon"
            width={100}
            height={100}
            className="w-full sm:w-auto h-auto sm:h-22 sm:ml-auto"
          />

          <Image
            src={"/images/hero/hero-text-2026.svg"}
            alt="Hero Title Icon"
            width={100}
            height={100}
            className="w-auto h-14 sm:h-22"
          />

          <p className="sm:hidden w-56.5 font-roboto-mono text-xs leading-[130%] ml-auto opacity-80">
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
