import CustomButtonComponent from "../../shared/components/general/custom_button_component";
import ContactInfoFeature from "../components/contact_info_feature";
import ExplanationComponent from "../components/explanation_component";
import TitleComponent from "../components/title_component";
import AmountFeature from "./amount_feature";
import CountrySelectorFeature from "./country_selector_feature";
import { firestore } from "../../../config/firebase/fbConfig"
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";

export default function MainTransactionFeeature() {



    return <div className="flex flex-row justify-end flex-grow bg-[#4F4F4F] bg-opacity-25 2xl:w-[60%] xl:w-[65%] lg:w-[70%] md:w-[75%] sm:w-[80%] w-[85%]  mx-auto mb-24 mt-8 rounded-xl shadow-[4.0px_4.0px_4.0px_rgba(255,255,255,0.02)] ">
        <div className="lg:w-[70%] w-full h-full bg-[#1E1E1E] lg:rounded-r-xl lg:rounded-l-none rounded-xl bg-opacity-70 px-12 relative overflow-y-scroll no-scrollbar">
            <TitleComponent />
            <CountrySelectorFeature />
            <AmountFeature />
            <ContactInfoFeature />
            <ExplanationComponent />
            <CustomButtonComponent title="Send message" style="absolute right-[5%] bottom-[5%]" />
        </div>
    </div>
}