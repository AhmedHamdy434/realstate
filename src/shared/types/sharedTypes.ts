import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
  icon?: IconDefinition;
  handleClick?: () => void;
};
