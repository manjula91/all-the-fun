import React, { Fragment } from 'react';
import Header from 'components/header';
import Checkbox from 'logos';
import tickets from 'data/2021/tickets';
import Tickets from 'components/tickets';

export default () => (
  <Tickets
    navItems={[]}
    tickets={tickets}
    title="REACT INDIA 2021 TICKETS EXPLAINED"
    disclaimer="*All rates are inclusive of taxes, GST 18%"
    extraInfo="Limited number of Tickets available"
  />
);
