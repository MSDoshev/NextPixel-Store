import ProfileDetails from "@/components/profile/profile-details";
import Wishlist from "@/components/profile/wishlist";
import ListItem from "@/components/ui/ListItem";
import UnorederedList from "@/components/ui/UnorderedList";

export default function ProfilePage() {
  return (
    <div className="flex flex-row justify-center  ">
      <div className="flex flex-row justify-center bg-stone-100 m-10 w-[60%] rounded-lg">
        <div className="flex justify-center items-start w-[35%] bg-stone-200 rounded-l-lg">
          <UnorederedList>
            <ListItem className="font-semibold">Profile</ListItem>
            <ListItem className="font-semibold">Wishlist</ListItem>
            <ListItem className="font-semibold">Purchase History</ListItem>
            <ListItem className="font-semibold hover:bg-stone-100">
              Settings
            </ListItem>
          </UnorederedList>
        </div>
        <Wishlist />
      </div>
    </div>
  );
}
