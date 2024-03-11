import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { i18n } from "i18next";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export interface IMenuState {
    isMenuOn: boolean,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isMenuOn: false,
    } as IMenuState,
    reducers: {
        closeOpenMenu(state) {
            state.isMenuOn = !state.isMenuOn;
        }
    }
})

export const GeneralStore = configureStore({
    reducer: {
        translation: menuSlice.reducer,
    },
});


export const menuActions = menuSlice.actions;

export type RootState = ReturnType<typeof GeneralStore.getState>
export type AppDispatch = typeof GeneralStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const changeLanguage = (lang: string, dispatch: AppDispatch, i18n: i18n) => {
    i18n.changeLanguage(lang);
}