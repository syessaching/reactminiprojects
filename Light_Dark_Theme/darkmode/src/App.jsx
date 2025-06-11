import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { useEffect } from "react";
import Nav from './Nav';
import Footer from './Footer';



const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen flex flex-col">
      <Nav theme={theme} setTheme={setTheme} />

      <main className="flex-grow grid place-items-center text-black dark:text-white">
        <h2 className="text-3xl">Welcome to CampusDash!</h2>
        <a href="#" className=" text-2xl hover:underline">Join now or log back in!</a>
      </main>

      <Footer />
    </div>
  );
}
export default App