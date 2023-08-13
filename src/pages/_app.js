import Layout from '@/layout/Layout'
import '@/styles/globals.css'

import Router from "next/router";
import { useState } from 'react';
import Loading from './loading';



export default function App({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {

    setloading(true);
   
   });
   
    Router.events.on("routeChangeError", (url) => {
   
    setloading(false);
   
   });
   
    Router.events.on("routeChangeComplete", (url) => {
   
    setloading(false);
   
   });
  
  return (
    <>

    {
      loading == false
      ? <> <Layout> <Component {...pageProps} /> </Layout> </>
      : <> <Layout> <Loading/> </Layout> </>
    }
    </>

  )
}



{/*
 <Layout>
        <Component {...pageProps} />
      </Layout>
     */}