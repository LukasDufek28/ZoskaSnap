// src/app/(public)/layout.tsx

import { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Public Pages | ZoškaSnap",
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
