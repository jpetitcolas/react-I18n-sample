import React from 'react';
import Video from './Video';

export const VideoList = ({ translate, videos }) => (
    <div className="videos-list">
        {videos.map(video => (
            <Video
                key={video.title}
                title={video.title}
                metas={video.metas}
                picture={video.picture}
                translate={translate}
            />
        ))}
    </div>
);

export default VideoList;
