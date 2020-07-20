import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerylist: []
    };
  }
  componentDidMount() {
    axios.get("/ajax/all").then(response => {
      const gallerylist = response.data;
      this.setState({ gallerylist });
    });
  }
  render() {
    return (
      <div className="container index-container">
        {this.state.gallerylist.map(gallery => {
          return (
            <div key={gallery.id} className="gallery">
              <a
                href={"/g/" + gallery.id}
                className="cover"
                style={{ padding: "0 0 141.2% 0" }}
              >
                <img
                  className="lazyload"
                  src={"/ajax/" + gallery.id + "/" + gallery.image[0]}
                  width={250}
                  height={353}
                />
                <div className="caption">{gallery.name}</div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Landing;
if (document.getElementById("Landing")) {
  ReactDOM.render(<Landing />, document.getElementById("Landing"));
}
