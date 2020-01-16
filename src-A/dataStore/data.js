import { IMAGE_URL } from '../constants/constants';
// Footer links array for FooterLinks component
const footerLinkStack = [
  [
    { headerTitle: 'Customer Service' },
    { linkTitle: 'Help Center' },
    { linkTitle: 'Contact Us' },
    { linkTitle: 'Return an Item' },
    { linkTitle: 'Recall Information' },
    { linkTitle: 'Safety Data Sheets' }
  ],
  [
    { headerTitle: 'Corporate Info' },
    { linkTitle: 'Staples Business Advantage Overview' },
    { linkTitle: 'Industries Served' },
    { linkTitle: 'Blog' },
    { linkTitle: 'Our Brands' }
  ],
  [
    { headerTitle: 'Staples Corporate Solutions' },
    { linkTitle: 'Office Products' },
    { linkTitle: 'Technology Products' },
    { linkTitle: 'Furniture' },
    { linkTitle: 'Facilities' },
    { linkTitle: 'Promotional Products' }
  ],
  [
    { headerTitle: 'New Customer' },
    { linkTitle: 'Become a Customer' },
    { linkTitle: 'Govt. Customers' },
    { headerTitle: 'Memberships' },
    { linkTitle: 'Join the Staples Team' },
    { linkTitle: 'Careers' }
  ]
];

// accessibility image for FooterConnect component
const accessibilityImg = {
  src: `${IMAGE_URL}essential-accessibility.png`,
  alt: 'Essential Accessibility'
};

// social connect image for FooterConnect component
const socialImgs = [
  { src: `${IMAGE_URL}linkedin.png`, alt: 'LinkedIn' },
  { src: `${IMAGE_URL}twitter.png`, alt: 'Twitter' },
  { src: `${IMAGE_URL}facebook.png`, alt: 'Facebook' },
  { src: `${IMAGE_URL}youtube.png`, alt: 'Youtube' },
  { src: `${IMAGE_URL}insta.png`, alt: 'Instagram' }
];

// copyright text for footer copyright
const copyrightText =
  'Copyright &copy; 2001-2019 Corporate Express Canada, Inc., a Staples company. All rights reserved.';

// copyright links for footer copyright
const copyRightLinks = [
  'Terms & Conditions',
  ' | ',
  'Privacy Policy',
  ' | ',
  'Staples Bussiness Advantage'
];

// export all data
export {
  footerLinkStack,
  accessibilityImg,
  socialImgs,
  copyRightLinks,
  copyrightText
};
