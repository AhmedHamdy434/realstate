import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconAndNameLg = ({
  icon,
  title,
  className,
}: {
  icon: IconDefinition;
  title: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-4 text-neutrals4 ${className}`}>
      <FontAwesomeIcon icon={icon} className="w-6" />
      <span className="font-medium leading-6">{title}</span>
    </div>
  );
};

export default IconAndNameLg;
