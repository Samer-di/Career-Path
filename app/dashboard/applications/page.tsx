import { applications } from "@/data/applications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faCircleCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <section className="mb-8">
          <p className="mb-2 text-sm font-bold tracking-widest text-blue-700 uppercase">
            Applications
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Applications
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-gray-600">
            Keep track of the opportunities you have already applied for and
            follow their current status.
          </p>
        </section>
        <section className="mb-8 rounded-3xl border border-blue-100 bg-blue-50 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-800 text-white">
              <FontAwesomeIcon icon={faBriefcase} className="text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Total Applications
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {applications.length}
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-6">
          {applications.map((application) => (
            <article
              key={application.id}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="text-xl text-blue-800"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {application.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-gray-500">
                      <FontAwesomeIcon icon={faBuilding} />
                      <p>{application.company}</p>
                    </div>
                  </div>
                </div>
                <div>
                  {application.status === "Applied" ? (
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                      <FontAwesomeIcon icon={faCircleCheck} />
                      {application.status}
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 font-semibold text-orange-700">
                      <FontAwesomeIcon icon={faClock} />
                      {application.status}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
