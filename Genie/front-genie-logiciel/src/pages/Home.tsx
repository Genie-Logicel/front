import Landing from '../pages/Landing';
import Count from '../pages/Count';
import Timeline from '../pages/Timeline';
import Team from '../pages/Team';
import Footer from './Footer';
function Home() {
    return ( 
        <div>
          <div className='pb-5'>
            <div className='w-full space-y-5'>
              <Landing />
              <Count />
              <Timeline />
              <Team />
            </div>
          </div>
          <div className='w-full justify-center'>
            <Footer />
          </div>
        </div>
     );
}

export default Home;