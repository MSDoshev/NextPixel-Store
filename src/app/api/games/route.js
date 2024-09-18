import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const gamesCollection = db.collection("games");
    

    const games = await gamesCollection.find({}).toArray();
    
 
    return new Response(JSON.stringify(games), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch data", { status: 500 });
  }
}
