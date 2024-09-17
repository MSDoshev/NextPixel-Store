import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import getDb from "./db"; 
import { cookies } from "next/headers";

export async function getLuciaInstance() {
  const { usersCollection, sessionsCollection } = await getDb();

  const adapter = new MongodbAdapter(sessionsCollection, usersCollection);

  return new Lucia(adapter, {
    sessionCookie: {
      expires: false,
      attributes: {
        secure: process.env.NODE_ENV === "production",
      },
    },
  });
}

export async function createAuthSession(userId) {
  const lucia = await getLuciaInstance();
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}
