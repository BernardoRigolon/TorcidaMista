"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
          <SessionProvider>
          <Header />
          {children}
          <Footer />
          </SessionProvider>
        </div>
    );
  }