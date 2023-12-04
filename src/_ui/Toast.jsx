import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"

export function Toast({ open, onOpenChange, children, ...props }) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        className="bg-iris4 shadow rounded-md  p-[15px] "
        open={open}
        onOpenChange={onOpenChange}
        duration={5000}
      >
        {children}
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 flex flex-col p-8  w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </ToastPrimitive.Provider>
  )
}

function Title({ children, ...props }) {
  return (
    <ToastPrimitive.Title className="mb-1 font-medium text-sand12 text-base sm:text-lg">
      {children}
    </ToastPrimitive.Title>
  )
}

function Description({ children, ...props }) {
  return (
    <ToastPrimitive.Description
      className="text-sand11 text-[13px] leading-[1.3]"
      {...props}
    >
      {children}
    </ToastPrimitive.Description>
  )
}

function Action({ children, ...props }) {
  return <ToastPrimitive.Action {...props}>{children}</ToastPrimitive.Action>
}

Toast.Title = Title
Toast.Description = Description
Toast.Action = Action
