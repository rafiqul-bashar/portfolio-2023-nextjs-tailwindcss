"use client";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isHome = pathname === "/";
  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return (
    <>
      {loading && isHome ? (
        <SplashScreen finishLoading={() => setLoading(false)} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
