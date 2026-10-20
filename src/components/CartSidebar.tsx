import { X, Trash2 } from "lucide-react";
import { useCart } from "../contexts/useCart";

type Props = {
  onClose: () => void;
};

const CartSidebar = ({ onClose }: Props) => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div className="flex-1 bg-black/40" onClick={onClose} />

      {/* Sidebar */}
      <div className="w-full sm:w-80 bg-white h-full flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="font-bold text-gray-800 text-lg">Your Cart</h2>
          <button onClick={onClose}><X size={20} /></button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mt-10">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.name} className="flex items-center gap-3 border-b pb-3">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-[#7cb800] font-bold text-sm">{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-4 border-t">
          <div className="flex justify-between mb-3">
            <span className="font-semibold text-gray-700">Total:</span>
            <span className="font-bold text-[#7cb800]">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-[#7cb800] hover:bg-[#6aa300] text-white py-2 rounded transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
