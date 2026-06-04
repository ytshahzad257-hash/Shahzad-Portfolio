import Link from "next/link";
import { usePathname } from "next/navigation";

import portfolioData from "../data/portfolioData";

// icons
import {
  HiBriefcase,
  HiEnvelope,
  HiHome,
  HiShieldCheck,
  HiTrophy,
  HiUser,
} from "react-icons/hi2";

const iconMap = {
  home: HiHome,
  user: HiUser,
  shield: HiShieldCheck,
  briefcase: HiBriefcase,
  award: HiTrophy,
  mail: HiEnvelope,
};

// nav data
export const navData = portfolioData.navigation
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((item) => ({
    ...item,
    path: item.href,
    Icon: iconMap[item.iconKey] || HiHome,
  }));

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] top-auto z-50 mx-auto flex w-full items-center justify-center px-3 xl:inset-y-0 xl:left-auto xl:right-[2%] xl:w-16 xl:px-0"
    >
      <div className="flex h-[60px] w-full max-w-[420px] items-center justify-between rounded-full border border-white/10 bg-white/10 px-3 text-xl shadow-[0_14px_44px_rgba(0,0,0,0.28)] backdrop-blur-md sm:h-[64px] sm:max-w-[440px] sm:px-5 sm:text-2xl xl:h-max xl:w-16 xl:flex-col xl:justify-center xl:gap-y-10 xl:px-0 xl:py-8 xl:text-xl">
        {navData.map((link) => (
          <Link
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary group ${
              link.path === pathname
                ? "bg-white/10 text-accent xl:bg-transparent"
                : "text-white/80"
            }`}
            href={link.path}
            key={link.name}
            aria-label={link.label}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.label}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
