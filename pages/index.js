import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import main from "../assets/main.png";

export default function Index() {
  return (
    <>
      <Head>
        <title>Projekt Puszek</title>
      </Head>
      <Layout>
        <div className="h-[100vh] w-full container ">
          <div className="w-full my-[70px] flex lg:flex-row flex-col lg:gap-0 gap-10 justify-evenly items-center">
            <div className="lg:w-[450px] w-[85vw] lg:p-0 p-5 lg:h-[400px] bg-secondary-light dark:bg-secondary-dark rounded-xl flex flex-col justify-center lg:items-center gap-5">
              <div className="flex flex-col pb-1">
                <label htmlFor="city">
                  Miasto, województwo lub kod pocztowy:
                </label>
                <input
                  type="text"
                  id="city"
                  className="lg:w-[300px] w-[75vw]"
                />
              </div>
              <div className="flex flex-col pb-1">
                <label htmlFor="type">Typ zwierzaka:</label>
                <input
                  type="text"
                  id="type"
                  className="lg:w-[300px] w-[75vw]"
                />
              </div>
              <div className="flex gap-5 self-end items-center lg:px-10 px-5 lg:mt-10 mt-3">
                <span>Szukaj</span>
                <button className="rounded-[50%] py-3 px-5">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <Image src={main} width={600} height={400} alt="banner" />
          </div>
        </div>
      </Layout>
    </>
  );
}
