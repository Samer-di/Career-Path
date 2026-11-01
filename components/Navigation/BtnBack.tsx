import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

type BtnBackProps = {
  closeMenu: () => void;
};

const BtnBack = ({ closeMenu }: BtnBackProps) => {
  return (
    <div className="w-full h-1/4 flex items-center justify-start">
      <button onClick={closeMenu} className="ml-6" id="Back">
        <FontAwesomeIcon icon={faCircleLeft} className="text-white text-4xl" />
      </button>
    </div>
  );
};

export default BtnBack;
