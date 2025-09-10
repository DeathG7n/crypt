



"use client"
import styles from "./page.module.css"
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Page() {
  const router = useRouter()
  return (
    <div className={styles.page}>
      <Image
        src="/Success Page/success.jpg"
        alt="Coin Logo"
        width={50}
        height={50}
        priority
      />
      <h1>Backup Successful</h1>
      <p>UID: wu233382872262</p>
      <p>Your wallet data has been successfully backed up! We’ve securely stored your information, ensuring your assets remain protected. Feel free to continue managing your wallet or explore additional features.</p>
      <button onClick={() => router.push("/")}>Return To Home Page</button>
    </div>
  )
}