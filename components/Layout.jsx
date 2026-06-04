import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import portfolioData from "../data/portfolioData";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const { personalInfo, seo } = portfolioData;
  const keywords = Array.isArray(seo.keywords)
    ? seo.keywords.join(", ")
    : seo.keywords;

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={seo.author} />
        <meta name="theme-color" content={seo.themeColor || "#f13024"} />
        <link rel="canonical" href={seo.canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={personalInfo.portfolioUrl} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
