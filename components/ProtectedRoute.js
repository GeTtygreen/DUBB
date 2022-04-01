import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProtectedRoute({ children }) {
  children: React.ReactNode;

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [router, status]);

  if (status === "loading") return null;

  return <>{children}</>;
}
