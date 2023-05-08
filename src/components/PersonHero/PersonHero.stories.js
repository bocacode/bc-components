import PersonHero from './PersonHero';

export default {
  title: 'Person Hero',
  component: PersonHero,
};

export const Primary = {
  render: (args) => <PersonHero primary {...args} />,
};

Primary.args = {
  candidate: {
    name: 'Andrew Andrews',
    about: 'Andrew is an amazing guy that does amazing things.',
    prevTitle: 'Former Financial Analyst',
    imageFull: 'https://www.bocacode.com/assets/images/candidates/andy-linnell.jpg',
    github: 'https://github.com/bocacode',
    linkedin: 'https://github.com/bocacode',
    portfolio: 'https://github.com/bocacode',
    resume: 'https://github.com/bocacode',
  }
}
