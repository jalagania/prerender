import "./Movie.css";
import { useGlobalContext } from "../context";
import movie from "./icons/icon-category-movie.svg";
import tv from "./icons/icon-category-tv.svg";

function Movie(props) {
  const { appData, setAppData } = useGlobalContext();

  function handleBookmark(title) {
    let index;
    appData.forEach((movie, i) => {
      if (movie.title === title) index = i;
    });

    setAppData((prevState) => {
      return [
        ...prevState.slice(0, index),
        {
          ...prevState[index],
          isBookmarked: !prevState[index].isBookmarked,
        },
        ...prevState.slice(index + 1),
      ];
    });
  }

  return (
    <div className={`movie ${props.className ? "trending" : ""}`}>
      <div className="thumbnail-box">
        <img src={props.thumbnail} alt={props.category} className="thumbnail" />
        <div className="bookmark" onClick={() => handleBookmark(props.title)}>
          <svg
            className={`bookmark-icon ${props.bookmarked ? "hidden" : ""}`}
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <svg
            className={`bookmarked-icon ${props.bookmarked ? "" : "hidden"}`}
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" />
          </svg>
        </div>
        <button className="btn-play hidden">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
              fill="#FFF"
            />
          </svg>
          <p className="play-text">Play</p>
        </button>
      </div>
      <div className={`movie-info-box `}>
        <div className="movie-info">
          <p className="year">{props.year}</p>
          <p className="ball">&bull;</p>
          <div className="category-box">
            <img
              src={props.category === "movie" ? movie : tv}
              alt={props.category}
              className="category-icon"
            />
            <p className="category-name">{props.category}</p>
          </div>
          <p className="bullet">&bull;</p>
          <p className="rating">{props.rating}</p>
        </div>
        <p className="movie-title">{props.title}</p>
      </div>
    </div>
  );
}

export default Movie;
