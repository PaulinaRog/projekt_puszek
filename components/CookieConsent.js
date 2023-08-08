import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  const handleAccept = () => {
    setShowConsent(false);
    localStorage.setItem("consent", true);
  };

  useEffect(() => {
    const consent = localStorage.getItem("consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary-light dark:bg-secondary-dark p-4 text-center flex items-center justify-center">
      <p>
        Strona korzysta z plików cookie. Kliknij "Akceptuj", aby wyrazić zgodę.
      </p>
      <button
        onClick={handleAccept}
        className=" ml-10 px-4 py-1 bg-secondary-light dark:bg-secondary-dark rounded-md hover:shadow-xl dark:hover:shadow-md"
      >
        Akceptuj
      </button>
    </div>
  );
};

export default CookieConsent;
