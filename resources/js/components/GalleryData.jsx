import React from "react";
import ReactDOM from "react-dom";
import { ImagePreview } from './ImagePreview';
export default class GalleryData extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.state = { 
        id: null,
        title: null,
        artist: null,
        tags: [],
        language: [],
        categories: [],
        pages: null,
        images: []
    }
  }
  componentDidMount() {
    const id = this.props.data.id
    const title = this.props.data.name
    const artist = this.props.data.artist
    const tags = this.props.data.tags
    const languange = this.props.data.language
    const categories = this.props.data.categories
    const pages = this.props.data.image.length
    const image = this.props.data.image
    const uploaded = this.props.data.uploaded
    this.setState({ id,title,artist,tags,languange,categories,pages,image,uploaded })
  }
  render() {
    return (
      <div className="container bg-dark">
        <div>
          <div className="container" id="bigcontainer">
            <div id="cover">
              <a href={"/g/" + this.state.id + "/view?pages=" + this.props.data.image[0] }>
                <img
                  className="lazyload"
                  src={ "/ajax/" + this.state.id + "/" + this.props.data.image[0] }
                  width={350}
                  height={519}
                />
              </a>
            </div>
            <div id="info-block">
              <div id="info">
                <h1 className="title">
                  { this.state.title }
                </h1>
                <h3 id="gallery_id">
                  <span className="hash">#</span>{ this.state.id }
                </h3>
                <section id="tags">
           {/**        <div className="tag-container field-name ">
                    Tags:
                    <span className="tags">
                      <a href="/tag/big-breasts/" className="tag tag-2937 ">
                        <span className="name">big breasts</span>
                        <span className="count">103K</span>
                      </a>
                      <a href="/tag/blowjob/" className="tag tag-29859 ">
                        <span className="name">blowjob</span>
                        <span className="count">37K</span>
                      </a>
                      <a href="/tag/swimsuit/" className="tag tag-3735 ">
                        <span className="name">swimsuit</span>
                        <span className="count">19K</span>
                      </a>
                      <a href="/tag/full-censorship/" className="tag tag-8368 ">
                        <span className="name">full censorship</span>
                        <span className="count">17K</span>
                      </a>
                      <a href="/tag/muscle/" className="tag tag-30473 ">
                        <span className="name">muscle</span>
                        <span className="count">9K</span>
                      </a>
                    </span>
                  </div>
    */}
                  {/* <div className="tag-container field-name ">
                    Artists:
                    <span className="tags">
                      <a
                        href="/artist/okumoto-yuuta/"
                        className="tag tag-26424 "
                      >
                        <span className="name">okumoto yuuta</span>
                        <span className="count">245</span>
                      </a>
                    </span>
                  </div>
                  <div className="tag-container field-name hidden">
                    Groups:
                    <span className="tags" />
                  </div>
                  <div className="tag-container field-name ">
                    Languages:
                    <span className="tags">
                      <a
                        href="/language/translated/"
                        className="tag tag-17249 "
                      >
                        <span className="name">translated</span>
                        <span className="count">109K</span>
                      </a>
                      <a href="/language/english/" className="tag tag-12227 ">
                        <span className="name">english</span>
                        <span className="count">69K</span>
                      </a>
                    </span>
                  </div>
                  <div className="tag-container field-name ">
                    Categories:
                    <span className="tags">
                      <a href="/category/manga/" className="tag tag-33173 ">
                        <span className="name">manga</span>
                        <span className="count">77K</span>
                      </a>
                    </span>
                  </div> */}
                  <div className="tag-container field-name">
                    Pages:
                    <span className="tags">
                      <a
                        className="tag"
                      >
                        <span className="name">{this.state.pages}</span>
                      </a>
                    </span>
                  </div>
                  <div className="tag-container field-name">
                    Uploaded: 
                    <span className="tags">
                      { this.state.uploaded }
                    </span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        <ImagePreview id={ this.state.id } data={ this.props.data.image }/>
        </div>
        //Recomendation
      </div>
    )
  }
}

if (document.getElementById("GalleryData")) {
  var data = document.getElementById("GalleryData").getAttribute("data");
  ReactDOM.render(
    <GalleryData data={JSON.parse(data)} />,
    document.getElementById("GalleryData")
  );
}
