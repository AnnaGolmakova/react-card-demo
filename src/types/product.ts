import type { PriceType } from "@types/price";

export type ProductType = {
  /** Product id */
  id: string;

  /** Product title */
  title: string;

  /** Product description */
  description?: string;

  /** Country of origin */
  origin?: string;

  /** Product price, in cents */
  price: PriceType;

  /** URL to product image */
  imageUrl?: string;
};
