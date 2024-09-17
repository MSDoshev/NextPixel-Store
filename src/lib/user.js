import clientPromise from "./mongodb";

export async function createUser(email, password) {
  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new Error("DUPLICATE_EMAIL");
    }

    const result = await usersCollection.insertOne({ email, password });

    return result.insertedId;
  } catch (error) {
    if (error.message === "DUPLICATE_EMAIL") {
      throw new Error("DUPLICATE_EMAIL");
    } else {
      console.error("Error creating user:", error);
      throw new Error("USER_CREATION_FAILED");
    }
  }
}

export async function getUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db("nextPixelDB");
  const usersCollection = db.collection("users");

  const existingUser = await usersCollection.findOne({ email });
  console.log(existingUser);
  return existingUser;
}
