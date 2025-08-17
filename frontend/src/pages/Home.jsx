import backgroundImage from "../assets/PlatefulBackgroundHome copy.png";
import "../styles/home.css";
import "../styles/global.css";

export default function Home() {
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
          <div className="cuisine-item">Italian</div>
          <div className="cuisine-item">Chinese</div>
          <div className="cuisine-item">Mexican</div>
          <div className="cuisine-item">Indian</div>
        </div>
      </section>
    </div>
  );
}
