import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Base from "@/components/Base";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsItem from "@/components/NewsItem";
import {API_URL} from '@/config/api_url'

// import { API_URL } from "@/config/index";

export default function Home({news}) {
  const { session } = useSession();
  return (
    <Layout>
      <div>
        <Head>
          <title>DUBB</title>
          <meta name="description" content=" Sports Social App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {!session ? <Hero /> : <main>APP</main>}
      </div>
     
      <Footer />
    </Layout>
  );
}

// export async function getServerSideProps() {
//   console.log('fixed')
//   const res =await fetch(`${API_URL}` )
//   const news = await res.json();
//   console.log(news)
//   return{
//     props:{news}
    
//   }
// }
