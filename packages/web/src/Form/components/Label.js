// @flow

import * as React from 'react';
import styled from 'styled-components';

const LabelElement = styled.span`
  position: relative;
  font-size: 0.866rem;
  color: #7189b6;
  line-height: 1.8;
  display: inline-block;
  text-align: ${props => props.align};

  ${props =>
    props.required &&
    `
    :before {
      content: "";
      display: inline-block;
      background-color: #EB5000;
      margin: -0.133rem 0.533rem 0 0;
      vertical-align: middle;
      height: 0.266rem;
      width: 0.266rem;
      border-radius: 50%;
      position: absolute;
      left: -0.666rem;
      top: 0.666rem;
    }
  `};

  ${props =>
    props.inline &&
    `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 1%;
    min-width: 8rem;
    padding-right: 1.2rem;
    line-height: 1;
    vertical-align: top;
    padding-top: calc(0.46633rem + 2px);
  `};
`;

type Props = {
  text: string,
  required?: boolean,
  inline?: boolean,
  /** align `left` or `right` */
  align?: 'left' | 'right'
};

const Label = ({ text, required, inline, align = 'left' }: Props) => (
  <LabelElement inline={inline} align={align} required={required}>
    {text}
  </LabelElement>
);

export default Label;
