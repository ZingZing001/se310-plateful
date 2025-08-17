import backgroundImage from "../assets/PlatefulBackgroundHome copy.png";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="showcase">
      <section className="search-wrapper">
        <img
          src={backgroundImage}
          alt="Background"
          className="full-width-image"
        />
      </section>
    </div>
  );
}
