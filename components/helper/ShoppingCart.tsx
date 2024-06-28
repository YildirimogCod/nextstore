import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";

const ShoppingCart = () => {
  return (
    <Sheet>
      <SheetTrigger className="relative">
        <ShoppingBasket className="size-6 cursor-pointer" />
        <span className="absolute -top-3 -right-3 bg-rose-600 px-1 flex items-center justify-center text-white rounded-full">
          0
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
