import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../../config/firebase/fbConfig";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface ITransaction {
    selectedFromCountry: string,
    listOfCountries: string[],
    selectedToCountry: string,
    selectedCurrency: string,
    listOfCurrencies: string[],
    totalAmount: number,
    email: string,
    currencyInfo: CurrencyInfo,
    isFromCountryOpen: boolean,
    isToCountryOpen: boolean,
    isCurrencyOpen: boolean,
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        totalAmount: 0,
        selectedCurrency: 'TL',
        listOfCurrencies: ['USD', 'TL'],
        selectedFromCountry: 'Somalia',
        listOfCountries: ['Somalia', 'Turkey'],
        selectedToCountry: 'Turkey',
        email: '',
        currencyInfo: {},
    } as ITransaction,
    reducers: {
        setFromCountry(state, action) {
            state.selectedFromCountry = action.payload;
            if (state.selectedToCountry == state.selectedFromCountry) {
                state.selectedToCountry = state.listOfCountries.filter((country) => country != state.selectedFromCountry)[0];
            }
            state.isFromCountryOpen = false;
        },
        setToCountry(state, action) {
            state.selectedToCountry = action.payload;
            if (state.selectedFromCountry == state.selectedFromCountry) {
                state.selectedFromCountry = state.listOfCountries.filter((country) => country != state.selectedToCountry)[0];
            }
            state.isToCountryOpen = false;
        },
        setCurrency(state, action) {
            state.selectedCurrency = action.payload;
            state.isCurrencyOpen = false;
        },
        setAmount(state, action) {
            // state.totalAmount = action.payload * state.currencyRate;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setCurrencyRate(state, action) {
            state.currencyInfo = action.payload;
        },
        openCloseFromCountry(state) {
            state.isFromCountryOpen = !state.isFromCountryOpen;
            state.isToCountryOpen = false;
            state.isCurrencyOpen = false;
        },
        openCloseToCountry(state) {
            state.isToCountryOpen = !state.isToCountryOpen;
            state.isFromCountryOpen = false;
            state.isCurrencyOpen = false;
        },
        openCloseCurrency(state) {
            state.isCurrencyOpen = !state.isCurrencyOpen;
            state.isFromCountryOpen = false;
            state.isToCountryOpen = false;
        }
    }
})

interface CurrencyInfo {
    tl_to_usd: number,
    usd_to_tl: number,
}

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
            console.log(response)
            dispatch(transactionActions.setCurrencyRate(response));
        }
        catch (error) {
            console.log(error);
        }
    },
)

export const TransactionStore = configureStore({
    reducer: {
        transaction: transactionSlice.reducer,
    },
});


export const transactionActions = transactionSlice.actions;

export type RootState = ReturnType<typeof TransactionStore.getState>
export type AppDispatch = typeof TransactionStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const openClose = (title: string, dispatch: AppDispatch) => {
    if (title == "From") {
        dispatch(transactionActions.openCloseFromCountry());
    }
    else if (title == "To") {
        dispatch(transactionActions.openCloseToCountry());
    }
    else {
        dispatch(transactionActions.openCloseCurrency());
    }
}

export const selectFunc = (title: string, value: string, dispatch: AppDispatch) => {
    if (title == "From") {
        dispatch(transactionActions.setFromCountry(value));
    } else if (title == "To") {
        dispatch(transactionActions.setToCountry(value));
    } else {
        dispatch(transactionActions.setCurrency(value));
    }
}