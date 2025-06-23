import BackgroundImage from "../../../assets/user/image.png";
const UserProfile = () => {
  return (
    <div className="container">
      <div className="image h-100 relative">
        <img
          className="rounded-3xl h-full min-w-full"
          src={BackgroundImage}
          alt="BackgroundImage"
        />
        <button></button>
      </div>
    </div>
  );
};

export default UserProfile;
