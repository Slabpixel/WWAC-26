import Image from "next/image";

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile Background */}
      <Image
        src={"/images/cta-banner/cta-banner-mobile-bg.png"}
        alt="Cta Banner Background"
        width={420}
        height={662}
        className="absolute inset-0 w-full h-full object-cover z-1 sm:hidden"
        loading="eager"
      />

      {/* Desktop Background */}
      <Image
        src={"/images/cta-banner/cta-banner-bg.png"}
        alt="Cta Banner Background"
        width={1440}
        height={662}
        className="absolute inset-0 w-full h-full object-cover z-1 hidden sm:block"
        loading="eager"
      />

      {/* Overlay Gradient */}
      <div className="absolute w-full h-27 left-0 -top-13.5 bg-background blur-xl z-2 lg:h-41 lg:-top-23.5" />

      {/* Mobile Content */}
      <div className="relative max-w-[1440px] mx-auto flex flex-col gap-2 px-4 pt-28.5 pb-15 z-3 sm:hidden">
        <div className="flex justify-between">
          <h2 className="w-65 font-meno-display text-[5rem] leading-[95%] tracking-[-0.02em] uppercase">
            Human shape
          </h2>

          <p className="w-29 font-roboto-mono text-xs leading-[130%]">
            The next chapter begins here.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-6.5 shrink-0">
            <p className="font-meno-display text-2xl leading-[95%] tracking-[-0.02em]">
              26-28
            </p>
            <p className="font-roboto-mono text-xs leading-[130%]">June</p>
            <p className="font-roboto-mono text-xs leading-[130%]">2026</p>
          </div>

          <div className="relative flex justify-between">
            <h2 className="font-meno-display text-[5rem] leading-[95%] tracking-[-0.02em] uppercase">
              What machines
            </h2>

            <p className="w-19.5 absolute top-0 right-0 font-roboto-mono text-xs leading-[130%] text-right">
              WWAC’26 Global Conference
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="font-meno-display text-[5rem] leading-[95%] tracking-[-0.02em] uppercase">
            Becomes
          </h2>

          <Image
            src={"/images/hero/hero-logo.svg"}
            alt="Hero Logo"
            width={56}
            height={56}
            className="w-auto h-14"
            loading="eager"
          />
        </div>

        <div className="flex justify-between items-end">
          <div className="w-59 h-23 relative flex items-center pl-6">
            <Image
              src={"/icons/bracket-left.svg"}
              alt="Bracket Left"
              width={14}
              height={92}
              className="absolute w-auto h-23 left-0 top-0"
              loading="eager"
            />

            <p className="w-49.5 font-roboto-mono text-xs leading-[130%]">
              Three days of keynotes, panels, and workshops on AI's evolution.
            </p>

            <Image
              src={"/icons/bracket-right.svg"}
              alt="Bracket Right"
              width={14}
              height={92}
              className="absolute w-auto h-23 right-0 top-0"
              loading="eager"
            />
          </div>

          <p className="w-30 font-roboto-mono text-xs leading-[130%] text-right">
            Ideas, ethics, systems, future.
          </p>
        </div>
      </div>

      {/* Tab & Desktop Content */}
      <div className="hidden relative max-w-[1440px] mx-auto sm:flex flex-col gap-4 px-8 pt-37.5 pb-25 z-3 lg:gap-8.5 lg:px-10 lg:pt-60.5 lg:pb-37.5">
        <div className="flex justify-between">
          <h2 className="font-meno-display text-[7.5rem] leading-[95%] tracking-[-0.02em] uppercase text-justify text-trim-cap lg:text-[15rem]">
            Humans
          </h2>

          <p className="w-35 font-roboto-mono text-sm leading-[130%] lg:text-base lg:w-39.5">
            The next chapter begins here.
          </p>

          <Image
            src={"/images/hero/hero-logo.svg"}
            alt="Hero Logo"
            width={163}
            height={163}
            className="w-23 h-23 lg:w-40.5 lg:h-40.5"
            loading="eager"
          />
        </div>

        <div className="flex items-center gap-14">
          <h2 className="font-meno-display text-[7.5rem] leading-[95%] tracking-[-0.02em] uppercase text-trim-cap lg:text-[15rem]">
            Shape
          </h2>

          <div className="flex gap-6.5 shrink-0">
            <p className="font-meno-display text-4xl leading-[95%] tracking-[-0.02em] lg:text-5xl">
              26-28
            </p>
            <p className="font-roboto-mono text-xs leading-[130%] lg:text-base">
              June
            </p>
            <p className="font-roboto-mono text-xs leading-[130%] lg:text-base">
              2026
            </p>
          </div>
        </div>

        <div className="relative flex justify-between items-center">
          <div className="w-59 h-23 relative flex items-center pl-6">
            <Image
              src={"/icons/bracket-left.svg"}
              alt="Bracket Left"
              width={14}
              height={92}
              className="absolute w-auto h-23 left-0 top-0"
              loading="eager"
            />

            <p className="w-49.5 font-roboto-mono text-xs leading-[130%]">
              Three days of keynotes, panels, and workshops on AI's evolution.
            </p>

            <Image
              src={"/icons/bracket-right.svg"}
              alt="Bracket Right"
              width={14}
              height={92}
              className="absolute w-auto h-23 right-0 top-0"
              loading="eager"
            />
          </div>

          <h2 className="font-meno-display text-[7.5rem] leading-[95%] tracking-[-0.02em] uppercase text-trim-cap lg:text-[15rem] lg:w-242.5">
            What machines
          </h2>

          <p className="w-19.5 absolute top-0 right-0 font-roboto-mono text-xs leading-[130%] text-right lg:text-base lg:w-24.5">
            WWAC’26 Global Conference
          </p>
        </div>

        <div className="flex items-end justify-between">
          <h2 className="font-meno-display text-[7.5rem] leading-[95%] tracking-[-0.02em] uppercase text-trim-cap lg:text-[15rem] ">
            Become
          </h2>

          <Image
            src={"/icons/cta-banner-group-icons.svg"}
            alt="Cta Banner Group Icons"
            width={163}
            height={34}
            className="w-25 h-8.5 lg:w-58.5"
            loading="eager"
          />

          <p className="w-30 font-roboto-mono text-xs leading-[130%] text-right lg:text-base lg:w-40">
            Ideas, ethics, systems, future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
