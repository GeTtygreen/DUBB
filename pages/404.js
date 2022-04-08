import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "@/styles/temp/404.module.css";
import Lukas from "../images/bball.gif";
import Image from "next/image";

function NotFound() {
  return (
    <Layout title="Page Not Found Partna.....TRY AGIAIN">
      <div className={styles.error}>
        <Image
          className="rounded-lg"
          src={Lukas}
          width="300px"
          height="300px"
          alt="Bouncing basketball"
        />
        <h1 className='flex align-center justify-center'> <FaExclamationTriangle/> 404</h1>
        <h4>Now you trying to get a some buckets that dont belong to you</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
export default NotFound;
