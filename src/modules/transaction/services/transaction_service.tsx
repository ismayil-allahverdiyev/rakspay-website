import { createAsyncThunk } from "@reduxjs/toolkit/react";
import { AppDispatch, RootState, transactionActions } from "../store";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../../config/firebase/fbConfig";
import { errorToast, successToast } from "../../shared/hooks/custom_toast";
import { CurrencyInfo } from "../store/interfaces/currency_info";

export const getTransactionRate = createAsyncThunk(
    'transaction/getTransactionRate',
    async (dispatch: AppDispatch) => {
        console.log('getTransactionRate');
        const getCurrencyInfo = async () => {

            const currencyInfo = doc(firestore, 'general', 'currency_info');
            const data = await getDoc(currencyInfo);
            var res = data.data() as CurrencyInfo;
            return res;
        }

        try {
            var response = await getCurrencyInfo();
            dispatch(transactionActions.setCurrencyRate(response));
        }
        catch (error) {
            errorToast("Error getting currency info");
        }
    },
)

interface SendTransaction {
    email: string,
    number: string,
    getState: () => RootState,
    dispatch: AppDispatch,
}

export const sendTransaction = createAsyncThunk(
    'transaction/sendTransaction',
    async (props: SendTransaction) => {
        console.log("Transaction submitted to " + props.email + " with number " + props.number);
        props.dispatch(transactionActions.setEmail(props.email));
        props.dispatch(transactionActions.setNumber(props.number));

        var appInfo = props.getState().transaction;

        console.log("Sending transaction with id " + appInfo.id);

        if (appInfo.amount == 0 || appInfo.email == '' || appInfo.number == '') {
            errorToast("Please fill in all the fields!")
            return;
        }

        var transaction = {
            id: appInfo.id,
            fromCountry: appInfo.selectedFromCountry,
            toCountry: appInfo.selectedToCountry,
            currency: appInfo.selectedCurrency,
            requestedAmount: appInfo.amount,
            totalAmount: appInfo.totalAmount,
            email: appInfo.email,
            number: appInfo.number,
            phoneCode: appInfo.phoneCode,
            date: Date.now(),
        }

        const sendTransaction = async () => {
            const transactionRef = collection(firestore, 'transactions');
            const docRef = doc(transactionRef, transaction.id);
            console.log("Transactionn yeah");

            try {
                await setDoc(docRef, transaction);
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }

        try {
            var response = await sendTransaction();

            if (response) {
                props.dispatch(transactionActions.resetPage());
                successToast("Transaction successful!", "We will contact you soon!");
            } else {
                errorToast("Transaction failed!")
            }
        }
        catch (error) {
            errorToast("Transaction failed!")
        }
    }
)