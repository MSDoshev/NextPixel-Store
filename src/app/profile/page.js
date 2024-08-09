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
            <ListItem className="font-semibold hover:bg-stone-100">Settings</ListItem>
          </UnorederedList>
        </div>
        <div className="p-10 w-[75%] max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-5">Profile</h1>

          <div className="flex flex-col items-center">
            <img
              src="/images/home/profile-placeholder.png"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Username</h2>
            <p className="text-gray-600">user@example.com</p>

            <div className="flex flex-col w-full mt-5 space-y-4">
              <div className="flex justify-between">
                <span className="font-bold">Full Name:</span>
                <span>John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Email:</span>
                <span>user@example.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Location:</span>
                <span>Somelandia</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Member Since:</span>
                <span>January 2023</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
