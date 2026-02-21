import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMegaMenu.module.css';



export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();

  

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="inicio" className={classes.link}>
              Inicio
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#sobre" className={classes.link}>
                    Sobre
                </a>
              </HoverCard.Target>
            </HoverCard>
            <a href="#projetos" className={classes.link}>
              Projetos
            </a>
            <a href="#contato" className={classes.link}>
              Contato
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Entrar</Button>
            <Button>Cadastre-se</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Inicio
          </a>
          <a href="#" className={classes.link}>
            Sobre
          </a>
          <a href="#" className={classes.link}>
            Projetos
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Entrar</Button>
            <Button>Cadastre-Se</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}