import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";
import SearchHeader from "../components/SearchHeader";

function Clothes({ keyword }) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: async () => getProducts() });

  const [text, setText] = useState("");
  const updateText = (text) => {
    setText(text);
  };

  const collectClothes = (product) => {
    if (product.category === "clothes") {
      return <ProductCard key={product.id} product={product} />;
    }
  };

  return (
    <>
      <SearchHeader text={text} updateText={updateText} keyword={keyword} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {products &&
          products
            .filter((product) => {
              return text === "" ? product : product.description.includes(text);
            })
            .map((product) => {
              return collectClothes(product);
            })}
      </ul>
    </>
  );
}

export default Clothes;
