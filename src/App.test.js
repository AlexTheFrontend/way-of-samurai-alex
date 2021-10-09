import React from 'react';
import ReactDOM from 'react-dom';
import AlexSocialNetworkApp from "./App";

test('renders with no crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlexSocialNetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
