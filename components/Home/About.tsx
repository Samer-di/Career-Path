import Image from "next/image";
const YehyaAbout = () => {
  return (
    <div className="w-full about h-auto flex flex-col lg:flex-row bg-[#eef6ff]">
      <div className="w-full h-[50%] lg:h-full lg:w-[50%] flex flex-col items-start">
        <p className="pl-5 text-2xl font-bold text-blue-600 pt-5">ABOUT ME</p>
        <h2 className="text-5xl pl-5 pt-3 font-bold">Meet Yehya</h2>
        <p className="pl-5 text-lg pr-5 pt-3">
          I recently graduated in Computer Science from the Lebanese University.
          I’m passionate about web development and excited to start my career.
          This website helps me organize my job search, stay consistent, and
          make real progress toward my goal.
        </p>
      </div>
      <div className="w-full h-[50%] lg:h-full lg:w-[50%] flex items-center justify-center">
        <Image
          src={"/aboutYehya.avif"}
          alt="About Me"
          width={400}
          height={100}
        />
      </div>
    </div>
  );
};

export default YehyaAbout;
