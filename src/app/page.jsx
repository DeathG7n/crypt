"use client"
import styles from "./page.module.css"
import logo from "../../public/logo-hopkins.jpg"
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Hero/>
      <Secure/>
      <Explore/>
      <Start/>
      {/* <Recovery/>
      <Faq/>
      <Trust/>
      <Newsletter/>
      <Footer/> */}
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
        <div className={styles.circle}></div>
        <h1>Gateway to Encrypt, back up, and <span>secure your assets</span></h1>
        <p>The easiest, safest, and fastest way to secure & back up crypto asset.</p>
        <div className={styles.btns}>
          <button className={styles.connect}>Connect Wallet</button>
          <button className={styles.explore}>Explore Now</button>
        </div>
        <Image
          src="/Home Page/bitcoin-2.png"
          alt="Coin Logo"
          className={styles.bitcoin}
          width={100}
          height={24}
          priority
        />
      </div>
      <div className={styles.imgBox}>
        <div className={styles.circle1}></div>
        <Image
          src="/Home Page/Web3.png"
          alt="Web3 Logo"
          className={styles.web3}
          width={500}
          height={26}
          priority
        />
        <Image
          src="/Home Page/globe.png"
          alt="Globe Logo"
          className={styles.globe}
          width={100}
          height={24}
          priority
        />
        <Image
          src="/Home Page/bitcoin-2.png"
          alt="Coin Logo"
          className={styles.tether}
          width={90}
          height={24}
          priority
        />
      </div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.stats}>
        <div>
          <h1>200+</h1>
          <p>Countries Covered</p> 
        </div>
        <div>
          <h1>30 Million</h1>
          <p>Global Investors</p> 
        </div>
        <div>
          <h1>700+</h1>
          <p>Secured Wallet</p> 
        </div>
        <div className={styles.country}>
          <h1>$1.36 Billion+</h1>
          <p>Secured Volume</p> 
        </div>
      </div>
    </section>
  )
}

export function Secure(){
  const offers = [
    {
      head: "Connect to Dapps",
      text: "Connect decentralized apps to mobile wallets and enable DAPP.",
      img: "/Home Page/globe-2.png"
    },
    {
      head: "Missing Funds",
      text: "Lost access to funds or missing funds? Click here.",
      img: "/Home Page/trade.png"
    },
    {
      head: "High Fee",
      text: "Transaction fees too high? Click here.",
      img: "/Home Page/spot.png"
    },
    {
      head: "24/7 Support",
      text: "Count on us for round-the-clock support, help whenever you need it.",
      img: "/Home Page/support.png"
    },
    {
      head: "Trusted & Secure",
      text: "Your assets2. On your terms. At your fingertips.",
      img: "/Home Page/trusted.png",
      class: true
    },
  ]
  return (
    <section className={styles.secure}>
      <div className={styles.find}>
        <h1 className={styles.head}>Find & Secure crypto Now!</h1>
        <p>Our comprehensive cybersecurity platform, driven by artificial intelligence, not only safeguards your organization.</p>
      </div>
      <div className={styles.offers}>
        {offers.map((offer,i)=>{
            return(
              <div key={i}>
                <h1 className={styles.head2}>{offer.head}</h1>
                <p>{offer.text}</p>
                <Image
                  src={offer.img}
                  alt="Coin Logo"
                  className={offer.class ? styles.logo : ""}
                  width={300}
                  height={250}
                  priority
                />
              </div>
            )
        })}
      </div>
    </section>
  )
}

export function Explore(){
  return (
    <section className={styles.explore2}>
      <div className={styles.web}>
        <div className={styles.webbox}>
          <h1 className={styles.head}>Explore Web3</h1>
          <p>It is the easiest, safest, and fastest way to secure & backup crypto asset.</p>
        </div>
        <button>View More</button>
      </div>
      <div className={styles.scroller}>
        <div>
          <span>
            <Image
              src="/icons/spot-trading.png"
              alt="Coin Logo"
              className={styles.icon}
              width={50}
              height={50}
              priority
            />
          </span>
          <h2 className={styles.head3}>Spot Trading</h2>
          <p>Trade crypto with our</p>
          <p>comprehensive set of powerful tools to maximize your profits.</p>
          <span>View Details</span>
        </div>
        <div>
          <span>
            <Image
              src="/icons/margin.png"
              alt="Coin Logo"
              className={styles.icon}
              width={50}
              height={50}
              priority
            />
          </span>
          <h2>Margin Trading</h2>
          <p>Borrow, trade, and repay.</p>
          <p>Leverage your assets2 with margin trading.</p>
          <span>View Details</span>
        </div>
        <div>
          <span>
            <Image
              src="/icons/derivative.png"
              alt="Coin Logo"
              className={styles.icon}
              width={50}
              height={50}
              priority
            />
          </span>
          <h2>Crypto Derivatives</h2>
          <p>We are the best crypto exchange</p>
          <p>for trading crypto futures.</p>
          <span>View Details</span>
        </div>
        <div>
          <span>
            <Image
              src="/icons/earn.png"
              alt="Coin Logo"
              className={styles.icon}
              width={50}
              height={50}
              priority
            />
          </span>
          <h2>QFSEarn</h2>
          <p>Invest and earn steady income with</p>
          <p>the help of a professional asset manager.</p>
          <span>View Details</span>
        </div>
        <div>
          <span>
            <Image
              src="/icons/buy.png"
              alt="Coin Logo"
              className={styles.icon}
              width={50}
              height={50}
              priority
            />
          </span>
          <h2>Buy Crypto</h2>
          <p>Purchase crypto quickly and easily</p>
          <p>on our popular and industry-leading platform.</p>
          <span>View Details</span>
        </div>
        <div>
          <span>
            <Image
              src="/icons/margin.png"
              alt="Coin Logo"
              className={styles.icon}
              width={50}
              height={50}
              priority
            />
          </span>
          <h2>Margin Trading</h2>
          <p>Borrow, trade, and repay.</p>
          <p>Leverage your assets2 with margin trading.</p>
          <span>View Details</span>
        </div>
      </div>
      <div className={styles.scroll}>
      </div>
    </section>
  )
}

