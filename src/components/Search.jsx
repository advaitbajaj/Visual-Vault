import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../assets/visual vault_logo.png";

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const getSearch = (e) => {
    e.preventDefault();
    setQuery({ query: search });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      <div className="hidden px-6 my-auto md:block">
        <h1 className="text-3xl lg:text-4xl text-[#CAF0F8]">Visual Vault</h1>
      </div>
      <div className="block px-6 my-auto md:hidden">
        <img src={Logo} alt="logo" className="w-[70px] sm:w-[100px]" />
      </div>
      <div className="px-2 relative text-[#CAF0F8] text-sm md:text-lg">
        <form
          className=" md:w-[400px] relative mt-4 mx-auto"
          onSubmit={getSearch}
        >
          <div className="relative">
            <input
              type="search"
              placeholder="Search Photos"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-full p-4 bg-transparent border-[#CAF0F8] border-b-2 capitalize focus-visible:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 hover:scale-125 transition ease-out">
              <AiOutlineSearch size={25} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
