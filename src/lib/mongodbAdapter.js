import clientPromise from "./mongodb";

let db;

const getDb = async () => {
  if (!db) {
    const client = await clientPromise;
    db = client.db("nextPixelDB");
  }
  return db;
};

const getCollection = async (collectionName) => {
  const db = await getDb();
  return db.collection(collectionName);
};

export const customMongoDBAdapter = () => {
  return {
    getUser: async (userId) => {
      const usersCollection = await getCollection("users");
      const user = await usersCollection.findOne({ _id: userId });
      return user || null;
    },

    setUser: async (user) => {
      const usersCollection = await getCollection("users");
      await usersCollection.updateOne(
        { _id: user._id },
        { $set: user },
        { upsert: true }
      );
    },

    deleteUser: async (userId) => {
      const usersCollection = await getCollection("users");
      await usersCollection.deleteOne({ _id: userId });
    },

    getSession: async (sessionId) => {
      const sessionsCollection = await getCollection("sessions");
      const session = await sessionsCollection.findOne({ _id: sessionId });
      return session || null;
    },

    setSession: async (session) => {
      const sessionsCollection = await getCollection("sessions");
      await sessionsCollection.updateOne(
        { _id: session._id },
        { $set: session },
        { upsert: true }
      );
    },

    deleteSession: async (sessionId) => {
      const sessionsCollection = await getCollection("sessions");
      await sessionsCollection.deleteOne({ _id: sessionId });
    },

    deleteSessionsByUserId: async (userId) => {
      const sessionsCollection = await getCollection("sessions");
      await sessionsCollection.deleteMany({ user_id: userId });
    },

    getSessionsByUserId: async (userId) => {
      const sessionsCollection = await getCollection("sessions");
      const sessions = await sessionsCollection
        .find({ user_id: userId })
        .toArray();
      return sessions;
    },
  };
};
