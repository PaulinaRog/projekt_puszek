import React, { useState } from "react";

export default function Sign({
  email,
  password,
  setEmail,
  setPassword,
  emailError,
  passError,
}) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <label className="block mb-1 mt-6" htmlFor="email">
        E-mail
      </label>
      <input
        id="email"
        className={` w-full py-3 px-3 leading-tight ${
          email && emailError
            ? " outline-red-500 outline-2 -outline-offset-2"
            : ""
        }`}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label className="block mb-1 mt-3" htmlFor="password">
        Hasło
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
          className={` w-full py-3 px-3 leading-tight ${
            password && passError
              ? "outline-red-500 outline-2 -outline-offset-2"
              : ""
          } js-password`}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
    </>
  );
}
