import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  {
    label: "Home", path: "/",
    items: [
      { label: "Home Page", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Contact Us", path: "/contact" },
    ]
  },
  {
    label: "Bags", path: "/bags",
    items: [
      { label: "Handbags", path: "/bags/handbags" },
      { label: "Backpacks", path: "/bags/backpacks" },
      { label: "Clutches", path: "/bags/clutches" },
      { label: "Travel Bags", path: "/bags/travel" },
    ]
  },
  {
    label: "Jackets", path: "/jackets",
    items: [
      { label: "Leather Jackets", path: "/jackets/leather" },
      { label: "Denim Jackets", path: "/jackets/denim" },
      { label: "Winter Coats", path: "/jackets/winter" },
      { label: "Blazers", path: "/jackets/blazers" },
    ]
  },
  {
    label: "Accesories", path: "/accesories",
    items: [
      { label: "Belts", path: "/accesories/belts" },
      { label: "Wallets", path: "/accesories/wallets" },
      { label: "Sunglasses", path: "/accesories/sunglasses" },
      { label: "Watches", path: "/accesories/watches" },
    ]
  },
  {
    label: "Categories", path: "/categories",
    items: [
      { label: "New Arrivals", path: "/categories/new" },
      { label: "Best Sellers", path: "/categories/best" },
      { label: "Sale", path: "/categories/sale" },
      { label: "Featured", path: "/categories/featured" },
    ]
  },
  {
    label: "Manufacters", path: "/manufacters",
    items: [
      { label: "Brand A", path: "/manufacters/brand-a" },
      { label: "Brand B", path: "/manufacters/brand-b" },
      { label: "Brand C", path: "/manufacters/brand-c" },
      { label: "Brand D", path: "/manufacters/brand-d" },
    ]
  },
  {
    label: "Electronics", path: "/electronics",
    items: [
      { label: "Phones", path: "/electronics/phones" },
      { label: "Laptops", path: "/electronics/laptops" },
      { label: "Tablets", path: "/electronics/tablets" },
      { label: "Accessories", path: "/electronics/accessories" },
    ]
  },
  {
    label: "Shoes", path: "/shoes",
    items: [
      { label: "Sneakers", path: "/shoes/sneakers" },
      { label: "Boots", path: "/shoes/boots" },
      { label: "Sandals", path: "/shoes/sandals" },
      { label: "Formal", path: "/shoes/formal" },
    ]
  },
  {
    label: "Shirts", path: "/shirts",
    items: [
      { label: "Casual", path: "/shirts/casual" },
      { label: "Formal", path: "/shirts/formal" },
      { label: "T-Shirts", path: "/shirts/tshirts" },
      { label: "Polo", path: "/shirts/polo" },
    ]
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <nav className="bg-[#4a4a4a] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop */}
        <ul className="hidden md:flex items-center">
          {navItems.map((nav) => (
            <li key={nav.label} className="relative group">
              <Link
                to={nav.path}
                className="block px-4 py-4 text-white text-sm uppercase tracking-wide hover:bg-[#7cb800] transition-colors"
              >
                {nav.label}
              </Link>
              <ul className="absolute top-full left-0 w-44 bg-white shadow-lg hidden group-hover:block z-50">
                {nav.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#7cb800] hover:text-white transition-colors border-b border-gray-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center justify-between py-2">
          <span className="text-white text-sm uppercase tracking-wide">Menu</span>
          <button onClick={() => setOpen(!open)} className="text-white p-1">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#3a3a3a]">
          {navItems.map((nav) => (
            <div key={nav.label}>
              <button
                onClick={() => setExpanded(expanded === nav.label ? null : nav.label)}
                className="w-full text-left px-4 py-3 text-white text-sm uppercase tracking-wide hover:bg-[#7cb800] transition-colors flex justify-between items-center"
              >
                {nav.label}
                <span>{expanded === nav.label ? '−' : '+'}</span>
              </button>
              {expanded === nav.label && (
                <div className="bg-[#2a2a2a]">
                  {nav.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="block px-8 py-2 text-sm text-gray-300 hover:bg-[#7cb800] hover:text-white transition-colors border-b border-[#3a3a3a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
