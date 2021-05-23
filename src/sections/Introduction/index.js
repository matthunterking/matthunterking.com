import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Section from '../../containers/Section';
import IconLink from '../../components/IconLink';

const Introduction = ({ backgroundColor }) => (
 <Section backgroundColor={backgroundColor}>
  <h1>Matt Hunter-King</h1>
  <h2>Developer</h2>
  <StaticImage
   src="../../images/mattlogo.png"
   formats={["AUTO", "WEBP", "AVIF"]}
   alt="Matt's Logo"
   style={{ marginBottom: `3rem` }}
   backgroundColor={backgroundColor}
   placeholder={'none'}
  />
  <div style={{
   display: "flex",
   justifyContent: 'space-between',
   flexDirection: 'row',
   alignItems: 'center',
   width: '150px'
  }}>
   <IconLink
    href='mailto:matthunterking@gmail.com'
    iconName='email'
   />
   <IconLink
    href='https://www.linkedin.com/in/matthunterking/'
    iconName='linkedIn'
   />
   <IconLink
    href='https://github.com/matthunterking'
    iconName='github'
   />
  </div>
 </Section>
);

export default Introduction;
