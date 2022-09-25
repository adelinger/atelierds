import Footer from 'components/Footers/Footer';
import Navbar from 'components/Navbars/IndexNavbar';
import React, { useRef, useState } from 'react';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { isMobile } from 'react-device-detect';
import ImagePreview from 'components/Modals/ImagePreview';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function interior() {
    const { t } = useTranslation(['leatherPage']);
    const [showModal, setShowModal] = useState();
    const { imgSrc, setImgSrc } = useState();
    const scrollRef = useRef(null)
    const [leatherName, setLeatherName] = useState('Cuire naturelle');
    const [leatherDesc, setLeatherDesc] = useState(t('leatherPage:cuir_naturelle_text'));
    const [leatherYear, setLeatherYear] = useState(t('leatherPage:cuir_naturelle_year'));

    const leatherNames = ['Cuire naturelle', 'Cuir Tabac', 'Cuire Noire', 'Naturelle Foncée'];
    const leatherYears = [t('cuir_naturelle_year'),t('cuir_tabac_year'), 
    t('cuir_noire_year'), t('naturelle_foncee_year')]
    const leatherDescriptions = [t('cuir_naturelle_text'),t('cuir_tabac_text'), 
    t('cuir_noire_text'), t('naturelle_foncee_text')]

    const toggleModal = () => {
        if (!isMobile) {
            setShowModal(!showModal);
        }
    }

    const onChangeThumbnail = (e) => {
        setLeatherName(leatherNames[e])
        setLeatherDesc(leatherDescriptions[e])
        setLeatherYear(leatherYears[e])
        
    }


    const executeScroll = () => scrollRef.current.scrollIntoView({ behavior: 'smooth' });


    return (
        <>
            <Navbar transparent></Navbar>
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('/img/interior/sewing2.webp')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 mt-5 md:mt-20 md:px-4 ml-auto mr-auto text-center">
                                <div>
                                    <h1 className="text-white font-semibold text-5xl">
                                        {leatherName}
                                    </h1>
                                    <small className='text-white'>{leatherYear}</small>
                                    <p className="mt-4 text-lg text-blueGray-200 px-1">
                                        
                                        {leatherDesc}
                                    </p>
                                </div>
                                <div className='pt-20 px-3'>
                                    <Carousel interval={5000} showStatus={false} onChange={onChangeThumbnail} autoPlay={true} infiniteLoop={true}>
                                        <div className='h-48'>
                                            <img src="/img/interior/cuire_naturelle.webp" />

                                        </div>
                                        <div className='h-48'>
                                            <img src="/img/interior/cuir_tabac.webp" />

                                        </div>
                                        <div className='h-48'>
                                            <img src="/img/interior/cuire_noire.webp" />

                                        </div>
                                        <div className='h-48'>
                                            <img src="/img/interior/naturelle_foncee.webp" />

                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 -mb-10 bg-blueGray-200 -mt-24 px-3">
                    <div className="container mx-auto px-4 w-2/4">

                    </div>
                </section>

                <section id='third-section' ref={scrollRef} className="pb-5 relative block bg-blueGray-200">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-23 lg:pb-32">
                        <div className="container mx-auto ">

                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto md:text-center mb-5">
                                <div>
                                    <h1 className="text-white font-semibold text-3xl invisible">
                                        {t('gallery_title')}
                                    </h1>
                                </div>
                            </div>

                            <div className="">
                                <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">

                                </div>
                            </div>
                        </div>
                        {!isMobile &&
                            <ImagePreview
                                showModal={showModal}
                                setShowModal={setShowModal}
                                src={imgSrc}
                                toggleModal={toggleModal}
                            ></ImagePreview>
                        }
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>

    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'index', 'footer', 'leatherPage']),
    },
})