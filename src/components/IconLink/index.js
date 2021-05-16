import React from 'react'

import Icon from '../Icon';

const IconLink = ({ href, iconName }) => (
 <a href={href} target="_blank" rel="noreferrer">
  <Icon name={iconName} />
 </a>
);

export default IconLink;
