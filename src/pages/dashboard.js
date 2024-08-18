import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const response = await fetch("/api/protected/user-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          localStorage.removeItem("token");
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        localStorage.removeItem("token");
        router.push("/login");
      }
    };

    fetchUserInfo();
  }, [router]);

  if (!user) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-primary-600">
            <h1 className="text-2xl font-bold text-white">
              Welcome to Your Dashboard
            </h1>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="text-xl mb-4">
              Hello, <span className="font-semibold">{user.username}</span>!
            </p>
            <p className="text-gray-600 mb-6">
              Your role is: <span className="font-semibold">{user.role}</span>
            </p>
            <Button onClick={() => router.push("/")}>Go to Home</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
