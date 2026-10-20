import { useState } from "react";
import { Search, ShoppingCart, LayoutList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/useCart";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState<"signin" | "signup" | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <ShoppingCart className="text-[#7cb800]" size={28} />
            <div>
              <span className="text-xl font-light text-gray-700">Online </span>
              <span className="text-xl font-bold text-gray-700">Sale</span>
              <p className="text-xs text-gray-400 hidden sm:block">creative ecommerce design</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full sm:flex-1 sm:max-w-md order-last sm:order-none">
            <input
              type="text"
              placeholder="Type and hit enter"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button
              type="button"
              onClick={() => searchQuery.trim() && navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}
              className="bg-gray-100 px-3 py-2 hover:bg-gray-200 transition-colors"
            >
              <Search size={16} />
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setModal("signin")} className="hidden sm:block text-sm text-gray-600 hover:text-[#7cb800] transition-colors font-medium">
              Sign In
            </button>
            <button type="button" onClick={() => setModal("signup")} className="hidden sm:block text-sm bg-[#7cb800] hover:bg-[#6aa300] text-white px-3 py-1.5 rounded transition-colors font-medium">
              Sign Up
            </button>
            <button type="button" className="hidden sm:block bg-[#7cb800] text-white p-2 rounded hover:bg-[#6aa300] transition-colors">
              <LayoutList size={18} />
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative bg-[#7cb800] text-white p-2 rounded hover:bg-[#6aa300] transition-colors"
            >
              <ShoppingCart size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <span className="hidden sm:block text-sm text-gray-600">{totalItems} item(s) - ${cart.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity, 0).toFixed(2)}</span>
          </div>

        </div>
      </header>

      {modal === "signin" && <SignIn onClose={() => setModal(null)} onSwitchToSignUp={() => setModal("signup")} />}
      {modal === "signup" && <SignUp onClose={() => setModal(null)} onSwitchToSignIn={() => setModal("signin")} />}
      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}
    </>
  );
};

export default Header;
