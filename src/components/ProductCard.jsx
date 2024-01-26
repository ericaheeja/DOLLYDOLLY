import React from "react";
import { useLocation } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../api/firebase";

function ProductCard({ product: { id, category, image, title, price, color, description } }) {
  const location = useLocation();
  const handleClick = (e) => {
    const product = { id, category, image, title, price, color };
    addToWishlist(product);
  };

  const removeItem = () => {
    removeFromWishlist(id);
    window.location.reload();
  };

  return (
    <li className="rounded-lg shadow-md overflow-hidden curso-point">
      <img className="w-full" src={image} alt={title} />
      <div className="mt-2 px-2 text-lg flex justify-between item-center">
        <h3 className="truncate">{title}</h3>
        <p>{`${price}원`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
      {location.pathname === "/wishlist" ? (
        <button className="border float-right p-4 m-4" onClick={removeItem}>
          삭제
        </button>
      ) : (
        <button className="border float-right p-4 m-4" onClick={handleClick}>
          위시리스트
        </button>
      )}
    </li>
  );
}

export default ProductCard;
