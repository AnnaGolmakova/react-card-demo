import { ProductCard } from "@components/ProductCard/ProductCard.tsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Каталог товаров
        </h1>
        <div className="flex">
          <ProductCard
            title="Конфеты"
            origin="Россия"
            description="Очень вкусные конфеты"
            price={123400}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
