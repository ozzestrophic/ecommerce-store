import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CartSideBar = ({ priceTotal, clearCart }) => {
  const { toast } = useToast();
  return (
    <aside className="flex flex-col gap-8">
      <h2 className="text-2xl">Order Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-sm">
          <p>Price</p>
          <p>${priceTotal.oldTotal}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Discount</p>
          <p>-${priceTotal.oldTotal - priceTotal.currentTotal}</p>
        </div>
        <hr className="  border-gray-700" />
        <div className="flex justify-between text-sm">
          <p>Subtotal</p>
          <p>${Math.round(priceTotal.currentTotal * 100) / 100}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          toast({
            title: "Order placed",
            description: "Return to home page to buy more items",
          });
          clearCart();
        }}
        className=" w-full p-6 rounded-lg"
      >
        Check Out
      </Button>
    </aside>
  );
};
export default CartSideBar;
