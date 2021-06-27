import React, { Fragment } from "react";
import Header from "../header";

import workshopData from '../data/2019/workshop'

const WorkshopItem = data => <div className="workshop" >
  <div className="workshop-item workshop-item-lg">
    <div className="workshop-item-title">
      <div className="img img-speaker">
        <img
          className="img-fluid "
          src={`assets/images/speakers/${data.imgPath}`}
          alt={data.imgPath}
          preview="true"
        />
      </div>
      <div>{data.speaker}</div>
    </div>
    <div className="workshop-item-content">
      <h3>
        {data.title}
      </h3>
      <p>
        {data.description}
      </p>
    </div>
  </div>
  <div className="workshop-item">
    <div className="workshop-item-title">Pre-requisites</div>
    <div className="workshop-item-content">
      <p>
        <ul>
          {data.prerequisites.map(requisite => <li key={requisite}> - {requisite}</li>)}
        </ul>
      </p>
    </div>
  </div>
  <div className="workshop-item">
    <div className="workshop-item-title">What we cover?</div>
    <div className="workshop-item-content">
      {data.coverage.map(coverage => <div key={coverage.topic}>
        <h4>{coverage.topic}</h4>
        {coverage.points && <ul>
          {coverage.points.map(point => <li key={point}>- {point}</li>)}
        </ul>}
      </div>)}
    </div>
  </div>
</div>


export default () => (
  <Fragment>
    <Header hardRefresh />
    <section className="section workshops">
      <div className="workshops-head">
        <div className="workshops-title">
          Workshops at React India Conference
        </div>
        <div className="workshops-description">
          <p>
            On September 26th 2019, to start your conference experience, we'll
            host multiple workshops targeted both at the React, GraphQL freshers
            and professionals. Take the full advantage of your conference visit
            and get training at both basic and advanced level from our industry
            experts.
          </p>
          <p>
            All the workshops start at 9:00 am (with doors open 8:30 am) and
            continue until 5:00 pm and are hosted at conference venue.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="workshops-content">
          {workshopData.map(workshop => <WorkshopItem  {...workshop} key={workshop.title} />)}
        </div>
      </div>
    </section>
  </Fragment>
);
