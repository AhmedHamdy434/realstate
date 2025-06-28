import type { ClientDataType } from "../../../features/Home/types/homeTypes";

const ClientCard = ({ data }: { data: ClientDataType }) => {
  const { image, name, miniHead, paragraph } = data;

  return (
    <div
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="min-w-122 p-7.5 rounded-lg border border-lighttext space-y-5 leading-[140%]"
    >
      <div className="flex gap-5 items-center">
        <img src={image} alt={name} className="w-[5.5rem]" />
        <div className="space-y-2.5">
          <h5 className="text-xl text-black100 font-extrabold">{name}</h5>
          <p className="font-medium text-[rgba(166,138,101,1)]">{miniHead}</p>
        </div>
      </div>
      <p className="text-black100 font-light">{paragraph}</p>
    </div>
  );
};

export default ClientCard;
