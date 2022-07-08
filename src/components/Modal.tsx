import React from "react";
import { useAppDispatch } from "../store/hooks";
import { closeModal } from "../store/pokemonsSlice";

interface Props {
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        className="fixed py-4 bg-gray-700/95 transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0  h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-3xl"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="flex items-center justify-center w-full">
              {children}
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => {
                  dispatch(closeModal());
                }}
              >
                Explore More Pokemons
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
