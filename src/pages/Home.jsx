import React from "react";
import Products from "./Products";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";

function Home() {
  const { keyword } = useParams();

  return (
    <>
      <Banner />
      <Products keyword={keyword} />
    </>
  );
}

export default Home;
