import React, { useEffect, useState } from "react";
import "styles/input.css";

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps} isDarkMode={isDarkMode} />
    </>
  );
}
