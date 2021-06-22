import React from "react";
import LazyImage from "../lazy-load";

import partners from "../data/2021/partners";

export default () => (
  <section className="testimonial-area testimonial-area-version-twenty" id="partners">
    <div className="overlay" />
    {/* Start Container */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          {/* Start Heading Title */}
          <div className="heading-title text-center">
            <span className="subtitle">Our</span>
            <h2 className="f-weight-700 margin-0">Partners</h2>
            <div className="bordershep" />
          </div>
          {/* End Heading Title */}
          <div className="partners-wrapper text-center">
            {partners.partners.map(partner => (
              <a
                rel="noreferrer"
                href={partner.url}
                target="_blank"
                key={partner.url}
              >
                {partner.name === "zeit" ? (
                  <LazyImage
                    imgClassName={`partner-imgzeit ${partner.cssClass}`}
                    src={`/assets/images/partners/${partner.imageURL}`}
                    width="250"
                  />
                ) : (
                  <LazyImage
                    imgClassName={`partner-img ${partner.cssClass}`}
                    src={`/assets/images/partners/${partner.imageURL}`}
                    width="250"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* End Testimonial Carousel */}
    </div>
    {/* End Container */}
  </section>
);
