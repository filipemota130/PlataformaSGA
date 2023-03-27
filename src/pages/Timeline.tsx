import './Timeline.css'
import image3 from '../assets/carrossel/image3.jpg'
import { Header } from "../components/Header"
export function Timeline() {
  return (
    <div className='central'>
      <main className="timeline">
        <div className="header-c">
          <Header/>
          </div>
          <div className="carousel">
          <img src={image3} alt="" />
        </div>
          <div className="cards">
            <div className="card-1"></div>
            <div className="card-1"></div>
            <div className="card-1"></div>
            <div className="card-1"></div>
            <div className="card-1"></div>
            <div className="card-1"></div>
          </div>
      </main>
    </div>
  );
}

