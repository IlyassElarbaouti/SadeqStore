import Link from "next/link"
import Image from "next/image"
import {  Boxes,  User, } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { SearchInput } from "./search-input";

export default function Header() {
  return (
    <div className="w-full fixed top-0 z-50 h-10 bg-stone-800 shadow-xl  flex items-center justify-center">
      <header className="flex text-stone-200 text-sm w-full max-w-7xl shrink-0 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 lg:flex" prefetch={false}>
          <Image className="w-20 md:w-28 invert " src={"/logo.png"} alt={"logo"} width={2000} height={500}/>
        </Link>
        <div className="flex gap-6 items-center ">
          <SearchInput/>
          
        </div>
        <div className="flex gap-6 items-center ">
          <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <User/>
              </SignInButton>
            </SignedOut>
            <Link
            href="/products"
            className="flex"
          >
            <Boxes/>
          </Link>
        </div>
      </header>
    </div>
  )
}