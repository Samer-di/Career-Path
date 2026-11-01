"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Steps = () => {
  return (
    <div className="grid-rows-[40%_1fr] w-full h-150 grid">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="bg-[#67c0ff] p-4 rounded-4xl font-bold text-white">
          NEXT STEPS
        </p>
        <h2 className="text-4xl mt-5 font-bold text-center">
          What should I do next?
        </h2>
        <p className="text-center pl-2 pr-2">
          Choose a section to see more details and continue my journey.
        </p>
      </div>
      <div className="flex-col w-full flex lg:flex-row">
        <div className="w-full h-[50%] lg:w-[50%] lg:h-full mt-15 flex items-center justify-center">
          <div className="w-3/4 h-37.5 flex rounded-4xl bg-[url('/blueBack.avif')] bg-no-repeat bg-size-[100%_100%] flex-row">
            <div className="w-1/3 h-full flex items-start justify-center">
              <div className="h-[20%] lg:w-[75%] lg:h-[50%] rounded-4xl mt-4 bg-[#cae0ff] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-4xl text-blue-800"
                />
              </div>
            </div>
            <div className="w-3/4 h-full flex items-start justify-start flex-col relative">
              <h3 className="font-bold text-xl mt-5">Follow my plan</h3>
              <p className="pr-2 text-sm">
                See the steps I need to complete before and during my job <br />
                search. <br />
                <Link href="/plan">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className="iconCursor text-3xl absolute right-1 bottom-6  text-blue-700"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] lg:w-[50%] lg:h-full mt-15 flex items-center justify-center mb-12.5 ">
          <div className="w-3/4 h-37.5 flex rounded-4xl bg-[url('/orangeBack.avif')] bg-no-repeat bg-size-[100%_100%] flex-row">
            <div className="w-1/3 h-full flex items-start justify-center">
              <div className="h-[20%] lg:w-[75%] lg:h-[50%] rounded-4xl mt-4 bg-[#ffdaaa] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="text-4xl text-orange-400"
                />
              </div>
            </div>
            <div className="w-3/4 h-full flex items-start justify-start flex-col relative">
              <h3 className="font-bold text-xl mt-5">Explore Opportunities</h3>
              <p className="pr-3 text-sm">
                Browse job opportunities that match my skills.
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className="iconCursor absolute right-1 bottom-6  text-3xl text-orange-500"
                />
                <Link href="/opportunities">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className="iconCursor absolute right-1 bottom-6  text-3xl text-orange-500"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
