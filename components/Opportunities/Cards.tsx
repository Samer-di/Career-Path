import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { opportunities } from "@/data/opportunities";
const Cards = () => {
  return (
    <div className="w-full  h-auto bg-[#f5f8ff] flex flex-col lg:flex-row items-center">
      {opportunities.map((opportunity) => (
        <div
          className="border border-gray-400 w-[90%] lg:w-[30%] h-90 bg-white rounded-4xl m-10 grid grid-rows-[30%_50%_20%]"
          key={opportunity.id}
        >
          <div className="w-full flex items-center justify-center relative">
            <div className="absolute top-5 left-5 rounded-full w-12.5 h-12.5 bg-blue-200 flex items-center justify-center">
              <p className="text-4xl font-bold text-blue-800">
                {opportunity.id}
              </p>
            </div>
            <Image
              src={"/firstJob.png"}
              width={90}
              height={90}
              alt="First Opportunity"
              loading="lazy"
              className="pt-18"
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full h-[50%] flex items-end justify-center">
              <p className="font-bold text-xl text-nowrap p-2">
                {opportunity.title}
              </p>
            </div>
            <div className="w-full h-[50%]  flex flex-row">
              <div className="h-full w-[50%] flex items-center justify-center sm:justify-end">
                <p className="text-nowrap ps-10 text-sm">
                  <FontAwesomeIcon icon={faBuilding} />
                  &nbsp;{opportunity.company}
                </p>
              </div>
              <div className="h-full w-[50%] flex items-center">
                <p className="ps-11">
                  <FontAwesomeIcon icon={faLocationDot} />
                  &nbsp;&nbsp;{opportunity.location}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start justify-center">
            <button className="w-[80%] h-10 bg-blue-800 text-white font-bold rounded-3xl">
              <Link href={`/opportunities/${opportunity.id}`}>
                View Opportunity
              </Link>
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
