import PhotoHero from './PhotoHero';

export default {
  title: 'Photo Hero',
  component: PhotoHero,
};

export const Primary = {
  render: (args) => <PhotoHero primary {...args} />,
};

Primary.args = {
  title: 'Photo Hero',
  subTitle: 'Photo Hero Subtitle',
  ctaTitle: 'Apply Now',
  bgImg: 'https://images.unsplash.com/photo-1682686580849-3e7f67df4015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
}
