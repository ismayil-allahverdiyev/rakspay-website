import { ToastOptions, toast } from "react-toastify";

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

export { successToast, errorToast }