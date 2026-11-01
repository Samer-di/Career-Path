import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type MenuIconProps = {
  openMenu: () => void;
};

const MenuIcon = ({ openMenu }: MenuIconProps) => {
  return (
    <div className="absolute right-0 z-60 flex h-full w-1/4 items-center justify-center lg:hidden">
      <button
        type="button"
        onClick={openMenu}
        className="flex h-3/4 items-center justify-center rounded-2xl border-2 border-white"
      >
        <FontAwesomeIcon icon={faBars} className="p-3 text-2xl text-white" />
      </button>
    </div>
  );
};

export default MenuIcon;
