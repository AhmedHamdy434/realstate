import CircleImage from "../../../../shared/components/atoms/CircleImage";
import type { CommentDataType } from "../../types/rentTypes";
import Rating from "./Rating";

const Comment = ({ data }: { data: CommentDataType }) => {
  const { image, name, comment, star } = data;

  return (
    <>
      <div className="flex gap-5 text-sm leading-6">
        <CircleImage image={image} width="12" />
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <h6 className="font-medium text-neutrals1 ">{name}</h6>
            <div>
              <Rating rate={star} />
            </div>
          </div>
          <p className="text-neutrals3">{comment}</p>
        </div>
      </div>
      <hr className="text-neutrals6" />
    </>
  );
};

export default Comment;
