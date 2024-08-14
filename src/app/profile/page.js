"use client";

import { useState } from "react";
import ProfileDetails from "@/components/profile/profile-details";
import PurchaseHistory from "@/components/profile/purchase-history";
import Wishlist from "@/components/profile/wishlist";
import ListItem from "@/components/ui/ListItem";
import UnorderedList from "@/components/ui/UnorderedList";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileDetails />;
      case "Wishlist":
        return <Wishlist />;
      case "Purchase History":
        return <PurchaseHistory />;
      case "Settings":
        // Assuming you have a Settings component
        return <div>Settings Component</div>;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <div className="flex flex-row justify-center min-h-[800px]">
      <div className="flex flex-row justify-center bg-white m-10 w-[60%] rounded-lg">
        <div className="flex justify-center items-start w-[35%] bg-stone-200 rounded-l-lg">
          <UnorderedList>
            <ListItem
              className={`font-semibold ${
                activeTab === "Profile" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("Profile")}
            >
              Profile
            </ListItem>
            <ListItem
              className={`font-semibold ${
                activeTab === "Wishlist" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("Wishlist")}
            >
              Wishlist
            </ListItem>
            <ListItem
              className={`font-semibold ${
                activeTab === "Purchase History" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("Purchase History")}
            >
              Purchase History
            </ListItem>
            <ListItem
              className={`font-semibold ${
                activeTab === "Settings" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("Settings")}
            >
              Settings
            </ListItem>
          </UnorderedList>
        </div>
       {renderContent()}
      </div>
    </div>
  );
}
