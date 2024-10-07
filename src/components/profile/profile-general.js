"use client";
import { useState } from "react";
import ProfileDetails from "@/components/profile/profile-details";
import PurchaseHistory from "@/components/profile/purchase-history";
import Wishlist from "@/components/profile/wishlist";
import ListItem from "@/components/ui/ListItem";
import UnorderedList from "@/components/ui/UnorderedList";

export default function ProfileGeneral({ user }) {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileDetails user={user} />;
      case "Wishlist":
        return <Wishlist />;
      case "Purchase History":
        return <PurchaseHistory />;
      case "Settings":
        return <div className="p-4 text-gray-600">Settings Component</div>;
      default:
        return <ProfileDetails user={user} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 h-screen">
      <div className="flex flex-col w-full md:w-1/4 p-2 bg-white shadow-lg rounded-lg">
        <h2 className="hidden md:block text-xl font-semibold text-gray-800 mb-4">User Menu</h2>
        <UnorderedList className="flex flex-col md:flex-col space-y-2 md:space-y-2">
          <div className="flex flex-row justify-around md:hidden">
            <ListItem
              className={`font-semibold p-2 rounded-lg hover:bg-blue-100 ${
                activeTab === "Profile" ? "bg-blue-200 text-blue-600" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("Profile")}
            >
              Profile
            </ListItem>
            <ListItem
              className={`font-semibold p-2 rounded-lg hover:bg-blue-100 ${
                activeTab === "Purchase History" ? "bg-blue-200 text-blue-600" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("Purchase History")}
            >
              Purchase History
            </ListItem>
            <ListItem
              className={`font-semibold p-2 rounded-lg hover:bg-blue-100 ${
                activeTab === "Wishlist" ? "bg-blue-200 text-blue-600" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("Wishlist")}
            >
              Wishlist
            </ListItem>
          </div>
          <div className="hidden md:flex md:flex-col">
            <ListItem
              className={`font-semibold p-2 rounded-lg hover:bg-blue-100 ${
                activeTab === "Profile" ? "bg-blue-200 text-blue-600" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("Profile")}
            >
              Profile
            </ListItem>
            <ListItem
              className={`font-semibold p-2 rounded-lg hover:bg-blue-100 ${
                activeTab === "Purchase History" ? "bg-blue-200 text-blue-600" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("Purchase History")}
            >
              Purchase History
            </ListItem>
            <ListItem
              className={`font-semibold p-2 rounded-lg hover:bg-blue-100 ${
                activeTab === "Wishlist" ? "bg-blue-200 text-blue-600" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("Wishlist")}
            >
              Wishlist
            </ListItem>
          </div>
        </UnorderedList>
      </div>
      <div className="flex flex-col w-full md:w-3/4 p-8 bg-gray-50 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome, {user.name}</h1>
        <div className="md:bg-white md:shadow-lg rounded-lg md:p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
