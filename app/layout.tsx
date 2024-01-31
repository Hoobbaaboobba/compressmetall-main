import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import "./globals.css";
import ViewCatalog from "../components/ViewCatalog";
import OurMetal from "../components/Home/OurMetal/OurMetal";
import OurServices from "../components/Home/OurServices/OurServices";
import BuyMetal from "../components/Home/BuyMetal/BuyMetal";
import OurContacts from "../components/Home/OurContacts/OurContacts";
import Reviews from "../components/Home/Reviews/Reviews";
import GoToTop from "../components/Catalog/GoToTop";
import Script from "next/script";
import { Suspense } from "react";
import LocationModal from "@/components/LocationModal";
import Request from "../components/Requests/Request";
import Call from "@/components/Requests/Call";
import Price from "@/components/Requests/Price";
import ViewCatalogButton from "@/components/ViewCatalogButton";
import { Analytics } from "@vercel/analytics/react";
import LoadingScreen from "@/components/LoadingScreen";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5QZ5BQHJ');
        `}
      </Script>
      <Script type="text/javascript">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(95780946, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
        })`}
      </Script>
      {/* <!-- /Yandex.Metrika counter --> */}
      <Script src="//code.jivo.ru/widget/jknCDVfDeq" async></Script>
      {/* <Script type="text/javascript">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(95780946, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
          }); 
        `}
      </Script> */}
      <meta name="yandex-verification" content="d99d66f200d7f09a" />
      <body>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5QZ5BQHJ"
          height="0"
          width="0"
          className="hidden"
        ></iframe>
        <LoadingScreen />
        <Analytics />
        <div>
          <img
            src="https://mc.yandex.ru/watch/95780946"
            className="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mc.yandex.ru/watch/94803385"
            className="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
        <LocationModal />
        <Request />
        <Call />
        <Price />
        <ViewCatalogButton />
        {/* <ViewCatalog /> */}
        <Suspense
          fallback={
            <div className="w-[300px] h-[100px[ rounded-md bg-light-gray"></div>
          }
        >
          <Header />
        </Suspense>
        <div className="flex w-full justify-center mt-[80px] xl:mt-[130px]">
          <div className="max-w-[1300px] w-full flex flex-col justify-center xl:justify-between gap-4">
            {children}
            <hr className="w-full border-transparent my-8" />
            <OurMetal />
            <hr className="w-full border-transparent my-8" />
            <OurServices />
            <hr className="w-full border-transparent my-8" />
            <BuyMetal />
            <hr className="w-full border-transparent my-8" />
            <Reviews />
            <hr className="w-full border-transparent my-8" />
            <OurContacts />
            <GoToTop />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
