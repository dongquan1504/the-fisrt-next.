import "../styles/global.css";
import Head from "next/head";
import React, { useEffect } from "react";
import { AppProps } from "next/app";

export const siteTitle = "Next.js Sample Website";

//tạo Component Function dạng typeScript
const App: React.FC<AppProps>=({ Component, pageProps })=>{
  //Component -> đại diện cho 1 Page match(khớp với) url(đường dẫn)
  useEffect(()=>{
      //update the document tittle using the browser API
      console.log("useEffect run(from _app)");
  },[])
  return (
      <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
              />
            <meta
              property="og:image"
              content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <Component {...pageProps} />
        </>
  )
}
export default App;

//below is the same code, but use Component Function

// export default function App({ Component, pageProps }) {
//   //Component -> đại diện cho 1 Page match url
//   return (
//   <>
//     <Head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta
//           name="description"
//           content="Learn how to build a personal website using Next.js"
//           />
//         <meta
//           property="og:image"
//           content={`https://og-image.vercel.app/${encodeURI(
//             siteTitle
//             )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//             />
//         <meta name="og:title" content={siteTitle} />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Head>
//       <Component {...pageProps} />;
//     </>
//   )
// }
