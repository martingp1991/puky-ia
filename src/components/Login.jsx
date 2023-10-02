import { useState, useEffect, useRef } from "react";
import { IoIosLogOut } from "react-icons/io";
import { AiFillGithub, AiOutlineGooglePlus, AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-400"
        href="#"
        onClick={openModal}
      >
        <IoIosLogOut className="w-5 h-5" />
        <span className="mx-2 text-sm font-medium">Login / Sign Up</span>
      </button>
      {isModalOpen && (
        <div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="modal" ref={modalRef}>
              {/* Contenido del modal */}
              <div className="flex items-center justify-center p-4 rounded-md modal-content animated fadeIn faster bg-zinc-200 dark:bg-zinc-800">
                <div
                  className="w-full p-4 text-gray-700 bg-white rounded shadow-2xl sm:w-96 dark:bg-zinc-900"
                  ref={modalRef}
                >
                  <div className="flex justify-end ">
                    <img
                      src="https://www.ns-logo.com/wp-content/uploads/2020/07/logo-icon-png-8.png"
                      alt=""
                      className="w-8"
                    />
                    <button className="px-4 py-2 font-semibold text-zinc-200" onClick={closeModal}>
                      <AiOutlineClose className="text-zinc-800 dark:text-zinc-200" />
                    </button>
                  </div>

                  <p className="pb-2 mt-2 mb-8 text-3xl text-center text-zinc-800 dark:text-zinc-200">Welcome</p>
                  <hr className="mt-4 border-zinc-300 dark:border-zinc-600" />
                  <form action="#" className="my-5">
                    <div className="pb-5 text-sm text-center">
                      <p className="text-lg text-zinc-800 dark:text-zinc-200">
                        You don&apos;t have an account?{" "}
                        <a href="#" className="text-lg text-blue-500">
                          Register now!
                        </a>
                      </p>
                    </div>

                    <div className="pb-5">
                      <input
                        type="text"
                        id="username"
                        className="block w-full p-2 bg-gray-100 rounded shadow focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                        placeholder="E-mail"
                        required
                      />
                    </div>

                    <div className="pb-5">
                      <input
                        type="password"
                        id="password"
                        className="block w-full p-2 bg-gray-100 rounded shadow focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <div className="pb-5">
                      <input
                        type="checkbox"
                        id="remember"
                        className="cursor-pointer "
                      />
                      <label htmlFor="remember" className="ml-4 text-zinc-800 dark:text-zinc-200">
                        Remember password
                      </label>
                    </div>

                    <div className="pb-5 text-sm text-right">
                      <a href="#" className="text-blue-500">
                        Forgot your password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="w-full p-2 text-white bg-blue-500 rounded dark:shadow-lg dark:shadow-blue-500/50 hover:bg-blue-800"
                    >
                      Log In
                    </button>
                  </form>

                  <hr className="mt-4 border-zinc-300 dark:border-zinc-600" />

                  <div className="relative flex justify-around mt-8 mb-8">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-red-600 rounded-full hover:bg-red-800">
                      <AiOutlineGooglePlus className="text-3xl cursor-pointer " />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-black rounded-full dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-500">
                      <AiFillGithub className="text-3xl cursor-pointer dark:invert" />
                    </div>

                    <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full hover:bg-blue-800">
                      <BiLogoFacebook className="text-3xl cursor-pointer " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;