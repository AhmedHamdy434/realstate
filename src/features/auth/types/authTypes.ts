export type InputType = {
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
};
export type AuthHeadingType = {
  mainHead: string;
  secHead: string;
  spanHead?: string;
};
export type ImageSideType = {
  heading1: string;
  heading2?: string;
  images: string[];
};
export type ForgotPasswordHeadingType = {
  heading: string;
  paragraphs: string[];
};
export type VerificationCodeInputProps = {
  code: string[];
  setCode: React.Dispatch<React.SetStateAction<string[]>>;
};
export type AuthResponseType = {
  success: boolean;
  message: string[];
};
