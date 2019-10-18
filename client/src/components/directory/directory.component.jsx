import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/director.selector";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.style";
// import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateProps)(Directory);
