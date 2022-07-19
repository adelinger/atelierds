import Footer from 'components/Footers/Footer';
import Navbar from 'components/Navbars/IndexNavbar';
import React from 'react';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function chrome () {
    return (
        <>
        <Navbar transparent></Navbar>
        <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/light-grey-19.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
            </div>
        </main>
        <Footer></Footer>
        </>
    );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'index', 'footer']),
  },
})