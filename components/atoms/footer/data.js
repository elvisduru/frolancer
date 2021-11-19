import { v4 as uuid } from 'uuid';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const footerData = {
  copyright: 'Copyright © 2021 Alternate Concept Ltd..',
  rights: 'All rights reserved',
  social: [
    {
      id: uuid(),
      icon: <FaFacebook />,
    },
    {
      id: uuid(),
      icon: <FaInstagram />,
    },
    {
      id: uuid(),
      icon: <FaTwitter />,
    },
    {
      id: uuid(),
      icon: <FaYoutube />,
    },
  ],
  company: {
    name: 'Company',
    links: [
      {
        id: uuid(),
        href: '/about',
        url: 'About us',
      },
      {
        id: uuid(),
        href: '/blog',
        url: 'Blog',
      },
      {
        id: uuid(),
        href: '/contact',
        url: 'Contact us',
      },
      {
        id: uuid(),
        href: '/pricing',
        url: 'Pricing',
      },
      {
        id: uuid(),
        href: '/testimonial',
        url: 'Testimonial',
      },
    ],
  },
  support: {
    name: 'Support',
    links: [
      {
        id: uuid(),
        href: '/help',
        url: 'Help Center',
      },
      {
        id: uuid(),
        href: '/terms',
        url: 'T & C',
      },
      {
        id: uuid(),
        href: '/legal',
        url: 'Legal',
      },
      {
        id: uuid(),
        href: '/policy',
        url: 'Privacy Policy',
      },
      {
        id: uuid(),
        href: '/status',
        url: 'Status',
      },
    ],
  },
  extra: 'Stay up to date',
};

export default footerData;
