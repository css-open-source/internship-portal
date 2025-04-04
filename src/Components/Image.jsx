import BgImage from "../assets/loginpic.jpg";

const Image = () => {
  return (
    <div className="hidden md:flex justify-center items-center bg-center bg-cover flex-1 relative text-white overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-40"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>
      <h1 className="text-6xl text-white z-10 capitalize font-serif italic text-center">
        the backbone <br />
        of
        <br /> modern technology
      </h1>
    </div>
  );
};

export default Image;
