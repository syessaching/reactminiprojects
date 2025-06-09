import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";



const App = () => {
  return(
    <div className="bg-white grid place-items-center h-screen w-full">
      <div className="bg-zinc-100 p-2 rounded-xl gap-4">
        <button className="bg-transparent hover:bg-zinc-200 rounded-lg text-black p-3">
        <LuSun />
        </button>
        <button className="bg-transparent hover:bg-zinc-200 rounded-lg text-black p-3">
        <LuMoon />
        </button>

      </div>
    </div>
  )
}
export default App