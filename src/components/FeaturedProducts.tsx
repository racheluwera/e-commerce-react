import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/useCart";
import type { Product } from "../contexts/cartTypes";

const products: Product[] = [
  {
    id: 1,
    name: "Modern Chair",
    price: "$120.00",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
    description: "A sleek modern chair crafted for comfort and style. Perfect for home offices, dining rooms, or living spaces. Features ergonomic support and durable materials.",
    category: "Furniture",
    stock: 14,
    brand: "HomeStyle",
    rating: 4.5,
    reviews: 38,
    createdAt: "2024-01-10",
    updatedAt: "2024-11-20",
  },
  {
    id: 2,
    name: "Wooden Table",
    price: "$250.00",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    description: "Solid oak wood table with a minimalist Scandinavian design. Seats up to 6 people. Easy to assemble and built to last for years.",
    category: "Furniture",
    stock: 6,
    brand: "WoodCraft",
    rating: 4.7,
    reviews: 52,
    createdAt: "2024-02-14",
    updatedAt: "2024-10-05",
  },
  {
    id: 3,
    name: "Sofa Set",
    price: "$899.00",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
    description: "Comfortable 3-piece sofa set upholstered in premium fabric. Includes a 3-seater, 2-seater, and armchair. Available in multiple colors.",
    category: "Furniture",
    stock: 3,
    brand: "LuxLiving",
    rating: 4.3,
    reviews: 21,
    createdAt: "2024-03-01",
    updatedAt: "2024-12-01",
  },
  {
    id: 4,
    name: "Bed Frame",
    price: "$450.00",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
    description: "Sturdy queen-size bed frame with a modern matte finish. Compatible with standard mattresses. Features under-bed storage space.",
    category: "Bedroom",
    stock: 0,
    brand: "SleepWell",
    rating: 4.6,
    reviews: 44,
    createdAt: "2024-04-18",
    updatedAt: "2024-11-30",
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-widest text-gray-700">Featured Products</h2>
          <div className="h-0.5 w-16 bg-[#7cb800] mt-1"></div>
        </div>
        <div className="flex gap-2">
          <button type="button" className="border border-gray-300 p-1.5 hover:bg-[#7cb800] hover:text-white transition-colors"><ChevronLeft size={16} /></button>
          <button type="button" className="bg-[#7cb800] text-white p-1.5 hover:bg-[#6aa300] transition-colors"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 group cursor-pointer">
            <div className="overflow-hidden" onClick={() => navigate(`/product/${product.id}`, { state: product })}>
              <img src={product.img} alt={product.name} className="w-full h-32 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3">
              <p
                onClick={() => navigate(`/product/${product.id}`, { state: product })}
                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-[#7cb800]"
              >
                {product.name}
              </p>
              <p className="text-[#7cb800] font-bold mt-1">{product.price}</p>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="mt-2 w-full bg-[#4a4a4a] text-white text-xs py-1.5 flex items-center justify-center gap-1 hover:bg-[#7cb800] transition-colors"
              >
                <ShoppingCart size={13} /> ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
