import { ProductList } from "@components/ProductList/ProductList";
import { LocaleProvider } from "@context/LocaleContext";
import { useState, useEffect } from "react";
import type { ProductType } from "@types/product";
import "./App.css";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.products.map((el) => ({
            title: el.title,
            origin: "Россия",
            price: el.price * 100,
            imageUrl: el.thumbnail,
          })),
        );
      });
  }, []);

  return (
    <LocaleProvider>
      <div className="min-h-screen w-full bg-gray-100 p-8">
        <main className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-800">
            Каталог товаров
          </h1>
          <ProductList elements={products} />
        </main>
      </div>
    </LocaleProvider>
  );
}

export default App;
