import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiArrowDownTray,
  HiArrowRight,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import TestimonialSlider from "../../components/TestimonialSlider";
import portfolioData from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const CtaLink = ({ href, children, download, icon: Icon, external = false }) => {
  const className =
    "inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={className}
      >
        {children}
        <Icon className="text-lg" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} download={download} className={className}>
      {children}
      <Icon className="text-lg" aria-hidden />
    </Link>
  );
};

const Testimonials = () => {
  const {
    awards,
    certifications,
    cvDownload,
    hero,
    languagesAndTests,
    leadership,
    personalInfo,
    publications,
    seminars,
  } = portfolioData;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-primary/30 text-center xl:text-left">
      <Circles />

      <div className="relative z-10 min-h-screen bg-gradient-to-r from-primary/40 via-primary/20 to-black/20">
        <div className="container mx-auto flex min-h-screen flex-col px-4 pb-32 pt-[190px] sm:pt-44 lg:pt-40 xl:pb-24 xl:pt-32">
          <div className="mx-auto w-full max-w-[1180px]">
            <motion.div
              variants={fadeIn("down", 0.15)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-8 max-w-[900px] xl:mx-0"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-accent sm:text-sm">
                {personalInfo.roleFocus}
              </p>
              <h2 className="h2 mb-5">
                Credentials & Research <span className="text-accent">.</span>
              </h2>
              <p className="mx-auto mb-4 max-w-[860px] text-sm font-semibold leading-relaxed text-white/75 sm:text-base xl:mx-0">
                {personalInfo.headline}
              </p>
              <p className="mx-auto max-w-[860px] text-sm leading-relaxed text-white/65 sm:text-base xl:mx-0">
                A consolidated view of published and under-review cybersecurity
                research, olympiad achievements, verified training credentials,
                English and academic test results, leadership, community work,
                and seminars.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <TestimonialSlider
                awards={awards}
                certifications={certifications}
                languagesAndTests={languagesAndTests}
                leadership={leadership}
                publications={publications}
                seminars={seminars}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8 flex flex-wrap justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm xl:justify-between"
            >
              <p className="max-w-[650px] text-sm leading-relaxed text-white/65">
                Verification links open externally where a public credential or
                DOI is available. Reference contact details are intentionally
                kept out of this public page.
              </p>
              <div className="flex flex-wrap justify-center gap-3 xl:justify-end">
                <CtaLink
                  href={cvDownload.href}
                  download={cvDownload.fileName}
                  icon={HiArrowDownTray}
                >
                  {cvDownload.label}
                </CtaLink>
                <CtaLink href={hero.primaryCta.href} icon={HiArrowRight}>
                  {hero.primaryCta.label}
                </CtaLink>
                <CtaLink
                  href={personalInfo.githubUrl}
                  icon={HiArrowTopRightOnSquare}
                  external
                >
                  GitHub
                </CtaLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Testimonials;
