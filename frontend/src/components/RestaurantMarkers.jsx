import { useEffect } from "react";
import tt from "@tomtom-international/web-sdk-maps";

export default function RestaurantMarkers({ map, restaurants }) {
  useEffect(() => {
    if (!map || !restaurants.length) return;

    // Remove old markers
    const markers = document.querySelectorAll(".custom-marker");
    markers.forEach((marker) => marker.remove());

    restaurants.forEach((r) => {
      try {
        const longitude = r.location?.coordinates?.[0] || r.longitude;
        const latitude = r.location?.coordinates?.[1] || r.latitude;
        if (!longitude || !latitude) return;

        const element = document.createElement("div");
        element.className = "custom-marker";

        const imageUrl = r.images?.[0] || "https://via.placeholder.com/30";
        element.innerHTML = `<img src="${imageUrl}" style="width:30px;height:30px;border-radius:50%;" />`;

        const priceLevel = Math.max(
          1,
          Math.min(4, parseInt(r.priceLevel) || 1)
        );
        const priceDisplay = "$".repeat(priceLevel);

        const popup = new tt.Popup({ offset: 30 }).setHTML(
          `<h3>${r.name || "Restaurant"}</h3>
           <p>${r.description || "No description"}</p>
           <p><strong>Cuisine:</strong> ${r.cuisine || "N/A"}</p>
           <p><strong>Price:</strong> ${priceDisplay}</p>`
        );

        new tt.Marker({ element })
          .setLngLat([longitude, latitude])
          .setPopup(popup)
          .addTo(map);
      } catch (err) {
        console.error("Error creating marker for restaurant:", r.name, err);
      }
    });
  }, [map, restaurants]);

  return null; // doesn’t render React DOM
}
