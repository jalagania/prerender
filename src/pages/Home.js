import "./Home.css";
import { useGlobalContext } from "../context";
import Search from "./Search";
import Movie from "./Movie";

function Home() {
  const { appData, filteredData, searchTerm } = useGlobalContext();

  return (
    <div className="page home">
      <Search placeholder="Search for movies or TV series" name="home" />
      {searchTerm === "" && (
        <div>
          <h2 className="trending">Trending</h2>
          <div className="trending-container">
            {appData
              .filter((movie) => movie.isTrending === true)
              .map((movie, index) => {
                return (
                  <Movie
                    key={index}
                    className="large"
                    bookmarked={movie.isBookmarked}
                    thumbnail={movie.thumbnail.trending.large}
                    category={movie.category}
                    year={movie.year}
                    rating={movie.rating}
                    title={movie.title}
                  />
                );
              })}
          </div>
        </div>
      )}
      <h2 className="recommended">Recommended for you</h2>
      <div className="movies-container">
        {filteredData.map((movie, index) => {
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

export default Home;
