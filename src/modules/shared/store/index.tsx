import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { i18n } from "i18next";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export interface IGeneralState {
    selectedLanguage: string,
}

const translationSlice = createSlice({
    name: 'translation',
    initialState: {
        selectedLanguage: 'en',
    } as IGeneralState,
    reducers: {
        setLanguage(state, action) {
            state.selectedLanguage = action.payload;
        }
    }
})

export const GeneralStore = configureStore({
    reducer: {
        translation: translationSlice.reducer,
    },
});


export const translationActions = translationSlice.actions;

export type RootState = ReturnType<typeof GeneralStore.getState>
export type AppDispatch = typeof GeneralStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const changeLanguage = (lang: string, dispatch: AppDispatch, i18n: i18n) => {
    dispatch(translationActions.setLanguage(lang));
    i18n.changeLanguage(lang);
}