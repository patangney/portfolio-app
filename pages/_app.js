// _app.js
import '@styles/globals.css'
import Layout from '@layout/Layout'
import { DarkModeProvider } from '@context/darkModeContext'

function MyApp ({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  )
}

export default MyApp
