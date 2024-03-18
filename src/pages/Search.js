import "./Search.css";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

function Search(props) {
  const {
    appData,
    setFilteredData,
    searchTerm,
    setSearchTerm,
    searchResultAmount,
    setSearchResultAmount,
  } = useGlobalContext();

  function handleInputChange(event) {
    setSearchTerm(event.target.value);

    if (event.target.name === "home") {
      setSearchResultAmount(
        appData.filter((movie) =>
          movie.title.toLowerCase().includes(event.target.value.toLowerCase())
        ).length
      );
    }

    if (event.target.name === "movies") {
      setSearchResultAmount(
        appData
          .filter((movie) => movie.category === "Movie")
          .filter((movie) =>
            movie.title.toLowerCase().includes(event.target.value.toLowerCase())
          ).length
      );
    }

    if (event.target.name === "series") {
      setSearchResultAmount(
        appData
          .filter((movie) => movie.category === "TV Series")
          .filter((movie) =>
            movie.title.toLowerCase().includes(event.target.value.toLowerCase())
          ).length
      );
    }

    if (event.target.name === "bookmarked") {
      setSearchResultAmount(
        appData
          .filter((movie) => movie.isBookmarked === true)
          .filter((movie) =>
            movie.title.toLowerCase().includes(event.target.value.toLowerCase())
          ).length
      );
    }
  }

  useEffect(() => {
    setFilteredData(
      appData.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
          <svg
            className="search"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
              fill="#FFF"
            />
          </svg>
        </label>
        <input
          className="search-input"
          type="text"
          id="search"
          name={props.name}
          placeholder={props.placeholder}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
      {searchTerm !== "" && (
        <p className="search-result">{`Found ${searchResultAmount} ${
          searchResultAmount > 1 ? "results" : "result"
        } for "${searchTerm}"`}</p>
      )}
    </div>
  );
}

export default Search;
