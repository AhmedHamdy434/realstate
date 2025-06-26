import { useNavigate } from "react-router-dom";
import ButtonWithIcon2 from "../../../../shared/components/atoms/ButtonWithIcon2";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const RentPropertyImages = ({
  id,
  image,
  images,
}: {
  id: string;
  image: string;
  images: string[];
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex relative my-8 md:my-16 gap-2">
      <div className="flex-1 rounded-2xl min-h-full overflow-hidden">
        <img src={image} alt="image" className="h-full w-full object-cover" />
      </div>
      <div className="hidden md:flex gap-2 flex-col w-64">
        {images.map((img, index) => (
          <img
            key={`img${index}`}
            src={img}
            alt={`img${index}`}
            className="h-[calc((100%_-_1rem)_/_3)] rounded-2xl"
          />
        ))}
      </div>
      <ButtonWithIcon2
        buttonName="Show all photos"
        flip
        classNameButton="border-0 bg-neutrals8 absolute start-6 bottom-6"
        classNameIcon="text-neutrals2"
        icon={faImage}
        handleClick={() => navigate(`/rent/${id}/images`)}
      />
    </div>
  );
};

export default RentPropertyImages;
