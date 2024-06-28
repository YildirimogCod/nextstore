import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search className="size-6 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Search for products</DialogDescription>
        </DialogHeader>
        <form className="block w-full px-4 py-2 border border-gray-200 rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 p-2 outline-none"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
