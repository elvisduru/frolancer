import { v4 as uuid } from 'uuid';

const goals = {
  title: 'Our 5-year goal of freelancing',
  subtitle: 'with our super power we can reach this',
  items: [
    {
      id: uuid(),
      value: '2 million',
      goal: '2 million submitted per day',
      icon: '/images/robust.png',
    },
    {
      id: uuid(),
      value: '2 million',
      goal: '2 million submitted per day',
      icon: '/images/impact.png',
    },
    {
      id: uuid(),
      value: '2 million',
      goal: '2 million submitted per day',
      icon: '/images/afford.png',
    },
    {
      id: uuid(),
      value: '2 million',
      goal: '2 million submitted per day',
      icon: '/images/countries.png',
    },
  ],
};

export default goals;
