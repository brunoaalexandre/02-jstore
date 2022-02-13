import { ProductBox } from "./styles";

import product01 from '../../assets/images/01.png';

export function Product() {
  return(
    <ProductBox>
      <img src={product01} alt="Air Jordan" />
    </ProductBox>
  );
}
