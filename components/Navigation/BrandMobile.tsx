import Image from "next/image";
const BrandMobile = () => {
  return (
    <div className="w-full h-1/4 flex flex-row">
      <div className="w-1/4 h-full flex items-center justify-end">
        <Image
          src={"/brandLogo.avif"}
          alt="Image not found !"
          loading="lazy"
          width={50}
          height={50}
          className="rounded-2xl"
        />
      </div>
      <div className="w-3/4 h-full flex items-center justify-start">
        <h1 className="text-nowrap text-lg font-bold pl-4 text-white">
          Career Planning
        </h1>
      </div>
    </div>
  );
};

export default BrandMobile;
