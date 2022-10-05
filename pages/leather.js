import Footer from 'components/Footers/Footer';
import Navbar from 'components/Navbars/IndexNavbar';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { isMobile } from 'react-device-detect';
import ImagePreview from 'components/Modals/ImagePreview';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";


export default function interior() {
    const { t } = useTranslation(['leatherPage']);
    const [showModal, setShowModal] = useState();
    const [imgSrc, setImgSrc] = useState();
    const scrollRef = useRef(null)
    const carouselRef = useRef(null);
    const [leatherName, setLeatherName] = useState('Cuire naturelle');
    const [leatherDesc, setLeatherDesc] = useState(t('leatherPage:cuir_naturelle_text'));
    const [leatherYear, setLeatherYear] = useState(t('leatherPage:cuir_naturelle_year'));
    const [useTimer, setUseTimer] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showlideButtons, setShowSlideButtons] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    const leatherNames = ['Cuire naturelle', 'Cuir Tabac', 'Cuire Noire', 'Naturelle Foncée', 'Prestige Beige'];
    const leatherYears = [t('cuir_naturelle_year'), t('cuir_tabac_year'),
    t('cuir_noire_year'), t('naturelle_foncee_year'), t('prestige_beige_year')]
    const leatherDescriptions = [t('cuir_naturelle_text'), t('cuir_tabac_text'),
    t('cuir_noire_text'), t('naturelle_foncee_text'), t('prestige_beige_text')]

    const cuire_naturelle_images = ['/img/interior/cuire_naturelle/cuire_naturelle1.webp', '/img/interior/cuire_naturelle/cuire_naturelle2.webp', '/img/interior/cuire_naturelle/cuire_naturelle3.webp', '/img/interior/cuire_naturelle/cuire_naturelle4.webp',
        '/img/interior/cuire_naturelle/cuire_naturelle5.webp', '/img/interior/cuire_naturelle/cuire_naturelle6.webp', '/img/interior/cuire_naturelle/cuire_naturelle7.webp',
        '/img/interior/cuire_naturelle/cuire_naturelle8.webp', '/img/interior/cuire_naturelle/cuire_naturelle9.webp', '/img/interior/cuire_naturelle/cuire_naturelle10.webp', '/img/interior/cuire_naturelle/cuire_naturelle11.webp', '/img/interior/cuire_naturelle/cuire_naturelle12.webp',
        '/img/interior/cuire_naturelle/cuire_naturelle13.webp', '/img/interior/cuire_naturelle/cuire_naturelle14.webp', '/img/interior/cuire_naturelle/cuire_naturelle15.webp'];

    const cuire_tabac_images = ['/img/interior/cuir_tabac/cuir_tabac1.webp', '/img/interior/cuir_tabac/cuir_tabac2.webp', '/img/interior/cuir_tabac/cuir_tabac3.webp',
        '/img/interior/cuir_tabac/cuir_tabac4.webp', '/img/interior/cuir_tabac/cuir_tabac5.webp', '/img/interior/cuir_tabac/cuir_tabac6.webp', '/img/interior/cuir_tabac/cuir_tabac7.webp', '/img/interior/cuir_tabac/cuir_tabac8.webp',
        '/img/interior/cuir_tabac/cuir_tabac9.webp', '/img/interior/cuir_tabac/cuir_tabac10.webp', '/img/interior/cuir_tabac/cuir_tabac11.webp', '/img/interior/cuir_tabac/cuir_tabac12.webp'];

    const cuire_noire_images = ['/img/interior/cuire_noire/cuire_noire1.webp', '/img/interior/cuire_noire/cuire_noire2.webp', '/img/interior/cuire_noire/cuire_noire3.webp', '/img/interior/cuire_noire/cuire_noire4.webp', '/img/interior/cuire_noire/cuire_noire5.webp',
        '/img/interior/cuire_noire/cuire_noire6.webp', '/img/interior/cuire_noire/cuire_noire7.webp', '/img/interior/cuire_noire/cuire_noire8.webp', '/img/interior/cuire_noire/cuire_noire9.webp', '/img/interior/cuire_noire/cuire_noire10.webp', '/img/interior/cuire_noire/cuire_noire11.webp',
        '/img/interior/cuire_noire/cuire_noire12.webp', '/img/interior/cuire_noire/cuire_noire14.webp', '/img/interior/cuire_noire/cuire_noire15.webp',
        '/img/interior/cuire_noire/cuire_noire16.webp', '/img/interior/cuire_noire/cuire_noire17.webp', '/img/interior/cuire_noire/cuire_noire18.webp', '/img/interior/cuire_noire/cuire_noire19.webp', '/img/interior/cuire_noire/cuire_noire20.webp', '/img/interior/cuire_noire/cuire_noire21.webp', '/img/interior/cuire_noire/cuire_noire22.webp'];

    const naturelle_fonce_images = ['/img/interior/naturelle_foncee/naturelle_foncee1.webp', '/img/interior/naturelle_foncee/naturelle_foncee2.webp', '/img/interior/naturelle_foncee/naturelle_foncee3.webp', '/img/interior/naturelle_foncee/naturelle_foncee4.webp', '/img/interior/naturelle_foncee/naturelle_foncee5.webp', '/img/interior/naturelle_foncee/naturelle_foncee6.webp',
        '/img/interior/naturelle_foncee/naturelle_foncee7.webp', '/img/interior/naturelle_foncee/naturelle_foncee8.webp', '/img/interior/naturelle_foncee/naturelle_foncee9.webp', '/img/interior/naturelle_foncee/naturelle_foncee10.webp', '/img/interior/naturelle_foncee/naturelle_foncee11.webp', '/img/interior/naturelle_foncee/naturelle_foncee12.webp', '/img/interior/naturelle_foncee/naturelle_foncee13.webp',
        '/img/interior/naturelle_foncee/naturelle_foncee14.webp', '/img/interior/naturelle_foncee/naturelle_foncee15.webp'];

    const prestige_beige_images = ['/img/interior/prestige_beige/prestige_beige1.webp', '/img/interior/prestige_beige/prestige_beige2.webp', '/img/interior/prestige_beige/prestige_beige3.webp', '/img/interior/prestige_beige/prestige_beige4.webp',
        '/img/interior/prestige_beige/prestige_beige5.webp', '/img/interior/prestige_beige/prestige_beige6.webp', '/img/interior/prestige_beige/prestige_beige7.webp',
        '/img/interior/prestige_beige/prestige_beige8.webp'];

    const leather_images = [cuire_naturelle_images, cuire_tabac_images, cuire_noire_images, naturelle_fonce_images, prestige_beige_images];

    const toggleModal = () => {
        if (!isMobile) {
            setShowModal(!showModal);
        }

        if (showModal) {
            setUseTimer(true);
        } else {
            setUseTimer(false);
        }
    }

    const onChangeThumbnail = (e) => {
        setLeatherName(leatherNames[e])
        setLeatherDesc(leatherDescriptions[e])
        setLeatherYear(leatherYears[e])
        setSelectedIndex(e);
        setUseTimer(true);
    }
  
    const executeScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        setUseTimer(false);
    }

    const onNextImage = () => {
        setSelectedImage(selectedIndex+1)
    }

    const onPreviousImage = () => {
        setSelectedImage(selectedIndex-1)
    }


    const handleScroll = () => {
        const { offsetTop } = scrollRef.current
        const position = window.pageYOffset;

        if (position >= (offsetTop - (offsetTop * 0.2))) {
            setUseTimer(false);
            setShowSlideButtons(true);
        } else {
            setUseTimer(true);
            setShowSlideButtons(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
                                <div className='h-48'>
                                    <h1 className="text-white font-semibold text-5xl">
                                        {leatherName}
                                    </h1>
                                    <small className='text-white'>{leatherYear}</small>
                                    <p className="mt-4 text-lg text-blueGray-200 px-1">
                                        {leatherDesc}
                                    </p>
                                </div>
                                <div ref={carouselRef} className='pt-20 px-3'>
                                    <Carousel interval={5000} showStatus={false} onChange={onChangeThumbnail} autoPlay={useTimer} infiniteLoop={true}
                                        onClickItem={executeScroll} className='md:cursor-pointer' selectedItem={selectedImage}>
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
                                        <div className='h-48'>
                                            <img src="/img/interior/prestige_beige.webp" />
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
                                    <h1 className="font-semibold text-3xl invisible">
                                        Gallery
                                    </h1>
                                </div>
                            </div>

                            <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-4">
                                {
                                    leather_images[selectedIndex].map((image, index) => {
                                        return <div class="w-full rounded md:hover:opacity-50 md:cursor-pointer">
                                            <Image src={image}
                                                width={500}
                                                height={400}
                                                alt="Citroen leather image"
                                                onClick={() => { toggleModal(), setImgSrc(image) }}>
                                            </Image>
                                        </div>
                                    })
                                }
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

                {
                    !isMobile && showlideButtons &&
                    <div>
                        <button onClick={onPreviousImage} className='float-left fixed ml-10' style={{ top: '50%', bottom: '50%' }}>
                            <div class="arrow_left -rotate-90"  >
                                <span style={{ animation: 'pulse 3s infinite !important' }} ></span>
                            </div>
                        </button>


                        <button onClick={onNextImage} className='float-right mr-10 fixed right-0' style={{ top: '50%', bottom: '50%' }}>
                            <div class="arrow_right rotate-90"  >
                                <span style={{ animation: 'pulse 3s infinite !important' }} ></span>
                            </div>
                        </button>
                    </div>
                }



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