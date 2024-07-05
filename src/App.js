import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, SingleHotel, SearchResults, Wishlist, Payment } from "./pages";
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
        <Route path="/confirm-booking/stay/:id" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
