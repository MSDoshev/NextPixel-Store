import { verifyAuth } from "@/lib/auth";
import { getUserById } from "@/lib/user";

export async function GET(req) {
  try {
    const authResult = await verifyAuth();
    console.log(authResult.user);
    
    if (!authResult.user) {
      return new Response(JSON.stringify({ user: null }), { status: 401 });
    }

    const userId = authResult.user.id;
    console.log("This is userID: " + userId);
    
    const user = await getUserById(userId);
    console.log(user);
    
    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to authenticate" }), {
      status: 500,
    });
    
  }
}
