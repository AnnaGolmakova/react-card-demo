import { ProductCard } from "@components/ProductCard/ProductCard";
import type { ProductType } from "../../types/product";

export interface ProductListProps {
  elements: ProductType[];
}

export const ProductList = (props: ProductListProps) => {
  return (
    <ul className="grid auto-rows-fr grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
      {props.elements.map((element) => (
        <li>
          <ProductCard className="h-full" {...element} />
        </li>
      ))}
    </ul>
  );
};
