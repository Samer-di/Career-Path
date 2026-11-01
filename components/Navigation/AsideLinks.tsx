import BrandMobile from "./BrandMobile";
import BtnBack from "./BtnBack";
import MobileLinks from "./MobileLinks";

type AsideLinksProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};

const AsideLinks = ({ menuOpen, closeMenu }: AsideLinksProps) => {
  return (
    <aside
      className={`w-3/4 lg:hidden bg-[#1e488f] h-dvh fixed top-0 right-0 z-100 flex flex-col
      transition-transform duration-500
      ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <BrandMobile />

      <MobileLinks />

      <BtnBack closeMenu={closeMenu} />
    </aside>
  );
};

export default AsideLinks;
