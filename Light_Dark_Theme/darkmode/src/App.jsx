import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";



const App = () => {
  return(
    <div className="bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full dark">
      <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl">
        <button className="bg-transparent p-3 hover:bg-zinc-200  dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white">
        <LuSun />
        </button>
        <button className="bg-transparent p-3 hover:bg-zinc-200  dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white">
        <LuMoon />
        </button>

      </div>
    </div>
  )
}
export default App