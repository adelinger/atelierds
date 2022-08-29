import React, { useEffect, useRef } from 'react';

function ImagePreview({showModal, setShowModal, src, toggleModal}) {
    const imageTagRef = useRef(null);

    const ref = useRef();

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) 
                setShowModal(false);
        };

        const handleClick = (event) => {
            if(ref){
              if(event.target.id === 'modal' && event.target.id !== 'modal-img') {
                setShowModal(false);
            }
            }
        }

        window.addEventListener('keydown', handleEsc);
    
        document.body.addEventListener('click', handleClick);
    
        return () => {
            document.body.removeEventListener('click', handleClick);
            window.removeEventListener('keydown', handleEsc);
          };
        }, []);

    return (
    <>
    {showModal &&
    <div id="modal" ref={ref}
    class="fixed top-0 left-0 w-screen h-screen bg-black/70 flex justify-center items-center">

    <a class="fixed z-90 top-6 right-8 text-white text-5xl font-bold" href="javascript:void(0)" onClick={toggleModal}
        >&times;</a>

    
    <img id="modal-img" ref={imageTagRef} src={src} class="max-w-[1000px] max-h-[800px] object-cover px-20 py-20" />
    </div>
    }
        
    </> );
}

export default ImagePreview;