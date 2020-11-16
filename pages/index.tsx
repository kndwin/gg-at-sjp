import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/studies'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    week: string
    series: string
  }[]
}) {

  const hello = () => {
    return (
      <h1>hello</h1>
    )
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Studies</h2>
        <ul className={utilStyles.list}>
          {allPostsData
            .map(({ id, date, title, week }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/studies/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <div>
              <span className={utilStyles.tag}>{week}</span>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
