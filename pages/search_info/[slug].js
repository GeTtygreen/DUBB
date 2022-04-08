import {useRouter } from "next/router"

export default function Info() {
  const router =useRouter();
  console.log("router===>",router)
    return (
    
    <div>
        <h2>Game Information</h2>
        <h3>{router.query.slug}</h3>
    </div>
  )
}