import ReactGA from 'react-ga'

export const initGA = () => {
  console.log(`[initGA]`)
  ReactGA.initialize('UA-154562499-2')
}

export const logPageView = () => {
  console.log(`[logPageView] ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logWebVitals = (metric: any) => {
  console.log(`[logWebVitals] ${JSON.stringify(metric)}`)
  ReactGA.timing({
    category: 'Web Vitals',
    variable: metric.name,
    value: metric.name === 'CLS' ? metric.value * 1000 : metric.value,
    label: metric.label
  })
}
