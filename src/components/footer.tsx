import { Share2, Camera, MessageCircle, Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <a href="/" className="text-2xl font-bold text-[#7cb800]">MyShop</a>
          <p className="mt-3 text-sm leading-relaxed">Your one-stop destination for quality products at the best prices.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#7cb800] transition-colors"><Share2 size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#7cb800] transition-colors"><Camera size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#7cb800] transition-colors"><MessageCircle size={20} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#7cb800] transition-colors"><Play size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="/" className="hover:text-[#7cb800] transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-[#7cb800] transition-colors">Products</a></li>
            <li><a href="/about" className="hover:text-[#7cb800] transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#7cb800] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-4">Customer Service</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-[#7cb800] transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-[#7cb800] transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-[#7cb800] transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-[#7cb800] transition-colors">Track Order</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-4">Newsletter</h4>
          <p className="text-sm leading-relaxed mb-4">Subscribe to get the latest deals and offers.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 rounded-md bg-[#2e303a] border border-[#2e303a] text-white text-sm outline-none focus:border-[#7cb800]" />
            <button type="button" className="px-4 py-2 bg-[#7cb800] hover:bg-[#6aa300] text-white text-sm rounded-md transition-colors">Subscribe</button>
          </div>
        </div>

      </div>

      <div className="border-t border-[#2e303a]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#7cb800] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7cb800] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
