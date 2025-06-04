const EllipseShape = ({ position }: { position: string }) => {
  return (
    <div
      className={`w-82.5 h-116 rounded-[50%] bg-[rgba(102,102,102,0.18)] blur-[5.75rem] absolute top-0 ${position}`}
    ></div>
  );
};

export default EllipseShape;
