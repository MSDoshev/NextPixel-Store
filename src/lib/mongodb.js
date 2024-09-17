import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure this is set in your .env.local
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to persist the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to create a new MongoClient each time
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
