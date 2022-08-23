import React, { useRef } from 'react';

function ImagePreview({showModal, src, toggleModal}) {
    const modalRef = useRef(null);
    const imageTagRef = useRef(null);


    return (
    <>
    {showModal &&
    <div id="modal" ref={modalRef}
    class="fixed top-0 left-0 w-screen h-screen bg-black/70 flex justify-center items-center">

    <a class="fixed z-90 top-6 right-8 text-white text-5xl font-bold" href="javascript:void(0)" onClick={toggleModal}
        >&times;</a>

    
    <img id="modal-img" ref={imageTagRef} src={src} class="max-w-[800px] max-h-[600px] object-cover px-20 py-20" />
    </div>
    }
        
    </> );
}

export default ImagePreview;