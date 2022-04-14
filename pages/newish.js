import React from "react";
import head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/api_url";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsItem from "@/components/NewsItem";
import styles from "@/styles/temp/NewsItem.module.css";



export async function getServerSideProps() {
  const res = await fetch(`${API_URL}`);
  const news = await res.json();
  return {
    props: {
      Nba: news,
    },
  };
}

export default function newish({ Nba }) {
  return (
    <Layout>
      <Header />

      <div className={styles.news}>
      <div className={styles.img}>
      <div className={styles.info}>
      <NewsItem/>
      <span className=" text-base font-bold flex justify-center" > {Nba[0].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[0].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[0].Content}</p>
      <span className=" text-base font-bold flex justify-center"> {Nba[1].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[1].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[1].Content}</p>
      <span className=" text-base font-bold flex justify-center"> {Nba[2].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[2].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[2].Content}</p>
      <span className=" text-base font-bold flex justify-center"> {Nba[3].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[3].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[3].Content}</p>
      <span className=" text-base font-bold flex justify-center"> {Nba[4].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[4].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[4].Content}</p>
      <span className=" text-base font-bold flex justify-center"> {Nba[5].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[5].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[5].Content}</p>
      <span className=" text-base font-bold flex justify-center"> {Nba[6].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[6].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[6].Content}</p>
      <span className=" text-base font-bold flex justify-center"> {Nba[7].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[7].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[7].Content}</p>
      <span className=" text-base font-bold flex justify-center" > {Nba[8].TimeAgo}</span>
       <h1 className="font-extrabold uppercase border px-4 py-1.5 rounded hover:bg-opacity-10  text-[orange] text-xl">{Nba[8].Title}</h1>
       <p className="bg-[#ead4aa] rounded-md">{Nba[8].Content}</p>
      
      </div>
      <div className={styles.link}>
      </div>

      </div>
    </div>
      <Footer />
    </Layout>
  );
}
