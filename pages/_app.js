import '../styles/index.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YB6L40F0F3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YB6L40F0F3');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
