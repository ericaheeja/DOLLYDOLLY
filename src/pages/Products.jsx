import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";
import SearchHeader from "../components/SearchHeader";

function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: async () => getProducts() });

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

  const filterColorAndPrice = (product) => {
    for (const [key, value] of Object.entries(check)) {
      if (product.color === key && value) {
        return product;
      } else {
        return product;
      }
    }
  };

  const filterProduct = (product) => {
    if (text === "") {
      return filterColorAndPrice(product);
    } else {
      return product.description.includes(text);
    }
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
        {products &&
          products
            .filter((product) => {
              return filterProduct(product);
            })
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </ul>
    </>
  );
}

export default Products;
