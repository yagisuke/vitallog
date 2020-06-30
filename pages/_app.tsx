import { AppProps } from 'next/app'
import { logWebVitals } from "../lib/ga"
import '../styles/index.css'

export function reportWebVitals(metric: any) {
  console.log(metric)
  logWebVitals(metric)
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
