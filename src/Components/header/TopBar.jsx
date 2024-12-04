import { IoSearchSharp } from "react-icons/io5";
import { FaCartArrowDown, FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function TopBar() {
    return (
        <div className="flex container mx-auto flex-col sm:flex-row justify-between items-center p-4">
            <div className="flex space-x-4 mb-2 sm:mb-0">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <span>EN</span>
                    <IoMdArrowDropdown />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <span>USD</span>
                    <IoMdArrowDropdown />
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaRegUser />
                    <span>My profile</span>
                </div>
                <div className="relative flex items-center space-x-1 cursor-pointer">
                    <FaCartArrowDown className="w-5 h-5" />

                    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">2</div>
                </div>
                <div className="cursor-pointer">
                    <span>Items</span>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <span>$0.00</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <IoSearchSharp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar