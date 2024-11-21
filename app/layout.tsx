import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import "./globals.css";
import OurMetal from "../components/Home/OurMetal/OurMetal";
import OurServices from "../components/Home/OurServices/OurServices";
import BuyMetal from "../components/Home/BuyMetal/BuyMetal";
import OurContacts from "../components/Home/OurContacts/OurContacts";
import Reviews from "../components/Home/Reviews/Reviews";
import GoToTop from "../components/Catalog/GoToTop";
import Script from "next/script";
import { Suspense } from "react";
import ViewCatalog from "../components/ViewCatalog";
import LocationModal from "@/components/LocationModal";
import Request from "../components/Requests/Request";
import Call from "@/components/Requests/Call";
import Price from "@/components/Requests/Price";
import ViewCatalogButton from "@/components/ViewCatalogButton";
import { Analytics } from "@vercel/analytics/react";
import LoadingScreen from "@/components/LoadingScreen";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Snowfall from "@/components/Home/Header/Snowfall/Snowfall";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <Script id="calltouch">
                {`
        (function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","qyiqpa6w");
    `}
            </Script>
            <Script id="yandex-metrika">
                {`   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
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
          });`}
            </Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5QZ5BQHJ');
        `}
            </Script>
            <Script src="//code.jivo.ru/widget/jknCDVfDeq" async></Script>
            <meta name="yandex-verification" content="d99d66f200d7f09a" />
            <body className="bg-slate-50">
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-5QZ5BQHJ"
                    height="0"
                    width="0"
                    className="hidden"
                ></iframe>
                <LoadingScreen />
                <Analytics />
                <noscript>
                    <Image
                        src="https://mc.yandex.ru/watch/95780946"
                        className="position:absolute; left:-9999px;"
                        alt=""
                        width={0}
                        height={0}
                    />
                </noscript>
                <LocationModal />
                <Snowfall />
                <Suspense fallback={<p>Loading...</p>}>
                    <Request />
                    <Call />
                    <Price />
                </Suspense>
                <Toaster />
                <ViewCatalogButton />
                {/* <ViewCatalog /> */}
                <Suspense
                    fallback={
                        <div className="w-[300px] h-[100px] rounded-md bg-light-gray"></div>
                    }
                >
                    <Header />
                </Suspense>
                <div className="flex w-full justify-center mt-[80px] xl:mt-[150px]">
                    <div className="max-w-[1300px] w-full flex flex-col justify-center xl:justify-between gap-4">
                        {children}
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
