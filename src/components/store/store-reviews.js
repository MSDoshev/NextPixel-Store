import { useEffect, useState } from "react";
import StarRating from "../ui/StartRating";

export default function Reviews({ gameId }) {
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // Fetch reviews on mount
  useEffect(() => {
    const fetchGameReviews = async () => {
      const response = await fetch(`/api/games/${gameId}`);
      const gameData = await response.json();
      setReviews(gameData.reviews || []);
    };

    fetchGameReviews();
  }, [gameId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview || newRating === 0) return;

    const reviewData = {
      gameId,
      userId: "userId", // Replace with actual user ID
      review: newReview,
      rating: newRating,
    };

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });

    if (response.ok) {
      setReviews((prev) => [
        ...prev,
        {
          userId: reviewData.userId,
          review: newReview,
          rating: newRating,
          createdAt: new Date(),
        },
      ]);
      setNewReview("");
      setNewRating(0);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mb-4">
        <StarRating rating={newRating} onRate={setNewRating} />
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          className="border p-2 rounded-lg"
          placeholder="Leave a review..."
          rows="4"
        />
        <button
          type="submit"
          className="self-start px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Submit Review
        </button>
      </form>
      <div>
        {reviews.map((review) => (
          <div key={review.createdAt} className="mb-4 p-2 border rounded">
            <p className="font-semibold">{review.userId}</p>
            <StarRating rating={review.rating} readOnly={true} />{" "}
            {/* Read-only here */}
            <p>{review.review}</p>
            <p className="text-gray-500 text-sm">
              {new Date(review.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
