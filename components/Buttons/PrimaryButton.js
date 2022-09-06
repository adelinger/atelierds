import React from 'react';

function PrimaryButton({color, title, iconClass, onClickFunction}) {
    

    return (
    <>
     <button onClick={onClickFunction} type="button" class={`mr-1 center-image text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none 
                    focus:ring-${color}-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-${color}-600 
                    dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}>

                        <span className='mr-2'>{title}</span>
                        <i class={iconClass}></i>
                      </button>
    </> );
}

export default PrimaryButton;