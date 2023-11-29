"use client"

import React from "react"
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu"

function Dropdown({ children }) {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>
}

function DropdownButton({ children }) {
  return (
    <RadixDropdownMenu.Trigger asChild>{children}</RadixDropdownMenu.Trigger>
  )
}

function DropdownMenu({ children }) {
  return (
    <>
      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          className="min-w-[220px] bg-iris2 ring-1 outline-none ring-iris5 rounded-md p-2 drop-shadow-xl "
          sideOffset={4}
          align="end"
        >
          {children}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </>
  )
}

function MenuItem({ children }) {
  return (
    <RadixDropdownMenu.Item className="hover:outline-none ">
      {children}
    </RadixDropdownMenu.Item>
  )
}
Dropdown.DropdownButton = DropdownButton
Dropdown.DropdownMenu = DropdownMenu
Dropdown.MenuItem = MenuItem
Dropdown.Label = RadixDropdownMenu.Label
Dropdown.Separator = RadixDropdownMenu.Separator
Dropdown.Arrow = RadixDropdownMenu.Arrow
export default Dropdown
