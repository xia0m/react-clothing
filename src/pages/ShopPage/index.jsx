import React, { Component } from "react";
import CollectionsOverview from "../../components/collections-overview";
import CollectionPage from "../collection";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {
      match,
      isCollectionFetching,
      selectIsCollectionsLoaded
    } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
