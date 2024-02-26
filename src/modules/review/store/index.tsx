import { createSlice, configureStore } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../config/firebase/fbConfig";
import { useEffect } from "react";
export const SIGNIN = 'SIGN_IN';


interface IAction {
    reviews: IReview[],
}

export interface IReview {
    main: string,
    title: string,
    description: string,
    date: Date,
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [] as IReview[],
    } as IAction,
    reducers: {
        getReviews(state) {
            const generalInfo = collection(firestore, 'general');

            useEffect(() => {
                const getTodayInfo = async () => {
                    const querySnapshot = await getDocs(generalInfo);
                    querySnapshot.forEach((doc) => {
                        var data = {
                            id: doc.id,
                            ...doc.data()
                        }
                        console.log(data);
                    });
                }
                getTodayInfo();
            }, [])
        },
    }
})

export interface IAuthState {
    auth: IReview,
}

export const AuthenticationStore = configureStore({
    reducer: {
        auth: reviewsSlice.reducer,
    },
});

export const authActions = reviewsSlice.actions;