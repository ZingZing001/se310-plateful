import { useState, useRef, useEffect } from "react";
import backgroundImage from "../assets/PlatefulBackgroundHome copy.png";
import RestaurantList from "../components/RestaurantList";
import "../styles/search.css";
import "../styles/global.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

export default function Home() {
  const mapElement = useRef(null);

  const [mapLongitude, setMapLongitude] = useState(174.763336);
  const [mapLatitude, setMapLatitude] = useState(-36.848461);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

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

  // Sample restaurant data
  // TO DO - replace with actual data from API or database
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

      <section className="results-container">
        <div className="restaurant-list">
          <RestaurantList restaurants={restaurants} direction={"vertical"} />
        </div>
        <div className="map-container">
          <div ref={mapElement} className="mapDiv">
            <input
              type="text"
              name="longitude"
              value={mapLongitude}
              onChange={(e) => setMapLongitude(e.target.value)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
