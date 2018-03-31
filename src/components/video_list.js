import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <div className="row">
      <div className="carousel col s12">
        <div className="col s12 carousel-item">
          {videoItems[0]}
        </div>
        <div className="col s12 carousel-item">
          {videoItems[1]}
        </div>
        <div className="col s12 carousel-item">
          {videoItems[2]}
        </div>
        <div className="col s12 carousel-item">
          {videoItems[3]}
        </div>
      </div>
    </div>

  );
};

export default VideoList;
