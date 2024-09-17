import { verifyAuth } from "@/lib/auth";
import ProfileGeneral from "@/components/profile/profile-general";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const result = await verifyAuth();
  if (!result.user) {
    return redirect('/login')
  }
  return <ProfileGeneral />;
}
