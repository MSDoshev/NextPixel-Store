import { cookies } from "next/headers";
import lucia from "lucia-auth";
import { mongodbAdapter } from "@lucia-auth/adapter-mongodb";
import clientPromise from "./mongodb";

const auth = lucia({
  adapter: mongodbAdapter(clientPromise, {
    user: "users",
    session: "sessions",
  }),
  env: process.env.NODE_ENV === "production" ? "PROD" : "DEV",
  secret: process.env.LUCIA_SECRET,
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    },
  },
  transformUserData: (user) => ({
    userId: user._id,
    email: user.email,
  }),
});

export async function createAuthSession(userId) {
  const session = await auth.createSession(userId);
  const sessionCookie = auth.createSessionCookie(session);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

export { auth };
