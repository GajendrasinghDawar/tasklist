import Link from "next/link"
import { logoFont } from "@/app/font"
import { Profile } from "@/_components/Profile"
import { auth } from "auth"

export async function Navbar() {
  const session = await auth()
  return (
    <div className="h-[60px] md:w-9/12 w-full  top-0 mx-auto px-4">
      <div className="flex justify-between items-center h-full ">
        <div>
          <Link
            href={"/"}
            className={`text-iris11  -mx-2  font-extrabold italic no-underline text-xl sm:text-2xl md:text-3xl drop-shadow ${logoFont.className} cursor-pointer select-none focus:outline-none focus:ring-2 rounded-md focus:ring-iris7 block h-full`}
          >
            Notey
          </Link>
        </div>
        <div>
          {session?.user ? (
            <Profile user={session?.user} />
          ) : (
            <button className="border border-sand5 p-1 rounded-md hover:bg-sand4 bg-sand3 focus:outline-none focus:ring-2 focus:ring-sand7 text-xs sm:text-base">
              sign up
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
