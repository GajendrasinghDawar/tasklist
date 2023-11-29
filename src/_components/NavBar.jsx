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
            className={`text-iris11  -mx-2  font-extrabold italic no-underline text-xl md:text-3xl drop-shadow ${logoFont.className} cursor-pointer select-none block h-full`}
          >
            Notey
          </Link>
        </div>
        <div>
          {session?.user ? (
            <Profile user={session?.user} />
          ) : (
            <button className="border border-sand5 p-1 rounded-md hover:bg-sand4 bg-sand3">
              sign up
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
