"use client";
import Head from "next/head";
import Navbar from "./Navbar";
import "../app/globals.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Auth System</title>
        <meta name="description" content="User authentication system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-4 px-4">{children}</main>
    </>
  );
}
