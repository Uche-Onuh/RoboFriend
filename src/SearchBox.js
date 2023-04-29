import React, { useRef } from "react";

const SearchBox = () => {
  const inputRef = useRef();

  const onChange = () => {
    const value = inputRef.current.value;
  };

  return (
    <div className="pa2">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="pa3 ba b--green bg-lightest-blue "
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
