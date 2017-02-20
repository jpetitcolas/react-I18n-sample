import React from 'react';
import translate from './translate';

const Metas = ({ duration, translate, views }) => (
    <div className="video-metas">
        <div className="duration">
            {translate('minutes', { smart_count: duration })}
        </div>
        <div className="views">
            {translate('views', { smart_count: views })}
        </div>
    </div>
);

export default translate(Metas);
