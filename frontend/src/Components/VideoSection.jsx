import {} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const VideoSection = () => {
  return (
    <div
      className=" w-full max-w-screen-xl h-[250px] max-h-[300px]] bg-cover p-6 text-center mt-5 mb-3"
      style={{ backgroundImage: "url(video-placeholder.png)" }}
    >
      <div className="flex flex-col justify-center w-full h-full opacity-15 hover:opacity-100 transition-opacity ease-in duration-500 cursor-pointer">
        <p className="text-3xl font-extrabold text-white">
          We are the Best Organic
        </p>
        <p className="text-3xl font-extrabold text-white mb-3">
          Farm in the World.
        </p>
        <img
          src="play.png"
          alt="Play Our Video"
          className="flex-start w-[50px] mx-auto hover:scale-125 transition ease-in"
        />
      </div>
    </div>
  );
};

export default VideoSection;
