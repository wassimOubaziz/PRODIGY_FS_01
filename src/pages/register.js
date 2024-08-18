import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import AuthForm from "../components/AuthForm";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (data) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const error = await response.json();
        setError(error.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Create Your Account
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <AuthForm type="register" onSubmit={handleRegister} />
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
