import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import videos from './data';
import VideoList from './VideoList';

import messages from './messages';
import Polyglot from 'node-polyglot';

const locale = window.localStorage.getItem('locale') || 'fr';
const polyglot = new Polyglot({
    locale,
    phrases: messages[locale],
});

const translate = polyglot.t.bind(polyglot);

ReactDOM.render(
  <VideoList videos={videos} translate={translate} />,
  document.getElementById('root')
);
