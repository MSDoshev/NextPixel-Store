import StoreSidebar from "@/components/store/store-sidebar";
import { DUMMY_GAMES } from "../../../dummy-data";
import StoreCards from "@/components/store/store-cards";

export default function BrowsePage() {
  return (
    <div className="flex flex-row">
      <StoreSidebar />

      <div className="flex flex-col gap-10">
        <h1 className="flex justify-center items-center font-bold text-6xl pt-10">
          Pixel Store
        </h1>
        {/* This should change with the selected genre */}
        <h2 className="font-bold text-2xl ml-8 border-b-[1px] border-black">
          All games
        </h2>
        <div className="flex justify-center items-center p-5 w-full">
          <StoreCards />
        </div>
      </div>
    </div>
  );
}
