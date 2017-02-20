import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import videos from './data';
import VideoList from './VideoList';

ReactDOM.render(
  <VideoList videos={videos} />,
  document.getElementById('root')
);
