import { IoSearchSharp } from "react-icons/io5";
import { FaCartArrowDown, FaRegUser } from "react-icons/fa";


function TopBarRight({ className }) {
    return (
        <div className={`flex items-center space-x-6 ${className} lg:block`}>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaRegUser />
                    <span>My profile</span>
                </div>
                <div className="relative flex items-center space-x-1 cursor-pointer max-lg:hidden">
                    <FaCartArrowDown className="w-5 h-5" />

                    <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full -top-3 -right-3">2</div>
                </div>
                <div className="cursor-pointer">
                    <span>Items</span>
                </div>
                <div className="flex items-center gap-2">
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

export default TopBarRight