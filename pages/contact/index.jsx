import { motion } from "framer-motion";
import {
  BsDownload,
  BsEnvelope,
  BsGeoAlt,
  BsGithub,
  BsGlobe,
  BsLinkedin,
  BsTelephone,
} from "react-icons/bs";

import portfolioData from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const externalRel = "noreferrer noopener";

const ctaIconByLabel = {
  "Email Me": BsEnvelope,
  GitHub: BsGithub,
  LinkedIn: BsLinkedin,
  "Download CV": BsDownload,
};

const isExternalLink = (href = "") => href.startsWith("http");

const Contact = () => {
  const { personalInfo, contact, references, cvDownload } = portfolioData;

  const phoneHref = contact.phone
    ? `tel:${contact.phone.replace(/[^\d+]/g, "")}`
    : "";

  const contactCards = [
    {
      label: "Email",
      value: contact.email || personalInfo.email,
      href: contact.emailHref || personalInfo.emailHref,
      icon: BsEnvelope,
      ariaLabel: `Email ${personalInfo.name}`,
    },
    {
      label: "Phone",
      value: contact.phone || personalInfo.phone,
      href: phoneHref,
      icon: BsTelephone,
      ariaLabel: `Call ${personalInfo.name}`,
    },
    {
      label: "Location",
      value: contact.location || personalInfo.location,
      href: "",
      icon: BsGeoAlt,
      ariaLabel: `${personalInfo.name} location`,
    },
    {
      label: "Portfolio",
      value: contact.portfolio || personalInfo.portfolioUrl,
      href: contact.portfolio || personalInfo.portfolioUrl,
      icon: BsGlobe,
      ariaLabel: `Open ${personalInfo.name} portfolio`,
    },
    {
      label: "GitHub",
      value: contact.github || personalInfo.githubUrl,
      href: contact.github || personalInfo.githubUrl,
      icon: BsGithub,
      ariaLabel: `Open ${personalInfo.name} GitHub profile`,
    },
    {
      label: "LinkedIn",
      value: contact.linkedin || personalInfo.linkedinUrl,
      href: contact.linkedin || personalInfo.linkedinUrl,
      icon: BsLinkedin,
      ariaLabel: `Open ${personalInfo.name} LinkedIn profile`,
    },
  ].filter((item) => item.value);

  const ctas = (contact.cta || [])
    .map((cta) =>
      cta.label === cvDownload.label ? { ...cta, href: cvDownload.href } : cta
    )
    .filter((cta) => cta.href);

  const referenceNote =
    "Reference contact details are available in the downloadable CV.";

  return (
    <div className="min-h-screen bg-primary/30">
      <div className="container mx-auto min-h-screen px-4 pb-32 pt-[170px] sm:pt-44 lg:pt-36 xl:pb-24 xl:pt-32">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center xl:text-left"
          >
            <h2 className="h2 mb-4">Contact</h2>
            <p className="mx-auto max-w-[780px] text-base leading-relaxed text-white/70 xl:mx-0">
              {personalInfo.name} is open to cybersecurity research
              opportunities, MSc cybersecurity opportunities, junior
              cybersecurity analyst roles, web/API security testing, and
              security-focused software projects.
            </p>
          </motion.div>

          <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
            <motion.aside
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10"
            >
              <div className="mb-5 inline-flex rounded-full border border-accent/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Public profile
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">
                {personalInfo.name}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-white/70">
                {personalInfo.headline}
              </p>
              <div className="mb-5 flex items-center justify-center gap-2 text-sm text-white/70 xl:justify-start">
                <BsGeoAlt className="text-accent" aria-hidden />
                <span>{personalInfo.location}</span>
              </div>
              <p className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-white/70">
                {personalInfo.availabilityNote}
              </p>
            </motion.aside>

            <motion.section
              variants={fadeIn("left", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              aria-labelledby="contact-details-title"
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10"
            >
              <div className="mb-5 flex flex-col gap-2 text-center xl:text-left">
                <h3
                  id="contact-details-title"
                  className="text-2xl font-semibold text-white"
                >
                  Public Contact
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Use these public links for direct contact and professional
                  profile review.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  const isExternal = isExternalLink(item.href);
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-xl text-accent">
                        <Icon aria-hidden />
                      </span>
                      <span className="min-w-0 text-left">
                        <span className="block text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                          {item.label}
                        </span>
                        <span className="block break-words text-sm text-white/80">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  if (!item.href) {
                    return (
                      <div
                        key={item.label}
                        className="flex min-h-[92px] items-center gap-4 rounded-lg border border-white/10 bg-black/20 p-4"
                        aria-label={item.ariaLabel}
                      >
                        {content}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? externalRel : undefined}
                      aria-label={item.ariaLabel}
                      className="flex min-h-[92px] items-center gap-4 rounded-lg border border-white/10 bg-black/20 p-4 transition-colors duration-300 hover:border-accent/50 hover:bg-accent/10"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </motion.section>
          </div>

          <motion.section
            variants={fadeIn("up", 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
            aria-labelledby="contact-cta-title"
            className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10"
          >
            <div className="mb-5 flex flex-col gap-2 text-center xl:text-left">
              <h3
                id="contact-cta-title"
                className="text-2xl font-semibold text-white"
              >
                Direct Links
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                Email is the fastest route for research, role, testing, and
                project discussions.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ctas.map((cta) => {
                const Icon = ctaIconByLabel[cta.label] || BsGlobe;
                const isExternal = isExternalLink(cta.href);
                const isCv = cta.href === cvDownload.href;

                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? externalRel : undefined}
                    download={isCv ? cvDownload.fileName : undefined}
                    aria-label={cta.label}
                    className="btn flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/40 px-5 text-sm transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <Icon aria-hidden className="text-lg" />
                    <span>{cta.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.55)}
            initial="hidden"
            animate="show"
            exit="hidden"
            aria-labelledby="references-title"
            className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10"
          >
            <div className="mb-6 flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div>
                <h3
                  id="references-title"
                  className="mb-2 text-2xl font-semibold text-white"
                >
                  References
                </h3>
                <p className="max-w-[620px] text-sm leading-relaxed text-white/60">
                  {referenceNote}
                </p>
              </div>

              <a
                href={cvDownload.href}
                download={cvDownload.fileName}
                aria-label={cvDownload.label}
                className="btn inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/40 px-6 text-sm transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <BsDownload aria-hidden className="text-lg" />
                <span>{cvDownload.label}</span>
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {references.map((reference) => (
                <article
                  key={reference.name}
                  className="rounded-lg border border-white/10 bg-black/20 p-5"
                >
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {reference.name}
                  </h4>
                  <p className="text-sm font-medium text-accent">
                    {reference.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {reference.institution}
                  </p>
                </article>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
