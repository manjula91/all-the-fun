import React from "react";

import LazyImage from "../lazy-load";

export default () => (
  <section className="latest-news-area" id="organizers">
    {/* Start Container */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Start Heading Title */}
          <div className="heading-title text-center">
            <h2 className="f-weight-700 margin-0">Organized by</h2>
            <div className="bordershep" />
            <a rel="noreferrer" target="_blank" href="http://geekabyte.tech">
              <LazyImage src="assets/images/geekabyte-web.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
