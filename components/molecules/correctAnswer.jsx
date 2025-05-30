import React from "react";

export const CorrectAnswer = ({ handle }) => {
  return (
    <div class="fixed bottom-0 left-0 right-0 bg-lime-100 text-green-600 transition-all">
      <div class="flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-5 sm:py-3">
        <div class="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
          <div class="hidden rounded-full bg-white p-5 text-green-500 sm:block">
            <svg height="48" viewBox="0 96 960 960" width="48">
              <path
                fill="currentColor"
                d="M378 834 130 586l68-68 180 180 383-383 68 68-451 451Z"
              ></path>
            </svg>
          </div>
          <div class="lg:text-xl">¡Respuesta correcta!</div>
        </div>
        <button
          class="w-full px-6 py-4 bg-green-500 rounded-full cursor-pointer text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0"
          onClick={handle}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};
