import NavBar from './NavBar';

export default {
  title: 'Navigation Bar',
  component: NavBar,
};

export const Primary = {
  render: (args) => <NavBar primary {...args} />,
};

Primary.args = {
  logo: 'https://www.bocacode.com/assets/images/bc-logos/boca-code-rgb-logo-tag.svg',
  companyName: "Boca Code",
  links: [<a className='navbar-link' href='/courses'>Courses</a>,
          <a className='navbar-link' href='/for-companies'>For Companies</a>,
          <a className='navbar-link' href='/candidates'>Candidates</a>,
          <a className='navbar-link' href='/alumni'>Alumni</a>,
  ],
  ctaText: 'Get Started',
  ctaLink: '/get-started',
}
