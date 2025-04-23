import { Button } from '../common/Button';
import {
  Container,
  Content,
  CTA,
  ProfileImage,
  Subtitle,
  Title,
} from './styles';

export const Hero = () => {
  return (
    <Container>
      <Content>
        <div>
          <Title>Eder Souza</Title>
          <Subtitle>
            Apaixonado por tecnologia, conecto inovação e estratégia para criar
            soluções digitais que geram impacto real.
          </Subtitle>
          <CTA>
            <Button>Saiba mais</Button>
          </CTA>
        </div>
        <ProfileImage>
          <div className="profile-circle">
            <img src="./edersouza2ndProfile.png" alt="Profile" />
          </div>
        </ProfileImage>
      </Content>
    </Container>
  );
};
