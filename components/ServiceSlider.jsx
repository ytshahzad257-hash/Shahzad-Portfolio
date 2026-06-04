import { HiArrowTopRightOnSquare, HiShieldCheck } from "react-icons/hi2";

const Tag = ({ children }) => (
  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold leading-tight text-white/75">
    {children}
  </span>
);

const ServiceSlider = ({ expertise }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {expertise.map((item) => (
        <article
          key={item.title}
          className="group flex min-h-[260px] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
              <HiShieldCheck className="text-2xl" aria-hidden />
            </div>
            <HiArrowTopRightOnSquare
              className="text-2xl text-white/30 transition-all duration-300 group-hover:text-accent"
              aria-hidden
            />
          </div>

          <h4 className="mb-3 text-base font-semibold leading-tight text-white">
            {item.title}
          </h4>
          <p className="mb-5 text-sm leading-relaxed text-white/65">
            {item.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tag key={`${item.title}-${tag}`}>{tag}</Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ServiceSlider;
