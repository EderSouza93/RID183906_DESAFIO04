import { SecondaryButton } from '../common/Button';
import {
  Container,
  ProjectButton,
  ProjectCard,
  ProjectDescription,
  ProjectGrid,
  ProjectImage,
  ProjectTitle,
  Title,
} from './styles';

const projects = [
  {
    id: 1,
    title: 'MVP de Sistema de Chamados',
    description:
      'Sistema de gestão de chamados que permite categorizar e priorizar demandas internas, com notificações automáticas via Discord',
    imageUrl:
      'https://eder-souza-dev.vercel.app/_next/image?url=%2Fassets%2Fimages%2FTicketManagment.png&w=1080&q=75',
  },
  {
    id: 2,
    title: 'MVP de Cardapio online',
    description:
      'Sistema de cardápio digital interativo que permite explorar produtos, montar pedidos e finalizar compras em uma interface moderna e intuitiva.',
    imageUrl:
      'https://eder-souza-dev.vercel.app/_next/image?url=%2Fassets%2Fimages%2FHamburgueria.png&w=1080&q=75',
  },
];

export const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projetos</Title>

      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage>
              <img src={project.imageUrl} alt={project.title} />
            </ProjectImage>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectButton>
              <SecondaryButton>Saiba mais</SecondaryButton>
            </ProjectButton>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
};
