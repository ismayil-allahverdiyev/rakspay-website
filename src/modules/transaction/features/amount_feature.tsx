import { useEffect, useRef } from "react";
import CustomDropdownComponent from "../../shared/components/general/custom_dropdown_component";
import { AppDispatch, setAmount, useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export default function AmountFeature() {

    const dispatch = useDispatch<AppDispatch>();
    const selectedCurrency = useAppSelector((state) => state.transaction.selectedCurrency);

    var amountRef = useRef<HTMLInputElement>(null);

    var number = useAppSelector((state) => state.transaction.number);

    useEffect(() => {
        amountRef.current!.value = number;
    }, [number])

    var t = useTranslation("global").t;

    return <div className="flex flex-row w-[40%] mt-2 items-end">
        <div className="w-[50%] font-bold relative text-black mr-8">
            <p className="ml-3 mb-1 font-semibold text-white">
                {t("transaction.amount")}
            </p>
            <div className="flex flex-row items-center">
                <input ref={amountRef} type="number" className="px-2 py-4 outline-none bg-white rounded-lg relative z-10 w-32 mr-6" onChange={value => setAmount(value.target.valueAsNumber, dispatch)} />
                <CustomDropdownComponent placeholder="TL" title="" values={["TL", "KES", "TZS", "UGX"]} selectedValue={selectedCurrency} style="w-24" id={3} />
            </div>
        </div>
    </div>
}