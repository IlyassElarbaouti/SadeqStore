import Link from "next/link"
import Image from "next/image"
import { Bell, Menu } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <div className="w-full fixed top-0 z-50 h-10 bg-stone-800 shadow-xl  flex items-center justify-center">
      <header className="flex text-stone-200 text-sm w-full max-w-7xl shrink-0 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 lg:flex" prefetch={false}>
          <Image className="w-20 md:w-28 invert " src={"/logo.png"} alt={"logo"} width={2000} height={500}/>
        </Link>
        <div className="hidden md:flex gap-6 items-center ">
          <Link
            href="/products"
            className=""
          >
            Products
          </Link>
          {/* <Link
            href="/products"
            className=" "
          >
            Subscriptions
          </Link>
          <Link
            href="/products"
            className=""
          >
            Games
          </Link>
          <Link
            href="/products"
            className=""
          >
            Add-on
          </Link> */}
        </div>
        <div className="flex gap-6 items-center ">
          <SignedIn>
          <Bell/>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-stone-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <div className="flex md:hidden">
              <Menu/>
            </div>
        </div>
      </header>
    </div>
  )
}