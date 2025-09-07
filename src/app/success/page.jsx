



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
      <Image/>
      <h1>Backup Successful</h1>
      <p>UID: wu233382872262</p>
      <p>Your wallet data has been successfully backed up! We’ve securely stored your information, ensuring your assets remain protected. Feel free to continue managing your wallet or explore additional features.</p>
      <button>Return To Home Page</button>
    </div>
  )
}