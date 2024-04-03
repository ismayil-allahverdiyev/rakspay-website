import { createSlice, configureStore } from "@reduxjs/toolkit";
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
        menu: menuSlice.reducer,
    },
});


export const menuActions = menuSlice.actions;

export type RootState = ReturnType<typeof GeneralStore.getState>
export type AppDispatch = typeof GeneralStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector