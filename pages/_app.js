import '../styles/globals.css'
import Head from 'next/head';
import { useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {MapWrapper} from '../context/mapContext'
import SearchBar from '../components/SearchBar';
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset:-100,
    });
  }, [])
  return (
    <MapWrapper>
      <main className={roboto.className}>
       <Head>
        <title>Find Black Owned Restaurants</title>
        <meta name="description" content="Find Black Owned Restaurants" />
        <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1,viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
     <Component {...pageProps} />
     </main>
    </MapWrapper>
 )
}

export default MyApp
