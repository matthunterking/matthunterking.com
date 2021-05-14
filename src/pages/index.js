import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => (
  <div style={{
    display: "flex",
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#4AE1BA',
    fontFamily: 'Fjalla One, sans-serif'
  }}>
    <Seo title="Matt Hunter-King" />
    <h1>Matt Hunter-King</h1>
    <h2>Developer</h2>
    <StaticImage
      src="../images/mattlogo.png"
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Matt's Logo"
      style={{ marginBottom: `1.45rem` }}
    />
  </div >
)

export default IndexPage
