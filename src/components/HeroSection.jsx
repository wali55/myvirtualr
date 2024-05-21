import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      {/* paragraph */}
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">itationem optio quam ad ipsa quibusdam nisi, minima deserunt quaerat? Rerum fugiat molestiae cumque. Enim consectetur.</p>
    </div>
  );
};

export default HeroSection;
