import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import ReactPlayer from "react-player";
import SeparatorBlock from "./SeparatorBlock";

class VideoPlayerBlock extends Component {
  render() {
    const { url } = this.props;
    return (
      <Fragment>
        <SeparatorBlock small />
        <div className="b-video-player">
          <ReactPlayer
            light
            controls
            url={url}
            width="100%"
            height="100%"
            className="b-video-player_inner"
          />
        </div>
      </Fragment>
    );
  }
}

VideoPlayerBlock.propTypes = {
  url: PropTypes.string.isRequired
};

export default VideoPlayerBlock;
