import React, { Component, Fragment } from "react";

// Components
import { MdBuild } from "react-icons/md";
import SeparatorBlock from "./SeparatorBlock";

class ConstructionZoneBlock extends Component {
  render() {
    return (
      <Fragment>
        <SeparatorBlock small />
        <div className="b-construction-zone">
          <MdBuild className="b-construction-zone_icon" />
          <p className="b-construction-zone_text">IN CONSTRUCTION</p>
        </div>
      </Fragment>
    );
  }
}

export default ConstructionZoneBlock;
