import React from "react";
import ReactDOM from "react-dom";

export default class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpage: null,
      id: null,
      totalpages: null,
      image: []
    };
  }

  componentDidMount() {
    const currentpage = this.props.data.currentpage;
    const id = this.props.data.id;
    //Sometimes i wonder why programmer count from zeros
    const totalpages = this.props.data.image.length - 1;
    const image = this.props.data.image;
    this.setState({ currentpage, id, totalpages, image });
  }

  forward() {
    if (this.state.currentpage < this.state.totalpages) {
      this.setState({ currentpage: this.state.currentpage + 1 });
    }
  }
  backward() {
    if (this.state.currentpage < this.state.totalpages) {
      this.setState({ currentpage: this.state.currentpage - 1 });
    }
  }
  render() {
    return (
      <div className="container">
        <div>
          <button className="page-number btn btn-unstyled">
            <span className="current">{this.state.currentpage}</span>
            <span className="divider">&nbsp;of&nbsp;</span>
            <span className="num-pages">{this.state.totalpages}</span>
          </button>
        </div>
        <a onClick={this.forward.bind(this)}>
          <img
            src={
              "/ajax/" +
              this.state.id +
              "/" +
              this.state.image[this.state.currentpage]
            }
            className="img-responsive"
          />
        </a>
      </div>
    );
  }
}
if (document.getElementById("GalleryView")) {
  var data = document.getElementById("GalleryView").getAttribute("data");
  ReactDOM.render(
    <GalleryView data={JSON.parse(data)} />,
    document.getElementById("GalleryView")
  );
}
