import backgroundImage from "../assets/PlatefulBackgroundHome copy.png";
import "../styles/home.css";
import "../styles/global.css";
import navLogo from "../assets/navlogo.png";
import RestaurantList from "../components/RestaurantList";

export default function Home() {
  const cuisines = [
    { name: "Chinese", image: navLogo }, // TO DO - replace with actual images
    { name: "Japanese", image: navLogo },
    { name: "Italian", image: navLogo },
    { name: "Mexican", image: navLogo },
    { name: "Indian", image: navLogo },
    { name: "Thai", image: navLogo },
  ];

  const restaurants = [
    {
      name: "Sushi World",
      description: "Fresh sushi rolls and sashimi prepared daily.",
      rating: 4.7,
      image:
        "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    },
    {
      name: "Pasta Palace",
      description: "Authentic Italian pasta with homemade sauces.",
      rating: 4.5,
      image:
        "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    },
    {
      name: "Burger Haven",
      description: "Juicy burgers with all the fixings you can imagine.",
      rating: 4.3,
      image:
        "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    },
    {
      name: "Taco Fiesta",
      description: "Mexican street-style tacos with bold flavors.",
      rating: 4.6,
      image:
        "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    },
    {
      name: "Curry House",
      description: "Spicy and savory curries inspired by India.",
      rating: 4.4,
      image:
        "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    },
  ];

  return (
    <div>
      <section className="search-wrapper">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
        <h1 className="search-title">Looking for something to eat?</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
      </section>

      <section className="restaurant-section">
        <h3>Popular Restaurants</h3>
        <RestaurantList restaurants={restaurants} />
      </section>

      <section className="cuisine-section">
        <h3>Explore Cuisines</h3>
        <div className="cuisine-list">
          {cuisines.map((cuisine) => (
            <div key={cuisine.name} className="cuisine-item">
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="cuisine-image"
              />
              <div className="cuisine-label">{cuisine.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
