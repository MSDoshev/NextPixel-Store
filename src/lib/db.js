import clientPromise from "./mongodb";

async function getDb() {
  const client = await clientPromise;
  const db = client.db("nextPixelDB"); 

  return {
    usersCollection: db.collection("users"),
    sessionsCollection: db.collection("sessions"),
  };
}

export default getDb;
