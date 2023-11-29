"use client"

import { useState } from "react"
import { PlusIcon } from "./Icons"
import Modal from "../_ui/Modal"
import Form from "./Form"

export function ModalWithForm() {
  const [open, setOpen] = useState(false)

  function onOpenChange(open) {
    setOpen(open)
  }

  return (
    <Modal onOpenChange={onOpenChange} open={open}>
      <Modal.Trigger asChild>
        <button className="min-h-6 min-w-6 border-sage5 bg-gray3 border rounded   flex text-center justify-between items-center gap-1 p-1">
          <PlusIcon />
          Add task
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
  )
}
