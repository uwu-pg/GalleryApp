import React from "react";
export function LandingGallery(props) {
    return (
        <div
        className="gallery"
      >
        <a href={ "/g/" + props.id } className="cover" style={{ padding: "0 0 141.2% 0" }}>
          <img
            className="lazyload"
            src="http://laravel.test/ajax/1/02"
            width={250}
            height={353}
          />
          <div className="caption">
            { props.name }
          </div>
        </a>
      </div>


    );
}
