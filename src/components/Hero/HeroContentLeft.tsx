import { Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  return (
    <div className={classes.hero} id='inicio'>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Construa aplicações web modernas com padrão de mercado.</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Interface escalável, arquitetura organizada e ferramentas modernas em uma base profissional.
        </Text>
      </Container>
    </div>
  );
}