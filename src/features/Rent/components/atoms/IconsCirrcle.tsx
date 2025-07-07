import { useRef, useState } from "react";
import MapPopup from "../../../../shared/components/molecules/MapPopup";
import useClickOutside from "../../../../shared/hooks/useClickOutside";
import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const IconsCirrcle = ({ icon }: { icon: string }) => {
  const [showMap, setShowMap] = useState(false);
  const lat = 30.0444;
  const lng = 31.2357;
  const iconRef = useRef<HTMLDivElement>(null);
  useClickOutside(iconRef, () => setShowMap(false));

  return (
    <div ref={iconRef}>
      <div
        className="w-10 h-10 rounded-full flex justify-center items-center border-2 border-neutrals6 p-2 cursor-pointer"
        onClick={() => setShowMap(true)}
      >
        <SvgIcon iconName={icon} />
      </div>
      {showMap && <MapPopup lat={lat} lng={lng} />}
    </div>
  );
};

export default IconsCirrcle;
