import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from "@/components/ui/toaster";
import AuthInit from "@/services/AuthInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Google Console & analytics */}
        <meta name="google-site-verification" content="2RSxC6qT7omkQJ26kF882gXePFqzOYSwXwy9LZP2LEk" />
        {/* <!-- Google Tag Manager --> */}
        <GoogleAnalytics gaId="GTM-WKBD6GQQ" />
        {/* <script>
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WKBD6GQQ');
        </script> */}
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body className={`antialiased`}>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKBD6GQQ"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <AuthInit />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
