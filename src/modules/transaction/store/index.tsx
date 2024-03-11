import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../../config/firebase/fbConfig";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ITransaction {
    selectedFromCountry: string,
    listOfCountries: string[],
    selectedToCountry: string,
    selectedCurrency: string,
    listOfCurrencies: string[],
    totalAmount: number,
    amount: number,
    email: string,
    number: string,
    currencyInfo: CurrencyInfo,
    isFromCountryOpen: boolean,
    isToCountryOpen: boolean,
    isCurrencyOpen: boolean,
    isCountryOpen: boolean,
    id: string,
    phoneCode: string,
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        totalAmount: 0,
        amount: 0,
        isFromCountryOpen: false,
        isToCountryOpen: false,
        isCurrencyOpen: false,
        number: '',
        selectedCurrency: 'TL',
        listOfCurrencies: ['USD', 'TL'],
        selectedFromCountry: 'Somalia',
        listOfCountries: ['Somalia', 'Turkey'],
        selectedToCountry: 'Turkey',
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
            state.selectedCurrency = 'TL';
            state.selectedFromCountry = 'Somalia';
            state.selectedToCountry = 'Turkey';
            state.phoneCode = '+90';
        }
    }
})

var styles = {
    autoClose: 3000, //3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    position: "top-center",
} as ToastOptions

function successToast(title: string, message?: string) {
    toast.success(
        <div>
            <p className="font-bold text-black">
                {title}
            </p>
            <p className="font-semibold text-gray-700">
                {message}
            </p>
        </div>,
        styles,
    );
}

function errorToast(title: string, message?: string) {
    toast.error(
        <div>
            <p className="font-bold text-black">
                {title}
            </p>
            <p className="font-semibold text-gray-700">
                {message}
            </p>
        </div>,
        styles,
    );
}

function setTotalAmount(state: ITransaction) {
    state.totalAmount = parseFloat((state.amount * (state.selectedCurrency == 'TL' ? state.currencyInfo.tl_to_usd : state.currencyInfo.usd_to_tl)).toFixed(2));
}

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
            toast("Error getting currency info");
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
    } else if (title == "Country") {
        dispatch(transactionActions.setPhoneCode(value));
    } else {
        dispatch(transactionActions.setCurrency(value));
    }
}

export const setAmount = (value: number, dispatch: AppDispatch) => {
    dispatch(transactionActions.setAmount(value));
}

function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default function createUniqueShortId() {
    const timestamp = Date.now().toString(36);
    const randomChars = generateUniqueId();

    const uniqueId = timestamp + randomChars;
    return uniqueId;
}

export const countryCodes = [
    "+93", "+355", "+213", "+376", "+244", "+1-268", "+54", "+374", "+61", "+43",
    "+994", "+1-242", "+973", "+880", "+1-246", "+375", "+32", "+501", "+229",
    "+975", "+591", "+387", "+267", "+55", "+673", "+359", "+226", "+257", "+238",
    "+855", "+237", "+1", "+236", "+235", "+56", "+86", "+57", "+269", "+242",
    "+506", "+385", "+53", "+357", "+420", "+45", "+253", "+1-767", "+1-809, +1-829, +1-849",
    "+670", "+593", "+20", "+503", "+240", "+291", "+372", "+268", "+251", "+679",
    "+358", "+33", "+241", "+220", "+995", "+49", "+233", "+30", "+1-473", "+502",
    "+224", "+245", "+592", "+509", "+504", "+36", "+354", "+91", "+62", "+98",
    "+964", "+353", "+972", "+39", "+225", "+1-876", "+81", "+962", "+7", "+254",
    "+686", "+383", "+965", "+996", "+856", "+371", "+961", "+266", "+231", "+218",
    "+423", "+370", "+352", "+261", "+265", "+60", "+960", "+223", "+356", "+692",
    "+222", "+230", "+52", "+691", "+373", "+377", "+976", "+382", "+212", "+258",
    "+95", "+264", "+674", "+977", "+31", "+64", "+505", "+227", "+234", "+850",
    "+389", "+47", "+968", "+92", "+680", "+970", "+507", "+675", "+595", "+51",
    "+63", "+48", "+351", "+974", "+40", "+7", "+250", "+1-869", "+1-758", "+1-784",
    "+685", "+378", "+239", "+966", "+221", "+381", "+248", "+232", "+65", "+421",
    "+386", "+677", "+252", "+27", "+82", "+211", "+34", "+94", "+249", "+597",
    "+46", "+41", "+963", "+886", "+992", "+255", "+66", "+228", "+676", "+1-868",
    "+216", "+90", "+993", "+688", "+256", "+380", "+971", "+44", "+1", "+598",
    "+998", "+678", "+379", "+58", "+84", "+967", "+260", "+263"
];