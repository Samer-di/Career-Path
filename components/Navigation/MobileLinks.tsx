import Link from "next/link";
const MobileLinks = () => {
  return (
    <div className="w-full h-1/2">
      <nav className="h-full">
        <ul className="h-full">
          <li className="text-white h-[20%] transition-all duration-200 ease-in hover:bg-[#3168c7] flex items-center justify-start">
            <Link href={"/"} className="pl-8">
              Home
            </Link>
          </li>
          <li className="text-white h-[20%] transition-all duration-200 ease-in hover:bg-[#3168c7] flex items-center justify-start">
            <Link href={"/plan"} className="pl-8">
              Plan
            </Link>
          </li>
          <li className="text-white h-[20%] transition-all duration-200 ease-in hover:bg-[#3168c7] flex items-center justify-start">
            <Link href={"/opportunities"} className="pl-8">
              Opportunities
            </Link>
          </li>
          <li className="text-white h-[20%] transition-all duration-200 ease-in hover:bg-[#3168c7] flex items-center justify-start">
            <Link href={"/dashboard"} className="pl-8">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileLinks;
