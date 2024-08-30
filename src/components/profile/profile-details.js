export default function ProfileDetails() {
  return (
    <div className="p-10 w-[90%] max-w-2xl mx-auto bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Profile</h1>

      <div className="flex flex-col items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6 shadow-md"
        />
        <h2 className="text-2xl font-semibold text-gray-800">Username</h2>
        <p className="text-gray-500">user@example.com</p>

        <div className="flex flex-col w-full mt-8 space-y-6">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700 w-1/3">Full Name:</span>
            <span className="text-gray-600 w-2/3 text-right">John Doe</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700 w-1/3">Email:</span>
            <span className="text-gray-600 w-2/3 text-right">user@example.com</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700 w-1/3">Location:</span>
            <span className="text-gray-600 w-2/3 text-right">Somelandia</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700 w-1/3">Member Since:</span>
            <span className="text-gray-600 w-2/3 text-right">January 2023</span>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition duration-300 ease-in-out shadow-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
