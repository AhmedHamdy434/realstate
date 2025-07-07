import useDynamicSvgImport from "../../hooks/useDynamicSvgImport";
import type { IProps } from "../../types/sharedTypes";

const SvgIcon = ({ iconName, wrapperStyle, svgProp, handleClick }: IProps) => {
  const { Svg } = useDynamicSvgImport(iconName);
  return (
    <>
      {Svg && (
        <div className={wrapperStyle} onClick={handleClick}>
          <Svg {...svgProp} />
        </div>
      )}
    </>
  );
};

export default SvgIcon;
