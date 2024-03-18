import { HashRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarked from "./pages/Bookmarked";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv-series" element={<Series />} />
            <Route path="bookmarks" element={<Bookmarked />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
