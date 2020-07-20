import React from "react";

export function ImagePreview(props) {
  return (
    <div>
      <div className="container" id="thumbnail-container">
        <div className="thumbs">
          {/** Here */}
          {props.data.map(pages => {
            return (
              <div key={pages} className="thumb-container">
                <a className="gallerythumb" href={ "/g/"+ props.id + "/view?pages=" + pages } rel="nofollow">
                  <img
                    className="lazyload"
                    src={"/ajax/" + props.id + "/" + pages}
                    width={200}
                    height={296}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}