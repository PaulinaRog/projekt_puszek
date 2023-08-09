import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function Verification() {
  return (
    <Layout>
      <div className="h-[80vh] w-full flex justify-center items-center">
        <span>Dziękujemy za potwierdzenie adresu e-mail!</span>
        <span>Kliknij tutaj, żeby wrócić do strony logowania:</span>
        <Link href="/konto">Powrót</Link>
      </div>
    </Layout>
  );
}
