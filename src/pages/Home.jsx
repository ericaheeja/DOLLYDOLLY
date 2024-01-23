import React from "react";
import Products from "./Products";
import Banner from "../components/Banner";
import SearchHeader from "../components/SearchHeader";
import { useParams } from "react-router-dom";
import Dolls from "./Dolls";
import Clothes from "./Clothes";
import Accessaries from "./Accessaries";

function Home() {
  const { keyword } = useParams();
  console.log(keyword);
  return (
    <>
      <Banner />
      <SearchHeader />
      {/* {keyword && `'${keyword}'의 검색 결과`} */}
      {keyword === undefined && <Products keyword={keyword} />}
      {keyword === "dolls" && <Dolls keyword={keyword} />}
      {keyword === "clothes" && <Clothes keyword={keyword} />}
      {keyword === "accessaries" && <Accessaries keyword={keyword} />}
    </>
  );
}

export default Home;
