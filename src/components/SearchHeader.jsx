import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/${text}`);
  };

  // useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <div className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none border"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-4">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchHeader;
