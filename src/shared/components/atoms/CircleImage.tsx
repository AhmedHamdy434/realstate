const CircleImage = ({ image, width }: { image: string; width: string }) => {
  return (
    <img
      src={image}
      alt="image"
      className={`w-${width} h-${width} rounded-full"`}
    />
  );
};

export default CircleImage;
