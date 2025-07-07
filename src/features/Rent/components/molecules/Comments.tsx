import { useState } from "react";
import CommentProfile from "../../../../assets/client3.png";
import ButtonWithIcon2 from "../../../../shared/components/atoms/ButtonWithIcon2";
import Comment from "../atoms/Comment";
const Comments = () => {
  const [moreLoading, setMoreLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [commentsToShow, setCommentsToShow] = useState(
    commentsData.slice(0, 3)
  );
  const handleLoadMore = () => {
    setMoreLoading(true);
    if (commentsToShow.length < page) {
      setCommentsToShow((commentsToShow) =>
        commentsToShow.slice(0, 3 * page + 1)
      );
      setPage((page) => page + 1);
    } else {
      setCommentsToShow(commentsData);
    }
    setMoreLoading(false);
  };
  return (
    <div className="space-y-8">
      <h5 className="text-2xl font-semibold leading-8 hidden md:block">
        {commentsData.length} comments
      </h5>
      {commentsToShow.map((data) => (
        <Comment key={data.name} data={data} />
      ))}
      <ButtonWithIcon2
        buttonName="Show more"
        classNameButton="mx-auto"
        flip
        icon={moreLoading ? "LoadingLine" : undefined}
        classNameIcon="w-3.5"
        handleClick={handleLoadMore}
      />
    </div>
  );
};

export default Comments;
const commentsData = [
  {
    image: CommentProfile,
    name: "Tobin Hackett",
    comment:
      "We had the most spectacular view. We had the most spectacular view. We had the most spectacular view. We had the most spectacular view.",
    star: 4,
  },
  {
    image: CommentProfile,
    name: "Myrtie Runolfsson",
    comment:
      "We had the most spectacular view. We had the most spectacular view. We had the most spectacular view. We had the most spectacular view.",
    star: 5,
  },
  {
    image: CommentProfile,
    name: "Myrti Runolfsson",
    comment:
      "We had the most spectacular view. We had the most spectacular view. We had the most spectacular view. We had the most spectacular view.",
    star: 3,
  },
  {
    image: CommentProfile,
    name: "Martin Runolfsson",
    comment:
      "We had the most spectacular view. We had the most spectacular view. We had the most spectacular view. We had the most spectacular view.",
    star: 3,
  },
];
