import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Mobile  */}
      <div className="flex flex-col px-4 pt-10 pb-15 gap-15 sm:hidden">
        <div className="w-full relative flex flex-col gap-117.5">
          <h2 className="font-meno-display text-4xl leading-[95%] tracking-[-0.02em] uppercase">
            A 3-day immersive event featuring world-class speakers
          </h2>

          <Image
            src={"/images/about/about-main-img-mobile.png"}
            alt="About Main Image Mobile"
            width={388}
            height={445}
            className="absolute w-full h-auto top-22.5"
          />

          <div className="flex flex-col gap-7">
            <div className="flex gap-3.5">
              <Image
                src={"/images/about/about-square-img-1.png"}
                width={100}
                height={100}
                alt="About Square Image 1"
                className="w-12.5 h-auto"
              />

              <Image
                src={"/images/about/about-square-img-2.png"}
                width={100}
                height={100}
                alt="About Square Image 1"
                className="w-12.5 h-auto"
              />

              <Image
                src={"/images/about/about-square-img-3.png"}
                width={100}
                height={100}
                alt="About Square Image 1"
                className="w-12.5 h-auto"
              />
            </div>

            <p className="w-46.5 font-roboto-mono text-xs leading-[130%] opacity-80">
              Wild creatures face constraints. Their instinct drives evolution
              and creativity.
            </p>
          </div>

          <h2 className="w-56 absolute bottom-0 right-0 font-meno-display text-4xl leading-[95%] tracking-[-0.02em] uppercase text-right">
            live performan ces and interactive experiences
          </h2>
        </div>

        <div className="flex justify-between">
          <div className="w-20.5 flex flex-col gap-6">
            <p className="font-meno-display text-4xl leading-[95%] tracking-[-0.02em]">
              60<span className="text-[#FF6B23]">+</span>
            </p>

            <p className="font-roboto-mono text-xs leading-[130%]">
              World-Class Speakers
            </p>
          </div>

          <div className="w-20.5 flex flex-col gap-6">
            <p className="font-meno-display text-4xl leading-[95%] tracking-[-0.02em]">
              40<span className="text-[#FF6B23]">+</span>
            </p>

            <p className="font-roboto-mono text-xs leading-[130%]">
              Countries Represented
            </p>
          </div>

          <div className="w-20.5 flex flex-col gap-6">
            <p className="font-meno-display text-4xl leading-[95%] tracking-[-0.02em]">
              100<span className="text-[#FF6B23]">+</span>
            </p>

            <p className="font-roboto-mono text-xs leading-[130%]">
              Executive Sessions
            </p>
          </div>
        </div>
      </div>

      <div className="hidden max-w-[1440px] mx-auto sm:flex flex-col relative px-8 pt-27.5 pb-31 gap-27.5 lg:px-10">
        <div className="flex items-start justify-between">
          <h2 className="w-110 font-meno-display text-[2.5rem] leading-[95%] tracking-[-0.02em] uppercase lg:w-210 lg:text-[4.75rem]">
            A 3-day immersive event featuring world-class speakers
          </h2>

          <Image
            src={"/icons/arrow-top-right-about.svg"}
            alt="arrow top right about"
            aria-hidden
            width={170}
            height={170}
            className="w-20 h-auto lg:w-42.5"
          />
        </div>

        <div className="absolute top-69.5 left-auto right-8 flex items-end gap-11 lg:top-69.5 lg:left-92.25 lg:right-auto">
          <Image
            src={"/images/about/about-main-img.png"}
            alt="About Main Image"
            width={624}
            height={338}
            className="w-100 h-auto lg:w-156"
          />

          <p className="hidden lg:block w-79 font-roboto-mono leading-[130%] opacity-80">
            Wild creatures face constraints. Their instinct drives evolution and
            creativity.
          </p>
        </div>

        <div className="hidden absolute left-95.25 bottom-31 lg:flex gap-5">
          <Image
            src={"/images/about/about-square-img-1.png"}
            width={100}
            height={100}
            alt="About Square Image 1"
            className="w-25 h-auto"
          />

          <Image
            src={"/images/about/about-square-img-2.png"}
            width={100}
            height={100}
            alt="About Square Image 1"
            className="w-25 h-auto"
          />

          <Image
            src={"/images/about/about-square-img-3.png"}
            width={100}
            height={100}
            alt="About Square Image 1"
            className="w-25 h-auto"
          />
        </div>

        <div className="flex justify-between items-end">
          <div className="w-52.5 flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col gap-6">
              <p className="font-meno-display text-[2.5rem] leading-[95%] tracking-[-0.02em] lg:text-[4.5rem]">
                60<span className="text-[#FF6B23]">+</span>
              </p>

              <p className="font-roboto-mono text-sm leading-[130%] lg:text-base">
                World-Class Speakers
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-meno-display text-[2.5rem] leading-[95%] tracking-[-0.02em] lg:text-[4.5rem]">
                40<span className="text-[#FF6B23]">+</span>
              </p>

              <p className="font-roboto-mono text-sm leading-[130%] lg:text-base">
                Countries Represented
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-meno-display text-[2.5rem] leading-[95%] tracking-[-0.02em] lg:text-[4.5rem]">
                100<span className="text-[#FF6B23]">+</span>
              </p>

              <p className="font-roboto-mono text-sm leading-[130%] lg:text-base">
                Executive Sessions
              </p>
            </div>
          </div>

          <h2 className="w-90 font-meno-display text-[2.5rem] leading-[95%] tracking-[-0.02em] uppercase text-right lg:w-194 lg:text-[4.875rem]">
            live performances and interactive experiences
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
