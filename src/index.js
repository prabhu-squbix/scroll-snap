import React from "react";
import ReactDOM from "react-dom";
import ScrollSnap from "scroll-snap";

import "./styles.css";

const snapConfig = {
  scrollSnapDestination: "0% 90%",
  scrollTimeout: 100,
  scrollTime: 300
};

class App extends React.Component {
  container = React.createRef();

  bindScrollSnap() {
    function callback() {
      // optional callback
    }

    // const element = this.container.current;
    const htmlElement = document.documentElement;
    const snapObject = new ScrollSnap(htmlElement, snapConfig);
    snapObject.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <div className="page first-page">
          <div>1</div>
          <div className="hint">scroll down ⇣</div>
        </div>
        <div className="page second-page">
          <div>2</div>
        </div>
        <div className="page third-page">
          <div>3</div>
        </div>
        <div className="page fourth-page">
          <div>4</div>
          <div className="hint">scroll up ⇡</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
