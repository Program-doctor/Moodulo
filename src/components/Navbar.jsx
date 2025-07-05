import { Link } from "react-router-dom";
import logo from "../assets/moodulo-logo-2.png"; 
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full bg-[#fdfcfa] fixed z-50 text-white font-[Outfit] py-2">
      <nav className="px-4 flex max-w-6xl mx-auto justify-between items-center ">
        <Link to="/" className="flex space-x-2 items-center ">
          <img src={logo} alt="Moodulo Logo" className="w-5  h-5  md:w-7 md:h-7 object-contain my-2"/>
          <h1 className="text-black text-[16px] md:text-xl  font-semibold ">Moodulo</h1>
        </Link>
        {/* CTA Button */}
         <Button text={'Get Started'} className="bg-[#5FD788] text-white text-sm md:text-sm px-4 py-2 rounded-full font-medium hover:bg-[#4cca70] transition"  link='#start'/>
      </nav>
    </header>
  );
};

export default Navbar;
