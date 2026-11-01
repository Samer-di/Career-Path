import Link from "next/link";
const NavLinks = () => {
  return (
    <nav className="w-3/4 h-full flex flex-row justify-evenly items-center relative left-20">
      <ul>
        <li className="hidden lg:inline lg:text-[25px] sm:text-[16px] text-white">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden lg:inline lg:text-[25px] md:pl-20 sm:text-[16px] text-white">
          <Link href={"/plan"}>Plan</Link>
        </li>
        <li className="hidden lg:inline lg:text-[25px] md:pl-20 sm:text-[16px] text-white">
          <Link href={"/opportunities"}>Opportunities</Link>
        </li>
        <li className="hidden lg:inline lg:text-[25px] md:pl-20 sm:text-[16px] text-white">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
