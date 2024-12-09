// src/app/(private)/layout.tsx

import AuthGuard from "@/components/AuthGuard";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

export const metadata = { title: "Private Pages | ZoškaSnap" };

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AuthGuard>
          <main>{children}</main>
        </AuthGuard>
      </body>
    </html>
  );
}
