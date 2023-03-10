import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import data from '@/components/Inventory/inventory'




export default function Home() {

  const [cloth, setCloth] = useState(data.clothing);
  const [selection, setSelection] = useState([]);
  
  return (
    <>
      <Head>
        <title>Geared Up Online Store BCITSA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div><img src={'logo/logo/logo.png'} /></div>

        <div className={styles.filters}>
          <h2>Filter By:</h2>
          <h3 onClick={() => setSelection(['Male', ''])}>Male</h2>
          <div className={styles.list}>
            <li onClick={() => setSelection(['Male', 'Jackets'])}>Jackets</li>
            <li onClick={() => setSelection(['Male', 'Headgear'])}>Headgear</li>
            <li onClick={() => setSelection(['Male', 'Hoodies'])}>Hoodies</li>
          </div>
          <h3 onClick={() => setSelection(['Female', ''])}>Female</h3>
          <div className={styles.list}>
            <li onClick={() => setSelection(['Female', 'Jackets'])}>Jackets</li>
            <li onClick={() => setSelection(['Female', 'Headgear'])}>Headgear</li>
            <li onClick={() => setSelection(['Female', 'Hoodies'])}>Hoodies</li>
          </div>
          <button onClick={() => setSelection(['Unisex', ''])}>Unisex</button>
          <div className={styles.list}>
            <li onClick={() => setSelection(['Unisex', 'Jackets'])}>Jackets</li>
            <li onClick={() => setSelection(['Unisex', 'Headgear'])}>Headgear</li>
            <li onClick={() => setSelection(['Unisex', 'Hoodies'])}>Hoodies</li>
          </div>
        </div>
        <div>
          {
            cloth && cloth.map((c, index) => {

              if (selection[0] == c.sex && ((selection[1] == c.category) || (selection[1] == ''))) {
                return (
                  <div key={index}>
                    <Image src={c.image} width={200} height={200} />
                    <p>{c.title}</p>
                    <p>{c.cost}</p>
                    {
                    c.hex && c.hex.map((col, i) => {
                     return( 
                      <span className={styles.dot} background-color={col}/>
                     )
                      
                    })
                  }
                    
                  </div>)
                 
              }


            })
          }
          
        </div>

      </main>
    </>
  )
}
