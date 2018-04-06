// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

const Root = styled.div`
`;

const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  background: rgba(9, 30, 66, 0.54);
`;

const ModalWrapper = styled.div`
  position: absolute;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  width: ${props => props.width ? props.width : '50%'};
  height: 500px;
  z-index: 510;
`;

type Props = {
  width?: string,
  onClose?: () => mixed,
}

class Modal extends Component<Props> {
  state = {  }
  render() {
    const { width } = this.props;
    return (
      <Root>
        <Layer />
        <ModalWrapper width={width}>
          yoyo
        </ModalWrapper>
      </Root>
    );
  }
}

export default Modal;
