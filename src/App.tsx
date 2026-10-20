import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'
import Header from './components/header'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Bags from './pages/Bags'
import Jackets from './pages/Jackets'
import Accesories from './pages/Accessories'
import Categories from './pages/Categories'
import Manufacters from './pages/Manufactures'
import Electronics from './pages/Electronics'
import Shoes from './pages/Shoes'
import Shirts from './pages/Shirts'
import Search from './pages/search'
import Product from './pages/Product'
import BagDetail from './pages/BagDetail'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/bags/:id" element={<BagDetail />} />
        <Route path="/bags/handbags" element={<Bags sub="Handbags" />} />
        <Route path="/bags/backpacks" element={<Bags sub="Backpacks" />} />
        <Route path="/bags/clutches" element={<Bags sub="Clutches" />} />
        <Route path="/bags/travel" element={<Bags sub="Travel Bags" />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/jackets/leather" element={<Jackets sub="Leather Jackets" />} />
        <Route path="/jackets/denim" element={<Jackets sub="Denim Jackets" />} />
        <Route path="/jackets/winter" element={<Jackets sub="Winter Coats" />} />
        <Route path="/jackets/blazers" element={<Jackets sub="Blazers" />} />
        <Route path="/accesories" element={<Accesories />} />
        <Route path="/accesories/belts" element={<Accesories sub="Belts" />} />
        <Route path="/accesories/wallets" element={<Accesories sub="Wallets" />} />
        <Route path="/accesories/sunglasses" element={<Accesories sub="Sunglasses" />} />
        <Route path="/accesories/watches" element={<Accesories sub="Watches" />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/new" element={<Categories sub="New Arrivals" />} />
        <Route path="/categories/best" element={<Categories sub="Best Sellers" />} />
        <Route path="/categories/sale" element={<Categories sub="Sale" />} />
        <Route path="/categories/featured" element={<Categories sub="Featured" />} />
        <Route path="/manufacters" element={<Manufacters />} />
        <Route path="/manufacters/brand-a" element={<Manufacters sub="Brand A" />} />
        <Route path="/manufacters/brand-b" element={<Manufacters sub="Brand B" />} />
        <Route path="/manufacters/brand-c" element={<Manufacters sub="Brand C" />} />
        <Route path="/manufacters/brand-d" element={<Manufacters sub="Brand D" />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/electronics/phones" element={<Electronics sub="Phones" />} />
        <Route path="/electronics/laptops" element={<Electronics sub="Laptops" />} />
        <Route path="/electronics/tablets" element={<Electronics sub="Tablets" />} />
        <Route path="/electronics/accessories" element={<Electronics sub="Accessories" />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoes/sneakers" element={<Shoes sub="Sneakers" />} />
        <Route path="/shoes/boots" element={<Shoes sub="Boots" />} />
        <Route path="/shoes/sandals" element={<Shoes sub="Sandals" />} />
        <Route path="/shoes/formal" element={<Shoes sub="Formal" />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/shirts/casual" element={<Shirts sub="Casual" />} />
        <Route path="/shirts/formal" element={<Shirts sub="Formal" />} />
        <Route path="/shirts/tshirts" element={<Shirts sub="T-Shirts" />} />
        <Route path="/shirts/polo" element={<Shirts sub="Polo" />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
