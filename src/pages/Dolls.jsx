import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";

function Dolls({ keyword }) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: async () => getProducts() });

  const collectDolls = (product) => {
    if (product.category === "dolls") {
      return <ProductCard key={product.id} product={product} />;
    }
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {products && products.map((product) => collectDolls(product))}
      </ul>
    </>
  );
}

export default Dolls;
