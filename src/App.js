import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, SingleHotel, SearchResults, Wishlist } from "./pages";
import { Filter } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/hotels/:name/:state/:hotelId/reserve"
          element={<SingleHotel />}
        />
        <Route path="/hotels/:address" element={<SearchResults />} />
        <Route path="/filters" element={<Filter />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
