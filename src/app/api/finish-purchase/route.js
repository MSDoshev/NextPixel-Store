import { getSession } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { items, totalPrice } = await req.json();

    const { userId, error } = await getSession();
    if (error) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const ordersCollection = db.collection("orders");

    const orderNumber = `ORD-${Date.now()}`;

    const newOrder = {
      orderNumber,
      userId,
      items,
      totalPrice,
      createdAt: new Date(),
    };

    const result = await ordersCollection.insertOne(newOrder);

    const insertedOrder = {
      _id: result.insertedId,
      ...newOrder,
    };

    return new Response(JSON.stringify({ order: insertedOrder }), {
      status: 201,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to finish purchase" }),
      { status: 500 }
    );
  }
}
