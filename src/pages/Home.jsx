import React from "react";
import Products from "./Products";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import Dolls from "./Dolls";
import Clothes from "./Clothes";
import Accessaries from "./Accessaries";

function Home() {
  const { keyword } = useParams();

  return (
    <>
      <Banner />
      {keyword === undefined && <Products />}
      {keyword === "dolls" && <Dolls keyword={keyword} />}
      {keyword === "clothes" && <Clothes keyword={keyword} />}
      {keyword === "accessaries" && <Accessaries keyword={keyword} />}
    </>
  );
}

export default Home;
