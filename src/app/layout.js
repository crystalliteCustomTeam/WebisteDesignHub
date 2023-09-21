// Import Fonts
import { megatFont, primary } from "./configs/fonts";
import Script from 'next/script';

// Import Css
import "./global.css";

// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "Top Web Design Company - Web Design Hub",
    description: "Looking for a top rated web design company? Hire top web design company for stunning design solutions",
    // Google Varification
    verification: {
        google: 'ziIYRBahP4WcKcps6RWRDJvZ9A00pSoI39ByXDN14us',
        other: {
            "facebook-domain-verification": ['rfth5fqyv2is1cegfmcloebw46z7nz'],
        },
    },
    // Canonical
    alternates: {
        canonical: 'https://www.webdesignhub.co',
    },
    // OG Metas
    openGraph: {
        title: 'Top Web Design Company - Web Design Hub',
        description: 'Looking for a top rated web design company? Hire top web design company for stunning design solutions',
        url: 'https://www.webdesignhub.co',
        siteName: 'Web Design Hub',
        locale: 'en_US',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    const GTM_ID = 'GTM-5G927FVV';
    return (
        <html lang="en">
            <Script id="google-tag-manager" strategy="lazyOnload">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}');
                `}
            </Script>
            <Script id="ze-snippet"
                src="https://static.zdassets.com/ekr/snippet.js?key=f8df8f7a-97b8-4ca4-bbeb-c5d6ea51968e"
                strategy="lazyOnload">
            </Script>
            <Script id="facebook-manager" strategy="lazyOnload">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '3301562960147657');
                    fbq('track', 'PageView');
                `}
            </Script>
            <Script id="google-tag-manager-two"
                src="https://www.googletagmanager.com/gtag/js?id=AW-11337170041"
                strategy="lazyOnload">
            </Script>
            <Script id="google-tag-manager-three">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11337170041');
                `}
            </Script>
            <body className={`${primary.className} ${megatFont.variable}`}>
                <noscript>
                    <iframe src={`https://www.googletagmanager.com/ns.html?id='${GTM_ID}'`} className="hidden"></iframe>
                </noscript>
                {children}
            </body>
        </html >
    );
}