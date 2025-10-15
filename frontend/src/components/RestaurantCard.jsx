import { useNavigate } from "react-router-dom";
import DirectionsButton from "./DirectionsButton";
import { useState } from "react";
import ShareButton from "./ShareButton";
import ShareModal from "./ShareModal";
import { FaStar, FaStarHalfAlt, FaRegStar, FaDollarSign } from "react-icons/fa";

const RestaurantCard = ({ restaurant, direction = "vertical" }) => {
  const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Handle the image - use first image from images array or fallback
  const imageUrl =
    restaurant.images?.[0] ||
    restaurant.image ||
    "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=";

  // Share URL for this restaurant
  const shareUrl = `${window.location.origin}/restaurant/${restaurant.id}`;

  // Helper function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="w-3 h-3 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="w-3 h-3 text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="w-3 h-3 text-gray-300" />);
      }
    }
    return stars;
  };

  // Helper function to get rating badge color
  const getRatingColor = (rating) => {
    if (!rating) return "bg-gray-100 text-gray-600 border-gray-300";
    if (rating >= 4.5) return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (rating >= 4.0) return "bg-green-50 text-green-700 border-green-200";
    if (rating >= 3.5) return "bg-yellow-50 text-yellow-700 border-yellow-200";
    if (rating >= 3.0) return "bg-orange-50 text-orange-700 border-orange-200";
    return "bg-red-50 text-red-700 border-red-200";
  };

  // Handle share button click
  const handleShare = async (e) => {
    e.stopPropagation(); // Prevent card click navigation

    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Only use native Web Share API on mobile devices
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: restaurant.name,
          text: `Check out ${restaurant.name} - ${restaurant.cuisine || restaurant.tags?.[0] || 'Restaurant'} • ⭐ ${restaurant.rating || 'N/A'}/5`,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error - show modal as fallback
        if (err.name !== 'AbortError') {
          setIsShareModalOpen(true);
        }
      }
    } else {
      // Desktop or no native share API - show custom modal
      setIsShareModalOpen(true);
    }
  };

  return (
    <>
      {/* Card container with dynamic styles based on direction (i.e. vertical in Home or horizontal in Search) */}
      <div className="relative">
        <div
          className={`restaurant-card ${direction === "vertical"
            ? "max-w-[100%] h-40 flex flex-row rounded-lg shadow-lg bg-white overflow-hidden"
            : "w-44 h-80 flex flex-col rounded-lg shadow-lg bg-white overflow-hidden"
            }`}
          onClick={() => {
            if (restaurant.id) {
              navigate(`/restaurant/${restaurant.id}`);
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={imageUrl}
            alt={restaurant.name || "Restaurant"}
            className={
              direction === "vertical"
                ? "w-60 h-50 object-cover rounded-t-lg"
                : "w-full h-48 object-cover rounded-t-lg"
            }
            onError={(e) => {
              e.target.src =
                "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=";
            }}
          />
          {/* Content section with dynamic styles based on direction */}
          <div className="flex flex-col p-3 flex-grow">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-lg font-bold truncate flex-1">
                {restaurant.name || "Unnamed Restaurant"}
              </h3>
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Share restaurant"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
            {Array.isArray(restaurant.tags) && restaurant.tags.length > 0 ? (
              <div className="flex flex-wrap gap-1 mt-1">
                {restaurant.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 text-[10px] px-1.5 py-0.5 rounded-full inline-block"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm">No tags available</p>
            )}
            
            {/* Rating and Price Level Display */}
            <div className="flex items-center gap-2 mt-2">
              {/* Rating Badge */}
              {restaurant.rating ? (
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border ${getRatingColor(restaurant.rating)} font-semibold transition-all duration-200 hover:shadow-md`}>
                  <div className="flex items-center gap-0.5">
                    {renderStars(restaurant.rating)}
                  </div>
                  <span className="text-sm font-bold">{restaurant.rating.toFixed(1)}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border bg-gray-50 text-gray-500 border-gray-200">
                  <FaRegStar className="w-3 h-3" />
                  <span className="text-xs font-medium">No rating</span>
                </div>
              )}

              {/* Price Level Badge */}
              {restaurant.priceLevel && (
                <div className="inline-flex items-center px-2 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                  {Array.from({ length: Math.max(1, Math.min(4, restaurant.priceLevel)) }).map((_, i) => (
                    <FaDollarSign key={i} className="w-2.5 h-2.5" />
                  ))}
                </div>
              )}

              {/* Cuisine Badge (if no rating) */}
              {!restaurant.rating && restaurant.cuisine && (
                <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
                  <span className="text-xs font-medium">{restaurant.cuisine}</span>
                </div>
              )}
            </div>

            <div onClick={(e) => e.stopPropagation()} className="mt-2">
              <DirectionsButton
                destinationAddress={
                  restaurant.address
                    ? `${restaurant.address.street}, ${restaurant.address.city} ${restaurant.address.postcode}, ${restaurant.address.country}`
                    : restaurant.name
                }
                className="text-xs px-3 py-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        restaurant={restaurant}
        shareUrl={shareUrl}
      />
    </>
  );
};

export default RestaurantCard;
