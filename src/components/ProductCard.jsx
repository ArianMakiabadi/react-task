function ProductCard({ name, price, stock }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="font-bold">{name}</h3>
      <p>${price}</p>
      {/* TODO 2 */}
      <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}
export default ProductCard;
