import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiBriefcase,
  HiCheckBadge,
  HiShieldCheck,
} from "react-icons/hi2";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import portfolioData from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const SectionCard = ({ children, className = "" }) => (
  <div
    className={`rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 ${className}`}
  >
    {children}
  </div>
);

const SectionHeader = ({ icon: Icon, eyebrow, title }) => (
  <div className="mb-5 flex items-center justify-center gap-3 xl:justify-start">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
      <Icon className="text-xl" aria-hidden />
    </div>
    <div>
      <p className="text-xs font-semibold uppercase leading-none tracking-normal text-accent">
        {eyebrow}
      </p>
      <h3 className="mt-1 text-xl font-semibold leading-tight text-white">
        {title}
      </h3>
    </div>
  </div>
);

const Tag = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs leading-tight text-white/75">
    {children}
  </span>
);

const DetailRow = ({ label, value }) => (
  <div className="grid gap-1 border-b border-white/10 py-3 last:border-b-0 sm:grid-cols-[132px_1fr] sm:gap-4">
    <dt className="text-xs font-semibold uppercase tracking-normal text-white/40">
      {label}
    </dt>
    <dd className="text-sm leading-relaxed text-white/75">{value}</dd>
  </div>
);

const About = () => {
  const { about, education, experience, personalInfo } = portfolioData;
  const primaryExperience = experience[0];
  const courseworkEducation = education.find((item) => item.coursework?.length);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-primary/30 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="pointer-events-none hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="relative z-10 min-h-screen bg-gradient-to-r from-primary/40 via-primary/20 to-black/20">
        <div className="container mx-auto flex min-h-screen flex-col px-4 pb-32 pt-[190px] sm:pt-44 lg:pt-40 xl:pb-24 xl:pt-32">
          <div className="mx-auto w-full max-w-[1160px]">
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-8 max-w-[850px] xl:mx-0"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-accent sm:text-sm">
                {personalInfo.roleFocus}
              </p>
              <h2 className="h2 mb-5">
                About <span className="text-accent">Me</span>
              </h2>
              <p className="mx-auto max-w-[820px] text-sm leading-relaxed text-white/70 sm:text-base xl:mx-0">
                {about.summary}
              </p>
            </motion.div>

            <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <SectionCard className="h-full">
                  <SectionHeader
                    icon={HiShieldCheck}
                    eyebrow="Security Direction"
                    title="Focus Areas"
                  />
                  <div className="flex flex-wrap justify-center gap-2 xl:justify-start">
                    {about.focusAreas.map((area) => (
                      <Tag key={area}>{area}</Tag>
                    ))}
                  </div>
                </SectionCard>
              </motion.div>

              {primaryExperience && (
                <motion.div
                  variants={fadeIn("left", 0.25)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <SectionCard>
                    <SectionHeader
                      icon={HiBriefcase}
                      eyebrow="Professional Experience"
                      title={primaryExperience.role}
                    />

                    <dl className="mb-5 text-left">
                      <DetailRow
                        label="Organization"
                        value={primaryExperience.organization}
                      />
                      <DetailRow label="Period" value={primaryExperience.period} />
                      <DetailRow
                        label="Duration"
                        value={primaryExperience.duration}
                      />
                      <DetailRow
                        label="Supervisor"
                        value={primaryExperience.supervisor}
                      />
                    </dl>

                    <p className="mb-5 text-sm leading-relaxed text-white/70">
                      {primaryExperience.summary}
                    </p>

                    <ul className="grid gap-3 text-left sm:grid-cols-2">
                      {primaryExperience.responsibilities.map(
                        (responsibility) => (
                          <li
                            key={responsibility}
                            className="flex gap-3 text-sm leading-relaxed text-white/70"
                          >
                            <HiCheckBadge
                              className="mt-1 shrink-0 text-accent"
                              aria-hidden
                            />
                            <span>{responsibility}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </SectionCard>
                </motion.div>
              )}
            </div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-5"
            >
              <SectionCard>
                <SectionHeader
                  icon={HiAcademicCap}
                  eyebrow="Academic Foundation"
                  title="Education"
                />

                <div className="grid gap-4 lg:grid-cols-3">
                  {education.map((item) => (
                    <article
                      key={`${item.degree}-${item.period}`}
                      className="rounded-lg border border-white/10 bg-black/10 p-4 text-left"
                    >
                      <h4 className="mb-2 text-base font-semibold leading-tight text-white">
                        {item.degree}
                      </h4>
                      <p className="mb-3 text-sm leading-relaxed text-white/65">
                        {item.institution}
                      </p>
                      <div className="space-y-2 text-sm leading-relaxed text-white/60">
                        <p>{item.period}</p>
                        <p>{item.result}</p>
                      </div>
                    </article>
                  ))}
                </div>

                {courseworkEducation && (
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h4 className="mb-4 text-center text-base font-semibold text-white xl:text-left">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2 xl:justify-start">
                      {courseworkEducation.coursework.map((course) => (
                        <Tag key={course}>{course}</Tag>
                      ))}
                    </div>
                  </div>
                )}
              </SectionCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
