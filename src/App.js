import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import {createStructuredSelector} from 'reselect'
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import FooterPage from "./COMPONENTS/FOOTER";
import { currentUSerSelector } from "./RESELECT";
import PaymentPage from"./COMPONENTS/PAYMENTPROCESS"
import SignPage from "./COMPONENTS/SIGN/INDEX";
import Spiner from "./COMPONENTS/WITHSPINNER/spiner";
import ErrorBoundary from "./COMPONENTS/ERRORBOUNDARIES";
//import { shopDataSelector } from "./RESELECT";

const HomePage = lazy(() => import("./COMPONENTS/HOME"));
const AboutPage = lazy(() => import("./COMPONENTS/ABOUT"));
const StorePage = lazy(() => import("./COMPONENTS/STORE"));
const FaqPage = lazy(() => import("./COMPONENTS/FAQ"));
const DetailPage = lazy(() => import("./COMPONENTS/DETAILPRODUCTPAGE"));

function App({ existUser }) {
 
  return (
    <div>
      <Suspense fallback={<Spiner />}>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/store" component={StorePage} />
            <Route path="/faq" component={FaqPage} />
            <Route
              path="/sign"
              render={({ ...otherProps }) =>
                existUser ? <Redirect to="/" /> : <SignPage {...otherProps} />
              }
            />
            <Route path="/payment-process" component={PaymentPage} />
            <Route exact path="/Product/detail/:id" component={DetailPage} />
          </Switch>
          <FooterPage />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}




const mapStateToProps = (state) => {
  return {
    existUser: currentUSerSelector(state),
  };
};

export default connect(mapStateToProps, null)(App);
