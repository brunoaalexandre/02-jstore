import { Product } from "../Product";
import { Container } from "./styles";

export function ProductList() {
  return (
    <Container>
      <h1>Destaques</h1>
      <h2>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo ilimitado.
      </h2>
      <div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Container>
  );
}
