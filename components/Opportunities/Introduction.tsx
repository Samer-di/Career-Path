import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
const Introduction = () => {
  return (
    <>
      <div className="w-full h-220 lg:h-100 flex flex-col lg:flex-row ">
        <div className="w-full h-[50%] lg:w-[50%] lg:h-full  flex flex-col bg-[#f5f8ff] justify-center">
          <div className="w-47.5 h-7.5 bg-blue-200 flex items-center justify-center rounded-2xl ms-10">
            <p className="text-blue-700 font-bold">
              <FontAwesomeIcon icon={faBriefcase} /> Opportunities
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-5 ps-10 pe-3">
            Explore the right Opportunities for your &nbsp;
            <span className="text-blue-700">next step</span>
          </h1>
          <p className="ps-10 pe-5 pt-10">
            Yehia, browse roles that match your skills and goals, and take the
            next step toward your future career.
          </p>
        </div>
        <div className="w-full h-[50%] lg:w-[50%] lg:h-full bg-[url('/card.png')] md:bg-cover bg-size-[120%_100%]  bg-no-repeat"></div>
      </div>
      <div className="w-full h-150 flex flex-col bg-[#f5f8ff]">
        <div className="w-full h-[33.3%] flex items-center justify-center">
          <div className="grid grid-cols-[40%_60%] w-[75%] h-[75%] rounded-4xl bg-white">
            <div className="h-full flex items-center justify-center">
              <div className="bg-blue-100 w-[70%] h-[60%] rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-5xl text-blue-700"
                />
              </div>
            </div>
            <div className="h-full flex flex-col justify-center">
              <p>Roles that match your skills</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[33.3%] flex items-center justify-center ">
          <div className="grid grid-cols-[40%_60%] w-[75%] h-[75%] rounded-4xl bg-white">
            <div className="h-full flex items-center justify-center">
              <div className="bg-blue-100 w-[70%] h-[60%] rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faDice}
                  className="text-5xl text-blue-700"
                />
              </div>
            </div>
            <div className="h-full flex flex-col justify-center">
              <p>Seize the right chance</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[33.3%] flex items-center justify-center">
          <div className="grid grid-cols-[40%_60%] w-[75%] h-[75%]  rounded-4xl bg-white">
            <div className="h-full flex items-center justify-center">
              <div className="bg-blue-100 w-[70%] h-[60%] rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-5xl text-blue-700"
                />
              </div>
            </div>
            <div className="h-full flex flex-col justify-center">
              <p>Build your future with confidence</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
