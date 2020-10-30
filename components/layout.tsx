import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

const name = `Growth Groups at St John's`
export const siteTitle = 'gg@sjp'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Growth groups at St John's Parramatta bible studies"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div className={styles.headerHome}>
            <Image 
              src='/images/icon.png'
              alt='Icon'
              width={150}
              height={150}
            />
            <h1 className={`${utilStyles.heading2xl} 
              ${styles.heading2xl}`}>
              Growth Groups
              <br/>
              at St John's
            </h1>
          </div>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
