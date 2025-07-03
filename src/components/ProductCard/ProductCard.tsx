import { Card } from "@components/Card/Card";
import { Button } from "@components/Button/Button";

export interface ProductCardProps {
  /** Product title */
  title: string;

  /** Country of origin */
  origin: string;

  /** Product price, in cents */
  price: number;

  /** URL to product image */
  imageUrl?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const { title, origin, price, imageUrl } = props;
  return (
    <Card>
      <h2>{title}</h2>
      <div>{origin}</div>
      <div>{price}</div>
      <div>
        <img src={imageUrl} />
      </div>
      <Button>Добавить в корзину</Button>
    </Card>
  );
};
