import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";
import SearchHeader from "../components/SearchHeader";

function Products({ keyword }) {
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

  const currentPage = (products) => {
    if (products && keyword === "dolls") {
      return products
        .filter((product) => filterProducts(product))
        .map((product) => {
          return product.category === "dolls" && <ProductCard key={product.id} product={product} />;
        });
    } else if (products && keyword === "clothes") {
      return products
        .filter((product) => filterProducts(product))
        .map((product) => {
          return (
            product.category === "clothes" && <ProductCard key={product.id} product={product} />
          );
        });
    } else if (products && keyword === "accessaries") {
      return products
        .filter((product) => filterProducts(product))
        .map((product) => {
          return (
            product.category === "accessaries" && <ProductCard key={product.id} product={product} />
          );
        });
    } else {
      return (
        products &&
        products
          .filter((product) => filterProducts(product))
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
      );
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
        {currentPage(products)}
      </ul>
    </>
  );
}

export default Products;
