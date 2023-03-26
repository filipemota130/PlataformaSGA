import './Timeline.css'
import { Header } from "../components/Header"
export function Timeline() {
  return (
    <div>
      <main className="timeline">
        <div className="header-c">
          <Header/>
          <div className="carousel">
          </div>
        </div>
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
      </main>
    </div>
  );
}

