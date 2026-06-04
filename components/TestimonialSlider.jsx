import {
  HiAcademicCap,
  HiArrowTopRightOnSquare,
  HiBriefcase,
  HiCheckBadge,
  HiDocumentText,
  HiShieldCheck,
  HiStar,
} from "react-icons/hi2";

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

const Badge = ({ children, accent = false }) => (
  <span
    className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold leading-tight ${
      accent
        ? "border-accent/30 bg-accent/10 text-accent"
        : "border-white/10 bg-white/[0.05] text-white/65"
    }`}
  >
    {children}
  </span>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex h-[38px] items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-xs font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
  >
    {children}
    <HiArrowTopRightOnSquare className="text-base" aria-hidden />
  </a>
);

const PublicationCard = ({ publication }) => (
  <article
    className={`flex h-full flex-col rounded-lg border bg-white/[0.04] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:bg-accent/10 sm:p-6 ${
      publication.featured
        ? "border-accent/35 shadow-[0_0_28px_rgba(241,48,36,0.08)]"
        : "border-white/10 hover:border-accent/30"
    }`}
  >
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <Badge accent={publication.status === "Published"}>
        {publication.status}
      </Badge>
      <Badge>{publication.type}</Badge>
    </div>

    <h4 className="mb-4 text-lg font-semibold leading-tight text-white">
      {publication.title}
    </h4>

    <div className="mb-5 space-y-2 text-sm leading-relaxed text-white/65">
      <p>{publication.venue}</p>
      {publication.date && <p>{publication.date}</p>}
      {publication.manuscriptId && <p>Manuscript ID: {publication.manuscriptId}</p>}
      {publication.doi && <p>DOI: {publication.doi}</p>}
    </div>

    {publication.doiUrl && (
      <div className="mt-auto">
        <ExternalLink href={publication.doiUrl}>Open DOI</ExternalLink>
      </div>
    )}
  </article>
);

const AwardCard = ({ award }) => (
  <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent/10">
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {award.featured && (
        <Badge accent>
          <span className="inline-flex items-center gap-1.5">
            <HiStar className="text-sm" aria-hidden />
            Highlight
          </span>
        </Badge>
      )}
      <Badge>{award.category}</Badge>
      {award.date && <Badge>{award.date}</Badge>}
    </div>

    <h4 className="mb-2 text-base font-semibold leading-tight text-white">
      {award.title}
    </h4>
    <p className="mb-3 text-sm leading-relaxed text-white/70">{award.issuer}</p>
    <p className="text-sm leading-relaxed text-white/60">
      {award.description}
    </p>
  </article>
);

const CertificationCard = ({ certification }) => (
  <article className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent/10">
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <Badge>{certification.category}</Badge>
      {certification.date && <Badge>{certification.date}</Badge>}
    </div>

    <h4 className="mb-3 text-base font-semibold leading-tight text-white">
      {certification.title}
    </h4>
    <p className="mb-4 text-sm leading-relaxed text-white/70">
      {certification.provider}
    </p>

    {certification.credentialId && (
      <p className="mb-4 text-xs leading-relaxed text-white/55">
        Credential ID: {certification.credentialId}
      </p>
    )}

    {certification.verifyUrl && (
      <div className="mt-auto">
        <ExternalLink href={certification.verifyUrl}>Verify</ExternalLink>
      </div>
    )}
  </article>
);

const MiniInfoCard = ({ title, meta, description }) => (
  <article className="rounded-lg border border-white/10 bg-black/10 p-4 text-left">
    <h4 className="mb-2 text-base font-semibold leading-tight text-white">
      {title}
    </h4>
    {meta && (
      <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-accent">
        {meta}
      </p>
    )}
    {description && (
      <p className="text-sm leading-relaxed text-white/65">{description}</p>
    )}
  </article>
);

const TestimonialSlider = ({
  awards,
  certifications,
  languagesAndTests,
  leadership,
  publications,
  seminars,
}) => {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader
          icon={HiDocumentText}
          eyebrow={`${publications.length} research items`}
          title="Research Publications and Manuscripts"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {publications.map((publication) => (
            <PublicationCard
              key={`${publication.status}-${publication.title}`}
              publication={publication}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          icon={HiAcademicCap}
          eyebrow={`${awards.length} awards and tests`}
          title="Awards, Olympiads, and Tests"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {awards.map((award) => (
            <AwardCard key={`${award.issuer}-${award.title}`} award={award} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          icon={HiShieldCheck}
          eyebrow={`${certifications.length} verified credentials`}
          title="Verified Certifications and Training"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard
              key={`${certification.provider}-${certification.title}`}
              certification={certification}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            icon={HiCheckBadge}
            eyebrow="Languages and tests"
            title="Language Proficiency"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {languagesAndTests.languages.map((language) => (
              <MiniInfoCard
                key={language.language}
                title={language.language}
                meta={language.proficiency}
              />
            ))}
            {languagesAndTests.tests.map((test) => (
              <MiniInfoCard
                key={test.title}
                title={test.title}
                meta={`${test.score} ${test.result}`}
              />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader
            icon={HiBriefcase}
            eyebrow={`${leadership.length} roles`}
            title="Leadership and Community"
          />
          <div className="grid gap-4">
            {leadership.map((item) => (
              <MiniInfoCard
                key={`${item.organization}-${item.title}`}
                title={item.title}
                meta={item.organization}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          icon={HiDocumentText}
          eyebrow={`${seminars.length} seminars`}
          title="Seminars"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {seminars.map((seminar) => (
            <MiniInfoCard
              key={seminar.title}
              title={seminar.title}
              meta={seminar.role || seminar.organizer || "Seminar"}
              description={seminar.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
