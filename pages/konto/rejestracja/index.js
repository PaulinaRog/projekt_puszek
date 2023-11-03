import Layout from "@/components/Layout";
import LogWith from "@/components/LogWith";
import Sign from "@/components/Sign";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState(false);

  function validateField(value, pattern) {
    return pattern.test(value);
  }

  const isValidEmail = validateField(
    email,
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );
  const isValidPass = validateField(
    password,
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/
  );

  const handleSignUp = async () => {
    if (isValidEmail && isValidPass) {
      setEmailError(false);
      setPassError(false);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `http://localhost:3000/konto/weryfikacja-email`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
      if (!error) {
        setMessage(true);
      }
    } else {
      setEmailError(!isValidEmail);
      setPassError(!isValidPass);
    }
  };

  return (
    <Layout>
      <div className="p-4 pb-10 rounded-xl sm:max-w-sm max-w-[90vw] mx-auto bg-secondary-light dark:bg-secondary-dark my-20  flex flex-col">
        <h1 className="text-xl">Rejestracja</h1>
        <Sign
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          emailError={emailError}
          passError={passError}
        />
        <div className="mt-3 flex flex-col text-red-600 dark:text-red-400 text-xs">
          {emailError ? <span>nieprawidłowy format email</span> : null}
          {passError ? (
            <span>
              hasło powinno składać się z 8 lub więcej znaków i zawierać
              przynajmniej jedną wielką literę i znak szczególny
            </span>
          ) : null}
          {errorMessage ? <span>{errorMessage}</span> : null}
          {message ? (
            <span className="text-green-600 dark:text-green-400">
              Zarejestrowano pomyślnie! Żeby kontynuować, przejdź do swojej
              skrzynki i potwierdź adres e-mail.
            </span>
          ) : null}
        </div>
        <button
          className="py-2 px-4 mt-6 rounded mb-5"
          type="button"
          onClick={handleSignUp}
        >
          Zarejestruj
        </button>
        <LogWith />
        <div className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
          <span className="mr-1">Nie masz jeszcze konta?</span>
          <Link href="/konto/logowanie" className="underline">
            Zaloguj się
          </Link>
        </div>
      </div>
    </Layout>
  );
}
