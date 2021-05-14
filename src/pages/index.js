import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './styles.css'

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
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Matt's Logo"
      style={{ marginBottom: `3rem` }}
      backgroundColor={'#4AE1BA'}
      placeholder={'none'}
    />
    <div style={{
      display: "flex",
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: '150px'
    }}>
      <a href='mailto:matthunterking@gmail.com' target="_blank">
        <StaticImage
          src="../images/email.png"
          width={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Email"
          backgroundColor={'#4AE1BA'}
          placeholder={'none'}
        />
      </a>
      <a href='https://www.linkedin.com/in/matthunterking/' target="_blank">
        <StaticImage
          src="../images/linkedin-logo.png"
          width={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="LinkedIn"
          backgroundColor={'#4AE1BA'}
          placeholder={'none'}
        />
      </a>
      <a href='https://github.com/matthunterking' target="_blank">
        <StaticImage
          src="../images/github.png"
          width={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Github"
          backgroundColor={'#4AE1BA'}
          placeholder={'none'}
        />
      </a>
    </div>
  </div >
)

export default IndexPage
