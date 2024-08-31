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
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      throw new Error("DUPLICATE_EMAIL");
    } else {
      console.error("Error creating user:", error);
      throw new Error("USER_CREATION_FAILED");
    }
  }
}
