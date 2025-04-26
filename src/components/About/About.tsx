import {
  Container,
  Content,
  ContentText,
  TimelineContainer,
  TimelineItem,
  Title,
  Year,
} from './styles';

const timelineItems = [
  {
    id: 1,
    year: '2018',
    content:
      'Atuei como Assistente de Qualidade na Toyolex Toyota, coordenando inspeções internas para certificação ISO 14001, implementando melhorias operacionais e controles de qualidade.',
  },
  {
    id: 2,
    year: '2019',
    content:
      'Concluí o Bacharelado em Administração pela Faculdade Amadeus, adquirindo fundamentos essenciais para análise e organização aplicados posteriormente no setor de tecnologia.',
  },
  {
    id: 3,
    year: '2022',
    content:
      'Conquistei a Certificação Lean Seis Sigma Yellow Belt (FM2S) e iniciei como Assistente Administrativo na Cohab Premium Corporate, liderando processos contratuais, equipes terceirizadas e análises operacionais.',
  },
  {
    id: 4,
    year: '2024',
    content:
      'Passei a atuar como Analista de Desenvolvimento de Sistemas na Cohab Premium Corporate. Desenvolvi integrações entre CRMs (KSI e Bitrix24), implementei chatbot com IA e automações de processos com Bitrix24.',
  },
  {
    id: 5,
    year: '2025',
    content:
      'Iniciei o curso Desenvolvedor Fullstack na DNC, aprofundando conhecimentos em tecnologias como Next.js, React, Node.js, TypeScript, Prisma e Tailwind CSS.',
  },
  {
    id: 6,
    year: '2025',
    content:
      'Atuei como Scrum Master e Developer Contributor no MVP da Plataforma Salve Vet. Participei desde o levantamento de requisitos até a entrega do produto, organizando ~50 devs em squads, definindo tecnologias (Next.js, Chakra UI, NestJS, TypeORM, PostgreSQL, Firebase) e contribuindo diretamente com a codificação.',
  },
];

export const About = () => {
  return (
    <Container id="about">
      <Title>Sobre mim</Title>

      <TimelineContainer>
        {timelineItems.map((item) => (
          <TimelineItem key={item.id}>
            <Year>{item.year}</Year>
            <Content>
              <ContentText>{item.content}</ContentText>
            </Content>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Container>
  );
};
