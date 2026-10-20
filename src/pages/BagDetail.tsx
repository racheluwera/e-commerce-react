import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  ShoppingCart, ArrowLeft, Star, CheckCircle,
  XCircle, Package, Minus, Plus, Eye,
} from "lucide-react";
import { useCart } from "../contexts/useCart";
import type { BagProduct } from "../data/bagsData";

// ── Helpers ───────────────────────────────────────────────────────────────────
const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={16}
          className={s <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"} />
      ))}
    </div>
    <span className="text-sm text-gray-500">{rating.toFixed(1)} · {reviews} reviews</span>
  </div>
);

const StockBadge = ({ stock }: { stock: number }) => {
  if (stock === 0)
    return <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full"><XCircle size={13} /> Out of Stock</span>;
  if (stock <= 5)
    return <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full"><Package size={13} /> Only {stock} left</span>;
  return <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full"><CheckCircle size={13} /> In Stock ({stock} available)</span>;
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-3 py-2.5 border-b border-gray-100 last:border-0 text-sm">
    <span className="text-gray-400 w-28 shrink-0">{label}</span>
    <span className="text-gray-800 font-medium">{value}</span>
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const BagDetail = () => {
  const { state } = useLocation() as { state: BagProduct | null };
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!state) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Product Not Found</h2>
        <p className="text-sm text-gray-500 mb-6">We couldn't find this bag. It may have been removed.</p>
        <button onClick={() => navigate("/bags")} className="bg-[#7cb800] text-white px-6 py-2 text-sm hover:bg-[#6aa300] transition-colors rounded">
          Back to Bags
        </button>
      </div>
    );
  }

  const inStock = state.stock > 0;
  const discount = state.originalPrice
    ? Math.round(((state.originalPrice - state.price) / state.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addToCart(
      {
        id: state.id,
        sku: state.sku,
        name: state.name,
        price: `$${state.price.toFixed(2)}`,
        img: state.img,
        category: state.category,
        brand: state.brand,
        stock: state.stock,
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
        <Link to="/" className="hover:text-[#7cb800] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/bags" className="hover:text-[#7cb800] transition-colors">Bags</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium truncate max-w-[200px]">{state.name}</span>
      </nav>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#7cb800] transition-colors mb-6"
      >
        <ArrowLeft size={15} /> Back to Bags
      </button>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* ── Left: Gallery ── */}
        <div className="w-full lg:w-[460px] shrink-0 flex flex-col gap-3">
          {/* Main image */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 relative">
            <img
              src={state.images[activeImg]}
              alt={state.name}
              className="w-full h-80 sm:h-[420px] object-cover"
            />
            {discount && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded">
                -{discount}% OFF
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {state.images.length > 1 && (
            <div className="flex gap-2">
              {state.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors shrink-0 ${
                    activeImg === i ? "border-[#7cb800]" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img src={img} alt={`view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Right: Info ── */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Brand + SKU */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-sm font-semibold text-[#7cb800] uppercase tracking-wide">{state.brand}</span>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded font-mono">SKU: {state.sku}</span>
          </div>

          {/* Name */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">{state.name}</h1>

          {/* Rating */}
          <StarRating rating={state.rating} reviews={state.reviews} />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-[#7cb800]">${state.price.toFixed(2)}</span>
            {state.originalPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">${state.originalPrice.toFixed(2)}</span>
                <span className="text-sm font-semibold text-red-500">Save ${(state.originalPrice - state.price).toFixed(2)}</span>
              </>
            )}
          </div>

          {/* Stock */}
          <StockBadge stock={state.stock} />

          {/* Description */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">Description</p>
            <p className="text-sm text-gray-600 leading-relaxed">{state.description}</p>
          </div>

          {/* Colors */}
          {state.colors.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Color: <span className="text-gray-700 normal-case font-medium">{selectedColor ?? "Select a color"}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {state.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-sm rounded border transition-colors ${
                      selectedColor === color
                        ? "border-[#7cb800] bg-green-50 text-[#7cb800] font-medium"
                        : "border-gray-300 text-gray-600 hover:border-gray-500"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          {inStock && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold text-gray-800 min-w-[40px] text-center border-x border-gray-300">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => Math.min(state.stock, q + 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <span className="text-xs text-gray-400">{state.stock} available</span>
              </div>
            </div>
          )}

          {/* Add to cart + View cart */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`flex items-center justify-center gap-2 py-3 px-8 text-sm font-semibold rounded transition-colors flex-1 sm:flex-none ${
                !inStock
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : added
                  ? "bg-green-600 text-white"
                  : "bg-[#4a4a4a] text-white hover:bg-[#7cb800]"
              }`}
            >
              <ShoppingCart size={16} />
              {added ? "✓ Added to Cart!" : inStock ? "ADD TO CART" : "OUT OF STOCK"}
            </button>

            {added && (
              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold rounded border border-[#7cb800] text-[#7cb800] hover:bg-green-50 transition-colors"
              >
                <Eye size={15} /> View Cart
              </button>
            )}
          </div>

          {/* Specs table */}
          <div className="bg-gray-50 rounded-xl px-4 py-1 border border-gray-100 mt-2">
            <InfoRow label="Category" value={state.category} />
            <InfoRow label="Material" value={state.material} />
            <InfoRow label="Dimensions" value={state.dimensions} />
            <InfoRow label="Weight" value={state.weight} />
            <InfoRow label="Product ID" value={`#${state.id}`} />
            <InfoRow label="Added on" value={fmt(state.createdAt)} />
            <InfoRow label="Last updated" value={fmt(state.updatedAt)} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BagDetail;
