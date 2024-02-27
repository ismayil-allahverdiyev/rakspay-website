import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../config/firebase/fbConfig";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface IReviews {
    reviewList: IReview[],
}

export interface IReview {
    main: string,
    title: string,
    description: string,
    date: string,
    id: string,
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviewList: [],
    } as IReviews,
    reducers: {
        setReviews(state, action) {
            console.log('setReviews');
            console.log(action.payload);
            state.reviewList = action.payload;
        }
    }
})

export interface IReviewState {
    reviews: IReviews,
}

export const getReviews = createAsyncThunk(
    'reviews/getReviews',
    async (dispatch: AppDispatch) => {
        console.log('getReviews');
        const getReviews = async () => {
            console.log('getReviews');
            const reviews = collection(firestore, 'reviews');
            const data = await getDocs(reviews);
            const res = [] as IReview[];
            data.forEach((doc) => res.push({
                id: doc.id,
                date: doc.data().date.toDate().toDateString(),
                description: doc.data().description,
                main: doc.data().main,
                title: doc.data().title,
            } as IReview));

            return res;
        }

        try {
            var response = await getReviews();

            console.log(response);

            dispatch(reviewActions.setReviews(response));
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