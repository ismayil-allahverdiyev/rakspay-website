import CustomButtonComponent from "../../shared/components/general/custom_button_component";
import ContactInfoFeature from "./contact_info_feature";
import ExplanationComponent from "../components/explanation_component";
import TitleComponent from "../components/title_component";
import AmountFeature from "./amount_feature";
import CountrySelectorFeature from "./country_selector_feature";
import GreyTransactionTriangle from "../../../assets/images/grey-transaction-triangle.svg";
import Receipt from "./receipt_feature";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, sendTransaction, TransactionStore } from "../store";
import { useTranslation } from "react-i18next";

export default function MainTransactionFeature() {

    var numberRef = useRef<HTMLInputElement>(null);
    var emailRef = useRef<HTMLInputElement>(null);

    var dispatch = useDispatch<AppDispatch>();

    var t = useTranslation("global").t;

    return <div className="flex justify-end flex-grow bg-[#4F4F4F] bg-opacity-25 2xl:w-[60%] xl:w-[65%] lg:w-[70%] md:w-[75%] sm:w-[80%] w-[85%]  mx-auto mb-24 mt-8 rounded-xl shadow-[4.0px_4.0px_4.0px_rgba(255,255,255,0.02)] overflow-hidden lg:flex-row flex-col-reverse relative">
        <div className="flex-col w-[30%] items-center lg:flex hidden px-4">
            <Receipt />
        </div>
        <div className="lg:w-[70%] w-full h-full bg-[#1E1E1E] lg:rounded-r-xl lg:rounded-l-none rounded-xl bg-opacity-70 px-12 overflow-y-scroll no-scrollbar relative z-10">
            <TitleComponent />
            <CountrySelectorFeature />
            <AmountFeature />
            <ContactInfoFeature emailRef={emailRef} numberRef={numberRef} />
            <ExplanationComponent />
            <img src={GreyTransactionTriangle} alt="" className="absolute right-[25%] bottom-[35%] z-0 lg:flex hidden" />
            <div className="flex-col w-full items-center lg:hidden flex px-4">
                <Receipt />
            </div>
            <div className="h-32" />
            <CustomButtonComponent
                title={t("transaction.send_message")}
                style="absolute right-[5%] bottom-[5%]"
                onclick={() => {
                    console.log("sendTransaction")
                    dispatch(sendTransaction({ dispatch: dispatch, email: emailRef.current?.value ?? "", number: numberRef.current?.value ?? "", getState: TransactionStore.getState }))
                }}
            />
        </div>
    </div>
}