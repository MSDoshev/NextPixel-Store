import clientPromise from "./mongodb";

export async function createUser(email, password) {
  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const usersCollection = db.collection("users"); 

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists.");
    }

    const result = await usersCollection.insertOne({ email, password });
    return result.insertedId;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed.");
  }
}
