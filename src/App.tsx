import { LocaleProvider } from "@context/LocaleContext";
import { ProductCard } from "@components/ProductCard/ProductCard";
import "./App.css";

function App() {
  return (
    <LocaleProvider>
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
    </LocaleProvider>
  );
}

export default App;
