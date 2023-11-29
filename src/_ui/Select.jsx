import React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import classnames from "classnames"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"

export const Select = ({ name, defaultValue, children }) => (
  <SelectPrimitive.Root name={name} defaultValue={defaultValue}>
    <SelectPrimitive.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none gap-[5px] text-sand11  ring-1 ring-sand5 focus:ring-1 focus:ring-sand7 hover:bg-sand4   data-[placeholder]:text-iris11 outline-none h-[35px] w-full bg-sand3 "
      aria-label="status"
    >
      <SelectPrimitive.Value placeholder="Select a status" />
      <SelectPrimitive.Icon className="text-sand12">
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="overflow-hidden   bg-iris2  ring-1 ring-sand6 rounded-md shadow-md w-full">
        <SelectPrimitive.Viewport className="p-[5px] ">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
)

export const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={classnames(
          "text-[13px] leading-none text-sand11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-sand8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-iris9 data-[highlighted]:text-iris1",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  }
)
