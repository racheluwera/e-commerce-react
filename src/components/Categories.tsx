const categories = [
  { name: "CATEGORY NAME 01", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
  { name: "CATEGORY NAME 02", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80" },
  { name: "CATEGORY NAME 03", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
];

const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {categories.map((cat, i) => (
        <div key={i} className="relative overflow-hidden cursor-pointer group">
          <img
            src={cat.img}
            alt={cat.name}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#7cb800]/80 group-hover:bg-[#4a4a4a]/80 transition-colors px-4 py-2">
            <p className="text-white text-sm font-semibold tracking-wider">{cat.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
