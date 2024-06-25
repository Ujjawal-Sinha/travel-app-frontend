import { Fragment } from "react";
import { Navbar, HotelCard } from "../../components";
import { useWishlist } from "../../context";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <Fragment>
      <Navbar />
      <h2 className="heading-2">Your Wihlist</h2>
      <section className="wishlist-page d-flex align-center wrap gap-larger">
        {wishlist.length === 0 ? (
          <h2 className="heading-2">No hotels in your wishlist</h2>
        ) : (
          <div className="hotel-card-container">
            {wishlist.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
        )}
      </section>
    </Fragment>
  );
};
