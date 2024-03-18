import { useGlobalContext } from "../context";
import Search from "./Search";
import Movie from "./Movie";

function Movies() {
  const { filteredData } = useGlobalContext();

  return (
    <div className="page movies">
      <Search placeholder="Search for movies" name="movies" />
      <h2 className="movies-title">Movies</h2>
      <div className="movies-container">
        {filteredData
          .filter((movie) => movie.category === "Movie")
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

export default Movies;
