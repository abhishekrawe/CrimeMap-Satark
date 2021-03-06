// @flow

import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bolder;
  padding: 0.9rem 7rem;
  border: 0;
  border-radius: 0.5rem;
  min-height: 1.5rem;
  font-family: inherit;
`;

const Button = ({
  onClick, className, children, ...props
}: { onClick?: Function, className?: string, children: any }) => (
  <DefaultButton onClick={onClick} className={className || null} {...props}>
    { children }
  </DefaultButton>
);

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
