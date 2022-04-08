import React from "react";
import Image from "next/image";
import styles from "@/styles/temp/NewsItem.module.css";
import dame from "../images/Dame.gif"

export default function NewsItem({ Nba }) {
  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image
          src={dame}
         layout='responsive'
         height='100%'
          alt={"news item"}
          className='bg-black '
        />
      </div>
    </div>
  );
}
