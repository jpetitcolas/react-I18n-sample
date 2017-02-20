import React from 'react';

const Metas = ({ duration, views }) => (
    <div className="video-metas">
        <div className="duration">
            {duration} minute{duration > 1 ? 's' : ''}
        </div>
        <div className="views">
            {views} vue{views > 1 ? 's' : ''}
        </div>
    </div>
);

export default Metas;
