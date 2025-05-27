const ServerError = ({ serverError }: { serverError: string[] }) => {
  return (
    <div className="max-w-[25rem]">
      {serverError.length > 0 &&
        serverError.map((message, index) => (
          <div key={index} className="text-xs text-error">
            {message}
          </div>
        ))}
    </div>
  );
};

export default ServerError;
