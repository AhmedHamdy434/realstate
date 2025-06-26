import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconAndNameSm = ({
  icon,
  title,
  className,
}: {
  icon: IconDefinition;
  title: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-2 text-neutrals4 ${className}`}>
      <FontAwesomeIcon icon={icon} className="w-5" />
      <span className="text-sm leading-6">{title}</span>
    </div>
  );
};

export default IconAndNameSm;
