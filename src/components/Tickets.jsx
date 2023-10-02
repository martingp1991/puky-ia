import { useState, useEffect, useRef } from "react";
import { BsTicketPerforated } from "react-icons/bs";
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";

const Tickets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openStripeCheckout = () => {
    window.open("https://buy.stripe.com/test_aEUcOR7WV3o3dtm000", "_blank");
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
        <BsTicketPerforated className="w-5 h-5" />
        <span className="mx-2 text-sm font-medium">Tickets</span>
      </button>

      {isModalOpen && (
        <div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 animated"
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

                  <p className="pb-2 mt-2 mb-8 text-3xl text-center text-zinc-800 dark:text-zinc-200">Plan Básico</p>
                  <hr className="mt-4 border-zinc-300 dark:border-zinc-600" />
                  <form action="#" className="my-5">
                    <div className="pb-5 text-sm text-center">
                      <p className="text-lg text-zinc-800 dark:text-zinc-200">
                        Acceso a características estandar{" "}
                      </p>
                    </div>

                    <ul className="justify-center mb-4 text-center">
                      <li className="flex items-center mb-2 dark:text-zinc-200">
                        <BsCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                        <span className="text-lg">Vas a ser re capo</span>
                      </li>
                      <li className="flex items-center mb-2 dark:text-zinc-200">
                        <BsCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                        <span className="text-lg">Vas a ser re genial</span>
                      </li>
                      <li className="flex items-center mb-2 dark:text-zinc-200">
                        <BsCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                        <span className="text-lg">Vas a ser re capo y re genial</span>
                      </li>
                    </ul>
                    <hr className="mt-8 border-zinc-300 dark:border-zinc-600" />
                    <br />
                    <button
                      type="submit"
                      className="w-full p-2 text-white bg-blue-500 rounded dark:shadow-lg dark:shadow-blue-500/50 hover:bg-blue-800"
                      onClick={openStripeCheckout}
                    >
                      Elegir plan
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
