import { Link } from "react-router-dom";

const Button = ({ text, link, className }) => {
  return (
    <Link
      to={link}
      className={className}
    >
      {text}
    </Link>
  );
};

export default Button;

