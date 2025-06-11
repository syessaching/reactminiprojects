
import { LuSun, LuMoon } from "react-icons/lu";

const Nav = ({ theme, setTheme }) => {
  return (
    <nav className="bg-zinc-100 dark:bg-zinc-700 p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold text-black dark:text-white">CampusDash</h1>

      <div className="flex items-center gap-4">
        <a href="#" className="hover:underline">Trips</a>
        <a href="#" className="hover:underline">Profile</a>
        <button
          onClick={() => setTheme("light")}
          className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg"
        >
          <LuSun />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg"
        >
          <LuMoon />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
