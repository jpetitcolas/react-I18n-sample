import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import videos from './data';
import VideoList from './VideoList';

import I18nProvider from './I18nProvider';

const locale = window.localStorage.getItem('locale') || 'fr';

ReactDOM.render(
    <I18nProvider locale={locale}>
        <VideoList videos={videos} />
    </I18nProvider>,
  document.getElementById('root')
);
