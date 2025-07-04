import { Button } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { useLocale } from "@context/LocaleContext";
import { formatCurrency } from "@utils/formatCurrency";
import { cn } from "@utils/classNames";
import type { ProductType } from "../../types/product";

export interface ProductCardProps extends ProductType {
  className?: string;
  onClick?: (id: string, event: React.PointerEvent<HTMLElement>) => void;
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
  const { title, description, origin, price, imageUrl, className } = props;
  const { locale } = useLocale();

  return (
    <Card className={cn("flex flex-col gap-6", className)}>
      <ProductDetails origin={origin} title={title} description={description} />
      <div className="mb-auto flex">
        <img className="object-fit h-full w-full" src={imageUrl} />
      </div>
      <div className="flex flex-row items-center justify-between gap-6 border-t border-slate-300 pt-6">
        <div className="text-2xl font-bold">
          {formatCurrency(price.amount, { currency: price.currency, locale })}
        </div>
        <Button>В корзину</Button>
      </div>
    </Card>
  );
};
