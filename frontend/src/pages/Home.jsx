import backgroundImage from "../assets/PlatefulBackgroundHome copy.png";
import "../styles/home.css";
import "../styles/global.css";
import navLogo from "../assets/navlogo.png";

export default function Home() {
  const cuisines = [
    { name: "Chinese", image: navLogo }, // TO DO - replace with actual images
    { name: "Japanese", image: navLogo },
    { name: "Italian", image: navLogo },
    { name: "Mexican", image: navLogo },
    { name: "Indian", image: navLogo },
    { name: "Thai", image: navLogo },
  ];

  return (
    <div>
      <section className="search-wrapper">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
      </section>

      <section className="cuisine-section">
        <h2>Explore Cuisines</h2>
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
