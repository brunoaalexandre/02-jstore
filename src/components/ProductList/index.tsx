import { Product } from "../Product";
import { Container } from "./styles";

import product01 from "../../assets/images/01.png";
import product02 from "../../assets/images/02.png";
import product03 from "../../assets/images/03.png";
import product04 from "../../assets/images/04.png";
import product05 from "../../assets/images/05.png";
import product06 from "../../assets/images/06.png";
import product07 from "../../assets/images/07.png";
import product08 from "../../assets/images/08.png";

export function ProductList() {
  return (
    <Container>
      <h1>Destaques</h1>
      <h2>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo ilimitado.
      </h2>
      <div>
        <Product imageProduct={product01} />
        <Product imageProduct={product02} />
        <Product imageProduct={product03} />
        <Product imageProduct={product04} />
        <Product imageProduct={product05} />
        <Product imageProduct={product06} />
        <Product imageProduct={product07} />
        <Product imageProduct={product08} />
      </div>
    </Container>
  );
}
