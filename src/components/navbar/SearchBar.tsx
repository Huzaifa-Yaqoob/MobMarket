"use client";
import { Search, X } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex items-center bg-background rounded p-2 space-x-2 text-xs">
      <input
        placeholder="Search..."
        type="text"
        className="bg-transparent caret-primary focus:outline-none"
      />
      <X className="mr-2 h-4 w-4" />
    </div>
  );
}
