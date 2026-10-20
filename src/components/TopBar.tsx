import { User, Heart, ShoppingCart } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#7cb800] text-white text-sm hidden sm:block">
      <div className="max-w-6xl mx-auto px-4 h-9 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="cursor-pointer hover:underline">€</span>
          <span className="cursor-pointer hover:underline">£</span>
          <span className="cursor-pointer hover:underline">$</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:underline flex items-center gap-1"><User size={14} /> My Account</a>
          <a href="#" className="hover:underline flex items-center gap-1"><Heart size={14} /> Wish List</a>
          <a href="#" className="hover:underline flex items-center gap-1"><ShoppingCart size={14} /> Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
