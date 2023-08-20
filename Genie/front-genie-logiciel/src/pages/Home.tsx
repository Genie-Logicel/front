import Landing from '../pages/Landing';
import Domain from './Domain';
import Timeline from '../pages/Timeline';
import Team from '../pages/Team';
import Footer from './Footer';
function Home() {
  return (
    <div className='relative'>
      <div className='pb-5'>
        {/* images */}
        <div>
          <img className='w-[45%] absolute top-[58%] opacity-[30%]' src="/team-presentation-ea.svg" alt="test"/>
          <img className='w-[40%] absolute top-[32%] right-[17%] opacity-[15%]' src="/data-maintenance-e.svg" alt="test"/>
        </div>
        <div className='w-full'>
          <Landing />
          <div className='space-y-5 px-[10%]'>
            <Domain />
            <Team />
            <Timeline />
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