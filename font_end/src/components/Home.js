import CarouselImg1 from '../img/carousel1.jpg';
import { BsFillHouseFill, BsList, BsMusicNoteList } from 'react-icons/bs';
import { SideBar } from './SideBar'
import { NavBar } from './NavBar';
export function Home() {
  return (
    <>
      <div style={{ backgroundColor: '#170f23' }} className="container-fluid">
        <div className="row">
          <SideBar />
          <div className="col-2" />
          <div className="col-10 p-0 m-0">
            <NavBar />
            <div className="container-fluid p-5">
              <div id="carouselExample" className="carousel slide h-75">
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    <img src={CarouselImg1} style={{ height: '100%', width: '100%' }} className="d-block rounded-5 object-fit-cover" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={CarouselImg1} style={{ height: '10%', width: '100%' }} className="d-block rounded-5 object-fit-cover" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={CarouselImg1} style={{ height: '10%', width: '100%' }} className="d-block rounded-5 object-fit-cover" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h1 className="display-6 my-5 fw-bold" style={{ color: '#6040ab' }}>Nổi bật</h1>
              <div className="d-flex justify-content-between my-5">
                <div className="card bg-transparent border-0" style={{ width: '18rem' }}>
                  <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/1/1/101112c380993dacfd37836080b463dc.jpg" className="card-img-top rounded rounded-circle" alt="..." />
                  <div className="card-body text-light d-flex flex-column align-items-center">
                    <h5 className="card-title text-decoration-underline">Thêm một ai dư thừa</h5>
                    <p className="card-text">Người ấy làm trái tim bạn tan.</p>
                  </div>
                </div>
                <div className="card bg-transparent border-0" style={{ width: '18rem' }}>
                  <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/1/1/101112c380993dacfd37836080b463dc.jpg" className="card-img-top rounded rounded-circle" alt="..." />
                  <div className="card-body text-light d-flex flex-column align-items-center">
                    <h5 className="card-title text-decoration-underline">Thêm một ai dư thừa</h5>
                    <p className="card-text">Người ấy làm trái tim bạn tan.</p>
                  </div>
                </div>
                <div className="card bg-transparent border-0" style={{ width: '18rem' }}>
                  <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/1/1/101112c380993dacfd37836080b463dc.jpg" className="card-img-top rounded rounded-circle" alt="..." />
                  <div className="card-body text-light d-flex flex-column align-items-center">
                    <h5 className="card-title text-decoration-underline">Thêm một ai dư thừa</h5>
                    <p className="card-text">Người ấy làm trái tim bạn tan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}