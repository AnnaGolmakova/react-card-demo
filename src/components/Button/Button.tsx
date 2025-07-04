import { cn } from "@utils/classNames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content to be rendered inside the card */
  children: React.ReactNode;

  /** Additional CSS classes to apply to the card */
  className?: string;

  /** The type of button. Default to 'button' */
  type?: "submit" | "button";
}

const Button = (props: ButtonProps) => {
  const { children, className, type = "button", ...rest } = props;
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50",
        "bg-blue-700 text-white hover:bg-blue-700/90 hover:shadow-xs active:scale-95",
        "h-9 px-4 py-2 has-[>svg]:px-3",
        className,
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
