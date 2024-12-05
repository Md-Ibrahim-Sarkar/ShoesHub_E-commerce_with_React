import Home from "../Pages/home/Home"
import { FaCartArrowDown, FaRegUser } from "react-icons/fa";

function Layout() {
 
  const setDark = () => {
    document.documentElement.classList.add("light");
    document.querySelector('body').setAttribute('data-theme', 'light')
  }
  setDark()

  return (
    <div className="relative">
      <Home />
      <div className="fixed cursor-pointer right-3 top-32 lg:hidden">
        <div className="relative flex items-center space-x-1 cursor-pointer">
          <FaCartArrowDown className="w-5 h-5" />

          <div className="absolute flex items-center justify-center w-4 h-4 text-xs font-semibold text-black bg-red-500 rounded-full dark:text-white -top-2 -right-2">2</div>
        </div>
      </div>
    </div>
  )
}

export default Layout