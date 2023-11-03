import Layout from "@/components/Layout";
import React from "react";

export default function index() {
  return (
    <Layout>
      <div className="flex flex-col">
        <Link href="/pomoc/polityka-prywatnosci">Polityka prywatności</Link>
        <Link href="/pomoc/warunki">Warunki korzystania z aplikacji</Link>
      </div>
    </Layout>
  );
}
