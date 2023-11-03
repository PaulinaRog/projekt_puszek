import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";

export default function LogWith() {
  const supabase = createClientComponentClient();

  const handleLogInWithGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `http://localhost:3000/konto/logowanie`,
        },
      });
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleLogInWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: `http://localhost:3000/konto/logowanie`,
      },
    });
    if (error) {
      console.log(error);
    } else if (!error) {
      console.log(data);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-5">
        <div className="h-[0.5px] bg-acc-light dark:bg-acc-dark w-[50px]"></div>
        <span className="text-sm">LUB</span>
        <div className="h-[0.5px] bg-acc-light dark:bg-acc-dark w-[50px]"></div>
      </div>
      <div className="flex gap-5 justify-center mt-2">
        <button
          className="py-2 px-3 mt-3 w-10 rounded-full"
          onClick={handleLogInWithGoogle}
        >
          <i className="fa-brands fa-google"></i>
        </button>
        <button
          className="py-2 px-3 mt-3 w-10 rounded-full"
          onClick={handleLogInWithFacebook}
        >
          <i className="fa-brands fa-facebook-f"></i>
        </button>
      </div>
    </>
  );
}
