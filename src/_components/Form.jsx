import { Select, SelectItem } from "ui/Select"
import { insertData } from "db/insertData"

export default function Form({ CloseButton, onOpenChange, open }) {
  async function onSubmit(formData) {
    await insertData([
      formData.get("task"),
      formData.get("status"),
      formData.get("description"),
    ])
    onOpenChange(!open)
  }

  return (
    <form className="flex flex-col   w-full h-full py-2" action={onSubmit}>
      <fieldset className="mb-[15px] flex items-center gap-5">
        <label
          className="text-iris11 w-[90px] text-right text-[15px]"
          htmlFor="task"
        >
          Task
        </label>
        <input
          className="text-iris11 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px]  leading-none outline-none ring-1 ring-sand7 focus:ring-2"
          id="task"
          name="task"
          defaultValue="task"
          placeholder="your task!"
        />
      </fieldset>
      <fieldset className="mb-[15px] flex items-center gap-5  w-full">
        <label
          className="text-iris11 w-[90px] text-right text-[15px]"
          htmlFor="task"
        >
          status
        </label>
        <Select name="status" defaultValue="in_progess">
          <SelectItem value="scheduled">Scheduled</SelectItem>
          <SelectItem value="in_progess">In Progess</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </Select>
      </fieldset>
      <fieldset className="mb-[15px] flex-1   flex items-center gap-5">
        <label
          className="text-iris11  text-right text-[15px]"
          htmlFor="description"
        >
          description
        </label>
        <textarea
          name="description"
          className="text-iris11 text-sm shadow-iris7 focus:shadow-iris8 inline-flex w-full flex-1 items-center justify-center rounded-[4px] resize-none outline-none ring-1 ring-sand7 focus:ring-2 h-28"
          id="description"
          defaultValue="your todo!"
          placeholder="your description!"
        />
      </fieldset>
      <div className="mt-[25px] flex justify-end gap-2">
        <CloseButton asChild>
          <button className="bg-red5 text-red11 hover:bg-red4 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
            cancel
          </button>
        </CloseButton>
        <button className="bg-grass4 text-grass11 hover:bg-grass5 focus:shadow-grass7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
          Save
        </button>
      </div>
    </form>
  )
}
