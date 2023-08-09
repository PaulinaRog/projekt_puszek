import Layout from "@/components/Layout";
import Sign from "@/components/Sign";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
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
        <button
          className="w-1/2 py-2 px-3 mt-10 rounded self-end"
          type="button"
          onClick={handleSignIn}
        >
          Zaloguj
        </button>
      </div>
    </Layout>
  );
}
