import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const IconAndNameSm = ({
  icon,
  title,
  className,
}: {
  icon: string;
  title: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-2 text-neutrals4 ${className}`}>
      <SvgIcon iconName={icon} svgProp={{ width: "1.25rem" }} />
      <span className="text-sm leading-6">{title}</span>
    </div>
  );
};

export default IconAndNameSm;
