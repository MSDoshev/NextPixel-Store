import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";

export async function createUser(name, email, password) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new Error("DUPLICATE_EMAIL");
    }

    const result = await usersCollection.insertOne({
      name,
      email,
      password,
      memberSince: formattedDate,
    });

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

export async function getUserById(userId) {
  try {
    const client = await clientPromise;
    const db = client.db("nextPixelDB");
    const usersCollection = db.collection("users");

    const currentUser = await usersCollection.findOne({
      _id: new ObjectId(userId),
    });

    if (currentUser) {
      const plainUser = {
        _id: currentUser._id.toString(),
        name: currentUser.name,
        email: currentUser.email,
        memberSince: currentUser.memberSince,
      };
      return plainUser;
    }

    return null;
  } catch (error) {
    console.error("Error getting user by ID:", error);
    throw new Error("USER_NOT_FOUND");
  }
}

export async function finishPurchase(items) {
  const { userId, error } = await getSession();
  const currentUser = await getUserById(userId);


  
}
