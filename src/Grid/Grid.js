import React from "react";
import "./grid.css";

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundStyle: {},
      hexCOde: "",
    };
  }
  onHandleClick = (e) => {
    this.setState({
      backgroundStyle: { backgroundColor: e.target.style.backgroundColor },
      hexCOde: e.target.style.backgroundColor,
    });
  };
  render() {
    return (
      <div>
        <div className="changer-color" style={this.state.backgroundStyle}>
          {this.state.hexCOde}
        </div>
        <div className="group-colored-squares">
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#454565" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#595300" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#6520ff" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#f525f8" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#5f2600" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#abc123" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#101a0a" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#fe00a0" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#45abc5" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#45ff65" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#5dcdcc" }}
          ></div>
          <div
            className="square-color"
            onClick={this.onHandleClick}
            style={{ backgroundColor: "#454565" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Grid;
