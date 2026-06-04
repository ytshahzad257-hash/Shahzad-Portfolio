import Link from "next/link";

import {
  RiGithubLine,
  RiGlobalLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

import portfolioData from "../data/portfolioData";

const iconMap = {
  github: RiGithubLine,
  linkedin: RiLinkedinLine,
  globe: RiGlobalLine,
  mail: RiMailLine,
};

export const socialData = portfolioData.socials.map((social) => ({
  ...social,
  Icon: iconMap[social.iconKey] || RiGlobalLine,
}));

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social) => {
        const isEmail = social.url.startsWith("mailto:");

        return (
          <Link
            key={social.name}
            title={social.label}
            href={social.url}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noreferrer noopener"}
            aria-label={social.label}
            className={`${
              social.name === "github"
                ? "bg-accent rounded-full p-[5px] hover:text-white"
                : "hover:text-accent"
            } transition-all duration-300`}
          >
            <social.Icon aria-hidden />
            <span className="sr-only">{social.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
