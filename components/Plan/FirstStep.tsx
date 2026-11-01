import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
const FirstStep = () => {
  return (
    <div className="w-full h-220 bg-white flex items-center justify-center">
      <div className="w-3/4 h-170 lg:h-120 rounded-2xl grid-rows-[100px_1fr] bg-no-repeat bg-size-[100%_100%] bg-[url('/prepareBack.jpg')] grid p-5">
        <div className="w-full flex flex-row">
          <div className="w-[30%] h-full flex items-center justify-center">
            <div className="flex items-center justify-center bg-blue-200 w-3/4 h-3/4 rounded-full">
              <FontAwesomeIcon
                icon={faFileLines}
                className="text-blue-700 text-4xl"
              />
            </div>
          </div>
          <div className="w-[70%] h-full flex flex-col justify-center">
            <h2 className="text-sm lg:text-[20px] font-bold pt-2">Prepare</h2>
            <p className="text-wrap text-[11px] lg:text-xl">
              Build a strong foundation before starting the job search.
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex-col flex flex-wrap">
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-blue-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    className="text-blue-600 text-3xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full flex-col items-center">
                <p className="font-bold pl-4 mt-2">Improve my CV</p>
                <p className="text-[10px] pl-4 pr-2">
                  Make my skills, education, <br /> and projects easy for
                  employers to understand.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-blue-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faLaptop}
                    className="text-blue-600 text-2xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full flex flex-col">
                <p className="font-bold pl-4 mt-2">Organize my portfolio</p>
                <p className="text-[10px] pl-4 pr-2">
                  Show my strongest projects and make sure every project is
                  complete.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
            <div className="w-[85%] h-35 bg-white rounded-2xl flex flex-row m-2">
              <div className="w-1/4 h-full flex items-start justify-center">
                <div className="w-3/4 h-1/2 bg-blue-200 rounded-2xl mt-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="text-blue-600 text-2xl"
                  />
                </div>
              </div>
              <div className="w-3/4 h-full  flex-col items-center">
                <p className="font-bold pl-4 mt-2">Choose a target role</p>
                <p className="text-[10px] pl-4 pr-2 text-wrap">
                  Focus my search on a clear role suvin as Junior Front-End
                  Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
