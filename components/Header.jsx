import Link from "next/link";

import Socials from "../components/Socials";
import portfolioData from "../data/portfolioData";

const Header = () => {
  const { cvDownload, personalInfo } = portfolioData;

  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/5 bg-primary/75 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-2 py-3 sm:gap-3 lg:flex-row lg:py-5">
          <Link
            href="/"
            aria-label={`${personalInfo.name} home`}
            className="text-center lg:text-left"
          >
            <span className="block text-lg font-semibold leading-tight tracking-normal text-white sm:text-xl">
              {personalInfo.name}
            </span>
            <span className="block text-xs leading-tight text-white/70 sm:text-sm">
              {personalInfo.roleFocus}
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Socials />
            <Link
              href={cvDownload.href}
              download={cvDownload.fileName}
              aria-label={cvDownload.label}
              className="whitespace-nowrap rounded-full border border-white/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-normal text-white transition-all duration-300 hover:border-accent hover:bg-accent sm:px-4 sm:text-xs"
            >
              {cvDownload.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
