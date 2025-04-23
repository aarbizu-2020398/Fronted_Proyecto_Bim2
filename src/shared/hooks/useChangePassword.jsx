import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../services";

export const useChangePassword = () => {
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequest({ password, newPassword });
        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'No fue posible actualizar el password'
            );
        }
        toast.success('Password actualizada correctamente')
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
    }
=======
    };
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3

    return {
        changePassword
    }
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
};
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
