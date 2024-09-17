import getDb from "./db"; // Import the db utility

export async function createUser(email, password) {
  try {
    const { usersCollection } = await getDb();

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new Error("DUPLICATE_EMAIL");
    }

    const result = await usersCollection.insertOne({ email, password });
    return result.insertedId;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("USER_CREATION_FAILED");
  }
}
