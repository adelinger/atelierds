import Footer from 'components/Footers/Footer';
import Navbar from 'components/Navbars/IndexNavbar';
import React from 'react';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function interior() {
    const { t } = useTranslation(['index', 'footer', 'common', 'leatherPage']);
    return (
        <>
            <Navbar transparent></Navbar>
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('/img/light-grey-19.webp')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto collapse">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="mt-10 text-center">
                                    <h1 className="text-white font-semibold text-5xl">
                                    {t('leatherPage:leather')}
                                    </h1>

                                </div>
                            </div>
                            <div className="container mx-auto ">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 place-items-center">
                                    <div className="mt-5 mb-5" >
                                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <a href="#">
                                                <img class="rounded-t-lg" src="/img/interior/cuire_naturelle.jpg" alt="Cuir naturelle leather" style={{ minHeight: 250 }}></img>
                                            </a>
                                            <div class="p-5">
                                                <div className='text-center'>
                                                    <a href="#">
                                                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('leatherPage:cuir_naturelle')}</h5><small className='mb-2'>{t('leatherPage:cuir_naturelle_year')}</small>
                                                    </a>

                                                    <p class="collapse-title mb-3 font-normal text-gray-700 dark:text-gray-400">{t('leatherPage:cuir_naturelle_text')}</p>
                                                    <a href="#" class="btn-primary-indigo-slim">
                                                    {t('leatherPage:read_more')}
                                                        <svg class="ml-2 mt-1 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    < div className="mt-5 mb-5" >
                                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <a href="#">
                                                <img class="rounded-t-lg" src="/img/interior/cuire_noire.jpg" alt="cuir noire leather" style={{ minHeight: 250, width: 700 }} ></img>
                                            </a>
                                            <div class="p-5">
                                                <div className='text-center'>
                                                    <a href="#">
                                                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {t('leatherPage:cuir_noire')}</h5><small className='mb-2'>{t('leatherPage:cuir_noire_year')}</small>
                                                    </a>

                                                    <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">{t('leatherPage:cuir_noire_text')}</p>
                                                    <a href="#" class="btn-primary-indigo-slim">
                                                    {t('leatherPage:read_more')}
                                                        <svg class="ml-2 mt-1 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    < div className="mt-5 mb-5" >
                                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <a href="#">
                                                <img class="rounded-t-lg" src="/img/interior/cuir_tabac.jpg" alt="Cuir tabac leather" style={{ minHeight: 250, width: 700 }} ></img>
                                            </a>
                                            <div class="p-5">
                                                <div className='text-center'>
                                                    <a href="#">
                                                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('leatherPage:cuir_tabac')}</h5> <small className='mb-2'>{t('leatherPage:cuir_tabac_year')}</small>
                                                    </a>

                                                    <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">{t('leatherPage:cuir_tabac_text')}</p>
                                                    <a href="#" class="btn-primary-indigo-slim">
                                                    {t('leatherPage:read_more')}
                                                        <svg class="ml-2 mt-1 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    < div className="mt-5 mb-5" >
                                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <a href="#">
                                                <img class="rounded-t-lg" src="/img/interior/naturelle_foncee.jpg" alt="Naturelle foncée leather" style={{ minHeight: 250, width: 700 }} ></img>
                                            </a>
                                            <div class="p-5">
                                                <div className='text-center'>
                                                    <a href="#">
                                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('leatherPage:naturelle_foncée')}</h5>
                                                    </a>

                                                    <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">{t('leatherPage:naturelle_foncée_text')}</p>
                                                    <a href="#" class="btn-primary-indigo-slim">
                                                    {t('leatherPage:read_more')}
                                                        <svg class="ml-2 mt-1 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

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