import { useEffect, useState } from "react";
import StarRating from "../ui/StartRating";

export default function Reviews({ gameId }) {
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchGameReviews = async () => {
    const response = await fetch(`/api/games/${gameId}`);
    const gameData = await response.json();
    setReviews(gameData.reviews || []);
  };

  const fetchCurrentUser = async () => {
    const response = await fetch("/api/auth/user");
    const data = await response.json();

    if (data.user) {
      setCurrentUser(data.user);
    }
  };

  useEffect(() => {
    fetchGameReviews();
    fetchCurrentUser();
  }, [gameId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview || newRating === 0 || !currentUser) return;
    console.log("UserName: " + currentUser.name);

    const reviewData = {
      gameId,
      userId: currentUser._id,
      userName: currentUser.name,
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
      setNewReview("");
      setNewRating(0);
      fetchGameReviews();
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>

      {currentUser && (
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
      )}

      <div>
        {reviews.map((review) => (
          <div key={review.createdAt} className="mb-4 p-2 border rounded">
            <p className="font-semibold">{review.userName}</p>
            <StarRating rating={review.rating} readOnly={true} />
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
