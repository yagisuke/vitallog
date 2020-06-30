import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('UA-154562499-2')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logWebVitals = (metric: any) => {
  ReactGA.timing({
    category: 'Web Vitals',
    variable: name,
    value: name === 'CLS' ? metric.value * 1000 : metric.value,
  })
}
