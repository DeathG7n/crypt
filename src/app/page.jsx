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
      <div className={styles.stats}>
        <div>200+ Countries Covered</div>
        <div>30 Million Global Investors</div>
        <div>700+ Secured Wallet</div>
        <div>$1.36 Billion Secured Volume</div>
      </div>
    </section>
  )
}

export function Secure(){
  return (
    <section className={styles.secure}>
      <div>
        <div>Find & Secure crypto Now!</div>
        <div>Our comprehensive cybersecurity platform, driven by artificial intelligence, not only safeguards your organization.</div>
      </div>
      <div>
        <div>
          <h3>Connect to Dapps</h3>
          <p>Connect decentralized apps to mobile wallets and enable DAPP.</p>
        </div>
        <div>
          <h3>Missing Funds</h3>
          <p>Lost access to funds or missing funds? Click here.</p>
        </div>
        <div>
          <h3>High Fee</h3>
          <p>Transaction fees too high? Click here.</p>
        </div>
        <div>
          <h3>24/7 Support</h3>
          <p>Count on us for round-the-clock support, help whenever you need it.</p>
        </div>
        <div>
          <h3>Trusted & Secure</h3>
          <p>Your assets2. On your terms. At your fingertips.</p>
        </div>
      </div>
    </section>
  )
}

export function Explore(){
  return (
    <section className={styles.explore}>
      <div>
        <div>
          <div>Explore Web3</div>
          <div>It is the easiest, safest, and fastest way to secure & backup crypto asset.</div>
        </div>
        <button>View More</button>
      </div>
      <div>
        <div>
          <div></div>
          <h2>Spot Trading</h2>
          <p>Trade crypto with our comprehensive set of powerful tools to maximize your profits.</p>
          <span>View Details</span>
        </div>
        <div>
          <div></div>
          <h2>Margin Trading</h2>
          <p>Borrow, trade, and repay. Leverage your assets2 with margin trading.</p>
          <span>View Details</span>
        </div>
        <div>
          <div></div>
          <h2>Crypto Derivatives</h2>
          <p>We are the best crypto exchange for trading crypto futures.</p>
          <span>View Details</span>
        </div>
        <div>
          <div></div>
          <h2>QFSEarn</h2>
          <p>Invest and earn steady income with the help of a professional asset manager.</p>
          <span>View Details</span>
        </div>
        <div>
          <div></div>
          <h2>Buy Crypto</h2>
          <p>Purchase crypto quickly and easily on our popular and industry-leading platform.</p>
          <span>View Details</span>
        </div>
        <div>
          <div></div>
          <h2>Margin Trading</h2>
          <p>Borrow, trade, and repay. Leverage your assets2 with margin trading.</p>
          <span>View Details</span>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export function Start(){
  return (
    <section className={styles.start}>
      <h1>How To Get Started</h1>
      <div>
        <div>
          <div></div>
          <h2>Connect Wallet</h2>
          <p>Click connect wallet button.</p>
          <button>Connect Wallet</button>
        </div>
        <div>
          <div></div>
          <h2>Select Wallet</h2>
          <p>Choose your prefered wallet to backup and click on connect.</p>
        </div>
        <div>
          <div></div>
          <h2>Backup your wallet</h2>
          <p>Your wallet backup may also be referred to as a: backup, recovery seed, seed, seed phrase, BIP-39 seed phrase, mnemonic, recovery phrase, (plus various combinations of these words)</p>
        </div>
        <div>
          <div></div>
          <h2>Start your journey</h2>
          <p>Having a safe wallet backup means you can recover your Bitcoin in case of hardware failure or the loss of your device</p>
        </div>
      </div>
    </section>
  )
}

export function Recovery(){
  return (
    <section className={styles.recovery}>
      
      <div>
        <div>
          <Image/>
        </div>
        <div>
          <h1>How does wallet backup and recovery work?</h1>
          <div>
            <div>
              <h2>Secure</h2>
              <p>First, we need to talk a little bit about how crypto wallets work. Crypto wallets work by holding cryptographic keys that are used to prove you have control over cryptoassets2 on a blockchain. Whenever you wish to do something with your cryptoassets2, you instruct the blockchain and use your private cryptographic key as a sort of digital signature to approve your desired action.</p>
            </div>
            <button>Connect Wallet</button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export function Faq(){
  return (
    <section className={styles.faq}>
      <div>
        <h3>FAQ</h3>
        <h1>Your questions answered.</h1>
        <p>Let's do our best to answer your most frequently asked questions.</p>
        <div>
          <div>
            <Image/>
            <div>
              <h2>Still have questions?</h2>
              <p>Can't find the answer you're looking for?Please chat to our friendly team!</p>
            </div>
          </div>
          <button>Connect Wallet</button>
        </div>
      </div>
      <div>
        <div>
          <p>How can I secure my wallet?</p>
          <span>Set a unique passcode for your wallet.
          Also, make sure the numbers are random. Birthdays, anniversaries, house addresses, and the last digits of your phone number are all popular combinations and are crackable codes to a resourceful criminal.</span>
        </div>
      </div>
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

