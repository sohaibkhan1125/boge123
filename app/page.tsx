import Footer from './Footer';
import HeroSection from './HeroSection';
import MainContent from './MainContent';
import TopMenu from './TopMenu';

export default function Home() {
  return (
    <div>
      <TopMenu/>
      <HeroSection/>
      <MainContent/>
      <Footer/>
    </div>
  );
}
