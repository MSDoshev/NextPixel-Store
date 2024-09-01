import lucia from "lucia-auth";
import { customMongoDBAdapter } from "./mongodbAdapter"; // Import your custom adapter
import { cookies } from "next/headers";

// Initialize Lucia with the custom MongoDB adapter
const auth = lucia({
  adapter: customMongoDBAdapter, // Pass the function itself, not the result of the function
  env: process.env.NODE_ENV === "production" ? "PROD" : "DEV",
  sessionCookie: {
    secure: process.env.NODE_ENV === "production",
  },
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

export default auth;
