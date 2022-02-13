import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

import { GlobalStyles } from "./styles/global";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";

export function App() {
  return(
    <>
      <Header />
      <Banner />
      <ProductList />
      <Footer />
      <GlobalStyles />
    </>
  );
}
