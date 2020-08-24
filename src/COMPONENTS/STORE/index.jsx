import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import StoreContent from "./STOREPRODUCTS/STORECONTENT";
import EachCategory from "./EACHCATEGORY";
import { WithSpinner } from "../WITHSPINNER";
import { createStructuredSelector } from "reselect";
import { selectIsDataFetching } from "../../RESELECT";
import BlackNavBar from "../NAVBAR/BLACK";

const CollectionsInStoreWithSpinner = WithSpinner(StoreContent);
const CollectionInCategoryWithSpinner = WithSpinner(EachCategory);

function StorePage({ match, isLoading }) {
  return (
    <div>
      <BlackNavBar />
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={({ ...otherProps }) => (
            <CollectionsInStoreWithSpinner
              isLoading={isLoading}
              {...otherProps}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:category`}
          render={({...otherProps}) => <CollectionInCategoryWithSpinner {...otherProps} isLoading={isLoading}/>}
        />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDataFetching,
});

export default connect(mapStateToProps)(StorePage);
