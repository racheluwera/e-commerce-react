const Categories = ({ sub }: { sub?: string }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{sub ?? "Categories"}</h1>
      <div className="h-1 w-16 bg-[#7cb800] mb-6"></div>
      <p className="text-gray-600">Browse our {sub ?? "Categories"}.</p>
    </div>
  )
}
export default Categories
