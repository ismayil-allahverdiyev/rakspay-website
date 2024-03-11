import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GeneralStore } from "../shared/store";

export function RootLayout() {
    return <>
        <ToastContainer />
        <Outlet />
    </>;
}