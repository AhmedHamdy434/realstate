import type { ForgotPasswordHeadingType } from "../../types/authTypes";

const ForgotPasswordHeading = ({
  text,
}: {
  text: ForgotPasswordHeadingType;
}) => {
  const { heading, paragraphs } = text;
  return (
    <div>
      <h3 className="text-5xl font-semibold text-main mb-8">{heading}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-2xl text-text2 font-medium">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ForgotPasswordHeading;
