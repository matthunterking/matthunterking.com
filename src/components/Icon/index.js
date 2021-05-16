import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const commonProps = {
  width: 30,
  formats: ["AUTO", "WEBP", "AVIF"],
  backgroundColor: '#4AE1BA',
  placeholder: 'none',
}

const Icon = ({ name }) => {
  switch (name) {
    case 'email':
      return (
        <StaticImage
          src={"../../images/email.png"}
          alt="Email"
          {...commonProps}
        />)
    case 'linkedIn':
      return (
        <StaticImage
          src={"../../images/linkedin-logo.png"}
          alt="LinkedIn"
          {...commonProps}
        />)
    case 'github':
      return (
        <StaticImage
          src={"../../images/github.png"}
          alt="GitHub"
          {...commonProps}
        />)
    default:
      return null;
  }
}

export default Icon;
