"use client"
import styles from "./page.module.css"
import logo from "../../public/logo-hopkins.jpg"
// import Navbar from "@/components/Navbar"
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Popup from "@/components/popup/Popup"

export default function Page() {
  const [popup, setPopup] = useState(false)
  const users = [
    {
      name: "Jared",
      password: "admin",
      admin: true
    },
    {
      name: "Staff",
      password: "staff",
      admin: false
    }
  ]
  const name = useRef()
  const password = useRef()
  const router = useRouter();
  const handleClick = () =>{
    const currentUser = users?.find(i => i?.name == name?.current?.value)
    if(currentUser && currentUser?.password == password?.current?.value){
      localStorage.setItem("admin", currentUser?.admin)
      router.push("/find-patient")
    } else{
      setPopup(true)
      setTimeout(()=> setPopup(false), 2000)
    }
  }
  return (
    <div className={styles.page}>
      <Navbar/>
      <Hero/>
      {popup && <Popup message={"Login Incorrect"} error={false}/>}
    </div>
  )
}

export function Navbar(){
  return (
    <nav className={styles.nav}>
        <h1><span className={styles.gold}>C</span><span className={styles.pink}>r</span>yptnetworkweb3</h1>
        <ul>
            <li>IGO</li>
            <li>LAUNCHPAD</li>
            <li>STAKING</li>
            <li>FARMING</li>
            <li>CRYPTO</li>
            <li>DEFI</li>
            <li>WEB3</li>
            <li>IDO</li>
            <li>TOKEN</li>
            <li>NFT</li>
        </ul>
        <button>Connect Wallet</button>
    </nav>
  )
}

export function Hero(){
  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <h1>Gateway to Encrypt, back up, and <span>secure your assets</span></h1>
        <p>The easiest, safest, and fastest way to secure & back up crypto asset.</p>
        <div className={styles.btns}>
          <button className={styles.connect}>Connect Wallet</button>
          <button className={styles.explore}>Explore Now</button>
        </div>
      </div>
      <div className={styles.imgBox}>
        <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
      </div>
      <div className={styles.stats}></div>
    </section>
  )
}

export function Secure(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

export function Explore(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

export function Start(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

export function Recovery(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

export function Faq(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

export function Trust(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

export function Newsletter(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

export function Footer(){
  return (
    <section className={styles.hero}>
    </section>
  )
}

