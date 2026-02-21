import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

const social = [
  { Icon: IconBrandTwitter, label: 'Twitter' },
  { Icon: IconBrandYoutube, label: 'Youtube' },
  { Icon: IconBrandInstagram, label: 'Instagram' },
];

export function ContactUs() {
  const icons = social.map(({ Icon, label }, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
      aria-label={label}
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper} id='contato'>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Entre em Contato</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Nossa Equipe de Suporte está pronta para ajudar! Se você tiver dúvidas, sugestões ou precisar de assistência, não hesite em entrar em contato conosco. Estamos aqui para garantir que sua experiência seja a melhor possível.
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>

        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            radius="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Nome"
            placeholder="John Doe"
            mt="md"
            radius="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Fale Conosco"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            radius="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control} radius="md">
              Enviar Mensagem
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}