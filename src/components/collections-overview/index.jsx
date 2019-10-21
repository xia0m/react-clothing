import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection";
import { selectCollectionsForPreivew } from "../../redux/shop/shop.selector";

import "./style.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreivew
});

export default connect(mapStateToProps)(CollectionOverview);
