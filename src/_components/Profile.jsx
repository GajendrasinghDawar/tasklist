"use client"

import Image from "next/image"
import Dropdown from "@/_ui/DropDown"
import { EnvelopeClosedIcon, ExitIcon } from "@radix-ui/react-icons"
import { signOut } from "next-auth/react"
import Link from "next/link"

export function Profile({ user }) {
  return (
    <Dropdown>
      <Dropdown.DropdownButton>
        <button
          className="rounded-full h-12 w-12 inline-flex items-center justify-center overflow-hidden ring-2 ring-iris5
          data-[state=open]:ring-2 focus:outline-none data-[state=open]:ring-iris9
       select-none"
          aria-label="profile details"
        >
          {user.image ? (
            <Image
              src={user.image}
              width={200}
              height={200}
              alt={`profile picture of ${user.name}`}
            />
          ) : (
            <span className="h-12 w-12 bg-sand8 rounded-full" />
          )}
        </button>
      </Dropdown.DropdownButton>
      <Dropdown.DropdownMenu>
        <Dropdown.Label>
          <p className="text-[0.8rem] text-sand11 hover:outline-none first-letter:uppercase px-2">
            {user.email}
          </p>
        </Dropdown.Label>
        <Dropdown.Separator className="h-[1px] bg-violet6 m-[5px]" />
        <Dropdown.MenuItem>
          <Link
            href={"/tasklist"}
            className="rounded-md  focus:ring-2 focus:ring-sand6 flex w-full justify-between items-center text-center  bg-sand3 hover:bg-sand4 my-2 h-11 gap-3 px-2 text-sand11 hover:text-sand12 no-underline font-medium"
          >
            Tasklist
          </Link>
          <button
            className="rounded-md  focus:ring-2 focus:ring-sand6 flex w-full justify-between items-center text-center  bg-sand3 hover:bg-sand4 my-2 h-11 gap-3 px-2 text-sand11 hover:text-sand12  font-medium"
            onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}
          >
            Sign out
            <ExitIcon />
          </button>
        </Dropdown.MenuItem>
      </Dropdown.DropdownMenu>
    </Dropdown>
  )
}
