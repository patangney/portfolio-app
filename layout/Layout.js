// layout/Layout.js

import { useState, Fragment } from 'react'
import TopNavbar from '../components/TopNavbar'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Footer from '../components/Footer'
import QRCodeContainer from '@components/QRCodeContainer'

export default function Layout ({ children }) {
  const [showQR, setShowQR] = useState(false)
  return (
    <Fragment>
      <TopNavbar />
      <main>{children}</main>
      <Footer setShowQR={setShowQR} showQR={showQR} />
      <ScrollToTopButton />
      <QRCodeContainer showQR={showQR} setShowQR={setShowQR} />
    </Fragment>
  )
}
