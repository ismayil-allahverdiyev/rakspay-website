import CustomButtonComponent from "../../shared/components/general/custom_button_component";
import ContactInfoFeature from "../components/contact_info_feature";
import ExplanationComponent from "../components/explanation_component";
import TitleComponent from "../components/title_component";
import AmountFeature from "./amount_feature";
import CountrySelectorFeature from "./country_selector_feature";

export default function MainTransactionFeeature() {
    return <div className="flex flex-row justify-end flex-grow bg-[#4F4F4F] bg-opacity-65 w-[60%] mx-auto mb-24 mt-8 rounded-xl shadow-[4.0px_4.0px_4.0px_rgba(255,255,255,0.2)] ">
        <div className="w-[70%] h-full bg-[#1E1E1E] rounded-r-xl bg-opacity-40 px-12 relative">
            <TitleComponent />
            <CountrySelectorFeature />
            <AmountFeature />
            <ContactInfoFeature />
            <ExplanationComponent />
            <CustomButtonComponent title="Send message" style="absolute right-[5%] bottom-[5%]" />
        </div>
    </div>
}