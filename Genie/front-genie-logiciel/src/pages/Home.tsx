import Landing from '../pages/Landing';
import Count from '../pages/Count';
import Domain from './Domain';
import Timeline from '../pages/Timeline';
import Team from '../pages/Team';
import Contact from '../pages/Portfolio/Contact';
import Footer from './Footer';
function Home() {
  return (
    <div>
      <div className='pb-5'>
        <div className='w-full'>
          <Landing />
          <div className='space-y-5'>
            <Count />
            <Domain />
            <Team />
            <Timeline />
            <Contact />
          </div>
        </div>
      </div>
      <div className='w-full justify-center'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;