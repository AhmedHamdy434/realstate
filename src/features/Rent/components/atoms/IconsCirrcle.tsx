import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconsCirrcle = ({ icon }: { icon: IconDefinition }) => {
  return (
    <div className="w-10 h-10 rounded-full flex justify-center items-center border-2 border-neutrals6 p-2 cursor-pointer">
      <FontAwesomeIcon icon={icon} className="text-neutrals4" />
    </div>
  );
};

export default IconsCirrcle;
