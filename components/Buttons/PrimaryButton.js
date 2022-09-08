import React, { useState } from 'react';

function PrimaryButton({ color, title, iconClass, onClickFunction, additionalClasses }) {

    return (
        <>
            {color === 'gray' &&
                <button onClick={onClickFunction} type="button" className={`${additionalClasses} text-white bg-gray-700  hover:bg-gray-800 focus:ring-4 
                focus:outline-none 
    focus:ring-gray-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-gray-600 
    dark:hover:bg-gray-700 dark:focus:ring-gray-800`}>

                    <span className='mr-2'>{title}</span>
                    <i class={iconClass}></i>
                </button>
                || color === 'orange' &&
                <button onClick={onClickFunction} type="button" className={`${additionalClasses} text-white bg-orange-700  hover:bg-orange-800 focus:ring-4 
                focus:outline-none 
      focus:ring-orange-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-orange-600 
      dark:hover:bg-orange-700 dark:focus:ring-orange-800`}>

                    <span className='mr-2'>{title}</span>
                    <i class={iconClass}></i>
                </button>

                || color === 'red' &&
                <button onClick={onClickFunction} type="button" className={`${additionalClasses} text-white bg-red-700  hover:bg-red-800 focus:ring-4 
                focus:outline-none 
focus:ring-red-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-red-600 
dark:hover:bg-red-700 dark:focus:ring-red-800`}>

                    <span className='mr-2'>{title}</span>
                    <i class={iconClass}></i>
                </button>

                || color === 'green' &&
                <button onClick={onClickFunction} type="button" className={`${additionalClasses} text-white bg-green-700  hover:bg-green-800 focus:ring-4 
focus:outline-none 
focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-green-600 
dark:hover:bg-green-700 dark:focus:ring-green-800`}>

                    <span className='mr-2'>{title}</span>
                    <i class={iconClass}></i>
                </button>

                || color === 'sky' &&
                <button onClick={onClickFunction} type="button" className={`${additionalClasses} text-white bg-sky-700  hover:bg-sky-800 focus:ring-4 
focus:outline-none 
focus:ring-sky-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-sky-600 
dark:hover:bg-sky-700 dark:focus:ring-sky-800`}>

                    <span className='mr-2'>{title}</span>
                    <i class={iconClass}></i>
                </button>

                || color === 'indigo' &&
                <button onClick={onClickFunction} type="button" className={`${additionalClasses} text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 
focus:outline-none 
focus:ring-indigo-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-indigo-600 
dark:hover:bg-indigo-700 dark:focus:ring-indigo-800`}>

                    <span className='mr-2'>{title}</span>
                    <i class={iconClass}></i>
                </button>
            }

        </>);
}

export default PrimaryButton;