import Link from "next/link";
import ClientNavbar from "./ClientNavbar";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          AuthSystem
        </Link>
        <ClientNavbar />
      </div>
    </nav>
  );
}
