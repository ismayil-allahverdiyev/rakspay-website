import { useEffect } from "react";
import { AppDispatch, selectFunc, transactionActions, useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { countryCodes } from "../utils/country_codes";

interface PhoneCodeComponentProps {
    numberRef: React.RefObject<HTMLInputElement>;
}

export default function PhoneCodeComponent(props: PhoneCodeComponentProps) {

    var dispatch = useDispatch<AppDispatch>();
    var isOn = useAppSelector((state) => state.transaction.isCountryOpen);
    var phoneCode = useAppSelector((state) => state.transaction.phoneCode);
    var number = useAppSelector((state) => state.transaction.number);

    function setIsOn() {
        dispatch(transactionActions.openCloseCountry());
    }

    useEffect(() => {
        props.numberRef.current!.value = number;

    }, [number])

    return <div className="flex justify-center">
        <div>
            <button className="flex items-center justify-center w-24 px-5 py-4 outline-none bg-white rounded-lg relative z-10" onClick={setIsOn}>
                {phoneCode}
            </button>
            <div className={`w-full h-32 overflow-y-auto bg-white mt-2 rounded-lg absolute ${isOn ? "block z-40 shadow-md" : "hidden"}`}>
                {countryCodes.map((value, index) => {
                    return <p key={index} className="px-2 py-2 hover:bg-[#F2F2F2] cursor-pointer rounded-lg" onClick={() => selectFunc(2, value, dispatch)}>{value}</p>
                })}
            </div>
        </div>
        <input ref={props.numberRef} type="number" className="ml-2 px-2 py-4 outline-none w-[100%] bg-white rounded-lg relative z-10" min={7} />
    </div>
}