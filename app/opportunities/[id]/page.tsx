import Link from "next/link";
import { opportunities } from "@/data/opportunities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBriefcase,
  faBuilding,
  faLocationDot,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";

type OpportunityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return opportunities.map((opportunity) => ({
    id: opportunity.id,
  }));
}

const page = async ({ params }: OpportunityPageProps) => {
  const { id } = await params;
  const selectedOpportunity = opportunities.find(
    (opportunity) => opportunity.id === id,
  );

  if (!selectedOpportunity) {
    return (
      <>
        <main className="min-h-screen bg-[#f5f8ff] px-4 pt-28 pb-16 sm:px-6">
          <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
            <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                <span className="text-4xl font-bold text-red-500">!</span>
              </div>
              <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Opportunity not found
              </h1>
              <p className="mx-auto mb-8 max-w-md text-gray-500">
                We couldn&apos;t find the opportunity you&apos;re looking for.
              </p>
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-3 rounded-full bg-blue-800 px-6 py-3 font-bold text-white transition duration-200 hover:bg-blue-900"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back to Opportunities
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#f5f8ff] px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/opportunities"
            className="mb-6 inline-flex items-center gap-2 font-semibold text-blue-800 transition duration-200 hover:gap-3"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Opportunities
          </Link>
          <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="bg-linear-to-br from-blue-50 to-white p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
                    <FontAwesomeIcon icon={faBriefcase} />
                    Opportunity #{selectedOpportunity.id}
                  </div>
                  <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                    {selectedOpportunity.title}
                  </h1>
                  <div className="flex flex-col gap-4 text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="text-blue-800"
                        />
                      </div>
                      <span className="font-semibold">
                        {selectedOpportunity.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="text-blue-800"
                        />
                      </div>
                      <span className="font-semibold">
                        {selectedOpportunity.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden h-40 w-40 shrink-0 items-center justify-center rounded-3xl bg-blue-800 lg:flex">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-6xl text-white"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_320px] lg:p-12">
              <div>
                <div className="mb-8">
                  <p className="mb-2 text-sm font-bold tracking-widest text-blue-700 uppercase">
                    Role Overview
                  </p>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    About this opportunity
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                    {selectedOpportunity.description}
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">
                        Take your next step
                      </h3>
                      <p className="leading-7 text-gray-600">
                        Review the role carefully and compare it with the other
                        available opportunities before deciding where to apply.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="h-fit rounded-3xl border border-gray-200 bg-[#f9fbff] p-6">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  Opportunity Details
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="text-blue-800"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="font-bold text-gray-900">
                        {selectedOpportunity.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className="text-blue-800"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Company</p>
                      <p className="font-bold text-gray-900">
                        {selectedOpportunity.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-blue-800"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-bold text-gray-900">
                        {selectedOpportunity.location}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/opportunities"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-blue-800 px-5 py-3 font-bold text-white transition duration-200 hover:bg-blue-900"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  View Other Opportunities
                </Link>
              </aside>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
