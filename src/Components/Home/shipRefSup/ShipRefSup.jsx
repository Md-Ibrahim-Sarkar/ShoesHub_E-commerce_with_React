
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
const ShipRefSup = () => {
    return (
        <div className="container flex flex-col items-center justify-center p-8 mx-auto space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            <div className="text-center ">
                <FaShippingFast className="w-8 h-8 mx-auto mb-4 text-6xl text-red-400" />

                <h3 className="text-xl font-bold">FREE SHIPPING</h3>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="text-center">
            <RiRefund2Line className="w-8 h-8 mx-auto mb-4 text-6xl text-red-400" />
                <h3 className="text-xl font-bold">100% REFUND</h3>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="text-center">
            <MdSupportAgent className="w-8 h-8 mx-auto mb-4 text-6xl text-red-400" />
                <h3 className="text-xl font-bold">SUPPORT 24/7</h3>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    )
}

export default ShipRefSup