import { DeleteIcon } from "./Icons"
import { deleteData } from "db/deleteData"

export function Tasklist({ data }) {
  async function deleteForm(formData) {
    "use server"
    await deleteData(formData.get("id"))
    onOpenChange(!open)
  }

  return (
    <div
      className={`
        flex-1
        grid
        gird-cols-1
        sm:grid-cols-3
        md:grid-cols-4
       
        gap-2 
        w-full
        overflow-y-auto  
        place-content-start
        place-items-start 
`}
    >
      {data.map((item) => (
        <div
          key={item.id}
          className="p-2 border
              ring-1 
              ring-iris5  rounded-md 
             flex
             max-h-min
           transition duration-300 ease-in-out
             shadow-sm
             "
        >
          <div className="flex-1 flex flex-col h-full ">
            <h4>{item.tasktitle}</h4>
            <div className="flex-1">
              <p className="text-balance">{item.description}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-sm">{item.status}</p>
              <form action={deleteForm}>
                <input type="hidden" name="id" value={item.id} />
                <button className="h-6 w-6 border-red5 bg-red3 hover:bg-red4 border rounded grid place-content-center">
                  <DeleteIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
