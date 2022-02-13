import { ProductBox } from "./styles";

interface ProductProps {
  imageProduct: string;
}

export function Product({ imageProduct }: ProductProps) {
  return (
    <ProductBox>
      <img src={imageProduct} alt="Air Jordan" />
    </ProductBox>
  );
}
