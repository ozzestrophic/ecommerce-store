import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../App.jsx";

// components
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Nav = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <nav className=" flex h-[8vh] items-center justify-between bg-[#18181D] p-4 sm:px-12 text-white">
      <Link to="/">
        {/* <img src={storeIcon} alt="" className="w-14" /> */}
        <h3 className="font-bold text-lg uppercase">Awesome eStore</h3>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="block sm:hidden" variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="opacity-40 text-sm">
              Awesome Store
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <SheetClose asChild>
              <Link to="categories">
                <Button variant="ghost" className="w-full">
                  Categories
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="cart" className="flex items-center gap-2">
                <Button variant="ghost" className="w-full">
                  Cart
                  {cartItems.length !== 0 && (
                    <p className=" px-2 py-1 bg-white text-black rounded-lg">
                      {cartItems.length}
                    </p>
                  )}
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden gap-8 sm:flex">
        <Link to="categories">Categories</Link>
        <Link to="cart" className="flex items-center gap-2">
          <p>Cart</p>
          {cartItems.length !== 0 && (
            <p className=" px-2 py-1 bg-white text-black rounded-lg">
              {cartItems.length}
            </p>
          )}
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
