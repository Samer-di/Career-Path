import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const ThirdStep = () => {
  return (
    <div className="w-full h-220 bg-white flex items-center justify-center">
      <div className="w-3/4 h-170 lg:h-120 rounded-2xl grid-rows-[100px_1fr] bg-no-repeat bg-size-[100%_100%] bg-[url('/applyBack.avif')] grid p-5">
        <div className="w-full flex flex-row">
          <div className="w-[30%] h-full flex items-center justify-center">
            <div className="flex items-center justify-center bg-green-200 w-3/4 h-3/4 rounded-full">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-green-600 text-4xl"
              />
            </div>
          </div>
          <div className="w-[70%] h-full flex flex-col justify-center">
            <h2 className="textSizeCustom font-bold pt-2">Apply</h2>
            <p className="text-wrap  text-[11px] lg:text-xl">
              Turn preparation into action by applying consistently and tracking
              every opportunity.
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex-col flex flex-wrap">
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-green-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-green-600 text-3xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full  flex-col items-center">
                <p className="font-bold pl-4 mt-2">Explore opportunities</p>
                <p className="text-[10px] pl-4 pr-2">
                  Look for roles that match my skills, experience level, and
                  career goal.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-green-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="text-green-600 text-3xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full flex flex-col">
                <p className="font-bold pl-4 mt-2">
                  Submit focused applications
                </p>
                <p className="text-[10px] pl-4 pr-2">
                  Apply to relevant positions instead of applying to every
                  available job.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-green-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="text-green-600 text-3xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full  flex-col items-center">
                <p className="font-bold pl-4 mt-2">
                  Follow up on my applications
                </p>
                <p className="text-[10px] pl-4 pr-2 text-wrap">
                  Keep track of my applications and check for responses or next
                  steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
