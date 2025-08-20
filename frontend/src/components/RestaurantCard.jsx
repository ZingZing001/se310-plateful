import "../styles/global.css";
const RestaurantCard = ({ restaurant, direction = "vertical" }) => {
  return (
    <div
      className={`restaurant-card ${
        direction === "vertical"
          ? "w-64 h-80 flex flex-col rounded-lg shadow-lg bg-white overflow-hidden"
          : "w-64 h-80 flex flex-col rounded-lg shadow-lg bg-white overflow-hidden"
      }`}
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="flex flex-col p-3 flex-grow">
        <h3 className="text-lg font-bold truncate">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {restaurant.description}
        </p>
        <p className="text-sm text-gray-500 mt-auto">
          ⭐ Rating: {restaurant.rating}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
