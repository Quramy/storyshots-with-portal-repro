import React from 'react';

import { storiesOf } from '@storybook/react';
import { createPortal } from 'react-dom';

class Portal extends React.Component {
  componentWillUnmount() {
    if (this.node) document.body.removeChild(this.node);
    this.node = null;
  }

  render() {
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }
    return createPortal(this.props.children, this.node);
  }
}

storiesOf('Portal', module)
  .add('portal', () => (
    <div>
      <p>Non portal</p>
      <Portal>portal</Portal>
    </div>
  ));
