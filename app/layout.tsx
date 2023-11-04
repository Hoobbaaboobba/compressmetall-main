import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import OurPartners from "../components/Home/OurPartners/OurPartners";
import "./globals.css";
import ViewCatalog from "../components/ViewCatalog";
import CatalogMenu from "../components/Home/MainSection/CatalogMenu";
import OurMetal from "../components/Home/OurMetal/OurMetal";
import OurServices from "../components/Home/OurServices/OurServices";
import BuyMetal from "../components/Home/BuyMetal/BuyMetal";
import OurContacts from "../components/Home/OurContacts/OurContacts";
import Reviews from "../components/Home/Reviews/Reviews";
import GoToTop from "../components/Catalog/GoToTop";
import Script from "next/script";
import { Suspense } from "react";
// import Loading from "./loading";
import LocationModal from "@/components/LocationModal";
import Request from "../components/Requests/Request";
import Call from "@/components/Requests/Call";
import Price from "@/components/Requests/Price";
import ViewCatalogButton from "@/components/ViewCatalogButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5DESE4JXJL"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5DESE4JXJL');
        `}
      </Script>
      <Script type="text/javascript">
        {`   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(94803385, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true
          });`}
      </Script>
      <body>
        <LocationModal />
        <Request />
        <Call />
        <Price />
        <ViewCatalogButton />
        <ViewCatalog />
        <Suspense fallback={<h1>Loading...</h1>}>
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
