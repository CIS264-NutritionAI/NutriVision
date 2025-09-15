import { Link } from "react-router-dom";

interface NavButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
  className?: string;
  disableHover?: boolean;
}

const NavButton = ({
  to,
  label,
  onClick,
  className,
  disableHover,
}: NavButtonProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`py-4 px-6 rounded-full font-peppermint text-charcoal tracking-wide transition-colors duration-300 ${
        disableHover ? "" : "hover:text-matcha"
      } ${className ?? ""}`}
    >
      {label}
    </Link>
  );
};

export default NavButton;
