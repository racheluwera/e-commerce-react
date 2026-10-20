import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Star, Package, Tag, Layers, Pencil, Trash2, CheckCircle, XCircle } from "lucide-react";
import { useCart } from "../contexts/useCart";
import type { Product } from "../contexts/cartTypes";

// ── Breadcrumb ────────────────────────────────────────────────────────────────
const Breadcrumb = ({ name }: { name: string }) => (
  <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
    <Link to="/" className="hover:text-[#7cb800] transition-colors">Home</Link>
    <span>/</span>
    <span className="text-gray-400">Products</span>
    <span>/</span>
    <span className="text-gray-700 font-medium truncate max-w-[160px]">{name}</span>
  </nav>
);

// ── Star Rating ───────────────────────────────────────────────────────────────
const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={16}
          className={s <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}
        />
      ))}
    </div>
    <span className="text-sm text-gray-500">{rating.toFixed(1)} ({reviews} reviews)</span>
  </div>
);

// ── Stock Badge ───────────────────────────────────────────────────────────────
const StockBadge = ({ stock }: { stock: number }) => {
  if (stock === 0)
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
        <XCircle size={13} /> Out of Stock
      </span>
    );
  if (stock <= 5)
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
        <Package size={13} /> Only {stock} left
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
      <CheckCircle size={13} /> In Stock ({stock} available)
    </span>
  );
};

// ── Delete Confirmation Dialog ────────────────────────────────────────────────
const DeleteDialog = ({ name, onConfirm, onCancel }: { name: string; onConfirm: () => void; onCancel: () => void }) => (
  <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center px-4">
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Delete Product</h3>
      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to delete <span className="font-semibold text-gray-800">"{name}"</span>? This action cannot be undone.
      </p>
      <div className="flex gap-3 justify-end">
        <button onClick={onCancel} className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button onClick={onConfirm} className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
          Delete
        </button>
      </div>
    </div>
  </div>
);

// ── Info Row ──────────────────────────────────────────────────────────────────
const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
    <span className="text-gray-400 shrink-0">{icon}</span>
    <span className="text-sm text-gray-500 w-28 shrink-0">{label}</span>
    <span className="text-sm text-gray-800 font-medium">{value}</span>
  </div>
);

// ── Main Page ─────────────────────────────────────────────────────────────────
const Product = () => {
  const { state } = useLocation() as { state: Product | null };
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showDelete, setShowDelete] = useState(false);
  const [added, setAdded] = useState(false);

  if (!state) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Product Not Found</h2>
        <p className="text-sm text-gray-500 mb-6">We couldn't find the product you're looking for.</p>
        <button onClick={() => navigate("/")} className="bg-[#7cb800] text-white px-6 py-2 text-sm hover:bg-[#6aa300] transition-colors rounded">
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(state);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleDelete = () => {
    setShowDelete(false);
    navigate("/");
  };

  const inStock = (state.stock ?? 1) > 0;

  return (
    <>
      {showDelete && (
        <DeleteDialog
          name={state.name}
          onConfirm={handleDelete}
          onCancel={() => setShowDelete(false)}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#7cb800] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Products
          </button>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Edit functionality coming soon.")}
              className="flex items-center gap-1.5 text-sm border border-gray-300 text-gray-600 px-3 py-1.5 rounded hover:border-[#7cb800] hover:text-[#7cb800] transition-colors"
            >
              <Pencil size={14} /> Edit
            </button>
            <button
              onClick={() => setShowDelete(true)}
              className="flex items-center gap-1.5 text-sm border border-red-200 text-red-500 px-3 py-1.5 rounded hover:bg-red-50 transition-colors"
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>
        </div>

        <Breadcrumb name={state.name} />

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Image */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={state.img}
                alt={state.name}
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            {state.category && (
              <div className="mt-3 flex items-center gap-2">
                <Layers size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">Category:</span>
                <span className="text-xs font-medium text-[#7cb800] bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                  {state.category}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Name + ID */}
            <div>
              <p className="text-xs text-gray-400 mb-1">Product ID: #{state.id}</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">{state.name}</h1>
            </div>

            {/* Rating */}
            {state.rating !== undefined && state.reviews !== undefined && (
              <StarRating rating={state.rating} reviews={state.reviews} />
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#7cb800]">{state.price}</span>
              <span className="text-sm text-gray-400">USD</span>
            </div>

            {/* Stock */}
            {state.stock !== undefined && <StockBadge stock={state.stock} />}

            {/* Description */}
            {state.description && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">Description</p>
                <p className="text-sm text-gray-600 leading-relaxed">{state.description}</p>
              </div>
            )}

            {/* Info table */}
            <div className="bg-gray-50 rounded-lg px-4 py-1 border border-gray-100">
              {state.brand && <InfoRow icon={<Tag size={15} />} label="Brand" value={state.brand} />}
              {state.category && <InfoRow icon={<Layers size={15} />} label="Category" value={state.category} />}
              {state.createdAt && <InfoRow icon={<span className="text-xs">📅</span>} label="Added on" value={new Date(state.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} />}
              {state.updatedAt && <InfoRow icon={<span className="text-xs">🔄</span>} label="Last updated" value={new Date(state.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} />}
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`flex items-center justify-center gap-2 py-3 px-8 text-sm font-medium transition-colors w-full sm:w-fit rounded
                ${inStock
                  ? added
                    ? "bg-green-600 text-white"
                    : "bg-[#4a4a4a] text-white hover:bg-[#7cb800]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              <ShoppingCart size={16} />
              {added ? "Added to Cart!" : inStock ? "ADD TO CART" : "OUT OF STOCK"}
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
