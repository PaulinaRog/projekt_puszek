import Layout from "@/components/Layout";
import Sign from "@/components/Sign";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  return (
    <Layout>
      <div className="p-4 pb-10 sm:max-w-sm max-w-[90vw] mx-auto bg-secondary-light dark:bg-secondary-dark my-20  flex flex-col">
        <h1 className="text-xl">Rejestracja</h1>
        <Sign
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <button
          className="py-2 px-4 mt-10 rounded self-end w-1/2"
          type="button"
          onClick={handleSignUp}
        >
          Zarejestruj
        </button>
      </div>
    </Layout>
  );
}
