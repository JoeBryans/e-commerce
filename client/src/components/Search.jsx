import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
const Search = ({ setShow, show }) => {
  const SearchHandler = async () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <form
        className={
          show
            ? "d-flex  p-2 container-fluid mx-5 justify-content-center focus:outline-none focus:border-none "
            : "d-none"
        }
      >
        <input
          type="search"
          placeholder="Search Items... "
          className="w-52 text-slate-500 rounded-md px-2 focus:outline-none"
        />

        <FaIcons.FaSearch
          size={30}
          style={{ color: "white", cursor: "pointer" }}
          className={show ? "d-flex mx-3" : "d-none"}
          onClick={SearchHandler}
        />
      </form>
    </div>
  );
};

export default Search;
