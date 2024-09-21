import CheckoutItems from "@/components/checkout/checkout-items";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center gap-[50px] pb-[60px]">
      <h1 className="flex justify-center items-center font-bold text-6xl pt-10">
        Checkout
      </h1>
      <CheckoutItems />
    </div>
  );
}
