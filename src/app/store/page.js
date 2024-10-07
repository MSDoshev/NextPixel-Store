"use client";
import { useState } from "react";
import { FilterProvider } from "@/context/FilterContext";
import StoreSidebar from "@/components/store/store-sidebar";
import StoreCards from "@/components/store/store-cards";
import { FaFilter } from "react-icons/fa";

export default function BrowsePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <FilterProvider>
      <div className="flex flex-col lg:flex-row">
        <div
          className={`hidden lg:block w-[full] bg-stone-100 py-10 overflow-y-auto`}
        >
          <StoreSidebar onClose={closeSidebar} />
        </div>

        <div className="flex flex-col w-full lg:w-[80%] pb-5">
          <h1 className="flex justify-center items-center font-bold text-4xl lg:text-6xl pt-10">
            Pixel Store
          </h1>
          <div className="flex flex-row w-full lg:w-[80%] pl-5 mb-5 border-b-[1px] border-black">
            <h2 className="font-bold text-2xl  text-start mb-4">All games</h2>
            <button
              className="lg:hidden p-4 text-xl hover:text-sky-500 focus:outline-none ml-auto"
              onClick={toggleSidebar}
            >
              <FaFilter />
            </button>
          </div>

          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={closeSidebar}
            ></div>
          )}

          <StoreCards className="lg:pl-10 w-full lg:w-[80%]" />
        </div>

        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed pb-[70px] left-0 h-full bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <StoreSidebar onClose={closeSidebar} />
        </div>
      </div>
    </FilterProvider>
  );
}
