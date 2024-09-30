import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  const { gameId, userId, userName, review, rating } = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");

    const objectIdGameId = new ObjectId(gameId);

    await db
      .collection("games")
      .updateOne(
        { _id: objectIdGameId },
        {
          $push: {
            reviews: {
              userId,
              review,
              userName,
              rating,
              createdAt: new Date(),
            },
          },
        }
      );

    return new Response("Review submitted", { status: 200 });
  } catch (error) {
    console.error("Error submitting review:", error);
    return new Response("Failed to submit review", { status: 500 });
  }
}
