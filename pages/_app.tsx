import '../styles/style.scss'
import 'nprogress/nprogress.css'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

const TopProgressBar = dynamic(() => {
  return import('../components/atoms/TopProgressBar')
}, { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
