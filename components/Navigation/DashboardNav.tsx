"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex w-full rounded-2xl bg-[#f5f8ff] p-1.5 sm:w-auto">
      <Link
        href="/dashboard"
        className={`flex-1 rounded-xl px-5 py-2.5 text-center font-semibold transition duration-200 sm:flex-none ${
          pathname === "/dashboard"
            ? "bg-blue-800 text-white"
            : "text-gray-700 hover:bg-white hover:text-blue-800"
        }`}
      >
        Overview
      </Link>
      <Link
        href="/dashboard/applications"
        className={`flex-1 rounded-xl px-5 py-2.5 text-center font-semibold transition duration-200 sm:flex-none ${
          pathname === "/dashboard/applications"
            ? "bg-blue-800 text-white"
            : "text-gray-700 hover:bg-white hover:text-blue-800"
        }`}
      >
        Applications
      </Link>
    </nav>
  );
};

export default DashboardNav;
