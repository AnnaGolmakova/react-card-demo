export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content to be rendered inside the card */
  children: React.ReactNode;

  /** Additional CSS classes to apply to the card */
  className?: string;

  /** The type of button. Default to 'button' */
  type?: "submit" | "button";
}

export const Button = (props: ButtonProps) => {
  const { children, className, type = "button", ...rest } = props;
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
};
