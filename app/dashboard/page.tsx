import { applications } from "@/data/applications";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faArrowRight,
  faChartLine,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";

const page = () => {
  const applicationCount = applications.length;

  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <section className="mb-8">
          <p className="mb-2 text-sm font-bold tracking-widest text-blue-700 uppercase">
            Overview
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Track your progress
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-gray-600">
            Keep moving forward. Every application brings you one step closer to
            your first software development opportunity.
          </p>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="rounded-3xl bg-blue-800 p-7 text-white shadow-sm sm:p-8">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <FontAwesomeIcon icon={faBriefcase} className="text-2xl" />
              </div>
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-3xl text-blue-200"
              />
            </div>
            <p className="text-sm font-semibold text-blue-100">
              Total Applications
            </p>
            <p className="my-2 text-6xl font-bold">{applicationCount}</p>
            <p className="text-blue-100">Applications submitted so far</p>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl text-green-700"
                />
              </div>
              <p className="mb-2 text-sm font-bold tracking-widest text-green-700 uppercase">
                Keep Going
              </p>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                You&apos;re making progress.
              </h3>
              <p className="max-w-xl leading-7 text-gray-600">
                You have already started applying for opportunities. Stay
                consistent, review your applications, and keep looking for roles
                that match your goals.
              </p>
            </div>
            <Link
              href="/dashboard/applications"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-blue-800 px-6 py-3 font-bold text-white transition duration-200 hover:bg-blue-900"
            >
              View Applications
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
