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

export async function verifyAuth() {
  const lucia = await getLuciaInstance();
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }

    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {}

  return result;
}

export async function destroySession() {
  const lucia = await getLuciaInstance();
  const { session } = await verifyAuth();
  if (!session) {
    return {
      error: "Unauthorized!",
    };
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}
