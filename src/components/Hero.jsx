import Button from "./Button";
import illustration from "../assets/task.png"; // Replace with your image

const Hero = () => {
  return (
    <section className=" relative w-full px-4 pt-24 md:pt-22 flex pb-12 items-center bg-[#f7f7f7] ">
      {/* Tablet Blob Background */}
        <div className="absolute right-[-80px] top-16 w-[430px] h-[380px] bg-[#e1fbea] opacity-80 z-0 mobile-blob hidden md:block" />
      {/* Tablet Blob Background */}
        <div className="absolute right-[-80px] top-8 w-[750px] h-[320px] bg-[#e1fbea] opacity-80 z-0 mobile-blob hidden md:hidden lg:block" />
      <div className="max-w-6xl mx-auto bg-[#f7f7f7] flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Block */}
        <div className="text-center md:text-left md:w-1/2 z-11">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Stay focused, track your mood and thrive!
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Moodulo helps you manage tasks, use your time wisely, and care for your mind.
          </p>
          <Button text="Try Moodulo Now" link="/#start" className={"inline-block px-6 py-3 rounded-full bg-[#5FD788] text-white font-medium hover:bg-[#4cca70] transition font-[Outfit]"}/>
        </div>
 
        <div className="relative w-full md:w-1/2 flex justify-center items-center ">
        {/* Mobile Blob Background */}
        <div className="absolute w-[250px] h-[290px] bg-[#e1fbea] opacity-80 z-0 mobile-blob md:hidden" />
        
        {/* Illustration */}
        <img
        src={illustration}
        alt="Mood-based productivity illustration"
        className="max-w-[200px] md:max-w-[300px] relative z-10"/>
        </div>

      </div>
    </section>
  );
};

export default Hero;
