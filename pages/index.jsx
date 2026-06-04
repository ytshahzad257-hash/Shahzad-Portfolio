import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDownTray, HiArrowRight, HiCodeBracket } from "react-icons/hi2";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import portfolioData from "../data/portfolioData";

import { fadeIn } from "../variants";

const Home = () => {
  const { cvDownload, hero, personalInfo, stats } = portfolioData;

  return (
    <section
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-primary/85"
      data-qa="home-hero"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] w-full overflow-hidden"
        aria-hidden
      >
        <div
          role="img"
          className="absolute inset-0 h-full w-full translate-z-0 bg-explosion bg-cover bg-center bg-no-repeat opacity-55 mix-blend-color-dodge xl:bg-right"
        />

        <ParticlesContainer />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-primary/95 via-primary/82 to-primary/88 md:bg-gradient-to-r md:from-primary md:via-primary/75 md:to-primary/25 xl:via-primary/70 xl:to-primary/10" />

      <div className="relative z-20 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col items-center px-4 pb-[calc(9rem+env(safe-area-inset-bottom))] pt-32 text-center sm:px-6 sm:pb-[calc(8.5rem+env(safe-area-inset-bottom))] sm:pt-36 md:px-8 md:pt-36 xl:grid xl:grid-cols-[minmax(0,680px)_minmax(360px,1fr)] xl:items-center xl:gap-x-10 xl:pb-16 xl:pt-32 xl:text-left">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative mb-7 flex h-[clamp(220px,32vh,300px)] w-full max-w-[350px] items-center justify-center overflow-visible drop-shadow-[0_28px_55px_rgba(0,0,0,0.45)] sm:mb-8 sm:h-[clamp(260px,34vh,360px)] sm:max-w-[430px] md:h-[clamp(320px,38vh,460px)] md:max-w-[540px] xl:hidden"
          data-qa="home-avatar-mobile"
        >
          <Avatar />
        </motion.div>

        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[680px]">
          <motion.p
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 text-xs font-semibold uppercase tracking-normal text-accent sm:text-sm"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.p
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-3 max-w-[620px] text-base font-semibold leading-snug text-white sm:text-lg md:max-w-[720px] xl:mx-0"
          >
            {personalInfo.name}
          </motion.p>

          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-4 max-w-[680px] text-sm font-light leading-relaxed text-white/75 sm:text-base md:max-w-[760px] xl:mx-0"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.h1
            variants={fadeIn("down", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-5 break-words text-[32px] font-semibold leading-tight text-white sm:text-[38px] md:text-[48px] lg:text-[50px] xl:text-[48px] 2xl:text-[54px]"
            data-qa="home-title"
          >
            {hero.title}
          </motion.h1>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-5 inline-flex max-w-full items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-white xl:mx-0"
          >
            <span
              className="mr-2 h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            <span className="min-w-0 break-words">{hero.highlight}</span>
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-6 max-w-[700px] text-sm leading-relaxed text-white/65 sm:text-base md:max-w-[760px] xl:mx-0"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center xl:justify-start"
            data-qa="home-ctas"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-[48px] w-full min-w-0 items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary sm:w-auto sm:px-5"
            >
              <span className="min-w-0 break-words">{hero.primaryCta.label}</span>
              <HiArrowRight className="shrink-0 text-lg" aria-hidden />
            </Link>

            <Link
              href={cvDownload.href}
              download={cvDownload.fileName}
              className="inline-flex h-[48px] w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary sm:w-auto sm:px-5"
            >
              <span className="min-w-0 break-words">
                {hero.secondaryCta.label}
              </span>
              <HiArrowDownTray className="shrink-0 text-lg" aria-hidden />
            </Link>

            <a
              href={hero.tertiaryCta.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-[48px] w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary sm:w-auto sm:px-5"
            >
              <span className="min-w-0 break-words">
                {hero.tertiaryCta.label}
              </span>
              <HiCodeBracket className="shrink-0 text-lg" aria-hidden />
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
            data-qa="home-stats"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[100px] min-w-0 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-4 backdrop-blur-sm"
              >
                <div className="break-words text-lg font-semibold leading-tight text-white sm:text-xl">
                  {stat.value}
                </div>
                {stat.suffix && (
                  <div className="text-[11px] font-semibold uppercase leading-tight tracking-normal text-accent">
                    {stat.suffix}
                  </div>
                )}
                <div className="mt-2 break-words text-[11px] leading-snug text-white/60 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="pointer-events-none hidden h-[72vh] max-h-[678px] min-h-[460px] w-full max-w-[737px] select-none items-end justify-center justify-self-end xl:flex"
          data-qa="home-avatar-desktop"
        >
          <Avatar />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
