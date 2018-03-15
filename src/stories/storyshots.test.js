import initStoryshots from '@storybook/addon-storyshots';

// Workaround for https://github.com/facebook/react/issues/11565#issuecomment-368877149
const ReactDOM = require('react-dom');
const React = require('React');
ReactDOM.createPortal = node => React.createElement(node, null);

initStoryshots();
