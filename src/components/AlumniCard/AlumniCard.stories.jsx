import AlumniCard from './AlumniCard';
import student from './media/student.jpg';
import projImg from './media/project.webp';

export default {
  title: 'Alumni Card',
  component: AlumniCard,
};

export const Primary = {
  render: (args) => <AlumniCard primary {...args} />,
};

Primary.args = {
  name: 'Freja Alejandra',
  image: student,
  prevTitle: 'Former Financial Analyst',
  projectImage: projImg,
  link: 'https://ingots.web.app/fishing',
}
