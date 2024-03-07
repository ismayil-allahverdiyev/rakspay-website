import { InfoRow } from "../components/info_row_component";
import GreenTransactionTriangle from "../../../assets/images/green-transaction-triangle.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, getTransactionRate, useAppSelector } from "../store";

export default function Receipt() {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTransactionRate(dispatch));
    }, [dispatch])

    var currencyInfo = useAppSelector(state => state.transaction.currencyInfo);
    var selectedCurrency = useAppSelector(state => state.transaction.selectedCurrency);

    return <>
        <div className="relative">
            <p className="font-title font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl mt-6 mb-2 relative z-10">
                Request
            </p>
            <img src={GreenTransactionTriangle} alt="" className="absolute -left-8 top-4 z-0" />
        </div>
        <InfoRow title="Transaction Id" value="1234567889"></InfoRow>
        <InfoRow title="Date and time" value="23 Jan 2024 12:37 pm"></InfoRow>
        <div className="w-full border-white border-2 border-dotted " />
        <p className="font-bold xl:text-2xl lg:text-xl text-lg my-4">
            1 {selectedCurrency} = {currencyInfo[selectedCurrency == "TL" ? "tl_to_usd" : "usd_to_tl"]} {selectedCurrency == "TL" ? "USD" : "TL"}
        </p>
        <InfoRow title="Requested amount" value="100 USD"></InfoRow>
        <div className="w-full border-white border-2 border-dotted " />
        <p className="font-bold xl:text-2xl lg:text-xl text-lg my-4">
            Receiving
        </p>
        <InfoRow title="Transaction speed" value="1 - 8 hours"></InfoRow>
        <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-extrabold my-auto">
            3103 TL
        </p>
    </>
}