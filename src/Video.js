import React from 'react';
import VideoMetas from './VideoMetas.js';

export const Video = ({ metas, picture, title, translate }) => (
    <div className="video">
        <img
            src={picture}
            alt={title}
        />
        <div className="infos">
            <h2 className="title">{title}</h2>
            <VideoMetas
                duration={metas.duration}
                views={metas.views}
                translate={translate}
            />
        </div>
    </div>
);

export default Video;
