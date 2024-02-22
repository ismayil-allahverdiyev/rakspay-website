import CustomButtonComponent from "../../shared/components/general/custom_button_component";
import Navbar from "../../shared/features/navbar_feature";
import DescriptionBackground from "../features/description_background";

export default function DescriptionPart() {
    return <DescriptionBackground>
        <Navbar />
        <div className='2xl:w-[55%] xl:w-[65%] lg:w-[70%] md:w-[80%] w-[90%] text-white font-title font-semibold pl-24 '>
            <p className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl mt-32">
                Effortless and Reliable Money Transfers
            </p>
            <p className="md:text-xl sm:text-lg text-md mr-[20%] mt-6 mb-4">
                Experience the ease of Smooth Money Flow with Solid Security, backed by our years of expertise.
            </p>
            <CustomButtonComponent title="Send now" />
        </div>
    </DescriptionBackground>
}