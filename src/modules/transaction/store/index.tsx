import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../config/firebase/fbConfig";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface ITransaction {
    selectedFromCountry: String,
    selectedToCountry: String,
    selectedCurrency: String,
    selectedAmount: Number,
    email: String,
}

const reviewsSlice = createSlice({
    name: 'transaction',
    initialState: {
        selectedAmount: 0,
        selectedCurrency: '',
        selectedFromCountry: '',
        selectedToCountry: '',
        email: '',
    } as ITransaction,
    reducers: {
        setReviews(state, action) {
            
        }
    }
})

export interface IReviewState {
    reviews: ITransaction,
}

export const getReviews = createAsyncThunk(
    'reviews/getReviews',
    async (dispatch: AppDispatch) => {
        console.log('getReviews');
        const getReviews = async () => {
            
        }

        try {
            // dispatch(reviewActions.setReviews(response));
        }
        catch (error) {
            console.log(error);
        }
    },
)

export const ReviewStore = configureStore({
    reducer: {
        review: reviewsSlice.reducer,
    },
});


export const reviewActions = reviewsSlice.actions;

export type RootState = ReturnType<typeof ReviewStore.getState>
export type AppDispatch = typeof ReviewStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector