export default function ProfileDetails() {
  return (
    <div className="p-10 w-[75%] max-w-3xl justify-center items-center">
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
  );
}
