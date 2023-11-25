"use client";

import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://aframe.io/releases/1.3.0/aframe.min.js"></Script>
      <Script type="text/javascript" src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js"></Script>
      <Script type="text/javascript" src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
