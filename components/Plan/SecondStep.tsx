import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
const SecondStep = () => {
  return (
    <div className="w-full h-150 bg-white flex items-center justify-center">
      <div className="w-3/4 h-170 lg:h-120 rounded-2xl grid-rows-[100px_1fr] bg-no-repeat bg-size-[100%_100%] bg-[url('/practiceBack.avif')] grid p-5">
        <div className="w-full flex flex-row">
          <div className="w-[30%] h-full flex items-center justify-center">
            <div className="flex items-center justify-center bg-orange-200 w-3/4 h-3/4 rounded-full">
              <FontAwesomeIcon
                icon={faArrowUpWideShort}
                className="text-orange-500 text-4xl"
              />
            </div>
          </div>
          <div className="w-[70%] h-full flex flex-col justify-center">
            <h2 className="text-sm lg:text-[20px] font-bold pt-2">Practice</h2>
            <p className="text-wrap text-[11px] lg:text-xl">
              Strengthen the skills I need and prepare to communicate them
              confidently.
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex-col flex flex-wrap">
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-orange-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faGear}
                    className="text-orange-500 text-3xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full flex-col items-center">
                <p className="font-bold pl-4 mt-2">
                  Practice the required skills
                </p>
                <p className="text-[10px] pl-4 pr-2">
                  Review the technologies that appear most often in the jobs I
                  want.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-orange-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="text-orange-500 text-2xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full flex flex-col">
                <p className="font-bold pl-4 mt-2">Prepare for interviews</p>
                <p className="text-[10px] pl-4 pr-2">
                  Practice technical and behavioral questions before meeting
                  employers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-orange-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="text-orange-500 text-2xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full flex-col items-center">
                <p className="font-bold pl-4 mt-2">Explain my projects</p>
                <p className="text-[10px] pl-4 pr-2 text-wrap">
                  Be ready to describe what I built, how I built it, and what I
                  learned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
