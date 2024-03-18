import { useGlobalContext } from "../context";
import Search from "./Search";
import Movie from "./Movie";

function Series() {
  const { filteredData } = useGlobalContext();

  return (
    <div className="page series">
      <Search placeholder="Search for TV series" name="series" />
      <h2 className="movies-title">TV Series</h2>
      <div className="movies-container">
        {filteredData
          .filter((movie) => movie.category === "TV Series")
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

export default Series;
