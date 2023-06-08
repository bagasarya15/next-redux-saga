import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertSucces = (message: any) => {
  toast.success(`${message}`, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const AlertSuccesCustom = () => {
  toast.success(`Berhasil mendaftarkan akun, silahkan login`, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const AlertError = (message: any) => {
  toast.error(`${message}`, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const AlertWarning = () => {
  toast.warn('Hapus data yang anda pilih?', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export default {
  AlertSucces,
  AlertSuccesCustom,
  AlertError,
  AlertWarning,
};
