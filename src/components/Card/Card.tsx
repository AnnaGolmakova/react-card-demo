export interface CardProps {
  /** The content to be rendered inside the card */
  children: React.ReactNode;

  /** Additional CSS classes to apply to the card */
  className?: string;
}

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};
