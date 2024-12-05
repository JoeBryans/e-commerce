import React from "react";
import * as FaIcons from "react-icons/fa";

const Searchs = () => {
  return (
    <div className=" w-full h-full relative top-5 text-slate-700">
      <form className="d-flex  p-2  justify-content-center focus:outline-none focus:border-none ">
        <input
          type="search"
          placeholder="Search Items... "
          className="w-64 border text-slate-500 rounded-md px-2 focus:outline-none"
        />

        <FaIcons.FaSearch
          size={30}
          style={{ color: "", cursor: "pointer" }}
          className="d-flex mx-3 text-slate-700"
        />
      </form>{" "}
    </div>
  );
};

export default Searchs;
