import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
const Goal = () => {
  return (
    <div className="w-full grid grid-rows-[30%_1fr] h-250 lg:h-100 bg-[#F0F6FE]">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="bg-[#67c0ff] p-4 rounded-4xl font-bold text-white">
          MY CAREER GOAL
        </p>
        <h2 className="text-[20px] mt-5 font-bold text-center lg:text-4xl">
          Find my first software development job within two months.
        </h2>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full h-[33.33%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
          <div className="w-3/4 h-1/2 rounded-4xl bg-white border border-gray-300 flex flex-row">
            <div className="w-[35%] h-full flex items-center justify-center">
              <div className="w-[90%] lg:w-full h-3/4 rounded-[100%] ml-2 bg-[#F0F6FE] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-5xl text-blue-700"
                />
              </div>
            </div>
            <div className="w-[65%] h-full flex flex-col justify-center">
              <p className="font-bold text-xl pl-3">Goal</p>
              <p className="text-sm pl-3 pr-4">
                Get an entry-level software development job.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[33.33%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
          <div className="w-3/4 h-1/2 rounded-4xl bg-white border border-gray-300 flex flex-row">
            <div className="w-[35%] h-full flex items-center justify-center">
              <div className="w-[90%] lg:w-full h-3/4 rounded-[100%] ml-2 bg-[#F0F6FE] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-5xl text-blue-700"
                />
              </div>
            </div>
            <div className="w-[65%] h-full flex flex-col justify-center">
              <p className="font-bold text-xl pl-3">Time Frame</p>
              <p className="text-xl pl-3">2 Months</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[33.33%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
          <div className="w-3/4 h-1/2 rounded-4xl bg-white border border-gray-300 flex flex-row">
            <div className="w-[35%] h-full flex items-center justify-center">
              <div className="w-[90%] lg:w-full h-3/4 rounded-[100%] ml-2 bg-[#F0F6FE] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faArrowUpWideShort}
                  className="text-5xl text-blue-700"
                />
              </div>
            </div>
            <div className="w-[65%] h-full flex flex-col justify-center">
              <p className="font-bold text-xl pl-3 text-nowrap">
                Current Focus
              </p>
              <p className="text-sm pl-3 pr-4">
                Learn, prepare, apply, and track my progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
