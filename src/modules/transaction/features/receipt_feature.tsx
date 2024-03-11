import { InfoRow } from "../components/info_row_component";
import GreenTransactionTriangle from "../../../assets/images/green-transaction-triangle.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import createUniqueShortId, { AppDispatch, getTransactionRate, transactionActions, useAppSelector } from "../store";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";

export default function Receipt() {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTransactionRate(dispatch));
    }, [dispatch])

    useEffect(() => {
        const uniqueId = createUniqueShortId();
        dispatch(transactionActions.setId(uniqueId));
    }, [])

    var currencyInfo = useAppSelector(state => state.transaction.currencyInfo);
    var selectedCurrency = useAppSelector(state => state.transaction.selectedCurrency);
    var totalAmount = useAppSelector(state => state.transaction.totalAmount);
    var amount = useAppSelector(state => state.transaction.amount);
    var id = useAppSelector(state => state.transaction.id);

    var t = useTranslation("global").t;

    return <>
        <div className="relative">
            <p className="font-title font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl mt-6 mb-2 relative z-10">
                {t("transaction.receipt.title")}
            </p>
            <img src={GreenTransactionTriangle} alt="" className="absolute -left-8 top-4 z-0" />
        </div>
        <InfoRow title={t("transaction.receipt.transaction_id")} value={id}></InfoRow>
        <InfoRow title={t("transaction.receipt.date_time")} value={Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', }).format(Date.now())}></InfoRow>
        <div className="w-full border-white border-2 border-dotted " />
        <p className="font-bold xl:text-2xl lg:text-xl text-lg my-4">
            1 {selectedCurrency} = {currencyInfo[selectedCurrency == "TL" ? "tl_to_usd" : "usd_to_tl"]} {selectedCurrency == "TL" ? "USD" : "TL"}
        </p>
        <InfoRow title={t("transaction.receipt.requested_amount")} value={`${amount ? amount : 0} ${selectedCurrency}`}></InfoRow>
        <div className="w-full border-white border-2 border-dotted " />
        <p className="font-bold xl:text-2xl lg:text-xl text-lg my-4">
            {t("transaction.receipt.receiving")}
        </p>
        <InfoRow title={t("transaction.receipt.transaction_speed")} value="1 - 8 hours"></InfoRow>
        <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold my-auto text-center">
            {`${totalAmount ? totalAmount : 0} ${selectedCurrency == "TL" ? "USD" : "TL"}`}
        </p>
    </>
}