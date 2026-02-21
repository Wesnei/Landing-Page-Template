import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from './ArticleCardsGrid.module.css';

const mockdata = [
  {
    title: 'Sistema de Gestão Empresarial',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=80',
    date: 'Aplicação Web',
  },
  {
    title: 'Plataforma SaaS para Educação Online',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=720&q=80',
    date: 'Software como Serviço (SaaS)',
  },
  {
    title: 'Dashboard Analítico Corporativo',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=720&q=80',
    date: 'Business Intelligence',
  },
  {
    title: 'Aplicação Mobile para Gestão Interna',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=720&q=80',
    date: 'Aplicativo Mobile',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card} id='projetos'>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt={article.title} radius="md" />
      </AspectRatio>
      <Text className={classes.date}>{article.date}</Text>
      <Text className={classes.title}>{article.title}</Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: 'md' }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}