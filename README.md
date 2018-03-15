# Storyshots and React portal

Using `createPortal` in Storyshots throws the following error:

```
    TypeError: parentInstance.children.indexOf is not a function

      at appendChild (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7218:39)
      at commitPlacement (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4904:13)
      at commitAllHostEffects (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:5678:13)
      at HTMLUnknownElement.callCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:1610:14)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:219:27)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:126:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:87:17)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:36:27)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:61:35)
      at Object.invokeGuardedCallbackDev (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:1649:16)
      at invokeGuardedCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:1506:29)
      at commitRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:5798:9)
      at performWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6800:42)
      at performWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6750:7)
      at requestWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6661:7)
      at scheduleWorkImpl (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6515:11)
      at scheduleWork (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6472:12)
      at scheduleTopLevelUpdate (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6976:5)
      at Object.updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7014:7)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:7637:18)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/react/renderTree.js:24:14)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:21:18
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/index.js:120:20)
          at new Promise (<anonymous>)
      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)
          at <anonymous>
      at process._tickCallback (internal/process/next_tick.js:188:7)
```

It's because that react-test-renderer can't treat portal (see https://github.com/facebook/react/issues/11565).

And the following workaround suppresses this error.

```
ReactDOM.createPortal = node => node;
```
