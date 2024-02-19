import CustomButtonComponent from "../../shared/components/general/custom_button_component";
import Navbar from "../../shared/features/navbar_feature";
import DescriptionBackground from "../features/description_background";

export default function DescriptionPart() {
    return <DescriptionBackground>
        <Navbar />
        <div className='w-[50%] text-white font-title font-semibold pl-24 '>
            <p className="text-7xl mt-32">
                Effortless and Reliable Money Transfers
            </p>
            <p className="text-xl mr-[20%] mt-6 mb-4">
                Experience the ease of Smooth Money Flow with Solid Security, backed by our years of expertise.
            </p>
            <CustomButtonComponent title="Send now" />
        </div>
    </DescriptionBackground>
}