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
                            <div className="modal-content animated fadeIn faster">
                                <div className="flex items-center justify-center h-screen">
                                    <div className="p-8 mx-4 text-center bg-white rounded-lg shadow-md dark:bg-zinc-900">
                                        <div className="pl-56">
                                            <button className="px-4 py-2 font-semibold text-zinc-200" onClick={closeModal}>
                                                <AiOutlineClose className="" />
                                            </button>
                                        </div>
                                        <h2 className="mb-4 text-2xl font-semibold dark:text-zinc-200">Plan Básico</h2>
                                        <hr className="my-1 border-zinc-300 dark:border-zinc-600" />
                                        <p className="mb-4 text-gray-600 dark:text-zinc-200">Acceso a características estándar</p>
                                        <p className="mb-4 text-3xl font-bold text-green-500">$9.99/mes</p>
                                        <ul className="justify-center mb-4 text-center">
                                            <li className="flex items-center mb-2 dark:text-zinc-200">
                                                <BsCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                                                Vas a ser re capo
                                            </li>
                                            <li className="flex items-center mb-2 dark:text-zinc-200">
                                                <BsCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                                                Vas a ser re genial
                                            </li>
                                            <li className="flex items-center mb-2 dark:text-zinc-200">
                                                <BsCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                                                Vas a ser re capo y re genial
                                            </li>
                                        </ul>
                                        <hr className="my-1 border-zinc-300 dark:border-zinc-600" />
                                        <div className="mt-2">
                                            <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 dark:text-zinc-200">Elegir Plan</button>
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
};

export default Tickets;
