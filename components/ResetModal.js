import supabase from "@/services/CreateSupabaseClient";
import React, { useState } from "react";

export default function ResetModal({ modal, setModal }) {
  const [resetEmail, setResetEmail] = useState("");

  const handleSendEmail = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      resetEmail,
      {
        redirectTo: "http://localhost:3000/konto/reset-hasla",
      }
    );
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      {modal ? (
        <div className="bg-bg-light dark:bg-bg-dark flex  flex-col items-center lg:w-1/2 w-[90vw] lg:h-[70vh] sm:h-[50vh] h-[80vh] border-2 border-secondary-light dark:border-secondary-dark rounded-xl z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <i
            onClick={() => setModal(false)}
            className="fa-solid fa-xmark self-end p-5"
          ></i>
          <div className="p-4 pb-10 rounded-xl sm:max-w-sm w-[80vw] mx-auto bg-secondary-light dark:bg-secondary-dark my-20 flex flex-col">
            <h2 className="text-xl">Resetowanie hasła</h2>
            <label className="block mb-1 mt-6" htmlFor="resetEmail">
              E-mail podany przy rejestracji:
            </label>
            <input
              id="resetEmail"
              className=" w-full py-3 px-3 leading-tight"
              onChange={(e) => setResetEmail(e.target.value)}
              value={resetEmail}
            />
            <button
              className="py-2 px-3 mt-10 rounded"
              type="button"
              onClick={handleSendEmail}
            >
              Prześlij
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
