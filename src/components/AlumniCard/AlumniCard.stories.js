import AlumniCard from './AlumniCard';

export default {
  title: 'Alumni Card',
  component: AlumniCard,
};

export const Primary = {
  render: (args) => <AlumniCard primary {...args} />,
};

Primary.args = {
  name: 'Freddy Andrews',
  image: 'https://www.bocacode.com/assets/images/candidates/andy-linnell.jpg',
  prevTitle: 'Former Financial Analyst',
  projectImage: 'https://bocacode.com/assets/images/candidates/projects/zen-path.webp',
  link: 'https://ingots.web.app/fishing',
}
