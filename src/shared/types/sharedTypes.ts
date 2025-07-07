export type DropMenuType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valuesList: string[];
  className1?: string;
  className2?: string;
};
export type ButtonWithIconType = {
  buttonName: string;
  flip?: boolean;
  classNameButton?: string;
  classNameIcon?: string;
  icon?: string;
  handleClick?: () => void;
};
export interface IProps {
  iconName: string;
  wrapperStyle?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
  handleClick?: () => void;
}
