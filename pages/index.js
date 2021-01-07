import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peace Water</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://portal.etiny.xyz/blog/peacewater">Peace Water</a>
        </h1>

        <p className={styles.description}>
          Start your system evaluation by choosing a starting point below  {' '}
          <code className={styles.code}>existing system</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Drinking Water Supply &rarr;</h3>
            <p>Source, procurement, storage, treatment, and distribution choices.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Wastewater & Sewage &rarr;</h3>
            <p>Evaulate service options applicable to your context from Collection, transfer, treatment, and disposal.  </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Municipal Solid Waste &rarr;</h3>
            <p>Storage and transfer options with multiple disposal and recovery system options.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3> Assessment model &rarr;</h3>
            <p>
              Technology scores are calculated based on cost, energy, technical and institutional requirements.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
