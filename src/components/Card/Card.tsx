import { cn } from "@utils/classNames";

export interface CardProps {
  /** The content to be rendered inside the card */
  children: React.ReactNode;

  /** Additional CSS classes to apply to the card */
  className?: string;
}

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div
      className={cn(
        "relative rounded-md bg-white p-6 shadow-md hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
};