export function Start(){
  return (
    <section className={styles.start}>
      <div className={styles.circle5}></div>
      <div className={styles.circle6}></div>
      <h1 className={styles.head}>How To Get Started</h1>
      <div className={styles.steps}>
        <div>
          <span>01</span>
          <h2>Connect Wallet</h2>
          <p>Click connect wallet button.</p>
          <button>Connect Wallet</button>
        </div>
        <div>
          <span>02</span>
          <h2>Select Wallet</h2>
          <p>Choose your prefered wallet to backup and click on connect.</p>
        </div>
        <div>
          <span>03</span>
          <h2>Backup your wallet</h2>
          <p>Your wallet backup may also be referred to as a: backup, recovery seed, seed, seed phrase, BIP-39 seed phrase, mnemonic, recovery phrase, (plus various combinations of these words)</p>
        </div>
        <div>
          <span>04</span>
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
          <h1 className={styles.head}>How does wallet backup and recovery work?</h1>
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
        <h1 className={styles.head}>Your questions answered.</h1>
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
          <p className={styles.questions}>How can I secure my wallet?</p>
          <span className={styles.answers}>
            <p>Set a unique passcode for your wallet.</p>
            <p>Also, make sure the numbers are random. Birthdays, anniversaries, house addresses, and the last digits of your phone number are all popular combinations and are crackable codes to a resourceful criminal.</p>
          </span>
        </div>
        <div>
          <p className={styles.questions}>How to backup a crypto wallet?</p>
          <span className={styles.answers}>
            <p>1. Export Private Keys/Seed Phrase: Go to your wallet's settings and select the “backup wallet” or “export keys” option.</p>
            <p>2. Secure Your Backup: Store backups in multiple secure locations like USB drives, paper copies in fireproof safes, and safety deposit boxes.</p>
          </span>
        </div>
        <div>
          <p className={styles.questions}>How to keep bitcoin wallet safe?</p>
          <span className={styles.answers}>
            <p>Securing Your Bitcoin: Choosing a Reputable Exchange.</p>
          </span>
        </div>
        <div>
          <p className={styles.questions}>How do I trust a safe wallet?</p>
          <span className={styles.answers}>
            <p>Back up your wallet.</p>
            <p>Be cautious of phishing scams.</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export function Trust(){
  return (
    <section className={styles.trust}>
      <h1 className={styles.head}>Trusted By</h1>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export function Newsletter(){
  return (
    <section className={styles.news}>
      <div>
        <div>
          <h1>Quick Links</h1>
        </div>
        <div>
          <ul>
            <li>IGO</li>
            <li>LAUNCHPAD</li>
            <li>STAKING</li>
            <li>FARMING</li>
            <li>CRYPTO</li>
          </ul>
          <ul>
            <li>DEFI</li>
            <li>WEB3</li>
            <li>IEO</li>
            <li>IDO</li>
            <li>TOKEN</li>
            <li>GAMING</li>
            <li>NFT</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Newsletter</h1>
        <p>Welcome to Cryptnetworkweb3 your gateway to the world of Web3 trading! Our user-friendly platform</p>
        <span>
          <input type="email" />
          <button>?</button>
        </span>
      </div>
    </section>
  )
}

export function Footer(){
  return (
    <section className={styles.footer}>
      <div>Copyright @ 2025 Cryptnetworkweb3</div>
    </section>
  )
}

export function Popup(){
  return (
    <section className={styles.popup}>
      <div>
        <div>
          <h1>Connect Wallet</h1>
          <p>Gateway to Web3</p>
        </div>
        <div>X</div>
      </div>
      <div>Backup Wallet</div>
      <div>
        <Image/>
        <h1>Automatic/Manual Backup</h1>
        <button>Continue</button>
      </div>
    </section>
  )
}
