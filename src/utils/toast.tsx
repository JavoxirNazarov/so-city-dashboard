import { toast } from "react-toastify";

type ToastTypes = "success" | "info" | "warn" | "error";

export function showToast(type: ToastTypes, message: string) {
  return toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
