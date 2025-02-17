// src/components/AuthGuard.tsx

"use client";

import { useSession } from "next-auth/react";
import { ReactNode, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the component is mounted
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent SSR mismatch by returning null before mount
    return null;
  }

  if (status === "loading") {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!session) {
    router.push("/prihlasenie");
    return null;
  }

  return <>{children}</>;
}
