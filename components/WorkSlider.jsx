import {
  HiArrowTopRightOnSquare,
  HiDocumentText,
  HiLockClosed,
  HiStar,
} from "react-icons/hi2";

const Tag = ({ children }) => (
  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold leading-tight text-white/75">
    {children}
  </span>
);

const ProjectLink = ({ project }) => {
  if (project.hasPublicLink && project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-xs font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
      >
        {project.linkLabel || "View Project"}
        <HiArrowTopRightOnSquare className="text-base" aria-hidden />
      </a>
    );
  }

  return (
    <span className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-xs font-semibold leading-tight text-white/55">
      <HiLockClosed className="text-base text-accent" aria-hidden />
      {project.linkLabel || "Report / details available on request"}
    </span>
  );
};

const ProjectCard = ({ project }) => (
  <article
    className={`group flex h-full min-h-[360px] flex-col rounded-lg border bg-white/[0.04] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:bg-accent/10 sm:p-6 ${
      project.featured
        ? "border-accent/35 shadow-[0_0_28px_rgba(232,56,204,0.08)]"
        : "border-white/10 hover:border-accent/30"
    }`}
  >
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
          <HiDocumentText className="text-2xl" aria-hidden />
        </div>
        <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[11px] font-semibold leading-tight text-white/65">
          {project.category}
        </span>
      </div>

      {project.featured && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold leading-tight text-accent">
          <HiStar className="text-sm" aria-hidden />
          Featured
        </span>
      )}
    </div>

    <h4 className="mb-3 text-lg font-semibold leading-tight text-white">
      {project.title}
    </h4>
    <p className="mb-5 text-sm leading-relaxed text-white/65">
      {project.description}
    </p>

    <div className="mb-6 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <Tag key={`${project.title}-${tag}`}>{tag}</Tag>
      ))}
    </div>

    <div className="mt-auto">
      <ProjectLink project={project} />
    </div>
  </article>
);

const WorkSlider = ({ projects }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default WorkSlider;
