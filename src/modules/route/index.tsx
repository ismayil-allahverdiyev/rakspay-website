import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export function RootLayout() {
    return <>
        <ToastContainer />
        <Outlet />
    </>;
}