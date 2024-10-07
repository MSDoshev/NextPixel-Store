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
    <div className="flex flex-row bg-gray-100 h-screen">
      <div className="flex flex-col w-1/4 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Menu</h2>
        <UnorderedList className="space-y-2">
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
        </UnorderedList>
      </div>
      <div className="flex flex-col w-3/4 p-8 bg-gray-50 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome, {user.name}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
