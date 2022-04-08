import Link from "next/link";
import React from "react";
import Layout from "@/components/Layout";

export default function Info() {
  return (
    <div>
      <Layout>
        <h1>Info</h1>
        <Link href={"/"} passHref>
          <p>
            App to keep you up to date with the current sport thats in season
            players ,games , injured list and more
          </p>
        </Link>
      </Layout>
    </div>
  );
}
