import React from "react";
import CollectionItem from "../collection-item";

import styled from "styled-components";

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PreviewCollection = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;
