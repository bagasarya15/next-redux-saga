import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { doAdd } from './redux/action/actionReducer';
import Alert from './alert';
import { useDispatch } from "react-redux";

export default function Register() {
  type FormValue = {
    username: string;
    password: string;
    firstname: string;
    lastname:string;
    role_id: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // let { user, message, status, refresh } = useSelector((state:any) => state.userReducers);
  
  const navigate = useRouter();
  const dispatch = useDispatch()

  const LoginValidation = {
    username: { required: 'username is required' },
    password: {
        required: 'password is required',
    },
    firstname: { required: 'firstname is required'},
    lastname: { required: 'lastname is required' },
    role_id: { required: 'role is required'}
  };

  const handleRegistration = (data:any) => {
    dispatch(doAdd(data));
    navigate.push('/login');
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-blue-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-800 bottom-0 leading-5 h-full w-full overflow-hidden">
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Selamat Datang</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800 uppercase">
                Register
              </h3>
            </div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <div className="space-y-6">
                <div>
                    <input
                    className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                    type="text"
                    placeholder="Username"
                    {...register('username', LoginValidation.username)}
                    />
                    <span className="text-sm text-rose-600">
                        {errors?.username && errors.username.message}
                    </span>
                </div>
                <div className="relative">
                    <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="text-sm text-black-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-400"
                    {...register('password', LoginValidation.password)}
                    />
                    <span className="text-sm text-rose-600">
                        {errors?.password && errors.password.message}
                    </span>
                    <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                    <svg
                        onClick={toggleShowPassword}
                        className={`h-4 text-blue-700 ${
                        showPassword ? "hidden" : "block"
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                    >
                        <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-88.22 0-160-71.78-160-160S199.78 80 288 80s160 71.78 160 160-71.78 160-160 160zm0-272c-48.53 0-96.61 18.12-133.89 53.72a236.95 236.95 0 0 0 0 202.56C191.39 354.88 239.47 373 288 373s96.61-18.12 133.89-53.72a236.95 236.95 0 0 0 0-202.56C384.61 145.12 336.53 127 288 127z"
                        ></path>
                    </svg>
                    <svg
                        onClick={toggleShowPassword}
                        className={`h-4 text-blue-700 ${
                        showPassword ? "block" : "hidden"
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <path
                        fill="currentColor"
                        d="M320 32C149 32 0 153.13 0 288c0 76.57 42.24 143.62 109.99 189.37l-50.34 50.34A32 32 0 0 0 96 544h96v-48h-31.74l29.41-29.41A191.88 191.88 0 0 0 224 288c0-106 86-192 192-192s192 86 192 192c0 106-86 192-192 192H288a32 32 0 0 0-32 32v48a32 32 0 0 0 32 32h192a32 32 0 0 0 31.74-28.63l50.34-50.34C597.76 431.62 640 364.57 640 288c0-134.87-149-256-320-256zm32 320H288a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64zm-96-96h-64a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64zm96-96H288a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64zm32-160a160 160 0 1 0-160 160 160 160 0 0 0 160-160zm32 192h-64a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64z"
                        ></path>
                    </svg>
                    </div>
                </div>
                <div>
                    <input
                    className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                    type="text"
                    placeholder="Firstname"
                    {...register('firstname', LoginValidation.firstname)}
                    />
                    <span className="text-sm text-rose-600">
                        {errors?.firstname && errors.firstname.message}
                    </span>
                </div>
                <div>
                    <input
                    className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                    type="text"
                    placeholder="Lastname"
                    {...register('lastname', LoginValidation.lastname)}
                    />
                    <span className="text-sm text-rose-600">
                        {errors?.lastname && errors.lastname.message}
                    </span>
                </div>
                <div>
                    <input
                    className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                    type="hidden"
                    value='2'
                    {...register('role_id', LoginValidation.role_id)}
                    />
                    <span className="text-sm text-rose-600">
                        {errors?.role_id && errors.role_id.message}
                    </span>
                </div>
                <div>
                    <button
                    className="w-full flex justify-center items-center bg-blue-700 hover:bg-blue-600 text-white px-4 py-3 rounded-lg focus:outline-none"
                    >
                    <span className="mr-2">Register</span>
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M2 11h3v6h10v-6h3l-8-8-8 8zm3-7h4v5h2V4h4l-6-6-6 6z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                <div className="text-sm text-center">
                <p className="text-gray-400 mt-2">
                Sudah terdaftar ?
                <Link
                  href="/login"
                  className="text-sm text-blue-700 hover:text-blue-700 ms-2"
                >
                  Login
                </Link>
              </p>
                </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
