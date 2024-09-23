import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb"; // Import ObjectId

export async function GET(request, { params }) {
  const { id } = params; // Get the ID from the URL parameters

  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const gamesCollection = db.collection("games");

    // Find the game by ID
    const game = await gamesCollection.findOne({ _id: new ObjectId(id) });

    if (!game) {
      return new Response(JSON.stringify({ message: "Game not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(game), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch data", { status: 500 });
  }
}
