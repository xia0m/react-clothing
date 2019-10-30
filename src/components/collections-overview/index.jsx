import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection";
import { selectCollectionsForPreivew } from "../../redux/shop/shop.selector";

import styled from "styled-components";

const CollectionOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreivew
});

export default connect(mapStateToProps)(CollectionOverview);
