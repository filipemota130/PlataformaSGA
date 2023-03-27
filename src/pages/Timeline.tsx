import './Timeline.css'
import { Header } from '../components/Header/Header';
import UncontrolledExample from '../components/Timeline/Carousel';
import GroupExample from '../components/Timeline/cards';
export function Timeline() {
  return (
    <div className='central'>
      <main className="timeline">
        <div className="header-c">
          <Header/>
          </div>
          <div className="carousel">
          <UncontrolledExample/>
        </div>
          <div className="cards">
          <GroupExample/>
          </div>
      </main>
    </div>
  );
}

