import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDownTray, HiArrowRight, HiSparkles } from "react-icons/hi2";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import portfolioData from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const SkillChip = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs leading-tight text-white/75">
    {children}
  </span>
);

const SkillGroupCard = ({ group }) => (
  <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
    <h3 className="mb-4 text-lg font-semibold leading-tight text-white">
      {group.title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {group.skills.map((skill) => (
        <SkillChip key={`${group.title}-${skill}`}>{skill}</SkillChip>
      ))}
    </div>
  </article>
);

const CtaLink = ({ href, children, download, icon: Icon }) => (
  <Link
    href={href}
    download={download}
    className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
  >
    {children}
    <Icon className="text-lg" aria-hidden />
  </Link>
);

const Services = () => {
  const { about, cvDownload, expertise, hero, personalInfo, skillGroups } =
    portfolioData;
  const summaryLead = about.summary.split(":")[0];
  const primaryExpertise = expertise
    .slice(0, 4)
    .map((item) => item.title.toLowerCase())
    .join(", ");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-primary/30 text-center xl:text-left">
      <Circles />

      <div className="relative z-10 min-h-screen bg-gradient-to-r from-primary/40 via-primary/20 to-black/20">
        <div className="container mx-auto flex min-h-screen flex-col px-4 pb-32 pt-[190px] sm:pt-44 lg:pt-40 xl:pb-24 xl:pt-32">
          <div className="mx-auto w-full max-w-[1160px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-5"
            >
              Expertise & Skills <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-3 max-w-[820px] text-sm font-semibold leading-relaxed text-white/75 sm:text-base xl:mx-0"
            >
              {personalInfo.headline}
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-8 max-w-[820px] text-sm leading-relaxed text-white/65 sm:text-base xl:mx-0"
            >
              {summaryLead}. {personalInfo.name} focuses on {primaryExpertise},
              security evidence reporting, and reproducible cybersecurity
              research labs.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="mb-5 flex items-center justify-center gap-3 xl:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <HiSparkles className="text-xl" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase leading-none tracking-normal text-accent">
                    {about.focusAreas[0]}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold leading-tight text-white">
                    Expertise Cards
                  </h3>
                </div>
              </div>

              <ServiceSlider expertise={expertise} />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8"
            >
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-normal text-accent">
                  Tools, Testing, Standards
                </p>
                <h3 className="mt-1 text-xl font-semibold leading-tight text-white">
                  Skill Groups
                </h3>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <SkillGroupCard key={group.title} group={group} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8 flex flex-wrap justify-center gap-3 xl:justify-start"
            >
              <CtaLink href={hero.primaryCta.href} icon={HiArrowRight}>
                {hero.primaryCta.label}
              </CtaLink>
              <CtaLink
                href={cvDownload.href}
                download={cvDownload.fileName}
                icon={HiArrowDownTray}
              >
                {cvDownload.label}
              </CtaLink>
            </motion.div>
          </div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;
