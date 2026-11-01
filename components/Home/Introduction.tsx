import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
const YehyaIntroduction = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row">
      <div className="w-auto h-full flex flex-col justify-center">
        <h1 className="text-4xl text-wrap font-bold pl-5 pt-8">
          Before I chase every opportunity, I need to remember
          <span className="text-blue-500">my goal</span>
        </h1>
        <p className="text-wrap text-justify pl-5 pt-8 pr-5">
          I’m Yehia, a Computer Science graduate, and my goal is to find my
          first software development job within two months. This website helps
          me stay focused, follow a clear plan, explore opportunities, and track
          my progress
        </p>
        <div className="w-full h-1/4 flex flex-row">
          <div className="w-1/2 h-full flex justify-center items-center">
            <button className="w-3/4 h-10 rounded-4xl mt-7 mb-3 bg-blue-500 text-white">
              <Link
                href={"/plan"}
                className="text-nowrap text-[12px] lg:text-xl"
              >
                View my Plan <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </button>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <button className="w-3/4 h-10 rounded-4xl mt-7 mb-3 border-2 border-black flex items-center justify-center">
              <Link
                href="/opportunities"
                className="text-nowrap text-[9px] lg:text-xl"
              >
                Explore Opportunities &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#F9FBFC]">
        <div className="w-full h-auto flex justify-end items-center">
          <Image
            src={"/yehya.avif"}
            alt="Image not Found !"
            width={700}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default YehyaIntroduction;
