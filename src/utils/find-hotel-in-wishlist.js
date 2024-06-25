export const findHotelInWishlist = (wishlist, id) => {
  const isHoltelInWishlist = wishlist.some((hotel) => hotel._id === id);
  return isHoltelInWishlist;
};
