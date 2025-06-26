const ReservePrice = ({
  name,
  price,
  classNameBox,
  classNameSpan,
}: {
  name: string;
  price: number;
  classNameBox?: string;
  classNameSpan?: string;
}) => {
  return (
    <div
      className={`flex justify-between items-center px-3 py-2 text-sm leading-6 ${classNameBox}`}
    >
      <span className={`text-neutrals4 ${classNameSpan}`}>{name}</span>
      <span className="text-neutrals2 font-medium">{price} Egy</span>
    </div>
  );
};

export default ReservePrice;
