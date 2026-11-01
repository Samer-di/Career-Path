import DashboardNav from "@/components/Navigation/DashboardNav";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="min-h-screen bg-[#f5f8ff] pt-17.5">
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
                My Dashboard
              </p>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                Career Journey
              </h1>
            </div>
            <DashboardNav />
          </div>
        </div>
      </div>

      {children}
    </section>
  );
};

export default DashboardLayout;
