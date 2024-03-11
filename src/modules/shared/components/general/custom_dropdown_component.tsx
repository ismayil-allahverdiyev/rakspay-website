import { useDispatch } from "react-redux";
import IconMenuDown from "../../../../assets/icons/icon-menu-down.svg";
import { AppDispatch, openClose, selectFunc, transactionActions, useAppSelector } from "../../../transaction/store";
import { Ref, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ICustomDropdownComponentProps {
    title: string;
    placeholder: string;
    values: string[];
    selectedValue?: string;
    style?: string;
    isOn?: boolean;
}

export default function CustomDropdownComponent(props: ICustomDropdownComponentProps) {
    const isOn = useAppSelector((state) => props.title == "From" ? state.transaction.isFromCountryOpen : props.title == "To" ? state.transaction.isToCountryOpen : state.transaction.isCurrencyOpen);

    const dispatch = useDispatch<AppDispatch>();
    var language = useTranslation("global").i18n.language;

    useEffect(() => {
        console.log("Language changed");
    }, [language]);

    return <div className="md:w-[45%] w-full font-bold relative text-black">
        <div>
            <p className={`ml-3 font-semibold text-white ${props.title != "" ? " mb-1" : ""}`}>
                {props.title}
            </p>
            <button className={`flex justify-between items-end px-2 py-4 bg-white rounded-lg relative z-20 ${props.style ?? "w-full"}`} onClick={() => openClose(props.title, dispatch)}>
                <p>{props.selectedValue == "" ? props.placeholder : props.selectedValue}</p>
                <img src={IconMenuDown} alt="" />
            </button>
            <div className={`w-full bg-white mt-2 rounded-lg absolute ${isOn ? "block z-40 shadow-md" : "hidden"}`}>
                {props.values.map((value, index) => {
                    return <p key={index} className="px-2 py-2 hover:bg-[#F2F2F2] cursor-pointer rounded-lg" onClick={() => selectFunc(props.title, value, dispatch)}>{value}</p>
                })}
            </div>
        </div>
    </div>
}