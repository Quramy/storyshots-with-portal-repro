import initStoryshots from '@storybook/addon-storyshots';

// Workaround for https://github.com/facebook/react/issues/11565#issuecomment-368877149
const ReactDOM = require('react-dom');
const React = require('react');
ReactDOM.createPortal = node => React.createElement("portal-dummy", null, node);

initStoryshots();
