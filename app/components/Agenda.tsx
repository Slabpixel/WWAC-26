import Image from "next/image";

type AgendaItemProperties = {
  title: string;
  time: string;
};

const Agenda = () => {
  const agendaItems: AgendaItemProperties[] = [
    {
      title: "The State of AI",
      time: "9:30 — 10:15",
    },
    {
      title: "Human-Centered AI",
      time: "10:15 — 11:00",
    },
    {
      title: "Intelligence vs Automation",
      time: "11:30 — 12:15",
    },
    {
      title: "Ethics in Practice",
      time: "13:30 — 14:15",
    },
    {
      title: "Building AI That People Trust",
      time: "14:30 — 15:15",
    },
    {
      title: "Emerging Voices in AI",
      time: "15:30 — 16:30",
    },
    {
      title: "Rethinking Intelligence for the Future",
      time: "15:30 — 16:30",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto flex flex-col gap-15 px-4 pt-15 pb-5 sm:px-8 sm:py-20 lg:px-10 lg:py-37.5 lg:gap-30">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <p className="font-roboto-mono text-xs leading-[130%] opacity-80 sm:order-last lg:text-base">
            3 Days Agenda
          </p>

          {/* Heading */}
          <div className="flex flex-col lg:w-225">
            <div className="flex justify-between">
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Exploring
              </h2>
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Intelligence
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between">
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Through
              </h2>

              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Conversations,
              </h2>
            </div>

            <div className="flex justify-between lg:hidden">
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Applications,
              </h2>
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                And
              </h2>
            </div>

            <div className="flex justify-between lg:hidden">
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Future Possibilities
              </h2>
            </div>

            {/* Desktop Title */}
            <div className="hidden lg:flex justify-between">
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Applications,
              </h2>

              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                And
              </h2>

              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Future
              </h2>
            </div>

            <div className="hidden lg:flex justify-between">
              <h2 className="font-meno-display text-[2.375rem] leading-[95%] tracking-[-0.02em] uppercase lg:text-[5rem]">
                Possibilities
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-8 pb-10 border-b border-foreground/20 lg:gap-10 lg:pb-15">
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-0 sm:justify-between">
              <div className="flex justify-between sm:w-75 lg:w-143.75">
                <p className="w-40.5 font-meno-display text-2xl leading-[95%] tracking-[-0.02em] uppercase sm:order-last lg:w-78.5 lg:text-5xl">
                  Understanding Intelligence
                </p>

                <p className="font-roboto-mono text-xs leading-[130%] opacity-80 lg:text-base">
                  Fri, 27 June
                </p>
              </div>

              <p className="font-roboto-mono text-xs leading-[130%] opacity-80 sm:w-81.25 lg:text-base">
                Humans live with limitations. The desire to transcend them
                drives progress and innovation.
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-between">
              <div className="w-full h-100 overflow-hidden flex justify-center items-center lg:w-167.5">
                <Image
                  src={"/images/agenda/agenda-main-img.png"}
                  alt="Agenda Image 1"
                  width={670}
                  height={400}
                  className="w-auto h-100 object-cover sm:w-full sm:h-auto lg:w-full lg:h-auto"
                  loading="eager"
                />
              </div>

              <div className="flex flex-col gap-5 lg:h-100 lg:gap-0 lg:justify-between">
                {agendaItems.map((agenda, i) => (
                  <div key={i} className="flex items-center gap-7">
                    <p className="font-meno-display text-xs leading-[95%] tracking-[-0.02em] uppercase shrink-0 lg:text-2xl">
                      {agenda.title}
                    </p>
                    <div className="w-full h-px border-t-2 border-dashed border-foreground" />
                    <p className="font-meno-display leading-[95%] tracking-[-0.02em] uppercase shrink-0 lg:text-2xl">
                      {agenda.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 py-10 border-b border-foreground/20 lg:gap-10 lg:py-15">
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-0 sm:justify-between">
              <div className="flex justify-between sm:w-75 lg:w-143.75">
                <p className="w-40.5 font-meno-display text-2xl leading-[95%] tracking-[-0.02em] uppercase sm:order-last lg:w-78.5 lg:text-5xl">
                  From Research to Product
                </p>

                <p className="font-roboto-mono text-xs leading-[130%] opacity-80 lg:text-base">
                  Sat, 28 June
                </p>
              </div>

              <p className="hidden font-roboto-mono text-xs leading-[130%] opacity-80 sm:block sm:w-81.25 lg:text-base">
                Humans live with limitations. The desire to transcend them
                drives progress and innovation.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 py-10 lg:gap-10 lg:py-15">
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-0 sm:justify-between">
              <div className="flex justify-between sm:w-75 lg:w-143.75">
                <p className="w-40.5 font-meno-display text-2xl leading-[95%] tracking-[-0.02em] uppercase sm:order-last lg:w-78.5 lg:text-5xl">
                  The Future of Work in aI
                </p>

                <p className="font-roboto-mono text-xs leading-[130%] opacity-80 lg:text-base">
                  Sun, 29 June
                </p>
              </div>

              <p className="hidden font-roboto-mono text-xs leading-[130%] opacity-80 sm:block sm:w-81.25 lg:text-base">
                Humans live with limitations. The desire to transcend them
                drives progress and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
