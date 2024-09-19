import { verifyAuth } from "@/lib/auth";
import ProfileGeneral from "@/components/profile/profile-general";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getUserById } from "@/lib/user";

export default async function ProfilePage() {
  const result = await verifyAuth();
  if (!result.user) {
    return redirect("/login");
  }

  const { userId, error } = await getSession();

  const currentUser = await getUserById(userId);
  
  

  if (error) {
    return <div>{error}</div>;
  }

  return <ProfileGeneral user={currentUser} />;
}
