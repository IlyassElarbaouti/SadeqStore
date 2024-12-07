"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import {  useState } from "react";
import {  useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";


export const SearchInput = () => {
  const [value, setValue] = useState("")
  const router = useRouter();


  return (
    <div className="relative">
      <Search
        className="h-4 w-4 absolute top-3 left-3 text-slate-600"
      />
      <Input
        onChange={(e) => {
          setValue(e.target.value)
          const url = qs.stringifyUrl({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
            query: {
              search: e.target.value,
      
            }
          }, { skipEmptyString: true, skipNull: true });
      
          router.push(url);
        }}
        value={value}
        className="w-full lg:w-[500px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200 text-black"
        placeholder="Search for a digital product..."
      />
    </div>
  )
}