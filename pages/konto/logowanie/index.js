import Layout from "@/components/Layout";
import LogWith from "@/components/LogWith";
import ResetModal from "@/components/ResetModal";
import Sign from "@/components/Sign";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();
  const [modal, setModal] = useState(false);

  const handleSignIn = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        emailRedirectTo: `http://localhost:3000/`,
      },
    });
    if (user) {
      sessionStorage.setItem("session", user.access_token);
      router.push("/");
    }
  };

  return (
    <Layout>
      <div className="p-4 pb-10 rounded-xl sm:max-w-sm max-w-[90vw] mx-auto bg-secondary-light dark:bg-secondary-dark my-20 flex flex-col">
        <h1 className="text-xl">Logowanie</h1>
        <Sign
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <label
          htmlFor="persist"
          className="cursor-pointer text-sm text-stone-500 dark:text-stone-400 hover:text-acc-light hover:dark:text-acc-dark"
        >
          <input
            type="checkbox"
            id="persist"
            className="mr-3 mt-5 cursor-pointer"
            // onChange={() => {
            //   setRememberMeChecked(!rememberMeChecked);
            // }}
          />
          Zapamiętaj mnie
        </label>
        <button
          className="py-2 px-3 mt-5 rounded"
          type="button"
          onClick={handleSignIn}
        >
          Zaloguj
        </button>
        <span
          className="mt-2 self-end text-stone-500 dark:text-stone-400 text-sm cursor-pointer hover:text-acc-light hover:dark:text-acc-dark"
          onClick={() => {
            setModal(true);
          }}
        >
          Zapomniałeś hasła?
        </span>
        <LogWith />
        <div className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
          <span className="mr-1">Nie masz jeszcze konta?</span>
          <Link href="/konto/rejestracja" className="underline">
            Zarejestruj się
          </Link>
        </div>
        <ResetModal modal={modal} setModal={setModal} />
      </div>
    </Layout>
  );
}
