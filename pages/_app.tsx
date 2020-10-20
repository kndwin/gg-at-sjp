import '../styles/global.css'
import { AppProps } from 'next/app'
import 'github-markdown-css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
