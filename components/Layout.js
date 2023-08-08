import React, { useEffect, useState } from "react";
import logoLight from "../public/logo/logo-long-light-acc.png";
import logoDark from "../public/logo/logo-long-dark-acc.png";
import Image from "next/image";
import Link from "next/link";
import { nav } from "@/services/Nav";
import { useRouter } from "next/router";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logo, setLogo] = useState(logoLight);
  const [menuVisible, setMenuVisible] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState({});

  const router = useRouter();
  const currentRoute = router.asPath;
  const isBlogPage = currentRoute.startsWith("/blog");

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode");
    setIsDarkMode(isDark === "true");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
      setLogo(e.matches ? logoDark : logoLight);
    };
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      const isDark = !prevState;
      localStorage.setItem("darkMode", isDark.toString());
      setLogo(isDark ? logoDark : logoLight);
      return isDark;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setLogo(isDarkMode ? logoDark : logoLight);
  }, [isDarkMode]);

  const toggleShowSub = (linkId) => {
    setShowSubcategories((prevState) => ({
      ...prevState,
      [linkId]: !prevState[linkId],
    }));
  };

  return (
    <div className="flex flex-col h-full w-full text-txt-light dark:text-txt-dark">
      <header className="w-full h-fit">
        <div className="flex w-full justify-between items-center p-5 bg-bg-light dark:bg-bg-dark">
          <Link href="/">
            <Image
              width={350}
              height={60}
              src={logo}
              alt="home page"
              className="w-[80%] sm:max-w-none"
            />
          </Link>

          <nav
            className={`duration-500 fixed z-30 left-0 right-0 pb-5 pl-10 top-0 bottom-0 bg-bg-light dark:bg-bg-dark pt-[100px] ${
              menuVisible ? "translate-x-0" : "translate-x-[100%]"
            }
      lg:translate-x-0 lg:bg-transparent flex lg:flex-row gap-3 flex-col lg:w-[40vw] lg:justify-between lg:pb-0 lg:pl-0 lg:left-auto lg:right-auto lg:top-auto lg:static lg:pt-0`}
          >
            {nav.map((link) => {
              const isCurrentRoute =
                currentRoute.startsWith(link.link) ||
                currentRoute === link.link;

              return (
                <React.Fragment key={link.id}>
                  <div className="flex justify-between pr-5 items-center">
                    <Link
                      href={link.link}
                      className={`${
                        isCurrentRoute
                          ? "text-acc-light dark:text-acc-dark"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.sub ? (
                      <button
                        className="rounded-full px-1 py-1 shadow-none lg:hidden"
                        onClick={() => toggleShowSub(link.id)}
                      >
                        {showSubcategories[link.id] ? (
                          <i className="fa-solid fa-chevron-up"></i>
                        ) : (
                          <i className="fa-solid fa-chevron-down"></i>
                        )}
                      </button>
                    ) : null}
                  </div>
                  {showSubcategories[link.id] && (
                    <div className="flex flex-col gap-2 pl-10 lg:hidden">
                      {link.sub &&
                        link.sub.length > 0 &&
                        link.sub.map((subCat) => (
                          <Link
                            key={subCat.name}
                            href={subCat.link}
                            className={`${
                              currentRoute.startsWith(subCat.link) ||
                              currentRoute === subCat.link
                                ? "text-acc-light dark:text-acc-dark"
                                : ""
                            }`}
                          >
                            {subCat.name}
                          </Link>
                        ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            <Link href="">
              <i className="fa-solid fa-circle-user"></i>
            </Link>
          </nav>
          <button
            aria-label="menu"
            className="relative z-30 lg:hidden shadow-none"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {menuVisible ? (
              <span className="block rotate-45 mt-1">
                <span className="w-[25px] h-[3px] block bg-txt-light dark:bg-txt-dark "></span>
                <span className="w-[25px] h-[3px] block rotate-90 bg-txt-light dark:bg-txt-dark -translate-y-[4px]"></span>
              </span>
            ) : (
              <>
                <span className="w-[25px] h-[3px] block bg-txt-light dark:bg-txt-dark mt-1"></span>
                <span className="w-[25px] h-[3px] block bg-txt-light dark:bg-txt-dark mt-1"></span>
                <span className="w-[25px] h-[3px] block bg-txt-light dark:bg-txt-dark mt-1"></span>
              </>
            )}
          </button>
        </div>
        <div className="h-[7vh] w-full bg-secondary-light dark:bg-secondary-dark hidden lg:flex justify-evenly items-center">
          {nav[isBlogPage ? 1 : 0].sub.map((subCat) => {
            return (
              <Link
                key={subCat.name}
                href={subCat.link}
                className={`${
                  currentRoute.startsWith(subCat.link) ||
                  currentRoute === subCat.link
                    ? "text-acc-light dark:text-acc-dark"
                    : ""
                }`}
              >
                {subCat.name}
              </Link>
            );
          })}
        </div>
        <CookieConsent />
      </header>
      <main>{children}</main>
      <footer className="w-full h-fit bg-secondary-light dark:bg-secondary-dark flex lg:flex-row flex-col lg:items-start gap-3 justify-between p-3">
        <div className="flex flex-col items-center lg:items-start">
          <Image
            width={250}
            height={40}
            src={logo}
            alt="home page"
            className="mb-3"
          />
          <span>&copy; Projekt Puszek 2023</span>
          <span>rog.paulina@gmail.com</span>
          <span>tel: +48 721 704 787</span>
        </div>
        <nav className="flex lg:w-[50vw] lg:justify-between lg:flex-row flex-col items-center lg:items-start p-2">
          {nav.map((n) => {
            return (
              <div
                key={n.id}
                className="flex flex-col mb-5 lg:mb-0 lg:items-start items-center"
              >
                <Link href={n.link}>{n.name}</Link>
                <div className="flex flex-col gap-2 pt-3 lg:items-start items-center">
                  {n.sub &&
                    n.sub.length > 0 &&
                    n.sub.map((subCat) => (
                      <Link key={subCat.name} href={subCat.link}>
                        {subCat.name.toLowerCase()}
                      </Link>
                    ))}
                </div>
              </div>
            );
          })}
        </nav>
        <button onClick={toggleDarkMode} className="shadow-none w-fit p-2">
          {isDarkMode ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
        </button>
      </footer>
    </div>
  );
}
