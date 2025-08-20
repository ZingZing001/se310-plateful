import { useState, useRef, useEffect } from "react";
import backgroundImage from "../assets/PlatefulBackgroundHome copy.png";
import "../styles/home.css";
import "../styles/global.css";
import navLogo from "../assets/navlogo.png";
import RestaurantList from "../components/RestaurantList";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

export default function Home() {
  const mapElement = useRef(null);

  const [mapLongitude, setMapLongitude] = useState(174.763336);
  const [mapLatitude, setMapLatitude] = useState(-36.848461);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState(null);

  const [restaurantsRaw, setRestaurantsRaw] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const MAX_ZOOM = 18;

  // Fetch real restaurants from MongoDB
  useEffect(() => {
    setLoading(true);
    setErr("");
    fetch("http://localhost:8080/api/restaurants")
      .then((res) => {
        if (!res.ok) throw new Error(`API ${res.status}`);
        return res.json();
      })
      .then((data) => setRestaurantsRaw(Array.isArray(data) ? data : []))
      .catch((e) => setErr(e.message || "Failed to load restaurants"))
      .finally(() => setLoading(false));
  }, []);

  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  useEffect(() => {
    let map = tt.map({
      key: "agzx9wsQdqX7CENP7gN1KQWwEe7V9c37",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
    return () => map.remove();
  }, []);

  // Map fetched data into card shape
  const toCard = (r) => ({
    name: r.name,
    description: r.description,
    rating: 5, // TODO: hardcoded for testing, should change later
    image:
      (Array.isArray(r.images) && r.images[0]) ||
      "https://picsum.photos/seed/placeholder/600/400",
  });

  // filter popular
  const popularDocs = restaurantsRaw.filter(
    (r) => Array.isArray(r.tags) && r.tags.includes("popular")
  );
  // filter local favourite
  const localFavDocs = restaurantsRaw.slice(0, 5);

  const popularCards = (popularDocs.length ? popularDocs : restaurantsRaw.slice(0, 6)).map(toCard);
  const localFavCards = localFavDocs.map(toCard);


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
        <h1 className="search-title">Looking for something to eat?</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
      </section>

      <section className="restaurant-section">
        <h3>Popular Restaurants</h3>
        <RestaurantList restaurants={popularCards} />
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

      <section className="restaurant-section">
        <h3>Local Favourites</h3>
        <RestaurantList restaurants={localFavCards} />
      </section>

      <section className="map-section">
        <div ref={mapElement} className="mapDiv">
          <input
            type="text"
            name="longitude"
            value={mapLongitude}
            onChange={(e) => setMapLongitude(e.target.value)}
          />
        </div>
      </section>
    </div>
  );
}
