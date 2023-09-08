import Layout from '@/layout/Layout'
import '@/styles/globals.css'

import Router from "next/router";
import { useState } from 'react';
import Loading from './loading';
import ConfigProvider from '@/components/provider/ConfigProvider';
import LoginModalProvider from '@/components/provider/LoginModalProvider.okala';
import AuthProvider from '@/components/provider/AuthProvider';



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
      <ConfigProvider>
        <AuthProvider>


          <LoginModalProvider>

            {
              loading == false
                ? <> <Layout> <Component {...pageProps} /> </Layout> </>
                : <> <Layout> <Loading /> </Layout> </>
            }
          </LoginModalProvider>
          
    </AuthProvider >
      </ConfigProvider>

    </>

  )
}



{/*
 <Layout>
        <Component {...pageProps} />
      </Layout>
     */}