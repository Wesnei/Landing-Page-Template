import { HeaderMegaMenu } from '@/components/Header/HeaderMegaMenu';
import { HeroContentLeft } from '@/components/Hero/HeroContentLeft';
import HeroText from '@/components/HeroText/HeroText';
import { ArticlesCardsGrid } from '@/components/Cards/ArticleCardsGrid';
import { Demo } from '@/components/Title/Title';
import { ContactUs } from '@/components/Contact/ContactUs';
import { FooterSocial } from '@/components/Footer/FooterSocial';



export function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <HeroContentLeft />
      <HeroText />
      <Demo />
      <ArticlesCardsGrid />
      <ContactUs />
      <FooterSocial />
    </>
  );
}
