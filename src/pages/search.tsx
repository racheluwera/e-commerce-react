import { useSearchParams } from "react-router-dom";
import { useCart } from "../contexts/useCart";
import { ShoppingCart } from "lucide-react";
import type { Product } from "../contexts/cartTypes";

const allProducts: Product[] = [
  { id: 1, name: "Modern Chair", price: "$120.00", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80" },
  { id: 2, name: "Wooden Table", price: "$250.00", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
  { id: 3, name: "Sofa Set", price: "$899.00", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80" },
  { id: 4, name: "Bed Frame", price: "$450.00", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80" },
  { id: 5, name: "Bookshelf", price: "$180.00", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
  { id: 6, name: "Desk Lamp", price: "$60.00", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80" },
];

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("q") ?? "";
  const { addToCart } = useCart();

  const results = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Search results for: <span className="text-[#7cb800]">"{query}"</span>
      </h1>
      <div className="h-1 w-16 bg-[#7cb800] mb-8"></div>

      {results.length === 0 ? (
        <p className="text-gray-500">No products found for "{query}".</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {results.map((product, i) => (
            <div key={i} className="border border-gray-200 group cursor-pointer">
              <div className="overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-700">{product.name}</p>
                <p className="text-[#7cb800] font-bold mt-1">{product.price}</p>
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-[#4a4a4a] hover:bg-[#7cb800] text-white text-sm py-2 flex items-center justify-center gap-1 transition-colors"
                >
                  <ShoppingCart size={14} /> ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
