import RecButton from "../../../../shared/components/atoms/RecButton";

const FormInfo = () => {
  const style =
    "border border-[rgba(30,50,64,1)] ps-4.5 py-3.5 placeholder:text-[rgba(189,189,189,1)] text-lg leading-[120%] w-full";
  return (
    <form className="flex justify-between flex-wrap gap-y-4.5">
      <input
        type="text"
        required
        placeholder="First name"
        className={`${style} sm:w-[47%]`}
      />
      <input
        type="text"
        required
        placeholder="Last name"
        className={`${style} sm:w-[47%]`}
      />
      <input
        type="email"
        required
        placeholder="Email address"
        className={`${style} sm:w-[47%]`}
      />
      <input
        type="tel"
        required
        placeholder="Phone number"
        className={`${style} sm:w-[47%]`}
      />
      <textarea
        rows={4}
        placeholder="Description"
        className={`${style} mb-13`}
      />
      <RecButton
        buttonName="Request Information"
        className="rounded-[0.625rem] w-67 shadow-[24px_24px_65px_0px_rgba(81,140,119,0.24)]"
        colored
      />
    </form>
  );
};

export default FormInfo;
