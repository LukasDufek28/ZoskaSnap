// src/app/(home)/page.tsx

"use client"; // This makes the component a Client Component

import { useSession } from "next-auth/react";
import NonAuthHomeView from "@/sections/NonAuthHomeView";
import AuthHomeView from "@/sections/AuthHomeView";

export const metadata = { title: "Domov | ZoškaSnap" };

export default function Home() {
  const { data: session } = useSession();
  let content;

  // Use if statement to decide which component to render
  if (session) {
    content = <AuthHomeView />;
  } else {
    content = <NonAuthHomeView />;
  }

  return content;
}


