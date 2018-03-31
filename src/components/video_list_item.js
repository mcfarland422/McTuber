import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div onClick={() => onVideoSelect(video)} className="wtf cursor-point list-group-item">
      {/* <div className="video-list media"> */}

      <img className="media-object full-img" src={imageUrl} />



      <div className="media-heading">{video.snippet.title}</div>


    </div>
  );
};

export default VideoListItem;
