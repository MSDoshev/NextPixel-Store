import { getSession } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const userSession = await getSession(req);
    const userId = userSession.userId;

    const purchases = await db.collection("orders").find({ userId }).toArray();

    return new Response(JSON.stringify({ purchases }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch purchase history" }),
      { status: 500 }
    );
  }
}
