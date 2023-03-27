import './Timeline.css'
import { Header } from "../../components/Header/Header"
import Card from 'react-bootstrap/esm/Card';

export function Timeline() {
  return (
    <div className='central'>
      <main className="timeline">
        <div className="header-c">
          <Header />
        </div>
        <div className="carousel">
        </div>
        <div className="cards">
          <Card>
            
          </Card>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
        </div>
      </main>
    </div>
  );
}

