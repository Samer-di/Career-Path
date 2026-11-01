import Image from "next/image";
import Link from "next/link";
const NextStep = () => {
  return (
    <div className="w-full h-200 lg:h-50 flex items-center justify-center">
      <div className="w-3/4 h-3/4 bg-blue-200 rounded-4xl flex flex-wrap">
        <div className="w-full h-[25%] lg:w-[25%] lg:h-full flex items-center justify-center">
          <Image
            src={"/glassIcon.avif"}
            width={100}
            height={100}
            alt="Image not Found !"
            className="rounded-full"
          />
        </div>
        <div className="w-full h-[50%] lg:w-[50%] lg:h-full flex flex-col justify-center">
          <p className="text-blue-900 font-bold text-xl pl-5">
            NEXT &nbsp;STEP
          </p>
          <h2 className="text-2xl font-bold pt-2 pl-5">
            Start by reviewing and improving my CV.
          </h2>
        </div>
        <div className="h-[25%] w-full lg:h-full lg:w-[25%] flex items-center justify-center">
          <button>
            <Link
              href={"#h"}
              className="font-bold text-white bg-blue-500 p-5 rounded-full text-xl"
            >
              Go to my CV
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
