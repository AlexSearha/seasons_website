import { ButtonProps } from "@/@types/types_d";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Button = ({
  type = "button",
  title,
  href,
  classSup,
  icon,
  dark,
  target = false,
}: ButtonProps) => {
  const className = `${
    dark ? `text-foreground` : `text-amber-100`
  }  border-2 border-muted/50 ${classSup} bg-amber-100/10 hover:bg-amber-200 cursor-pointer transition-colors duration-500 px-6 py-3 hover:text-foreground text-3xl font-title uppercase flex items-center justify-center rounded-lg w-fit`;

  if (href) {
    return (
      <Link
        href={href}
        target={target ? "_blank" : undefined}
        className={className}
      >
        {title}
      </Link>
    );
  }

  return (
    <button type={type} className={className}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" size="sm" />}
      {title}
    </button>
  );
};

export default Button;
