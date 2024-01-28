import React, { useState } from "react";
import { getWishlist } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import SearchHeader from "../components/SearchHeader";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const {
    isLoading,
    error,
    data: wishlist,
  } = useQuery({ queryKey: ["wishlist"], queryFn: async () => getWishlist() });

  const [text, setText] = useState("");
  const [container, setContainer] = useState(false);
  const [check, setCheck] = useState({
    brown: false,
    pink: false,
    red: false,
    low: false,
    medium: false,
    high: false,
  });
  const updateText = (text) => {
    setText(text);
  };
  const updateContainer = (container) => {
    setContainer(container);
  };
  const updateCheck = (check) => {
    setCheck(check);
    console.log(check);
  };

  const filterProducts = (product) => {
    const { color, price } = product;
    const { brown, pink, red, low, medium, high } = check;
    if (text !== "" && !product.description.includes(text)) {
      return false;
    }
    if ((brown && color !== "brown") || (pink && color !== "pink") || (red && color !== "red")) {
      return false;
    }
    if (
      (low && price >= 10000) ||
      (medium && (price < 10000 || price >= 15000)) ||
      (high && price < 15000)
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      <SearchHeader
        text={text}
        updateText={updateText}
        container={container}
        updateContainer={updateContainer}
        check={check}
        updateCheck={updateCheck}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {wishlist &&
          wishlist
            .filter((product) => filterProducts(product))
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </ul>
    </>
  );
}

export default Wishlist;
