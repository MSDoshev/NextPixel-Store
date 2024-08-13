import StoreSidebar from "@/components/store/store-sidebar";
import StoreCards from "@/components/store/store-cards";

export default function BrowsePage() {
  return (
    <div className="flex flex-row">
      <StoreSidebar />

      <div className="flex flex-col gap-5 w-[80%] pb-5">
        <h1 className="flex justify-center items-center font-bold text-6xl pt-10">
          Pixel Store
        </h1>
        {/* This should change with the selected genre */}
        <div className="w-[80%] pl-5">
          <h2 className="font-bold text-2xl border-b-[1px] border-black text-start mb-4">
            All games
          </h2>
        </div>
        <StoreCards className="pl-10 w-[80%]"/>
      </div>
    </div>
  );
}
