import { ButtonProps } from "@/@types/types_d";
import Link from "next/link";

const Button = ({
  type = "button",
  title,
  href,
  classSup,
  target = false,
}: ButtonProps) => {
  const className = `bg-amber-100/10 border-2 border-muted/50 ${classSup} hover:bg-amber-200 transition-colors duration-500 px-6 py-3 text-amber-100 hover:text-foreground text-3xl font-title uppercase flex items-center justify-center rounded-lg w-fit`;

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
      {title}
    </button>
  );
};

export default Button;
