"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

export function SearchBar(): React.ReactElement {
  const [searchValue, setSearchValue] = useState("");

  const searchSubmitHandler = () => {
    console.log(searchValue);
  };

  return (
    <form
      onSubmit={searchSubmitHandler}
      className="flex items-center bg-background rounded p-2 space-x-2 text-xs"
    >
      <input
        placeholder="Search..."
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="bg-transparent caret-primary focus:outline-none"
      />
      {searchValue === "" ? (
        <Search className="mr-2 h-4 w-4" />
      ) : (
        <X
          className="mr-2 h-4 w-4 cursor-pointer"
          onClick={() => setSearchValue("")}
        />
      )}
    </form>
  );
}
