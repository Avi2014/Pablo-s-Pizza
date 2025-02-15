import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("error found ya dumb", error, info);
  }

  //   componentDidMount() {}
  //   componentWillUnmount() {}
  //   componentDidUpdate() {}
  //   celebreateError = () => {
  //     this.setState({ celebration: "lol" });
  //   };

  //render must be present, which is 95% reactjs
  render() {
    // console.log(this.props.lol);
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>uh Oh!</h2>
          <p>
            there was an error with this page. <Link to="/">Click here</Link>{" "} to
            go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
// function EBWithHooks() {
//   const potd = usePizzaOfTheDay();
//   return <ErrorBoundary potd={potd} />;
// }

export default ErrorBoundary;
