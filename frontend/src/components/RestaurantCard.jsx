import "../styles/global.css";
const RestaurantCard = ({ restaurant, key, direction }) => {
  return (
    <div
      className={`restaurant-card ${key} ${
        direction === "vertical"
          ? "flex flex-row items-start gap-4 p-4 rounded-lg shadow-lg bg-white"
          : "flex flex-col items-center gap-2 p-2 rounded-md shadow-lg bg-white"
      }`}
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className={
          direction === "vertical"
            ? "w-32 h-32 object-cover rounded-md flex-shrink-0"
            : "w-full h-48 object-cover rounded-md"
        }
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold">{restaurant.name}</h3>
        <p className="text-gray-600">{restaurant.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          ⭐ Rating: {restaurant.rating}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
