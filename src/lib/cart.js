import clientPromise from "./mongodb";

export async function getCart(userId) {
  const client = await clientPromise;
  const db = client.db("nextPixelDB");
  const cartCollection = db.collection("carts");

  const cart = await cartCollection.findOne({ userId });
  return cart ? cart.items : [];
}

export async function addToCart(userId, item) {
  const client = await clientPromise;
  const db = client.db("nextPixelDB");
  const cartCollection = db.collection("carts");
}
