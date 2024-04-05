import { createSlice, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import createUniqueShortId from "../utils/id_generator";
import { ITransaction } from "./interfaces/transaction";
import { getCurrency } from "../features/receipt_feature";

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        totalAmount: 0,
        amount: 0,
        isFromCountryOpen: false,
        isToCountryOpen: false,
        isCurrencyOpen: false,
        number: '',
        selectedCurrency: "KES",
        listOfCurrencies: ["TL", "USD", "KES", "TZS", "UGX"],
        selectedFromCountry: 'Kenya',
        listOfCountries: ["Turkey", "Kenya", "Tanzania", "Uganda"],
        selectedToCountry: "Turkey",
        email: '',
        currencyInfo: {},
        isCountryOpen: false,
        phoneCode: '+90',
        id: '',
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
            setTotalAmount(state);
        },
        setAmount(state, action) {
            state.amount = action.payload;
            setTotalAmount(state);
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setCountryOpen(state, action) {
            state.isCountryOpen = action.payload;
        },
        setCurrencyRate(state, action) {
            state.currencyInfo = action.payload;
        },
        setPhoneCode(state, action) {
            state.phoneCode = action.payload;
            state.isCountryOpen = false;
        },
        openCloseFromCountry(state) {
            console.log("Open Close From Country");
            state.isFromCountryOpen = !state.isFromCountryOpen;
            state.isToCountryOpen = false;
            state.isCurrencyOpen = false;
            state.isCountryOpen = false;
        },
        openCloseCountry(state) {
            state.isCountryOpen = !state.isCountryOpen;
            state.isToCountryOpen = false;
            state.isCurrencyOpen = false;
            state.isFromCountryOpen = false;
        },
        openCloseToCountry(state) {
            state.isToCountryOpen = !state.isToCountryOpen;
            state.isFromCountryOpen = false;
            state.isCurrencyOpen = false;
            state.isCountryOpen = false;
        },
        openCloseCurrency(state) {
            state.isCurrencyOpen = !state.isCurrencyOpen;
            state.isFromCountryOpen = false;
            state.isToCountryOpen = false;
            state.isCountryOpen = false;
        },
        setNumber(state, action) {
            state.number = action.payload;
        },
        setId(state, action) {
            state.id = action.payload;
        },
        resetPage(state) {
            state.amount = 0;
            state.email = '';
            state.number = '';
            state.totalAmount = 0;
            state.id = createUniqueShortId();
            state.isCountryOpen = false;
            state.isCurrencyOpen = false;
            state.isFromCountryOpen = false;
            state.isToCountryOpen = false;
            state.selectedCurrency = 'KES';
            state.selectedFromCountry = 'Kenya';
            state.selectedToCountry = 'Turkey';
            state.phoneCode = '+90';
        }
    }
})

function setTotalAmount(state: ITransaction) {
    var unit = 1;
    if (state.selectedCurrency == 'TL') {
        unit = (state.currencyInfo as any)[`tl_to_${getCurrency(state.selectedCurrency, state.selectedFromCountry, state.selectedToCountry).toLowerCase()}`];
    } else if (state.selectedCurrency == 'KES') {
        unit = state.currencyInfo.kes_to_tl;
    } else if (state.selectedCurrency == 'TZS') {
        unit = state.currencyInfo.tzs_to_tl;
    } else if (state.selectedCurrency == 'UGX') {
        unit = state.currencyInfo.ugx_to_tl;
    }

    state.totalAmount = parseFloat((state.amount * unit).toFixed(2));
}

export const TransactionStore = configureStore({
    reducer: {
        transaction: transactionSlice.reducer,
    },
});

export const transactionActions = transactionSlice.actions;

export type RootState = ReturnType<typeof TransactionStore.getState>
export type AppDispatch = typeof TransactionStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const openClose = (id: number, dispatch: AppDispatch) => {
    if (id == 0) {
        dispatch(transactionActions.openCloseFromCountry());
    }
    else if (id == 1) {
        dispatch(transactionActions.openCloseToCountry());
    }
    else if (id == 3) {
        dispatch(transactionActions.openCloseCurrency());
    }
}

export const selectFunc = (id: number, value: string, dispatch: AppDispatch) => {
    if (id == 0) {
        dispatch(transactionActions.setFromCountry(value));
    } else if (id == 1) {
        dispatch(transactionActions.setToCountry(value));
    } else if (id == 2) {
        dispatch(transactionActions.setPhoneCode(value));
    } else if (id == 3) {
        dispatch(transactionActions.setCurrency(value));
    }
}

export const setAmount = (value: number, dispatch: AppDispatch) => {
    dispatch(transactionActions.setAmount(value));
}