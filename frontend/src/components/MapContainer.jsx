import { useEffect, useRef, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";

export default function MapContainer({ longitude, latitude, zoom, children }) {
  const mapElement = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = tt.map({
      key: "agzx9wsQdqX7CENP7gN1KQWwEe7V9c37", // TomTom Map API key
      container: mapElement.current,
      center: [longitude, latitude],
      zoom: zoom,
    });

    setMap(mapInstance);

    return () => mapInstance.remove();
  }, [longitude, latitude, zoom]);

  return (
    <div
      ref={mapElement}
      className="w-full h-full rounded-lg overflow-hidden relative"
    >
      {/* children are passed the map instance */}
      {map && children(map)}
    </div>
  );
}
