import React, { useEffect, useState } from "react";
import "styles/input.css";
import { CookiesProvider } from "react-cookie";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode");
    setIsDarkMode(isDark === "true");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <SessionProvider session={session}>
        <CookiesProvider>
          <Component {...pageProps} isDarkMode={isDarkMode} />
        </CookiesProvider>
      </SessionProvider>
    </>
  );
}
