import { DUMMY_GAMES } from "../../../dummy-data";
import StoreCards from "../store/store-cards";

export default function Wishlist() {
  return (
    <div className="p-10 w-[75%] max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-5">Wishlist</h1>
      <StoreCards />
    </div>
  );
}
