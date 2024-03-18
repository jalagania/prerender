import { useGlobalContext } from "../context";
import Search from "./Search";
import Movie from "./Movie";

function Bookmarked() {
  const { filteredData } = useGlobalContext();

  return (
    <div className="page bookmarks">
      <Search placeholder="Search for bookmarked shows" name="bookmarked" />
      <h2 className="bookmarked-movies">Bookmarked Movies</h2>
      <div className="movies-container">
        {filteredData
          .filter(
            (movie) => movie.category === "Movie" && movie.isBookmarked === true
          )
          .map((movie, index) => {
            return (
              <Movie
                key={index}
                bookmarked={movie.isBookmarked}
                thumbnail={movie.thumbnail.regular.medium}
                category={movie.category}
                year={movie.year}
                rating={movie.rating}
                title={movie.title}
              />
            );
          })}
      </div>
      <h2 className="bookmarked-series">Bookmarked TV Series</h2>
      <div className="movies-container">
        {filteredData
          .filter(
            (movie) =>
              movie.category === "TV Series" && movie.isBookmarked === true
          )
          .map((movie, index) => {
            return (
              <Movie
                key={index}
                bookmarked={movie.isBookmarked}
                thumbnail={movie.thumbnail.regular.medium}
                category={movie.category}
                year={movie.year}
                rating={movie.rating}
                title={movie.title}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Bookmarked;
