const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="restaurant-image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <h3 className="restaurant-name">{restaurant.name}</h3>
      <p className="restaurant-description">{restaurant.description}</p>
      <p className="restaurant-rating">Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaurantCard;
