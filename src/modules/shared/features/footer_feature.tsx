import { Link } from "react-router-dom";
import CustomButtonComponent from "../components/general/custom_button_component";
import { MdOutlineCopyright } from "react-icons/md";

export default function FooterFeature() {
    return <div className="px-8 pt-8 w-full bg-primary relative">
        <p className="lg:text-7xl md:text-5xl text-4xl font-title font-bold pb-8">Raks<span className="font-normal">pay</span></p>
        <div className="flex flex-col lg:text-2xl sm:text-xl text-lg space-y-2 font-medium ml-1">
            <Link to="/">Home</Link>
            <Link to="/">Transaction</Link>
            <Link to="/">Reviews</Link>
        </div>
        <div className="md:mt-56 mt-16 w-full mx-2 h-[1px] bg-white" />
        <div className="flex justify-end items-center py-2 pr-2">
            <MdOutlineCopyright size={20} />
            <p className="font-bold">Since 2020 at your service, Istanbul</p>
        </div>
        <div className="flex-col items-end w-[70%] bg-custom-grey-dark absolute right-0 -top-8 pl-14 pt-16 md:block hidden">
            <p className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white w-3/4 font-light pb-48 mr-auto">
                Effortlessly Facilitating Reliable and Secure Money Transfers
            </p>
            <CustomButtonComponent title="Contact us" style="mb-12 mr-14" />
        </div>
    </div>

}