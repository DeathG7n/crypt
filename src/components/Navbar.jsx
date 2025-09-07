"use-client"

import Link from "next/link"
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"


function Navbar() {
  const [path, setPath] = useState("")
  const [button, setButton] = useState("")
  const pathname = usePathname()
  useEffect(()=>{
      if(pathname == "/find-patient"){
        setPath("/create-patient")
        setButton("Create Patient")
      } else{
          setPath("/find-patient")
          setButton("Find Patient")
      }
  }, [pathname])
  
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

export default Navbar