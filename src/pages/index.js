import * as React from "react"
import './styles.css'

import Seo from "../components/seo"
import Introduction from '../sections/Introduction';
import Experience from '../sections/Experience';

const IndexPage = () => (
  <>
    <Seo title="Matt Hunter-King" />
    <Introduction backgroundColor="#4AE1BA" />
    <Experience />
  </>
)

export default IndexPage
