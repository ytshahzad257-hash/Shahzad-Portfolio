import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiArrowDownTray,
  HiArrowTopRightOnSquare,
  HiCodeBracketSquare,
} from "react-icons/hi2";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
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

const Work = () => {
  const { about, cvDownload, personalInfo, projects } = portfolioData;
  const orderedProjects = [...projects].sort(
    (projectA, projectB) => Number(projectB.featured) - Number(projectA.featured)
  );
  const projectCategories = [...new Set(projects.map((project) => project.category))];
  const introLead = about.summary.split(":")[0];

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
                Projects & Security Labs <span className="text-accent">.</span>
              </h2>
              <p className="mx-auto mb-4 max-w-[850px] text-sm leading-relaxed text-white/70 sm:text-base xl:mx-0">
                {introLead}. A selection of cybersecurity, API security, AI
                security, supply-chain security, research, and secure software
                projects with reproducible evidence, OWASP mappings, dashboards,
                scanners, and remediation-focused workflows.
              </p>
              <div className="flex flex-wrap justify-center gap-2 xl:justify-start">
                {projectCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold leading-tight text-white/70"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="mb-5 flex items-center justify-center gap-3 xl:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <HiCodeBracketSquare className="text-xl" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase leading-none tracking-normal text-accent">
                    {projects.length} real projects
                  </p>
                  <h3 className="mt-1 text-xl font-semibold leading-tight text-white">
                    Featured Work First
                  </h3>
                </div>
              </div>

              <WorkSlider projects={orderedProjects} />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8 flex flex-wrap justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm xl:justify-between"
            >
              <p className="max-w-[640px] text-sm leading-relaxed text-white/65">
                Public repositories open in a new tab. Private reports and
                deeper assessment details are available on request when a public
                repository is not linked.
              </p>
              <div className="flex flex-wrap justify-center gap-3 xl:justify-end">
                <CtaLink
                  href={cvDownload.href}
                  download={cvDownload.fileName}
                  icon={HiArrowDownTray}
                >
                  {cvDownload.label}
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

export default Work;
