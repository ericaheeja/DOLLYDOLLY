import React from "react";

function ProductCard({ product: { id, category, image, title, price, color, description } }) {
  return (
    <li className="rounded-lg shadow-md overflow-hidden curso-point">
      <img className="w-full" src={image} alt={title} />
      <div className="mt-2 px-2 text-lg flex justify-between item-center">
        <h3 className="truncate">{title}</h3>
        <p>{`${price}원`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}

export default ProductCard;
