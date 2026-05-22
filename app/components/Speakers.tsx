"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const speakers = [
  {
    id: 1,
    src: "/images/speakers/speakers-img-1.png",
    alt: "Speaker 1",
  },
  {
    id: 2,
    src: "/images/speakers/speakers-img-2.png",
    alt: "Speaker 2",
  },
  {
    id: 3,
    src: "/images/speakers/speakers-img-3.png",
    alt: "Speaker 3",
  },
];

const Speakers = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="relative max-w-[1440px] mx-auto flex flex-col gap-10 py-15 lg:py-37.5">
        <div className="flex flex-col gap-6 px-4 sm:px-8 sm:flex-row sm:gap-40.5 lg:px-10">
          <p className="font-roboto-mono text-xs leading-[130%] opacity-80 sm:shrink-0 lg:text-base">
            Global Perspectives
          </p>

          <div className="flex flex-col gap-1 lg:w-230">
            <h2 className="font-meno-display text-[2.25rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
              Meet the Minds Driving the Next Chapter of —
            </h2>

            <h2 className="font-meno-display text-[2.25rem] leading-[95%] tracking-[-0.02em] uppercase text-right lg:text-[5rem]">
              Artificial Intelligence
            </h2>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            breakpoints: {
              "(min-width: 40rem)": { align: "start", loop: true },
            },
          }}
          className="w-full sm:pl-84 lg:pl-96.25"
        >
          <CarouselContent>
            {speakers.map((speaker) => (
              <CarouselItem
                className="basis-auto w-fit pl-0 pr-4 sm:pr-7.5"
                key={speaker.id}
              >
                <Image
                  src={speaker.src}
                  alt={speaker.alt}
                  width={250}
                  height={352}
                  className="block h-auto w-62.5 lg:w-110.5"
                  loading="eager"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden lg:block absolute bottom-37.5 left-10">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous speaker"
            className="touch-manipulation cursor-pointer"
          >
            <Image
              src="/icons/speaker-left-arrow.svg"
              alt=""
              width={30}
              height={20}
              className="w-7.5 h-auto pointer-events-none lg:w-15"
              loading="eager"
            />
          </button>
        </div>

        <div className="flex justify-between px-4 sm:px-8 lg:px-10 lg:hidden">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous speaker"
            className="touch-manipulation cursor-pointer"
          >
            <Image
              src="/icons/speaker-left-arrow.svg"
              alt=""
              width={30}
              height={20}
              className="w-7.5 h-auto pointer-events-none lg:w-15"
              loading="eager"
            />
          </button>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next speaker"
            className="touch-manipulation cursor-pointer"
          >
            <Image
              src="/icons/speaker-right-arrow.svg"
              alt=""
              width={30}
              height={20}
              className="w-7.5 h-auto pointer-events-none lg:w-15"
              loading="eager"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
