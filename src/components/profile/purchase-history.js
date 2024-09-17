import { DUMMY_GAMES } from "../../../dummy-data";
import StoreCards from "../store/store-cards";

export default function PurchaseHistory() {
  return (
    <div className="p-10 w-[75%]">
      <h1 className="text-3xl font-bold text-center mb-5">Purchase History</h1>
      <StoreCards />
    </div>
  );
}
