export default {
  tickets: [
    {
      type: 'Conference Only Pass',
      subheader: 'Limited tickets only',
      deliverables: [
        {
          text: 'ACCESS TO THE FULL TWO DAY CONFERENCE',
          checkbox: true,
        },
        {
          text: 'Access to Networking',
          checkbox: true,
        },
        {
          text: 'Direct talk to speakers',
          checkbox: true,
        },
      ],
      prices: [
        {
          text: 'INDIAN ATTENDEE',
          value: '999 INR',
        },
        {
          text: 'INTERNATIONAL ATTENDEE',
          value: '50 EUR',
        },
      ],
      buyticketUrl: 'https://www.townscript.com/e/react-india-2019/booking',
      disabled: false,
    },
    {
      type: 'FREE CONFERENCE PASS',
      deliverables: [
        {
          text: 'Access to Youtube streaming',
          checkbox: true,
        },

        {
          text: 'Access to Networking',
        },
        {
          text: 'Direct talk to speakers',
        },
      ],
      prices: [
        {
          text: 'INDIAN ATTENDEE',
          value: 'FREEE',
        },
        {
          text: 'INTERNATIONAL ATTENDEE',
          value: 'FREE',
        },
      ],
      buyticketUrl: 'https://www.townscript.com/e/react-india-2019/booking',
      disabled: false,
    },
    {
      type: 'WORKSHOP PASS',
      deliverables: [
        {
          text: 'Any 1 Workshop Access',
          checkbox: true,
        },
        {
          text: 'Advanced training from industry experts',
          checkbox: true,
        },
        {
          text: 'Small size group for maximum individual reach',
          checkbox: true,
        },
        {
          text: 'Hands-on practical sessions',
          checkbox: true,
        },
        {
          text: 'Complementary access to conference',
        },
      ],
      prices: [
        {
          text: 'INDIAN ATTENDEE',
          value: '1999 INR',
        },
        {
          text: 'INTERNATIONAL ATTENDEE',
          value: '100 EUR',
        },
      ],
      buyticketUrl: 'https://www.townscript.com/e/react-india-2019/booking',
      disabled: false,
    },
  ],
};
