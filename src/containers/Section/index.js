import React from 'react';
import { Container } from './styles';

const Section = ({ backgroundColor, children }) => (
 <Container backgroundColor={backgroundColor}>
  {children}
 </Container>
);

export default Section;
