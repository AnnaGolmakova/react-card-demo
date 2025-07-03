import { ProductCard } from "@components/ProductCard/ProductCard.tsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Каталог товаров</h1>
      <ProductCard title="Конфеты" origin="Россия" price={123400} />
    </>
  );
}

export default App;
