import { ReactElement } from "react";
import { Props as ProductHOCProps } from "../components/ProductCard";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage"
import { Props as ProductTitleProps } from "../components/ProductTitle"
export interface Product {
  id: string,
  title: string,
  img?: string
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value:number) => void;
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product, }: ProductHOCProps): JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element,
  Image: (Props:ProductImageProps) => JSX.Element,
  Buttons: ( Props: ProductButtonsProps) => JSX.Element
}