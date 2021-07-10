import React, { Fragment } from 'react';
import Header from './header';
import Checkbox from 'logos';
import tickets from 'data/2019/tickets';

const Deliverables = (props) => (
  <div className="deliverables-table">
    <div className="header">WHAT YOU GET</div>

    {props.data.deliverables.map((deliverable) => (
      <Fragment>
        {deliverable.checkbox && (
          <div className="item">
            <span>{deliverable.text}</span>
            <span>
              <Checkbox />
            </span>
          </div>
        )}
        {!deliverable.checkbox && (
          <div className="undeliverable-item" key={deliverable.text}>
            <span>{deliverable.text}</span>
          </div>
        )}
      </Fragment>
    ))}
  </div>
);

const Price = (props) => (
  <div className="deliverables-table">
    <div className="header price">Price</div>

    {props.data.prices.map((deliverable) => (
      <div className="item" key={deliverable.text}>
        <span>{deliverable.text}</span>
        <span>{deliverable.value}</span>
      </div>
    ))}
  </div>
);

const BookButton = ({ url }) => (
  <div
    className="ticket-book-button"
    target="_blank"
    onClick={() => (location.href = url)}
  >
    BOOK TICKETS
  </div>
);

export default ({ tickets, navItems, title, disclaimer, extraInfo }) => (
  <Fragment>
    <Header hardRefresh navItems={navItems} />
    <div className="tickets-container">
      <div class="tickets-main-head">
        {title}
        <span class="tickets-sub-head">{disclaimer}</span>
        <span class="tickets-sub-head">{extraInfo}</span>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {tickets.tickets.map((ticket) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={
                'ticket-type-card ' +
                (ticket.disabled == true ? 'disabled' : '')
              }
            >
              <div className="ticket-header">
                <div>{ticket.type}</div>
                <div className="ticket-subheader">{ticket.subheader}</div>
              </div>
              <Deliverables data={ticket} />
              <Price data={ticket} />
              <BookButton url={ticket.buyticketUrl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Fragment>
);
