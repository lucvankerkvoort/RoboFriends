import React from "react";

const Search = ({ search }) => {
  return (
    <div>
      <input type="search" placeholder="search robots" onChange={search} />
    </div>
  );
};
export default Search;
