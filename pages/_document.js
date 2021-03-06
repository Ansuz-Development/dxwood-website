import React from "react";
import { Html, Main, NextScript, Head } from "next/document";

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />

      <meta name="description" content="Phát triển mạng lưới CIO ngành gỗ, chế biến gỗ" />
      <meta name="author" content="AnsuzDev" />
      <meta name="copyright" content="AnsuzDev" />

      <meta name="application-name" content="CIO ngành gỗ" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CIO ngành gỗ" />

      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#0052CC" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#0052CC" />

      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/img/brand/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/brand/favicon-16x16.png" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#0052CC" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />

      <link
        href="https://fonts.googleapis.com/css?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="antialiased">
      <div id="page-transition" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
