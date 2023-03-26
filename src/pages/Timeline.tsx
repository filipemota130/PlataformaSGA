import './Timeline.css'
import { Header } from "../components/Header"
export function Timeline() {
  return (
    <div className='central'>
      <main className="timeline">
        <div className="header-c">
          <Header/>
          </div>
          <div className="carousel">
        </div>
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
      </main>
    </div>
  );
}

