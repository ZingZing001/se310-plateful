import RestaurantCard from "./RestaurantCard";
import "../styles/global.css";

const RestaurantList = ({ restaurants, direction }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div
        className={`flex space-x-4 p-2 ${
          direction === "vertical" ? "flex-col" : "flex-row"
        }`}
        style={{ gap: "1rem" }}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant}
            direction={direction}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
