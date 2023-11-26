"use client"

import { useState } from "react"
import { PlusIcon } from "./Icons"
import Modal from "../_ui/Modal"

import { logoFont } from "@/app/font"

import Form from "./Form"

export function Navbar() {
  const [open, setOpen] = useState(false)

  function onOpenChange(open) {
    setOpen(open)
  }

  return (
    <div className="h-[60px] md:w-9/12 w-full  top-0 mx-auto px-4">
      <div className="flex justify-between items-center h-full ">
        <div>
          <p
            className={`text-iris11  -mx-2  font-extrabold italic no-underline text-xl md:text-3xl drop-shadow ${logoFont.className} cursor-pointer select-none block h-full`}
          >
            Notey
          </p>
        </div>
        <div>
          <Modal onOpenChange={onOpenChange} open={open}>
            <Modal.Trigger asChild>
              <button className="h-6 w-6 border-sage5 bg-gray3 border rounded grid place-content-center">
                <PlusIcon />
              </button>
            </Modal.Trigger>
            <Modal.Content
              title="Edit tasklist"
              description="Edit your tasklist information."
            >
              <Form
                CloseButton={Modal.Close}
                onOpenChange={onOpenChange}
                open={open}
              />
            </Modal.Content>
          </Modal>
        </div>
      </div>
    </div>
  )
}
