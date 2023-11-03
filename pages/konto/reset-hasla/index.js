import Layout from "@/components/Layout";
import supabase from "@/services/CreateSupabaseClient";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function index() {
  const [toggle, setToggle] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const token = router.query.query;

  useEffect(() => {
    if (token) {
      router.push(token);
    }
  }, [token]);

  const handleReset = async () => {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="p-4 pb-10 rounded-xl sm:max-w-sm max-w-[90vw] mx-auto bg-secondary-light dark:bg-secondary-dark my-20 flex flex-col">
        <label className="block mb-1 mt-6" htmlFor="password">
          Nowe hasło
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            <input className="hidden js-password-toggle" type="checkbox" />
            <label
              className=" rounded px-2 py-1 text-txt-light dark:text-txt-dark text-sm cursor-pointer js-password-label"
              htmlFor="toggle"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {toggle === false ? (
                <i className="fa-regular fa-eye"></i>
              ) : (
                <i className="fa-regular fa-eye-slash"></i>
              )}
            </label>
          </div>
          <input
            id="password"
            type={toggle === false ? "password" : "text"}
            className="w-full py-3 px-3 leading-tight js-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="false"
          />
        </div>

        <button
          className="py-2 px-3 mt-10 rounded"
          type="button"
          onClick={handleReset}
        >
          Prześlij
        </button>
      </div>
    </Layout>
  );
}
