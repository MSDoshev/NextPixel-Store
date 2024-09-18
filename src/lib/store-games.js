import clientPromise from "./mongodb";

export async function getStoreGames() {
  const client = await clientPromise;
  const db = client.db("nextPixelDB");
  const gamesCollection = db.collection("games");

  return gamesCollection.find({}).toArray();
}
