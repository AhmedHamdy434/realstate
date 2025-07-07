import SvgIcon from "../../../../shared/components/atoms/SvgIcon";

const IconAndNameLg = ({
  icon,
  title,
  className,
}: {
  icon: string;
  title: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-4 text-neutrals4 ${className}`}>
      <SvgIcon iconName={icon} svgProp={{ width: "1.5rem" }} />
      <span className="font-medium leading-6">{title}</span>
    </div>
  );
};

export default IconAndNameLg;
