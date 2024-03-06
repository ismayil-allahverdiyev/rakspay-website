import CustomButtonComponent from "../../shared/components/general/custom_button_component";
import ContactInfoFeature from "../components/contact_info_feature";
import ExplanationComponent from "../components/explanation_component";
import TitleComponent from "../components/title_component";
import AmountFeature from "./amount_feature";
import CountrySelectorFeature from "./country_selector_feature";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, getTransactionRate } from "../store";
import GreenTransactionTriangle from "../../../assets/images/green-transaction-triangle.svg";

export default function MainTransactionFeature() {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTransactionRate(dispatch));
    }, [dispatch])

    return <div className="flex flex-row justify-end flex-grow bg-[#4F4F4F] bg-opacity-25 2xl:w-[60%] xl:w-[65%] lg:w-[70%] md:w-[75%] sm:w-[80%] w-[85%]  mx-auto mb-24 mt-8 rounded-xl shadow-[4.0px_4.0px_4.0px_rgba(255,255,255,0.02)] over">
        <div className="flex flex-col w-[30%] items-center">
            <div className="relative">
                <p className="font-title font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl mt-6 mb-2 relative z-10">
                    Request
                </p>
                <img src={GreenTransactionTriangle} alt="" className="absolute -left-8 top-4 z-0" />
            </div>
        </div>
        <div className="lg:w-[70%] w-full h-full bg-[#1E1E1E] lg:rounded-r-xl lg:rounded-l-none rounded-xl bg-opacity-70 px-12 relative overflow-y-scroll no-scrollbar">
            <TitleComponent />
            <CountrySelectorFeature />
            <AmountFeature />
            <ContactInfoFeature />
            <ExplanationComponent />
            <CustomButtonComponent title="Send message" style="absolute right-[5%] bottom-[5%]" />
            <img src={GreenTransactionTriangle} alt="" className="absolute -left-8 top-4 z-0" />
        </div>
    </div>
}