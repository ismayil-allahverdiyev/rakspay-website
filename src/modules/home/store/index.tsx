import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../config/firebase/fbConfig";
import { TypedUseSelectorHook, useSelector } from "react-redux";

interface ISelectedReviews {
    reviewList: ISelectedReview[],
}

export interface ISelectedReview {
    description: string,
    title: string,
    from: string,
    date: string,
    name: string,
    id: string,
}

const selectedReviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviewList: [],
    } as ISelectedReviews,
    reducers: {
        setSelectedReviews(state, action) {
            console.log('setSelectedReviews');
            console.log(action.payload);
            state.reviewList = action.payload;
        }
    }
})

export interface ISelectedReviewState {
    SelectedReviews: ISelectedReviews,
}

export const getSelectedReviews = createAsyncThunk(
    'reviews/getSelectedReviews',
    async (dispatch: AppDispatch) => {
        console.log('getSelectedReviews');
        const getSelectedReviews = async () => {
            console.log('getSelectedReviews');
            const reviews = collection(firestore, 'selected_reviews');
            const data = await getDocs(reviews);
            const res = [] as ISelectedReview[];
            data.forEach((doc) => res.push({
                id: doc.id,
                date: doc.data().date.toDate().toDateString(),
                description: doc.data().description,
                main: doc.data().main,
                title: doc.data().title,
                from: doc.data().from,
                name: doc.data().name,
            } as ISelectedReview));

            return res;
        }

        try {
            var response = await getSelectedReviews();

            dispatch(SelectedReviewActions.setSelectedReviews(response));
        }
        catch (error) {
            console.log(error);
        }
    },
)

export const SelectedReviewStore = configureStore({
    reducer: {
        SelectedReview: selectedReviewsSlice.reducer,
    },
});


export const SelectedReviewActions = selectedReviewsSlice.actions;

export type RootState = ReturnType<typeof SelectedReviewStore.getState>
export type AppDispatch = typeof SelectedReviewStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector