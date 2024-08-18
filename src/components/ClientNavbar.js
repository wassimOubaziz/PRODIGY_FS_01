"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function ClientNavbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="flex items-center space-x-4">
      {isLoggedIn ? (
        <>
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            Login
          </Link>
          <Button onClick={() => router.push("/register")}>Register</Button>
        </>
      )}
    </div>
  );
}
