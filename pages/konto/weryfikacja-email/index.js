import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Verification() {
  const router = useRouter();
  const token = router.query.query;

  useEffect(() => {
    if (token) {
      router.push(token);
    }
  }, [token]);

  return (
    <Layout>
      <div className="h-[80vh] w-full flex flex-col justify-center items-center">
        <span>Dziękujemy za potwierdzenie adresu e-mail!</span>
        <span>Kliknij tutaj, żeby wrócić do strony logowania:</span>
        <Link href="/konto">Powrót</Link>
      </div>
    </Layout>
  );
}
