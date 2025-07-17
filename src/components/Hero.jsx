import Button from "./Button";
import illustration from "../assets/task.png";

const Hero = () => {
  return (
    <section className=" relative w-full px- pt-24 md:pt-28 flex pb-12 items-center bg-[#f7f7f7] ">
      <div className="w-full  bg-[#f7f7f7] flex flex-col-reverse md:flex-row items-center justify-between gap-12 ">
        {/* Text Block */}
        <div className="text-center md:text-left md:w-1/2 z-11 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Stay focused, track your mood and thrive!
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Moodulo helps you manage tasks, use your time wisely, and care for your mind.
          </p>
          <Button text="Try Moodulo Now" link="/#start" className={"inline-block px-6 py-3 rounded-full bg-[#5FD788] text-white font-medium hover:bg-[#4cca70] transition font-[Outfit]"}/>
        </div>
 
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center ">
        {/* Mobile Blob Background */}
  <svg
    className="absolute z-0 w-[250px] sm:block md:hidden lg:hidden"
    viewBox="0 0 219 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1641 160.343C-35.4255 103.73 62.0502 51.8685 91.2244 22.6943C120.399 -6.47994 167.699 -6.47998 196.874 22.6943C226.048 51.8685 226.048 99.1693 196.874 128.344C167.699 157.518 68.784 206.795 14.1641 160.343Z"
      fill="#E1FBEA"
    />
  </svg>

  {/* Tablet Blob */}
  <svg
    className="absolute z-0 hidden md:block lg:hidden w-[250px] h-auto right-0 top-[-125px]"
    viewBox="0 0 292 514"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41.63 456.241C-105.923 287.788 184.114 133.476 270.921 46.6683C357.729 -40.1391 498.471 -40.1392 585.279 46.6682C672.086 133.476 672.086 274.218 585.279 361.026C498.471 447.833 204.15 594.457 41.63 456.241Z"
      fill="#e1fbea"
    />
  </svg>



  {/* Illustration */}
  <img
    src={illustration}
    alt="Mood-based productivity illustration"
    className="relative z-10 w-[200px] md:w-[290px]"
  />
</div>


      </div>
      
    </section>
  );
};

export default Hero;
