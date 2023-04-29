// import React, { useRef} from "react";

const SearchBox = ({ onChange }) => {

  return (
    <div className="pa2">
      <input
        type="text"
        placeholder="Search"
        className="pa3 ba b--green bg-lightest-blue "
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
