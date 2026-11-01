import React from "react";
import Image from "next/image";
const Brand = () => {
  return (
    <div className="w-1/4 h-full flex flex-row justify-start items-center pl-10 absolute left-0">
      <Image
        src={"/brandLogo.avif"}
        alt="Image not found !"
        loading="lazy"
        width={50}
        height={50}
        className="rounded-2xl"
      />
      <h1 className="text-sm md:text-lg text-nowrap font-bold pl-4 text-white">
        Career Planning
      </h1>
    </div>
  );
};

export default Brand;
