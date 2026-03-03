import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} id='sobre' size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
        <Title className={classes.title}>
          Desenvolvemos soluções{' '}
          <Text component="span" className={classes.highlight} inherit>
            digitais para
          </Text>{' '}
          qualquer desafio.
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Criamos aplicações web modernas, escaláveis e preparadas para crescer junto com o seu negócio.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Dúvidas frequentes
          </Button>
          <Button className={classes.control} size="lg">
            Nossos serviços
          </Button>
        </div>
      </div>
      </div>
    </Container>
  );
}

export default HeroText;