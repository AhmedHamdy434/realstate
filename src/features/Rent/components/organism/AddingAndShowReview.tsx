import AddingReview from "../molecules/AddingReview";
import Comments from "../molecules/Comments";

const AddingAndShowReview = () => {
  return (
    <div className="flex-1 space-y-8 md:space-y-10 md:pt-10">
      <AddingReview />
      <Comments />
    </div>
  );
};

export default AddingAndShowReview;
