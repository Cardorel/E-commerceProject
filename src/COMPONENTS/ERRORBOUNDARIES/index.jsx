import React, { Component} from "react";
import { ImageLayout } from "../../BOOTSTRAP/COMPONENTS/IMAGES";
import './errorBoundary.scss'

export default class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }


  render() {
    if (this.state.hasErrored) {
      return (
        <div className="container-fluid w-100 h-auto error__boundary">
          <div>
            <ImageLayout
              className="img__wrong__Boundary"
              src="https://i.ibb.co/2jYXPHS/pexels-anna-shvet-4045567.jpg"
              alt="pexels-anna-shvet-4045567"
            />
            <p>Sorry, something went wrong...</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
