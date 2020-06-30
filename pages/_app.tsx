import { AppProps } from 'next/app'
import { initGA, logWebVitals } from "../lib/ga"
import '../styles/index.css'

initGA()

export function reportWebVitals(metric: any) {
  logWebVitals(metric)
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
