import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { bagsData } from "../data/bagsData";
import { useCart } from "../contexts/useCart";

const categories = ["All", "Backpacks", "Handbags", "Clutches", "Travel Bags"];

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={12}
        className={s <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}
      />
    ))}
  </div>
);

const Bags = ({ sub }: { sub?: string }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState(sub ?? "All");

  const filtered =
    activeCategory === "All"
      ? bagsData
      : bagsData.filter((b) => b.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
        <Link to="/" className="hover:text-[#7cb800] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Bags</span>
        {sub && <><span>/</span><span className="text-gray-700 font-medium">{sub}</span></>}
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{sub ?? "Bags"}</h1>
        <div className="h-1 w-14 bg-[#7cb800] mt-2"></div>
        <p className="text-sm text-gray-500 mt-2">{filtered.length} products found</p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
              activeCategory === cat
                ? "bg-[#7cb800] text-white border-[#7cb800]"
                : "border-gray-300 text-gray-600 hover:border-[#7cb800] hover:text-[#7cb800]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((bag) => {
          const inStock = bag.stock > 0;
          const discount = bag.originalPrice
            ? Math.round(((bag.originalPrice - bag.price) / bag.originalPrice) * 100)
            : null;

          return (
            <div key={bag.id} className="border border-gray-200 rounded-lg overflow-hidden group bg-white hover:shadow-md transition-shadow">
              {/* Image */}
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => navigate(`/bags/${bag.id}`, { state: bag })}
              >
                <img
                  src={bag.img}
                  alt={bag.name}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                    -{discount}%
                  </span>
                )}
                {!inStock && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-500 bg-white px-3 py-1 rounded border border-gray-300">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col gap-1.5">
                <p className="text-xs text-gray-400">{bag.brand}</p>
                <p
                  onClick={() => navigate(`/bags/${bag.id}`, { state: bag })}
                  className="text-sm font-semibold text-gray-800 cursor-pointer hover:text-[#7cb800] leading-snug line-clamp-2"
                >
                  {bag.name}
                </p>
                <StarRow rating={bag.rating} />
                <p className="text-xs text-gray-400">{bag.reviews} reviews</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-[#7cb800] font-bold">${bag.price.toFixed(2)}</span>
                  {bag.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">${bag.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                <button
                  type="button"
                  disabled={!inStock}
                  onClick={() =>
                    addToCart({
                      id: bag.id,
                      name: bag.name,
                      price: `$${bag.price.toFixed(2)}`,
                      img: bag.img,
                      category: bag.category,
                      brand: bag.brand,
                      stock: bag.stock,
                    })
                  }
                  className={`mt-1 w-full text-xs py-1.5 flex items-center justify-center gap-1 transition-colors ${
                    inStock
                      ? "bg-[#4a4a4a] text-white hover:bg-[#7cb800]"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart size={12} />
                  {inStock ? "ADD TO CART" : "OUT OF STOCK"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bags;
