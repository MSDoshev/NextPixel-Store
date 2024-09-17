import clientPromise from "./mongodb";

export default async function getDb() {
  const client = await clientPromise;
  const db = client.db("nextPixelDB"); 

  return {
    usersCollection: db.collection("users"),
    sessionsCollection: db.collection("sessions"),
  };
}

 