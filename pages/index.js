import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🔮 Previsão</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Previsao.club<a href="https://twiiter.com/previsaoclub"> 🔮</a>
        </h1>

        <p className={styles.description}>
          Forecast Market
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/codingsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @codingsh
          
        </a>
      </footer>
    </div>
  )
}
