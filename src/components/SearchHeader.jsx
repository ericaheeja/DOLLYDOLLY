import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function SearchHeader({ text, updateText, container, updateContainer, check, updateCheck }) {
  const navigate = useNavigate();
  // const [text, setText] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate(keyword !== undefined ? `/products/${keyword}/${text}` : `/products/${text}`);
  // };

  // useEffect(() => console.log(), [text]);

  const handleChanage = (e) => {
    if (e.target.checked) {
      updateCheck({ ...check, [e.target.value]: e.target.checked });
    } else {
      updateCheck({ ...check, [e.target.value]: e.target.checked });
    }
  };

  return (
    <div className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <form className="w-full flex justify-center items-center">
        <input
          className="w-7/12 p-2 outline-none border"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => updateText(e.target.value)}
        />
        <div className="px-4">
          <BsSearch />
        </div>
      </form>
      <button
        className="mr-2 text-lg underline relative h-2"
        onClick={() => updateContainer(!container)}
      >
        Filter
      </button>
      {container && (
        <div className="border w-60 h-58 absolute right-0 mt-10 bg-white text-base">
          <p className="mb-2">색상</p>
          <input type="checkbox" name="brown" value="brown" onChange={(e) => handleChanage(e)} />
          브라운
          <br />
          <input type="checkbox" name="pink" value="pink" onChange={(e) => handleChanage(e)} />
          핑크
          <br />
          <input type="checkbox" name="red" value="red" onChange={(e) => handleChanage(e)} />
          레드
          <br />
          <p className="my-2">가격</p>
          <input type="checkbox" name="low" value="low" onChange={(e) => handleChanage(e)} />
          10000원 미만
          <br />
          <input type="checkbox" name="medium" value="medium" onChange={(e) => handleChanage(e)} />
          10000원 이상 15000원 미만
          <br />
          <input type="checkbox" name="high" value="high" onChange={(e) => handleChanage(e)} />
          15000원 이상
          <br />
          <br />
        </div>
      )}
    </div>
  );
}

export default SearchHeader;
