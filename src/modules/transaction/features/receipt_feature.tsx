import { InfoRow } from "../components/info_row_component";
import GreenTransactionTriangle from "../../../assets/images/green-transaction-triangle.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, transactionActions, useAppSelector } from "../store";
import { useTranslation } from "react-i18next";
import { getTransactionRate } from "../services/transaction_service";
import createUniqueShortId from "../utils/id_generator";

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
    var selectedFromCountry = useAppSelector(state => state.transaction.selectedFromCountry);
    var selectedToCountry = useAppSelector(state => state.transaction.selectedToCountry);
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
            1 {selectedCurrency} = {(currencyInfo as any)[getCurrencyInfo(selectedCurrency, selectedFromCountry, selectedToCountry)]} {getCurrency(selectedCurrency, selectedFromCountry, selectedToCountry)}
        </p>
        <InfoRow title={t("transaction.receipt.requested_amount")} value={`${amount ? amount : 0} ${selectedCurrency}`}></InfoRow>
        <div className="w-full border-white border-2 border-dotted " />
        <p className="font-bold xl:text-2xl lg:text-xl text-lg my-4">
            {t("transaction.receipt.receiving")}
        </p>
        <InfoRow title={t("transaction.receipt.transaction_speed")} value={t("transaction.receipt.time")}></InfoRow>
        <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold my-auto text-center">
            {`${totalAmount ? totalAmount : 0} ${selectedCurrency == "TL" ? (getCurrency(selectedCurrency, selectedFromCountry, selectedToCountry)) : "TL"}`}
        </p>
        <p className="font-bold py-4">{t("transaction.receipt.comission_is_exclusive")}</p>

    </>
}

export function getCurrency(selectedCurrency: string, selectedFromCountry: string, selectedToCountry: string) {
    return (selectedFromCountry == "Tanzania" || selectedToCountry == "Tanzania") && selectedCurrency == "TL" ? "TZS" : (selectedFromCountry == "Uganda" || selectedToCountry == "Uganda") && selectedCurrency == "TL" ? "UGX" : (selectedFromCountry == "Kenya" || selectedToCountry == "Kenya") && selectedCurrency == "TL" ? "KES" : "TL";
}

export function getCurrencyInfo(selectedCurrency: string, selectedFromCountry: string, selectedToCountry: string) {
    var currency = (selectedFromCountry == "Tanzania" || selectedToCountry == "Tanzania") ? "TZS" : (selectedFromCountry == "Uganda" || selectedToCountry == "Uganda") ? "UGX" : (selectedFromCountry == "Kenya" || selectedToCountry == "Kenya") ? "KES" : "TL";
    var res = selectedCurrency != "TL" ? (currency + "_to_tl") : ("tl_to_" + currency)
    if (selectedCurrency != "TL") res = selectedCurrency.toLowerCase() + "_to_tl";
    return res.toLowerCase();
}