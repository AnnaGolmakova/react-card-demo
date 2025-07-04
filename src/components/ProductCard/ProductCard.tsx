import { Button } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { useLocale } from "@context/LocaleContext";
import { formatCurrency } from "@utils/formatCurrency";

export interface ProductCardProps {
  /** Product title */
  title: string;

  /** Product description */
  description?: string;

  /** Country of origin */
  origin?: string;

  /** Product price, in cents */
  price: number;

  /** URL to product image */
  imageUrl?: string;
}

interface ProductDetailsProps {
  title: string;
  origin?: string;
  description?: string;
}

const ProductDetails = (props: ProductDetailsProps) => {
  const { title, origin, description } = props;
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      {description && <div className="text-slate-600">{description}</div>}
      {origin && <div className="text-slate-600">{origin}</div>}
    </div>
  );
};

export const ProductCard = (props: ProductCardProps) => {
  const { title, description, origin, price, imageUrl } = props;
  const { locale } = useLocale();

  return (
    <Card className="flex flex-col gap-6">
      <ProductDetails origin={origin} title={title} description={description} />
      <div>
        <img src={imageUrl} />
      </div>
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold">
          {formatCurrency(price, { currency: "RUB", locale })}
        </div>
        <Button>Добавить в корзину</Button>
      </div>
    </Card>
  );
};
