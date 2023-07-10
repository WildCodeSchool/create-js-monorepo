import { toast } from "react-toastify";

const option = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
  theme: "colored",
};

// Toast success (vert)
export default function notifySuccess(message) {
  toast.success(message, option);
}

// Toast warning (jaune)
export const notifyDuplicate = (message) => toast.warn(message, option);

// Toast error (rouge)
export const notifyError = (message) => toast.error(message, option);
